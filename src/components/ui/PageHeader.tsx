import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/**
 * The page-level opener for a staged route: a 2px ink rule, a numbered eyebrow,
 * the page title at display scale as the single <h1>, one lede that owns its
 * whitespace, and an optional hero stat in the right rail. Modeled on the
 * (previously unused) ChapterOpener; `level` lets a sub-section reuse it as h2.
 */
export function PageHeader({
  n,
  kicker,
  title,
  stat,
  statLabel,
  level = "h1",
  id,
  children,
}: {
  n?: string;
  kicker?: string;
  title: ReactNode;
  stat?: string;
  statLabel?: string;
  level?: "h1" | "h2";
  id?: string;
  children: ReactNode;
}) {
  const Heading = level;
  return (
    <header id={id} className="scroll-mt-24">
      <Reveal>
        <hr className="m-0 border-0 border-t-2 border-ink" />
        <div className="grid gap-8 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            {kicker && <Eyebrow n={n}>{kicker}</Eyebrow>}
            <Heading className="mt-4 max-w-[20ch] tracking-[-0.01em] font-display text-h1 md:text-[3.25rem] md:leading-[1.05]">
              {title}
            </Heading>
            <p className="mt-6 max-w-[46ch] text-lede text-ink-soft">
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
