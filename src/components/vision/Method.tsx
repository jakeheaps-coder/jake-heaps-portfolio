import { EngagementDiagram } from "../ui/EngagementDiagram";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

/** Subtle inline citation link — quiet underline that darkens on hover. */
const CITE =
  "underline decoration-ink/30 underline-offset-2 transition-colors hover:decoration-ink";

/** The three gears, shared between the diagram and the detailed steps below. */
const STAGES = [
  { n: "01", label: "Strategy" },
  { n: "02", label: "Education" },
  { n: "03", label: "Implementation" },
];

const STEPS = [
  {
    n: "01",
    t: "Strategy",
    d: "Find where AI actually pays off (and where it doesn't), as a prioritized, sequenced plan you can act on.",
  },
  {
    n: "02",
    t: "Education",
    d: (
      <>
        Turn your team into builders. Sitting next to people, not sending decks,
        is why adoption stuck at ninety-three percent, and{" "}
        <a
          href="https://www.gallup.com/workplace/704225/rising-adoption-spurs-workforce-changes.aspx"
          target="_blank"
          rel="noopener noreferrer"
          className={CITE}
        >
          active use, not training, is what makes the gains stick
        </a>
        .
      </>
    ),
  },
  {
    n: "03",
    t: "Implementation",
    d: "Build what earns its keep, alongside your people. Most of it already exists, so it goes in fast. Not a dev shop; capability that stays after I step back.",
  },
];

/**
 * The method, named. "The Working System" is the identity; the EngagementDiagram
 * is the titled hero visual, and the three gears are elaborated below it. Steps
 * carry the original (approved) copy verbatim.
 */
export function Method() {
  return (
    <section id="method" className="scroll-mt-24 bg-surface px-6">
      <div className="mx-auto max-w-[1100px] py-20 md:py-28">
        <Reveal>
          <Eyebrow as="h2">The approach</Eyebrow>
          <h3 className="mt-4 max-w-[20ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
            The Working System
          </h3>
          <p className="measure mt-5 text-lede text-ink-soft">
            Every engagement is custom, but it runs on the same three gears,
            weighted to where you need them. Most start in strategy and
            education, then build where it earns its keep. The core systems
            already exist and are proven, so your build is mostly adaptation,
            and it goes in fast.
          </p>
        </Reveal>

        <Reveal className="mt-14 md:mt-16">
          <EngagementDiagram
            name="The Working System"
            stages={STAGES}
            className="mx-auto max-w-[640px]"
          />
        </Reveal>

        <RevealGroup className="mt-16 border-b border-hairline md:mt-20">
          {STEPS.map((s) => (
            <RevealItem
              key={s.n}
              className="grid gap-x-10 gap-y-2 border-t border-hairline py-7 md:grid-cols-[64px_180px_minmax(0,1fr)] md:items-baseline"
            >
              <span className="numeral text-[1.75rem] leading-none text-sienna">
                {s.n}
              </span>
              <h4 className="m-0 font-display text-h3">{s.t}</h4>
              <p className="m-0 max-w-[52ch] text-body text-ink-soft">{s.d}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10">
          <p className="font-mono text-caption text-ink-soft">
            When you know which gear you need,&ensp;
            <a href="#work-together" className="text-cedar">
              here&rsquo;s where we&rsquo;d start →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
