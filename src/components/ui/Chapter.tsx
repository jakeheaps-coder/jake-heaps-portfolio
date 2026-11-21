import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/**
 * Annual-report chapter opener: number, title at display scale, one hero
 * stat, one sentence that owns its whitespace.
 */
export function ChapterOpener({
  n,
  kicker,
  title,
  stat,
  statLabel,
  children,
  id,
}: {
  /** Chapter number; omit for an unnumbered cross-cutting section. */
  n?: string;
  /** Eyebrow word; defaults to "Chapter". */
  kicker?: string;
  title: string;
  stat?: string;
  statLabel?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <header id={id} className="scroll-mt-24">
      <Reveal>
        <hr className="rule-strong" />
        <div className="grid gap-8 pt-7 sm:pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow n={n}>{kicker ?? "Chapter"}</Eyebrow>
            <h2 className="mt-4 font-display text-display">
              {title}
            </h2>
            <p className="mt-5 max-w-[44ch] text-lede text-ink-soft sm:mt-6">
              {children}
            </p>
          </div>
          {stat && (
            <div className="md:pb-1 md:text-right">
              <span className="numeral block text-[2.75rem] leading-none text-sienna md:text-[3.5rem]">
                {stat}
              </span>
              {statLabel && (
                <span className="eyebrow mt-2 block text-ink-soft">
                  {statLabel}
                </span>
              )}
            </div>
          )}
        </div>
      </Reveal>
    </header>
  );
}

/**
 * Scholar's-margin layout: a 58ch reading column with a right rail where
 * figures, sources, and notes hang. Below lg the rail folds into the column:
 * each note sits after the paragraph it belongs to, set off by a short sienna
 * rule (a footnote mark, not a box), so a phone reads it in order.
 */
export function MarginGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid gap-x-16 gap-y-8 sm:gap-y-10 lg:grid-cols-[minmax(0,58ch)_minmax(200px,240px)] ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * A note that hangs in the scholar's margin on desktop.
 * Label: mono caps in sienna (6.6:1 on paper). Body: General Sans at 15px on
 * desktop, 16px on phones, ink-soft (6.3:1 on paper, 5.8:1 on surface).
 * Figures inside stay tabular so columns of numbers line up.
 */
export function MarginNote({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <aside className={`max-w-[58ch] lg:max-w-none ${className}`}>
      <span aria-hidden className="mb-3 block h-px w-10 bg-sienna lg:w-8" />
      {label && <p className="eyebrow m-0 text-sienna">{label}</p>}
      <div className="mt-1.5 text-body text-ink-soft tabular-nums lg:text-note">
        {children}
      </div>
    </aside>
  );
}
