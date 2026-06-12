import { decisionLog, failures } from "../../data/metrics";
import { ChapterOpener, MarginGrid, MarginNote } from "../ui/Chapter";
import { Eyebrow } from "../ui/Eyebrow";
import { LedgerTable } from "../ui/LedgerTable";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

/** The core framework — sequence is the point, so it reads as a sequence. */
const formula = [
  {
    n: "01",
    title: "Mindset",
    desc: "Shift the story from “AI will replace me” to “AI makes me dangerous.” Without this, nothing else matters.",
  },
  {
    n: "02",
    title: "Enablement",
    desc: "One-on-one coaching rather than training — sit with each person and build their specific workflow together. This is the hard part.",
  },
  {
    n: "03",
    title: "Tools",
    desc: "Role-specific AI tools that solve real problems. Tools come last; without the first two ingredients they become shelfware.",
  },
];

const tiers = [
  {
    tier: "Self-service",
    mandate: "Team members using AI independently, with tools I built",
    share: "60–70%",
  },
  {
    tier: "Champions",
    mandate: "Power users who coach peers and extend the AI toolkit",
    share: "20–25%",
  },
  {
    tier: "Direct enablement",
    mandate: "Complex workflows requiring my direct architecture",
    share: "5–10%",
  },
];

/** Chapter 01 — Strategy. The framework, the decision log, the post-mortems. */
export default function Strategy() {
  return (
    <section id="strategy" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-24 md:py-32">
        <ChapterOpener
          n="01"
          title="Strategy"
          stat="3"
          statLabel="ingredients, applied in fixed order"
        >
          The framework behind 93% adoption — the reasoning, the decisions, and
          the attempts that failed on the way there.
        </ChapterOpener>

        {/* — The three-ingredient formula — */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <Eyebrow>The core framework</Eyebrow>
            <h3 className="mt-4 font-display text-h2">
              The three-ingredient formula
            </h3>
            <MarginGrid className="mt-6">
              <p className="measure text-body text-ink-soft">
                The strategy came from study — across AI strategy, adoption
                patterns, implementation practice, and organizational change —
                before I wrote a single line of code. The research kept
                returning the same answer: adoption is a sequencing problem,
                three ingredients in a fixed order.
              </p>
              <MarginNote label="Sequence">
                mindset → enablement → tools · applied in that order, never
                reversed
              </MarginNote>
            </MarginGrid>
          </Reveal>

          <RevealGroup className="mt-12 border-b border-hairline">
            {formula.map((f) => (
              <RevealItem
                key={f.n}
                className="grid gap-x-10 gap-y-3 border-t border-hairline py-9 md:grid-cols-[72px_200px_minmax(0,1fr)] md:items-baseline"
              >
                <span className="numeral text-[2rem] leading-none text-sienna">
                  {f.n}
                </span>
                <h4 className="font-display text-[1.5rem] leading-tight">
                  {f.title}
                </h4>
                <p className="max-w-[52ch] text-body text-ink-soft">{f.desc}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        {/* — The operating model — */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <Eyebrow>The operating model</Eyebrow>
            <h3 className="mt-4 font-display text-h2">
              Three tiers of support
            </h3>
            <MarginGrid className="mt-6">
              <div className="measure">
                <p className="text-body text-ink-soft">
                  Enablement at organizational scale needs an allocation model.
                  The operating model is hub-and-spoke: most of the team
                  self-serves, champions extend the toolkit, and my direct hours
                  go only where the complexity demands them.
                </p>
                <LedgerTable
                  className="mt-8"
                  caption="Support allocation · hub-and-spoke"
                  columns={[
                    { key: "tier", label: "Tier", lead: true, width: "md:w-[26%]" },
                    { key: "mandate", label: "Mandate" },
                    {
                      key: "share",
                      label: "Share of team",
                      numeric: true,
                      width: "md:w-[20%]",
                    },
                  ]}
                  rows={tiers.map((t) => ({
                    tier: t.tier,
                    mandate: t.mandate,
                    share: t.share,
                  }))}
                />
              </div>
              <MarginNote label="Design intent">
                An 8-factor priority matrix governs direct support. The hub
                shrinks as the spokes grow stronger.
              </MarginNote>
            </MarginGrid>
          </Reveal>
        </div>

        {/* — The decision log — */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <Eyebrow>The record of choices</Eyebrow>
            <h3 className="mt-4 font-display text-h2">The decision log</h3>
            <MarginGrid className="mt-6">
              <div className="measure">
                <p className="text-body text-ink-soft">
                  Strategy lives in the decisions and the reasoning behind them.
                  Five choices shaped the twelve months; each is logged with the
                  rationale as it stood at the time.
                </p>
                <LedgerTable
                  className="mt-8"
                  caption="Decision log · five entries"
                  columns={[
                    { key: "decision", label: "Decision", lead: true, width: "md:w-[38%]" },
                    { key: "rationale", label: "Rationale" },
                  ]}
                  rows={decisionLog.map((d) => ({
                    decision: d.decision,
                    rationale: d.rationale,
                  }))}
                />
              </div>
              <MarginNote label="Sourcing">
                Decisions and rationale recorded as they were made, not
                reconstructed after the fact.
              </MarginNote>
            </MarginGrid>
          </Reveal>
        </div>

        {/* — What didn’t work — */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <Eyebrow>Post-mortems</Eyebrow>
            <h3 className="mt-4 font-display text-h2">What didn’t work</h3>
            <MarginGrid className="mt-6">
              <div className="measure">
                <p className="text-body text-ink-soft">
                  The failed attempts are published alongside the wins — they
                  are the R&amp;D behind the framework.
                </p>
                <LedgerTable
                  className="mt-8"
                  caption="Post-mortem ledger · four attempts"
                  columns={[
                    { key: "attempt", label: "Attempt", lead: true, width: "md:w-[38%]" },
                    { key: "lesson", label: "Lesson" },
                  ]}
                  rows={failures.map((f) => ({
                    attempt: f.attempt,
                    lesson: f.lesson,
                  }))}
                />
              </div>
              <MarginNote label="The pattern">
                Every failure was an attempt to scale without human readiness
                first. The three-ingredient formula was designed around that
                pattern.
              </MarginNote>
            </MarginGrid>
          </Reveal>
        </div>
        <Reveal className="mt-16 md:mt-20">
          <p className="font-mono text-caption text-ink-soft">
            Strategy is also where governance starts — every plan is threat-modeled, and the data boundaries are decided, before a line of code exists.&ensp;
            <a href="#governance" className="text-cedar">
              How this runs safely →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
