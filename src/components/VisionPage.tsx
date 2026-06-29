import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE_CUBIC, EASE_EXPO } from "../lib/motion";
import { classLabels, firstYearTotal, ledger } from "../data/ledger";
import signature from "../assets/signature.svg";
import headshot from "../assets/jake-headshot.jpeg";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { VideoSlot } from "./ui/VideoSlot";
import { LedgerTable } from "./ui/LedgerTable";
import { LedgerWaterfall } from "./ui/LedgerWaterfall";
import { MarginGrid, MarginNote } from "./ui/Chapter";
import { LeadForm } from "./LeadForm";
import { OperatingSystemExplainer } from "./vision/OperatingSystemExplainer";
import { Method } from "./vision/Method";
import { HowToWorkTogether } from "./vision/HowToWorkTogether";
import { FAQ } from "./FAQ";

const BASE = import.meta.env.BASE_URL;
/* Video sources — kept for restore after filming (see docs/VIDEO-PLACEMENT.md).
   To restore: uncomment the VideoBlock import above, this map, and each video
   block below, then set the .mp4 paths.
const VID = {
  overview: undefined as string | undefined, // `${BASE}video/overview.mp4`
  problem: undefined as string | undefined,
  method: undefined as string | undefined,
  proof: undefined as string | undefined,
  whoIAm: undefined as string | undefined,
};
*/

const SECTION = "scroll-mt-24 px-6";
const WRAP = "mx-auto max-w-[1100px]";
/** Subtle inline citation link — quiet underline that darkens on hover. */
const CITE =
  "underline decoration-ink/30 underline-offset-2 transition-colors hover:decoration-ink";

/** A consistent section frame: eyebrow, headline, optional one-line frame. */
function Header({
  eyebrow,
  title,
  frame,
}: {
  eyebrow: string;
  title: string;
  frame?: ReactNode;
}) {
  return (
    <Reveal>
      <Eyebrow as="h2">{eyebrow}</Eyebrow>
      <h3 className="mt-4 max-w-[20ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
        {title}
      </h3>
      {frame && <p className="measure mt-5 text-lede text-ink-soft">{frame}</p>}
    </Reveal>
  );
}

export default function VisionPage() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* ---- Hero: the pitch left, proof numerals in the right rail ---- */}
      <section id="vision" className="scroll-mt-24 px-6">
        <div className={`${WRAP} pt-32 pb-20 md:pt-40 md:pb-28`}>
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(220px,260px)] lg:items-start">
            <div>
              <motion.p
                className="eyebrow text-ink-soft"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: EASE_CUBIC }}
              >
                Jake Heaps&ensp;·&ensp;AI Strategy &amp; Transformation
              </motion.p>

              <motion.h1
                className="mt-6 max-w-[20ch] font-display text-[2.25rem] leading-[1.1] tracking-[-0.01em] sm:text-[2.75rem] md:text-[4rem] md:leading-[1.04]"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.1 }}
              >
                I build AI operating systems that <em>actually</em> work, and
                that your people know how to run.
              </motion.h1>

              <motion.p
                className="measure mt-6 text-lede text-ink-soft"
                initial={reduced ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_CUBIC, delay: 0.2 }}
              >
                Most companies have AI.{" "}
                <a
                  href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CITE}
                >
                  Fewer than four in ten get it to the bottom line.
                </a>{" "}
                Mine deliver measured results in the first year.
              </motion.p>

              {/* Byline — a face in the first eyeful, before the video plays */}
              <motion.div
                className="mt-8 flex items-center gap-3"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE_CUBIC, delay: 0.28 }}
              >
                <img
                  src={headshot}
                  alt="Jake Heaps"
                  width={96}
                  height={96}
                  className="h-12 w-12 rounded-full object-cover ring-hairline"
                />
                <span className="font-mono text-eyebrow uppercase tracking-[0.08em] text-ink-soft">
                  Jake Heaps&ensp;·&ensp;AI transformation practice
                </span>
              </motion.div>

              {/* Reserved overview video — hidden until SHOW_VIDEOS is flipped
                  on (src/lib/flags.ts) and a src is set. */}
              <VideoSlot
                className="mt-8"
                caption="The overview. What I do, and why it works."
                title="Overview · Jake Heaps"
              />

              <motion.div
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE_CUBIC, delay: 0.5 }}
              >
                <Button href="mailto:jakeheaps@me.com">
                  Book a consultation
                </Button>
                <Button
                  variant="quiet"
                  href="https://www.linkedin.com/in/jakeheaps/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Button>
              </motion.div>
            </div>

            {/* Proof rail — stacked on phones (long mono labels need the room),
                a 3-up row on tablet, a vertical rail on desktop. */}
            <motion.aside
              aria-label="First-year results"
              className="lg:pt-2"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE_CUBIC, delay: 0.42 }}
            >
              <ul className="m-0 grid list-none grid-cols-1 gap-y-6 border-t border-hairline p-0 pt-6 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:grid-cols-1 lg:gap-x-0 lg:gap-y-0 lg:border-t-0 lg:pt-0">
                {[
                  { v: "1.65x", l: "employee productivity" },
                  { v: "93%", l: "team adoption" },
                  { v: "$2.3M", l: "measured value, year one" },
                ].map((s, i) => (
                  <li
                    key={s.l}
                    className={`lg:border-hairline lg:py-5 ${
                      i > 0 ? "lg:border-t" : "lg:pt-0"
                    }`}
                  >
                    <span className="numeral block text-[2rem] leading-none text-ink md:text-[2.5rem]">
                      {s.v}
                    </span>
                    <span className="mt-2 block font-mono text-eyebrow uppercase tracking-[0.08em] text-ink-soft">
                      {s.l}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ---- Who I am — lead with the person ---- */}
      <section id="who" className={`${SECTION} bg-surface`}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,58ch)_minmax(180px,220px)] lg:gap-x-16">
              <div>
                <Eyebrow as="h2">Who I am</Eyebrow>
                <h3 className="mt-4 font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
                  This is what I do.
                </h3>
                <div className="mt-6 space-y-5 text-body text-ink">
                  <p>
                    I run an AI transformation practice, and I build the
                    operating systems companies use to put AI into their real
                    work. I led the transformation at Domo, and that year is my
                    flagship case. I built the systems, then spent a year
                    getting people to actually use them. The discipline is
                    young, so nobody has decades of it. What I have is a year of
                    doing it inside a real company, measured and itemized.
                  </p>
                  <p>
                    The method came from something I learned long before AI. You
                    change what people do by sitting next to them, not by
                    sending them a document. That&rsquo;s the whole secret of
                    adoption, and it&rsquo;s why the systems kept running after
                    I stepped back.
                  </p>
                </div>
                <img
                  src={signature}
                  alt="Jake Heaps signature"
                  className="mt-8 h-14 w-auto md:h-16"
                />
              </div>
              <figure className="order-first m-0 lg:order-none lg:pt-12">
                <img
                  src={headshot}
                  alt="Jake Heaps"
                  width={800}
                  height={800}
                  loading="lazy"
                  className="plate aspect-square w-40 object-cover lg:w-full"
                />
                <figcaption className="eyebrow mt-3 text-ink-soft">
                  Jake Heaps · Lehi, Utah
                </figcaption>
              </figure>
            </div>
          </Reveal>
          {/* Who-I-am video removed 2026-06-18 — restore: uncomment + set VID.whoIAm (docs/VIDEO-PLACEMENT.md)
          <Reveal className="mt-12">
            <VideoBlock
              src={VID.whoIAm}
              caption="Why I do this, in my own words."
              title="Who I am"
            />
          </Reveal>
          */}
        </div>
      </section>

      {/* ---- What an AI operating system actually is ---- */}
      <OperatingSystemExplainer />

      {/* ---- Companies I've worked with ---- */}
      <LogoStrip />

      {/* ---- The problem ---- */}
      <section id="problem" className={SECTION}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Reveal>
            <Eyebrow as="h2">The problem</Eyebrow>
            {/* Adversarial opener — kept verbatim by request. */}
            <h3 className="mt-4 max-w-[24ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
              Everyone has an AI strategy. Almost no one has results they can
              show you.
            </h3>
          </Reveal>
          <MarginGrid className="mt-8">
            <p className="text-lede text-ink-soft">
              You&rsquo;re being pitched AI from every direction, mostly by
              people who have never shipped it inside a real company. The
              companies that actually capture the value redesign how the work
              gets done, and most of that is organizational. The rare thing is
              someone who has done it, and can hand you the receipts.
            </p>
            <div className="flex flex-col gap-8">
              <MarginNote label="Stanford">
                Teams that redesign the work are{" "}
                <a
                  href="https://digitaleconomy.stanford.edu/app/uploads/2026/03/EnterpriseAIPlaybook_PereiraGraylinBrynjolfsson.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CITE}
                >
                  three times more likely
                </a>{" "}
                to capture AI&rsquo;s value.
              </MarginNote>
              <MarginNote label="Fortune · Microsoft">
                <a
                  href="https://fortune.com/2026/05/11/what-microsoft-research-tells-cfo-roi-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CITE}
                >
                  Two-thirds of AI&rsquo;s impact
                </a>{" "}
                is organizational rather than technical.
              </MarginNote>
            </div>
          </MarginGrid>
          {/* Problem video removed 2026-06-18 — restore: uncomment + set VID.problem (docs/VIDEO-PLACEMENT.md)
          <Reveal className="mt-10">
            <VideoBlock
              src={VID.problem}
              caption="Why the market is full of AI advice and short on proof."
              title="The problem"
            />
          </Reveal>
          */}
        </div>
      </section>

      {/* ---- The method, named: "The Working System" + the diagram ---- */}
      <Method />

      {/* ---- How to work together: the three tiers ---- */}
      <HowToWorkTogether />

      {/* ---- The proof = the ledger ---- */}
      <section id="proof" className={`${SECTION} bg-surface`}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Header
            eyebrow="The proof"
            title="Measured, not estimated."
            frame="The first phase, with one client. One year, every dollar itemized, not a projection."
          />

          {/* Anchor stats — the money and the productivity big; adoption and
              system count as supporting figures below. */}
          <RevealGroup className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-12">
            {[
              { v: "$2.3M", l: "first-year economic value, itemized below" },
              { v: "1.65x", l: "average employee productivity, on live work" },
            ].map((m) => (
              <RevealItem key={m.l}>
                <span className="numeral block text-[3rem] leading-none text-ink md:text-[4rem]">
                  {m.v}
                </span>
                <p className="mt-3 max-w-[28ch] text-caption text-ink-soft">
                  {m.l}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
          <RevealGroup className="mt-10 grid grid-cols-2 gap-x-8 border-t border-hairline pt-8">
            {[
              { v: "93%", l: "team adoption in 12 months" },
              { v: "26", l: "production systems in daily use" },
            ].map((m) => (
              <RevealItem key={m.l}>
                <span className="numeral block text-[1.75rem] leading-none text-ink">
                  {m.v}
                </span>
                <p className="mt-2 text-caption text-ink-soft">{m.l}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          {/* The value, built up class by class — the centerpiece. */}
          <Reveal className="mt-16">
            <Eyebrow>First-year value, by class</Eyebrow>
            <MarginGrid className="mt-6">
              <LedgerWaterfall />
              <div className="flex flex-col gap-8">
                <MarginNote label="Hard dollars">
                  Set the capacity line aside and the rest is roughly{" "}
                  <span className="text-ink">$840K</span> in hard dollars:
                  canceled invoices and a closed deal.
                </MarginNote>
                <MarginNote label="Measured">
                  Today that capacity runs at 1.65x average employee
                  productivity, measured on live work.
                </MarginNote>
              </div>
            </MarginGrid>

            {/* The itemized ledger, demoted to a disclosure. */}
            <details className="group mt-10 border-t border-hairline">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-h3 text-ink">
                  The full ledger, line by line
                </span>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 font-mono text-h3 leading-none text-sienna transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="pb-2">
                <LedgerTable
                  caption="First-year value ledger"
                  columns={[
                    { key: "item", label: "Item", lead: true },
                    { key: "cls", label: "Class", width: "md:w-[14%]" },
                    {
                      key: "amount",
                      label: "Amount",
                      numeric: true,
                      width: "md:w-[16%]",
                    },
                  ]}
                  rows={[
                    ...ledger.map((r) => ({
                      item: r.item,
                      cls: classLabels[r.cls],
                      amount: `$${r.amount.toLocaleString("en-US")}`,
                    })),
                    {
                      item: "First-year total",
                      cls: "",
                      amount: `$${firstYearTotal.toLocaleString("en-US")}`,
                    },
                  ]}
                />
              </div>
            </details>
          </Reveal>

          <Reveal className="mt-12">
            <div className="border-t-2 border-ink pt-8">
              <Eyebrow as="h3">
                Where it&rsquo;s going&ensp;·&ensp;the next phase
              </Eyebrow>
              <p className="measure mt-4 text-lede text-ink">
                One team was where this started. The same system is now rolling
                out company-wide, on track to roughly 2x that efficiency rate.
                That is the projection, built on the phase-one results above.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <p className="font-mono text-caption text-ink-soft">
              When you&rsquo;re ready to build this in your company,&ensp;
              <a href="#work-together" className="text-cedar">
                here&rsquo;s how we&rsquo;d start →
              </a>
            </p>
          </Reveal>

          {/* Proof video removed 2026-06-18 — restore: uncomment + set VID.proof (docs/VIDEO-PLACEMENT.md)
          <Reveal className="mt-12">
            <VideoBlock
              src={VID.proof}
              caption="The numbers, in my own words, and how they were counted."
              title="The proof"
            />
          </Reveal>
          */}
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <FAQ />

      {/* ---- Contact / close ---- */}
      <section id="contact" className={`${SECTION} bg-surface`}>
        <div className={`${WRAP} py-24 md:py-32`}>
          <Reveal>
            <hr className="m-0 border-0 border-t-2 border-ink" />
            <Eyebrow as="h2" className="mt-8">
              What to expect
            </Eyebrow>
            <h3 className="mt-4 max-w-[24ch] font-display text-h1 md:text-[3rem] md:leading-[1.05]">
              If you want AI to be how your company runs, let&rsquo;s talk.
            </h3>
            <p className="measure mt-6 text-lede text-ink-soft">
              This is for leaders who want AI to be how the company runs, not a
              pilot on the shelf. We&rsquo;d start with a short call: where you
              are, where AI pays off, and whether I&rsquo;m the right person to
              build it with you. No pitch.
            </p>
            <LeadForm variant="panel" className="mt-10 max-w-[44rem]" />
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button
                variant="quiet"
                href="https://www.linkedin.com/in/jakeheaps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Or find me on LinkedIn
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* The client logo strip, near the top of the page. */
const BASE_LOGOS = `${BASE}logos`;
const clients = [
  { name: "Domo", logo: `${BASE_LOGOS}/domo.svg`, h: "h-6" },
  { name: "Bissell", logo: `${BASE_LOGOS}/bissell.svg`, h: "h-9" },
  { name: "Manscaped", logo: `${BASE_LOGOS}/manscaped.svg`, h: "h-5" },
  {
    name: "Cox Automotive",
    logo: `${BASE_LOGOS}/cox-automotive.webp`,
    h: "h-8",
  },
  { name: "Thryv", logo: `${BASE_LOGOS}/thryv.png`, h: "h-6" },
  { name: "Carvana", logo: `${BASE_LOGOS}/carvana.png`, h: "h-9" },
  {
    name: "Regional One Health",
    logo: `${BASE_LOGOS}/one-health-solutions.png`,
    h: "h-7",
  },
];

/**
 * Client logo bar — the proof the practice exists beyond Domo, so it gets a
 * banded section, named logos, and one talked-through case (Bissell, public).
 */
function LogoStrip() {
  return (
    <section id="engagements" className={`${SECTION} bg-surface`}>
      <div className={`${WRAP} py-20 md:py-24`}>
        <Reveal>
          <Eyebrow as="h2">Companies I&rsquo;ve worked with</Eyebrow>
          <ul className="mt-10 grid list-none grid-cols-2 gap-x-8 gap-y-10 p-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {clients.map((c) => (
              <li
                key={c.name}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="flex h-10 items-center">
                  <img
                    src={c.logo}
                    alt={c.name}
                    loading="lazy"
                    className={`${c.h} w-auto max-w-[140px] object-contain opacity-80 mix-blend-multiply grayscale transition-opacity duration-200 hover:opacity-100`}
                  />
                </span>
                <span className="font-mono text-eyebrow uppercase tracking-[0.06em] text-ink-soft">
                  {c.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12 border-t border-hairline pt-8">
          <p className="measure text-body text-ink">
            Bissell needed working AI in their team&rsquo;s hands fast. I built
            their first AI workflows alongside them in two days, and
            TechRepublic covered it.
          </p>
          <div className="mt-4">
            <Button
              variant="quiet"
              href="https://www.techrepublic.com/article/news-bissell-ai-workflows-two-day-build-domo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more about this
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
