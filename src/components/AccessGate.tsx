import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE_EXPO } from "../lib/motion";
import { grantAccess, logAccess, validateWorkEmail } from "../lib/access";

/**
 * The threshold page — a brief is a private document, so it opens with one.
 * Work email only; remembered on this device; logged to the Sheet. Styled
 * as part of the Manuscript Brief, not a generic modal.
 */
export default function AccessGate({ onEnter }: { onEnter: () => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const reduced = useReducedMotion();

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const check = validateWorkEmail(email);
    if (!check.ok) {
      setError(check.reason);
      return;
    }
    setBusy(true);
    await logAccess(check.email, check.domain);
    grantAccess(check.email);
    onEnter();
  }

  return (
    <div className="flex min-h-screen items-center bg-paper px-6">
      <motion.div
        className="mx-auto w-full max-w-[34rem]"
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_EXPO }}
      >
        <p className="eyebrow text-ink-soft">
          Jake Heaps&ensp;—&ensp;AI Strategy &amp; Transformation
        </p>
        <hr className="mt-5 mb-10 border-0 border-t border-hairline" />

        <h1 className="font-display text-[2.25rem] leading-[1.1] tracking-[-0.01em] md:text-[2.75rem]">
          A private brief.
        </h1>
        <p className="measure mt-5 text-body text-ink-soft">
          This is a working record of twelve months of enterprise AI
          transformation. Enter your work email to read it.
        </p>

        <form onSubmit={submit} className="mt-10">
          <label htmlFor="gate-email" className="eyebrow text-ink-soft">
            Work email
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="gate-email"
              type="email"
              inputMode="email"
              autoComplete="email"
              autoFocus
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="you@company.com"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "gate-error" : undefined}
              className="flex-1 rounded-md bg-surface px-4 py-3 font-body text-body text-ink ring-hairline outline-none placeholder:text-ink-soft/60 focus-visible:[box-shadow:inset_0_0_0_1px_var(--color-cedar)]"
            />
            <button
              type="submit"
              disabled={busy}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cedar px-6 py-3 font-medium text-paper transition-[transform,box-shadow] duration-150 ease-(--ease-out-cubic) [box-shadow:inset_0_1px_0_rgb(255_255_255/0.12),inset_0_-1px_0_rgb(0_0_0/0.18),0_0_0_1px_rgb(45_74_58/0.9),0_2px_6px_rgb(26_23_20/0.18)] hover:[box-shadow:inset_0_1px_0_rgb(255_255_255/0.16),inset_0_-1px_0_rgb(0_0_0/0.18),0_0_0_1px_rgb(45_74_58/0.9),0_4px_12px_rgb(26_23_20/0.22)] active:translate-y-px disabled:opacity-60"
            >
              {busy ? "Entering…" : "Read the brief"}
            </button>
          </div>
          <div className="mt-3 min-h-[1.25rem]">
            {error && (
              <p id="gate-error" className="font-mono text-caption text-sienna">
                {error}
              </p>
            )}
          </div>
        </form>

        <p className="mt-8 max-w-[48ch] font-mono text-eyebrow leading-relaxed text-ink-soft">
          Your email is used only to know who&rsquo;s reading. No list, no
          forwarding.
        </p>
      </motion.div>
    </div>
  );
}
