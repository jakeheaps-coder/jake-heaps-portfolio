import { motion, useReducedMotion } from "motion/react";
import {
  taskImprovements,
  timelinePhases,
  transformationResults,
} from "../../data/metrics";
import {
  attestation,
  classLabels,
  closedRevenue,
  countingRules,
  firstYearTotal,
  ledger,
  oneTimeCosts,
  yearlyRunRate,
} from "../../data/ledger";
import { EASE_EXPO } from "../../lib/motion";
import { ChapterOpener, MarginGrid, MarginNote } from "../ui/Chapter";
import { Eyebrow } from "../ui/Eyebrow";
import { LedgerTable, type LedgerColumn } from "../ui/LedgerTable";
import { Reveal } from "../ui/Reveal";

/* --------------------------------------------------------------------------
   Block 2 — the site's one bespoke visualization.
   Before/after time bars built from divs: ink at 20% for the prior state,
   sienna for the new one, drawn to scale. Where a range was reported, the
   bar takes the lower bound.
   -------------------------------------------------------------------------- */

const BAR_VIEWPORT = { once: true, amount: 0.5 } as const;

function TaskLedger() {
  const reduced = useReducedMotion();

  return (
    <div className="border-t-2 border-ink">
      <div className="flex items-baseline justify-between gap-6 py-2.5">
        <p className="eyebrow text-ink-soft">Task</p>
        <p className="eyebrow text-ink-soft">Reduction</p>
      </div>
      <ul className="m-0 list-none p-0">
        {taskImprovements.map((t) => {
          /* "85–92%" → 85; the after bar is the conservative remainder. */
          const afterShare = 100 - parseInt(t.reduction, 10);
          /* Rows without a measured before-time get no bars — text only. */
          const scaled = !["Manual", "Baseline"].includes(t.before);
          return (
            <li key={t.task} className="border-t border-hairline py-5">
              <div className="flex items-baseline justify-between gap-6">
                <p className="font-medium text-body">{t.task}</p>
                <p className="font-mono text-caption text-sienna">
                  {t.reduction}
                </p>
              </div>
              <div className="mt-3.5 grid grid-cols-[minmax(0,1fr)_8.5rem] items-center gap-x-5 gap-y-2 sm:grid-cols-[minmax(0,1fr)_11rem]">
                {scaled ? (
                  <motion.div
                    aria-hidden
                    className="h-1 origin-left bg-ink/45"
                    style={{ width: "100%" }}
                    initial={reduced ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={BAR_VIEWPORT}
                    transition={{ duration: 0.9, ease: EASE_EXPO }}
                  />
                ) : (
                  <span aria-hidden />
                )}
                <p className="text-right font-mono text-caption text-ink-soft">
                  {t.before}
                </p>
                {scaled ? (
                  <motion.div
                    aria-hidden
                    className="h-1.5 origin-left bg-sienna"
                    style={{ width: `${afterShare}%` }}
                    initial={reduced ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={BAR_VIEWPORT}
                    transition={{ duration: 0.9, ease: EASE_EXPO, delay: 0.15 }}
                  />
                ) : (
                  <span aria-hidden />
                )}
                <p className="text-right font-mono text-caption text-ink">
                  {t.after}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* --------------------------------------------------------------------------
   Block 3 — measured results as a compact ledger.
   -------------------------------------------------------------------------- */

const resultColumns: LedgerColumn[] = [
  { key: "category", label: "Category", lead: true, width: "md:w-[28%]" },
  { key: "result", label: "Result", numeric: true, width: "md:w-[24%]" },
  { key: "detail", label: "Detail" },
];

const resultRows = transformationResults.map((r) => ({
  category: r.category,
  result: r.metric,
  detail: r.detail,
}));

/* --------------------------------------------------------------------------
   Chapter 02 — Transformation
   -------------------------------------------------------------------------- */

export default function Transformation() {
  return (
    <section id="transformation" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-24 md:py-32">
        <ChapterOpener
          n="02"
          title="Transformation"
          stat="$2.3M"
          statLabel="first-year economic value, itemized below"
        >
          Twenty-six production systems in twelve months — deployed, measured,
          and running in the team’s daily work.
        </ChapterOpener>

        {/* Block 1 — the twelve months */}
        <Reveal className="mt-16 md:mt-20">
          <Eyebrow>The twelve months</Eyebrow>
          <ol className="m-0 mt-8 grid list-none gap-x-10 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {timelinePhases.map((phase, i) => (
              <li key={phase.name} className="border-t border-hairline pt-4">
                <Eyebrow n={String(i + 1).padStart(2, "0")}>
                  {phase.period}
                </Eyebrow>
                <h3 className="mt-2.5 font-display text-h3">{phase.name}</h3>
                <p className="mt-1.5 text-caption text-ink-soft">
                  {phase.desc}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Block 2 — task-level impact, before and after */}
        <Reveal className="mt-20 md:mt-24">
          <Eyebrow>Task-level impact</Eyebrow>
          <p className="measure mt-4 text-body text-ink-soft">
            Seven recurring workflows, measured before and after the systems
            went in.
          </p>
          <MarginGrid className="mt-8">
            <TaskLedger />
            <div className="flex flex-col gap-8">
              <MarginNote label="Source">Self-reported team survey.</MarginNote>
              <MarginNote label="How to read">
                Ink bar — time before. Sienna bar — time after, drawn to scale.
                Ranges take the lower bound; workflows with no measured
                before-time are listed without bars.
              </MarginNote>
            </div>
          </MarginGrid>
        </Reveal>

        {/* Block 3 — measured results */}
        <Reveal className="mt-20 md:mt-24">
          <MarginGrid>
            <LedgerTable
              caption="Measured results"
              columns={resultColumns}
              rows={resultRows}
            />
            <MarginNote label="Sourcing">
              Pipeline figures are Salesforce-tracked. Time savings converge
              across two instruments: team survey (264–273 hrs/week) and the
              quarterly business review (280 hrs/week).
            </MarginNote>
          </MarginGrid>
        </Reveal>

        {/* Block 4 — the ledger: every dollar claim, itemized */}
        <Reveal className="mt-20 md:mt-24">
          <div id="ledger" className="scroll-mt-24">
            <Eyebrow>The ledger</Eyebrow>
            <h3 className="mt-4 font-display text-h2">
              Where the money comes from
            </h3>
            <p className="measure mt-4 text-body text-ink-soft">
              Every dollar claimed in this brief, itemized and classed. Vendor
              names are withheld for confidentiality; categories and amounts are
              as recorded.
            </p>
            <MarginGrid className="mt-8">
              <LedgerTable
                caption="First-year value ledger"
                columns={[
                  { key: "item", label: "Item", lead: true },
                  { key: "cls", label: "Class", width: "md:w-[13%]" },
                  { key: "basis", label: "Basis", width: "md:w-[13%]" },
                  {
                    key: "amount",
                    label: "Amount",
                    numeric: true,
                    width: "md:w-[15%]",
                  },
                ]}
                rows={[
                  ...ledger.map((r) => ({
                    item: r.item,
                    cls: classLabels[r.cls],
                    basis: r.basis === "yearly" ? "Yearly" : "One-time",
                    amount: `$${r.amount.toLocaleString("en-US")}`,
                  })),
                  {
                    item: "Recurring annual run-rate",
                    cls: "",
                    basis: "Yearly",
                    amount: `$${yearlyRunRate.toLocaleString("en-US")}`,
                  },
                  {
                    item: "One-time value",
                    cls: "",
                    basis: "One-time",
                    amount: `$${oneTimeCosts.toLocaleString("en-US")}`,
                  },
                  {
                    item: "Closed revenue, AI-attributed",
                    cls: "Revenue",
                    basis: "One-time",
                    amount: `$${closedRevenue.toLocaleString("en-US")}`,
                  },
                  {
                    item: "First-year total",
                    cls: "",
                    basis: "",
                    amount: `$${firstYearTotal.toLocaleString("en-US")}`,
                  },
                ]}
              />
              <div className="flex flex-col gap-8">
                <MarginNote label="Attested">
                  &ldquo;{attestation.quote}&rdquo; — {attestation.source}.
                </MarginNote>
                <MarginNote label="Counting rules">
                  {countingRules.map((rule) => (
                    <p key={rule.slice(0, 16)} className="mt-1.5 first:mt-0">
                      {rule}
                    </p>
                  ))}
                </MarginNote>
              </div>
            </MarginGrid>
          </div>
        </Reveal>
        <Reveal className="mt-16 md:mt-20">
          <p className="font-mono text-caption text-ink-soft">
            Every system in this chapter shipped through the gates — security-reviewed, eval-tested, and controlled before it touched production.&ensp;
            <a href="#governance" className="text-cedar">
              How this runs safely →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
