/**
 * Email-gate logic for the portfolio. This is lead capture, not access
 * control — the site content ships in the bundle regardless. The gate
 * remembers a valid visitor on this device and logs entries to a Google
 * Apps Script endpoint backed by a Sheet.
 */

/** Apps Script Web App endpoint backed by the access-log Sheet. */
export const ACCESS_LOG_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxccCCLmMkgP03-KRi6bJp1xJI4bpxpe9xnAUoacb2QkfBkqJ8S4xozQDnMd6XDVuYy/exec";

const STORAGE_KEY = "jh-access-v1";

/** Free / consumer mailbox providers rejected as non-work addresses. */
const CONSUMER_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "rocketmail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "pm.me",
  "gmx.com",
  "gmx.net",
  "mail.com",
  "zoho.com",
  "yandex.com",
  "fastmail.com",
  "hey.com",
  "duck.com",
  "tutanota.com",
  "qq.com",
  "163.com",
  "126.com",
  "comcast.net",
  "verizon.net",
  "sbcglobal.net",
  "att.net",
  "btinternet.com",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type EmailCheck =
  | { ok: true; email: string; domain: string }
  | { ok: false; reason: string };

export function validateWorkEmail(raw: string): EmailCheck {
  const email = raw.trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return { ok: false, reason: "Enter a valid email address." };
  }
  const domain = email.split("@")[1];
  if (CONSUMER_DOMAINS.has(domain)) {
    return { ok: false, reason: "Please use your work email." };
  }
  return { ok: true, email, domain };
}

/**
 * Looser email check for the consult form. A buyer's personal address is
 * still a real lead, so we only require a valid shape — no consumer-domain
 * rejection (that's the gate's job, not the lead form's).
 */
export function validateEmailShape(raw: string): EmailCheck {
  const email = raw.trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return { ok: false, reason: "Enter a valid email address." };
  }
  return { ok: true, email, domain: email.split("@")[1] ?? "" };
}

export interface ConsultRequest {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  /** Closed set, set by the tier CTAs — never free user text. */
  tier?: "analysis" | "consultancy" | "hours" | "";
}

/**
 * Log a "Let's work together" submission to the same Sheet, tagged
 * event="consult". The Apps Script emails Jake on these so a lead is never
 * silently lost (see scripts/access-log.gs). Same no-CORS form POST as the
 * gate; resolves regardless so the form's success state is honest.
 */
export async function logConsultRequest(req: ConsultRequest): Promise<void> {
  if (!ACCESS_LOG_ENDPOINT) return;
  try {
    const body = new URLSearchParams({
      event: "consult",
      name: req.name,
      email: req.email,
      domain: req.email.split("@")[1] ?? "",
      phone: req.phone ?? "",
      message: req.message ?? "",
      tier: req.tier ?? "",
      referrer: document.referrer || "direct",
      ua: navigator.userAgent || "",
    });
    await fetch(ACCESS_LOG_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  } catch {
    /* best-effort; the form still confirms + shows the email fallback */
  }
}

export function hasAccess(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) != null;
  } catch {
    return false;
  }
}

export function grantAccess(email: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, email);
  } catch {
    /* private mode — gate will re-show next visit, acceptable */
  }
}

/**
 * Fire-and-forget log to the Sheet. Uses a no-CORS form POST so it works
 * from a static origin without preflight; we never read the response.
 * Resolves regardless so the visitor is never blocked by a logging hiccup.
 */
export async function logAccess(email: string, domain: string): Promise<void> {
  if (!ACCESS_LOG_ENDPOINT) return;
  try {
    const body = new URLSearchParams({
      email,
      domain,
      referrer: document.referrer || "direct",
      ua: navigator.userAgent || "",
    });
    await fetch(ACCESS_LOG_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  } catch {
    /* logging is best-effort; never gate on it */
  }
}
