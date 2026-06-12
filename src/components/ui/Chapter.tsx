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
        <hr className="m-0 border-0 border-t-2 border-ink" />
        <div className="grid gap-8 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow n={n}>{kicker ?? "Chapter"}</Eyebrow>
            <h2 className="mt-4 font-display text-h1 md:text-[3.25rem] md:leading-[1.05]">
              {title}
            </h2>
            <p className="mt-6 max-w-[44ch] text-lede text-ink-soft">
              {children}
            </p>
          </div>
          {stat && (
            <div className="md:pb-1 md:text-right">
              <span className="numeral block text-[3rem] leading-none text-sienna md:text-[3.5rem]">
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
 * Scholar's-margin layout: a 66ch reading column with a right rail where
 * figures, sources, and notes hang. Collapses to a single column on mobile.
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
      className={`grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,58ch)_minmax(180px,220px)] ${className}`}
    >
      {children}
    </div>
  );
}

/** A note that hangs in the scholar's margin on desktop. */
export function MarginNote({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <aside className="border-t border-hairline pt-3 lg:border-t-0 lg:pt-0">
      {label && <p className="eyebrow text-sienna">{label}</p>}
      <div className="mt-1.5 font-mono text-caption leading-relaxed text-ink-soft">
        {children}
      </div>
    </aside>
  );
}
