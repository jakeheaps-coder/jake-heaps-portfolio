import { useEffect, useId, useState, type FormEvent } from "react";
import { logConsultRequest, validateEmailShape } from "../lib/access";

/** Tier options for the optional "where to start" select. The tier CTAs in
    HowToWorkTogether dispatch `jh:select-tier` with one of these keys. */
const TIERS = [
  { key: "", label: "Not sure yet" },
  { key: "analysis", label: "One-time analysis and strategy" },
  { key: "consultancy", label: "Ongoing consultancy" },
  { key: "hours", label: "Implementation hours" },
] as const;

type TierKey = (typeof TIERS)[number]["key"];

const CEDAR_BUTTON =
  "inline-flex items-center justify-center gap-2 rounded-md bg-cedar px-6 py-3 font-medium text-paper transition-[transform,box-shadow] duration-150 ease-(--ease-out-cubic) [box-shadow:inset_0_1px_0_rgb(255_255_255/0.12),inset_0_-1px_0_rgb(0_0_0/0.18),0_0_0_1px_rgb(45_74_58/0.9),0_2px_6px_rgb(26_23_20/0.18)] hover:[box-shadow:inset_0_1px_0_rgb(255_255_255/0.16),inset_0_-1px_0_rgb(0_0_0/0.18),0_0_0_1px_rgb(45_74_58/0.9),0_4px_12px_rgb(26_23_20/0.22)] active:translate-y-px disabled:opacity-60";

const FIELD =
  "w-full rounded-md bg-paper px-4 py-3 font-body text-body text-ink ring-hairline outline-none placeholder:text-ink-soft/60 focus-visible:[box-shadow:inset_0_0_0_1px_var(--color-cedar)]";

/**
 * "Let's work together" — the one hard CTA. Captures name + email (+ optional
 * phone, message, and a tier) and logs to the Sheet, which emails Jake. Not
 * access control: best-effort, never blocks, always confirms.
 */
export function LeadForm({
  variant = "panel",
  className = "",
}: {
  variant?: "panel" | "inline";
  className?: string;
}) {
  const uid = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [tier, setTier] = useState<TierKey>("");
  const [honey, setHoney] = useState(""); // honeypot — humans never fill this
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "busy" | "done">("idle");

  /* Tier CTAs elsewhere on the page preselect the tier and scroll here. */
  useEffect(() => {
    function onSelect(e: Event) {
      const detail = (e as CustomEvent).detail as TierKey;
      if (TIERS.some((t) => t.key === detail)) setTier(detail);
    }
    window.addEventListener("jh:select-tier", onSelect);
    return () => window.removeEventListener("jh:select-tier", onSelect);
  }, []);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (honey) {
      // Bot filled the hidden field — silently succeed, send nothing.
      setStatus("done");
      return;
    }
    if (!name.trim()) {
      setError("Please add your name.");
      return;
    }
    const check = validateEmailShape(email);
    if (!check.ok) {
      setError(check.reason);
      return;
    }
    setStatus("busy");
    await logConsultRequest({
      name: name.trim(),
      email: check.email,
      phone: phone.trim(),
      message: message.trim(),
      tier,
    });
    setStatus("done");
  }

  const panel =
    variant === "panel" ? "rounded-lg bg-paper p-6 ring-hairline md:p-8" : "";

  if (status === "done") {
    return (
      <div className={`${panel} ${className}`}>
        <div role="status" aria-live="polite">
          <p className="font-display text-h3 text-ink">
            Thanks. I&rsquo;ll be in touch.
          </p>
          <p className="measure mt-3 text-body text-ink-soft">
            I read these myself and usually reply within a day or two. If
            it&rsquo;s urgent, email me at{" "}
            <a href="mailto:jakeheaps@me.com" className="text-cedar underline">
              jakeheaps@me.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${panel} ${className}`}>
      <form onSubmit={submit} noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${uid}-name`} className="eyebrow text-ink-soft">
              Name
            </label>
            <input
              id={`${uid}-name`}
              type="text"
              autoComplete="name"
              required
              aria-required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (error) setError("");
              }}
              className={`mt-2 ${FIELD}`}
            />
          </div>
          <div>
            <label htmlFor={`${uid}-email`} className="eyebrow text-ink-soft">
              Email
            </label>
            <input
              id={`${uid}-email`}
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              aria-required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="you@company.com"
              className={`mt-2 ${FIELD}`}
            />
          </div>
          <div>
            <label htmlFor={`${uid}-phone`} className="eyebrow text-ink-soft">
              Phone&ensp;·&ensp;optional
            </label>
            <input
              id={`${uid}-phone`}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`mt-2 ${FIELD}`}
            />
          </div>
          <div>
            <label htmlFor={`${uid}-tier`} className="eyebrow text-ink-soft">
              Where to start
            </label>
            <select
              id={`${uid}-tier`}
              value={tier}
              onChange={(e) => setTier(e.target.value as TierKey)}
              className={`mt-2 ${FIELD}`}
            >
              {TIERS.map((t) => (
                <option key={t.key || "none"} value={t.key}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor={`${uid}-message`} className="eyebrow text-ink-soft">
            What you&rsquo;re working on&ensp;·&ensp;optional
          </label>
          <textarea
            id={`${uid}-message`}
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`mt-2 ${FIELD} resize-y`}
          />
        </div>

        {/* Honeypot — visually hidden, off the tab order. Bots fill it; humans don't. */}
        <div
          aria-hidden
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        >
          <label htmlFor={`${uid}-company-url`}>Company URL</label>
          <input
            id={`${uid}-company-url`}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honey}
            onChange={(e) => setHoney(e.target.value)}
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="submit"
            disabled={status === "busy"}
            className={CEDAR_BUTTON}
          >
            {status === "busy" ? "Sending…" : "Let's work together"}
          </button>
          <span className="font-mono text-eyebrow text-ink-soft">
            or email{" "}
            <a href="mailto:jakeheaps@me.com" className="text-cedar underline">
              jakeheaps@me.com
            </a>
          </span>
        </div>

        <div className="mt-3 min-h-[1.25rem]" aria-live="polite">
          {error && (
            <p className="font-mono text-caption text-sienna">{error}</p>
          )}
        </div>

        <p className="mt-4 max-w-[52ch] font-mono text-eyebrow leading-relaxed text-ink-soft">
          Used only so I can reach out. No list, no forwarding.
        </p>
      </form>
    </div>
  );
}
