import type { ReactNode } from "react";
import { Brandmark } from "./Brandmark";
import { Reveal } from "./Reveal";

/**
 * The page opener, set like the first page of a chapter in a kept notebook.
 *
 *   ─────────────────────────────────────── 2px ink rule
 *   About                               JH   running head: kicker + masthead mark
 *   ─────────────────────────────────────── hairline
 *   Page title at display scale (the single <h1>)
 *   One lede that owns its whitespace.                       sienna stat (optional)
 *
 * The running head is the site's recurring signature: the same JH masthead
 * mark that sits in the nav closes the head of every page, and the double
 * rule echoes the two rules inside the mark. The kicker is the page's one
 * small mono label (CONTRACT.md rule 7); `n` adds a sienna folio number.
 */
export function PageHeader({
  n,
  kicker,
  title,
  stat,
  statLabel,
  level = "h1",
  id,
  mark = true,
  children,
}: {
  n?: string;
  kicker?: string;
  title: ReactNode;
  stat?: string;
  statLabel?: string;
  level?: "h1" | "h2";
  id?: string;
  /** Show the JH mark at the right end of the running head. Default true. */
  mark?: boolean;
  children?: ReactNode;
}) {
  const Heading = level;
  const runningHead = Boolean(kicker || n || mark);
  return (
    <header id={id} className="scroll-mt-16">
      <Reveal>
        <div className="rule-strong">
          {runningHead && (
            <div className="flex min-h-10 items-center justify-between gap-4 border-b border-hairline py-2">
              <p className="eyebrow m-0 text-ink-soft">
                {n && <span className="text-sienna">{n}&ensp;·&ensp;</span>}
                {kicker}
              </p>
              {mark && <Brandmark className="text-[11px] text-ink-soft" />}
            </div>
          )}
        </div>
        <div className="grid gap-8 pt-7 sm:pt-9 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Heading className="max-w-[20ch] font-display text-display font-medium">
              {title}
            </Heading>
            {children && (
              <p className="mt-5 max-w-[46ch] text-lede text-ink-soft sm:mt-6">
                {children}
              </p>
            )}
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
