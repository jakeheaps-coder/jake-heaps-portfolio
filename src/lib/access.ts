/**
 * Email-gate logic for the portfolio. This is lead capture, not access
 * control — the site content ships in the bundle regardless. The gate
 * remembers a valid visitor on this device and logs entries to a Google
 * Apps Script endpoint backed by a Sheet.
 */

/** Apps Script Web App endpoint backed by the access-log Sheet. */
export const ACCESS_LOG_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbw0srPiP3ffdbpPHylXYhAtvKfs4QNYkALquDGnUkAJ2upjKWPz15eySeZSkHG8nzVv/exec";

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
