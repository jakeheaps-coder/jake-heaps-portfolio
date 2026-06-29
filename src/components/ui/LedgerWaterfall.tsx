import { motion, useReducedMotion } from "motion/react";
import { ledger, firstYearTotal, type LedgerClass } from "../../data/ledger";
import { EASE_EXPO } from "../../lib/motion";

/**
 * LedgerWaterfall — the first-year value, built up class by class to the
 * $2.34M total. Every amount is summed live from data/ledger.ts, so the bars
 * and the total can never drift from the itemized table below them.
 *
 * Each class is a floating bar set at its cumulative offset, so the figure
 * steps left-to-right and the total bar spans the full track — a true
 * waterfall that reconciles exactly to firstYearTotal.
 *
 * Capacity ($1.5M) is deliberately drawn in soft ink, distinct from the
 * accent-colored hard-dollar classes, so the figure never implies the whole
 * $2.34M is cash. The four colored steps are the ~$840K of displaced,
 * built-in-house, avoided, and closed-revenue value.
 *
 * role="img" + a spoken summary; the inner bars are aria-hidden.
 */
const VIEW = { once: true, amount: 0.4 } as const;

/* Display order (foundation first, then the hard-dollar steps) + how each
   class reads against the palette. Labels/tone live here; dollar amounts come
   from the ledger so nothing is typed twice. */
const ROWS: { cls: LedgerClass; label: string; bar: string }[] = [
  { cls: "capacity", label: "Capacity created", bar: "bg-ink/25" },
  { cls: "equivalent", label: "Built in-house", bar: "bg-sienna/80" },
  { cls: "revenue", label: "Revenue, AI-attributed", bar: "bg-cedar" },
  { cls: "avoided", label: "Spend avoided", bar: "bg-sienna/55" },
  { cls: "displaced", label: "Licenses displaced", bar: "bg-sienna/40" },
];

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

function classTotal(cls: LedgerClass) {
  return ledger
    .filter((r) => r.cls === cls)
    .reduce((sum, r) => sum + r.amount, 0);
}

/* Row grid: on mobile, label + amount on one line and the track wraps below;
   on sm+, three columns with the track between them. */
const ROW =
  "grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-2.5 sm:grid-cols-[13rem_minmax(0,1fr)_6rem] sm:items-center";

export function LedgerWaterfall({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  /* Each bar starts where the previous ones ended: its offset is the prefix
     sum of the amounts before it (computed functionally, no mutable carry). */
  const amounts = ROWS.map((r) => ({ ...r, amount: classTotal(r.cls) }));
  const steps = amounts.map((r, i) => {
    const start = amounts.slice(0, i).reduce((sum, x) => sum + x.amount, 0);
    return {
      ...r,
      startPct: (start / firstYearTotal) * 100,
      widthPct: (r.amount / firstYearTotal) * 100,
    };
  });

  return (
    <figure
      className={`m-0 ${className}`}
      role="img"
      aria-label={`First-year value waterfall totaling ${usd(
        firstYearTotal,
      )}: ${steps.map((s) => `${s.label}, ${usd(s.amount)}`).join("; ")}.`}
    >
      <ul aria-hidden className="m-0 list-none p-0">
        {steps.map((s, i) => (
          <li key={s.cls} className={`${ROW} border-t border-hairline py-4`}>
            <span className="text-body text-ink sm:order-1">{s.label}</span>
            <span className="numeral order-2 text-right text-body text-ink-soft sm:order-3 sm:text-ink">
              {usd(s.amount)}
            </span>
            {/* floating bar at its cumulative offset */}
            <span className="order-3 col-span-2 block h-2.5 w-full sm:order-2 sm:col-span-1">
              <span
                className="block h-full"
                style={{
                  marginLeft: `${s.startPct}%`,
                  width: `${s.widthPct}%`,
                }}
              >
                <motion.span
                  className={`block h-full origin-left ${s.bar}`}
                  initial={reduced ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={VIEW}
                  transition={{
                    duration: 0.8,
                    ease: EASE_EXPO,
                    delay: i * 0.12,
                  }}
                />
              </span>
            </span>
          </li>
        ))}

        {/* total — a full-width anchor bar in ink */}
        <li className={`${ROW} border-t-2 border-ink pt-4`}>
          <span className="font-display text-h3 text-ink sm:order-1">
            First-year total
          </span>
          <span className="numeral order-2 text-right text-h3 text-ink sm:order-3">
            {usd(firstYearTotal)}
          </span>
          <span className="order-3 col-span-2 block h-3 w-full sm:order-2 sm:col-span-1">
            <motion.span
              className="block h-full origin-left bg-ink"
              initial={reduced ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE_EXPO, delay: 0.6 }}
            />
          </span>
        </li>
      </ul>
    </figure>
  );
}
