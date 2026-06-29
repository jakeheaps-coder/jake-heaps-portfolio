/**
 * Brandmark — "The Masthead": the JH monogram set between two sienna hairline
 * rules. It reuses the ledger-rule + nav-underline motif the rest of the site
 * already runs on, so the mark reads as native to the Manuscript system rather
 * than bolted on.
 *
 * Two exports:
 *   <Brandmark/>    the mark alone (rules + initials), decorative (aria-hidden)
 *   <BrandLockup/>  the mark + the "Jake Heaps" wordmark, for the nav home link
 *
 * The mark renders with the live Newsreader display serif (already loaded by
 * the page), so it stays crisp and resolution-independent. The browser-tab
 * icon carries its own copy in public/favicon.svg.
 *
 * Color: the initials use `currentColor` (so the mark inherits ink from its
 * link), the rules are sienna. Pass `tone="inverse"` on dark surfaces to make
 * both paper-colored.
 */
type Tone = "ink" | "inverse";

export function Brandmark({
  className = "",
  tone = "ink",
}: {
  /** Sets the mark's size via font-size, e.g. "text-[15px]". */
  className?: string;
  tone?: Tone;
}) {
  const rule = tone === "inverse" ? "bg-paper" : "bg-sienna";
  return (
    <span
      aria-hidden="true"
      className={`inline-flex flex-col items-center leading-none ${className}`}
    >
      <span className={`h-px w-full ${rule}`} />
      <span className="py-[0.1em] font-display font-medium leading-none tracking-[0.02em]">
        JH
      </span>
      <span className={`h-px w-full ${rule}`} />
    </span>
  );
}

export function BrandLockup({
  className = "",
  markClassName = "text-[15px]",
  tone = "ink",
}: {
  className?: string;
  /** Sizes the mark relative to the wordmark; default pairs with text-h3. */
  markClassName?: string;
  tone?: Tone;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Brandmark className={markClassName} tone={tone} />
      <span className="font-display text-h3 italic leading-none">
        Jake Heaps
      </span>
    </span>
  );
}
