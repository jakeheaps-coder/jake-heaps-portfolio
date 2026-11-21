import { useId, useState, type FormEvent } from "react";
import { logConsultRequest, validateEmailShape } from "../../lib/access";
/* Used only by /brief (lazy chunk), so the address stays out of the public bundle. */
const BRIEF_EMAIL = "jakeheaps@me.com";
import { PRIMARY_CLASS } from "../../components/ui/buttonStyles";

const FIELD =
  "mt-2 block min-h-12 w-full rounded-[3px] bg-paper px-4 py-3 font-body text-body text-ink ring-hairline outline-none placeholder:text-ink-soft focus-visible:[box-shadow:inset_0_0_0_1.5px_var(--color-cedar)]";

const SUBMIT = `${PRIMARY_CLASS} min-w-32`;

/**
 * A short note form. Posts to the same Apps Script logger the brief uses
 * (best-effort, no-CORS), which emails Jake. It never blocks on the network,
 * and the confirmation always repeats the email address as a fallback.
 */
export function ContactForm({ className = "" }: { className?: string }) {
  const uid = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "busy" | "done">("idle");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (honey) {
      setStatus("done");
      return;
    }
    if (!name.trim()) return setError("Add your name so I know who's writing.");
    const check = validateEmailShape(email);
    if (!check.ok) return setError(check.reason);
    if (!message.trim()) return setError("Add a line about what's on your mind.");
    setStatus("busy");
    await logConsultRequest({
      name: name.trim(),
      email: check.email,
      message: message.trim(),
    });
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className={`rounded-[3px] bg-paper p-5 ring-hairline sm:p-6 md:p-8 ${className}`} role="status">
        <p className="font-display text-h2 text-ink">Got it. Thanks for writing.</p>
        <p className="mt-3 text-body text-ink-soft">
          I read these myself and usually answer within a few days. If it&rsquo;s
          time-sensitive, email me at{" "}
          <a href={`mailto:${BRIEF_EMAIL}`} className="text-cedar underline">
            {BRIEF_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className={`rounded-[3px] bg-paper p-5 ring-hairline sm:p-6 md:p-8 ${className}`}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className="text-caption font-medium text-ink">
            Name
          </label>
          <input
            id={`${uid}-name`}
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className="text-caption font-medium text-ink">
            Email
          </label>
          <input
            id={`${uid}-email`}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={FIELD}
          />
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor={`${uid}-message`} className="text-caption font-medium text-ink">
          Message
        </label>
        <textarea
          id={`${uid}-message`}
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${FIELD} resize-y`}
        />
      </div>

      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
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
        <button type="submit" disabled={status === "busy"} className={SUBMIT}>
          {status === "busy" ? "Sending…" : "Send"}
        </button>
        <p role="alert" aria-live="polite" className="text-body text-sienna sm:text-caption">
          {error}
        </p>
      </div>
    </form>
  );
}
