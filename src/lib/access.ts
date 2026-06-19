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
      event: "entry",
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

/**
 * Best-effort log post that survives page unload. Prefers sendBeacon (queued
 * by the browser even as the tab closes); falls back to a keepalive fetch.
 * no-CORS form encoding matches the Apps Script handler.
 */
function sendLog(body: URLSearchParams): void {
  if (!ACCESS_LOG_ENDPOINT) return;
  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([body.toString()], {
        type: "application/x-www-form-urlencoded",
      });
      if (navigator.sendBeacon(ACCESS_LOG_ENDPOINT, blob)) return;
    }
  } catch {
    /* fall through to fetch */
  }
  try {
    void fetch(ACCESS_LOG_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
  } catch {
    /* best-effort; never throw on the way out */
  }
}

/**
 * Engagement tracking — how long a visitor actively reads. Counts only the
 * time the tab is visible (so a backgrounded tab doesn't inflate the number)
 * and flushes the running total via {@link sendLog} on tab-hide and pagehide,
 * the reliable "leaving" signals that fire even when the tab is closed.
 *
 * Each flush carries the gate email plus a per-visit session id, so the Sheet
 * may hold several rows for one visit — the max `seconds` per session is the
 * time on page. Returns a cleanup that detaches the listeners.
 */
export function trackTimeOnPage(): () => void {
  let email = "";
  try {
    email = localStorage.getItem(STORAGE_KEY) || "";
  } catch {
    /* private mode — track without an email */
  }
  const domain = email.split("@")[1] || "";
  const session =
    Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

  let activeMs = 0;
  let lastStart = performance.now();
  let counting = document.visibilityState === "visible";
  let lastSent = -1;

  /** Fold the current visible stretch into the running total. */
  const accrue = () => {
    if (counting) {
      const now = performance.now();
      activeMs += now - lastStart;
      lastStart = now;
    }
  };

  const flush = () => {
    accrue();
    const seconds = Math.round(activeMs / 1000);
    if (seconds <= 0 || seconds === lastSent) return;
    lastSent = seconds;
    const h = window.location.hash.replace(/^#\/?/, "");
    sendLog(
      new URLSearchParams({
        event: "duration",
        email,
        domain,
        session,
        seconds: String(seconds),
        view: h || "vision",
      }),
    );
  };

  const onVisibility = () => {
    if (document.visibilityState === "hidden") {
      accrue();
      counting = false;
      flush();
    } else if (!counting) {
      counting = true;
      lastStart = performance.now();
    }
  };

  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("pagehide", flush);

  return () => {
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("pagehide", flush);
  };
}
