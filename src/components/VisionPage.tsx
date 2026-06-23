import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE_CUBIC, EASE_EXPO } from "../lib/motion";
import { classLabels, firstYearTotal, ledger } from "../data/ledger";
import signature from "../assets/signature.svg";
import headshot from "../assets/jake-headshot.jpeg";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
// Videos removed 2026-06-18 (between shoots). Restore steps: docs/VIDEO-PLACEMENT.md
// import { VideoBlock } from "./ui/VideoBlock";
import { LedgerTable } from "./ui/LedgerTable";

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
      {/* ---- Hero: headline + overview video ---- */}
      <section id="vision" className="scroll-mt-24 px-6">
        <div className={`${WRAP} pt-32 pb-20 md:pt-40 md:pb-28`}>
          <motion.p
            className="eyebrow text-ink-soft"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE_CUBIC }}
          >
            Jake Heaps&ensp;·&ensp;AI Strategy &amp; Transformation
          </motion.p>

          <motion.h1
            className="mt-6 max-w-[22ch] font-display text-[2.625rem] leading-[1.08] tracking-[-0.01em] md:text-[4rem] md:leading-[1.04]"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.1 }}
          >
            I build AI operating systems that <em>actually</em> work, and that
            your people know how to run.
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
            Mine deliver{" "}
            <span className="text-ink">1.65x employee productivity</span>,{" "}
            <span className="text-ink">93% adoption</span>, and{" "}
            <span className="text-ink">$2.3M in measured value</span> in year
            one.
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
              Jake Heaps&ensp;·&ensp;leads AI implementation at Domo
            </span>
          </motion.div>

          {/* Overview video removed 2026-06-18 — restore: uncomment + set VID.overview (docs/VIDEO-PLACEMENT.md)
          <motion.div
            className="mt-8"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_CUBIC, delay: 0.34 }}
          >
            <VideoBlock
              src={VID.overview}
              caption="The overview. What I do, and why it works."
              title="Overview · Jake Heaps"
            />
          </motion.div>
          */}

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE_CUBIC, delay: 0.5 }}
          >
            <Button href="mailto:jakeheaps@me.com">Book a consultation</Button>
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
      </section>

      {/* ---- Who I am — lead with the person ---- */}
      <section id="who" className={SECTION}>
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
                    I lead AI implementation at Domo today. Full-time, in the
                    operating seat. This discipline didn&rsquo;t exist three
                    years ago; nobody has decades of it. What I have is a year
                    of actually doing it, measured and itemized.
                  </p>
                  <p>
                    The method comes from something I learned long before AI:
                    you change what people do by sitting next to them, not by
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

      {/* ---- Companies I've worked with ---- */}
      <LogoStrip />

      {/* ---- The problem ---- */}
      <section id="problem" className={`${SECTION} bg-surface`}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Header
            eyebrow="The problem"
            title="Everyone has an AI strategy. Almost no one has results they can show you."
            frame={
              <>
                You&rsquo;re being pitched AI from every direction, mostly by
                people who&rsquo;ve never shipped it inside a real company. And
                the results show it: the companies that win don&rsquo;t buy a
                better tool, they{" "}
                <a
                  href="https://digitaleconomy.stanford.edu/app/uploads/2026/03/EnterpriseAIPlaybook_PereiraGraylinBrynjolfsson.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CITE}
                >
                  redesign the work, and are three times more likely to do it
                </a>
                .{" "}
                <a
                  href="https://fortune.com/2026/05/11/what-microsoft-research-tells-cfo-roi-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={CITE}
                >
                  Two-thirds of AI&rsquo;s impact is organizational
                </a>
                , not technical. The rare thing isn&rsquo;t another opinion.
                It&rsquo;s someone who&rsquo;s done it and can hand you the
                receipts.
              </>
            }
          />
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

      {/* ---- The method ---- */}
      <section id="method" className={SECTION}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Header
            eyebrow="How we'd work together"
            title="Custom, never improvised."
            frame={
              <>
                Every engagement is custom, but it runs on three gears, weighted
                to where you need them. Most start in strategy and education; we
                build where it earns its keep. And we don&rsquo;t start from a
                blank page: the core systems already exist and are proven, so
                your build is adaptation, not invention, in a fraction of the
                time it took to build the first time.
              </>
            }
          />
          <RevealGroup className="mt-10 border-b border-hairline">
            {[
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
                    Turn your team into builders. Sitting next to people, not
                    sending decks, is why adoption stuck at ninety-three
                    percent, and{" "}
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
            ].map((s) => (
              <RevealItem
                key={s.n}
                className="grid gap-x-10 gap-y-2 border-t border-hairline py-7 md:grid-cols-[64px_180px_minmax(0,1fr)] md:items-baseline"
              >
                <span className="numeral text-[1.75rem] leading-none text-sienna">
                  {s.n}
                </span>
                <h4 className="m-0 font-display text-h3">{s.t}</h4>
                <p className="m-0 max-w-[52ch] text-body text-ink-soft">
                  {s.d}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
          {/* Method video removed 2026-06-18 — restore: uncomment + set VID.method (docs/VIDEO-PLACEMENT.md)
          <Reveal className="mt-10">
            <VideoBlock
              src={VID.method}
              caption="Strategy, implementation, education. Why the order is everything."
              title="The method"
            />
          </Reveal>
          */}
        </div>
      </section>

      {/* ---- The proof = the ledger ---- */}
      <section id="proof" className={`${SECTION} bg-surface`}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Header
            eyebrow="The proof"
            title="Measured, not estimated."
            frame="The first phase, with one client. One year, every dollar itemized, not a projection."
          />

          <RevealGroup className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
            {[
              { v: "93%", l: "team adoption in 12 months" },
              { v: "$2.3M", l: "first-year economic value" },
              { v: "1.65x", l: "average employee productivity" },
              { v: "26", l: "production systems in daily use" },
            ].map((m, i) => (
              <RevealItem
                key={m.l}
                className={`md:px-8 ${i > 0 ? "md:border-l md:border-hairline" : "md:pl-0"}`}
              >
                <span className="numeral block text-[2.5rem] leading-none text-ink md:text-[2.75rem]">
                  {m.v}
                </span>
                <p className="mt-3 text-caption text-ink-soft">{m.l}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-14">
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
            <p className="mt-5 max-w-[72ch] text-caption text-ink-soft">
              Set the capacity line aside and the displaced, avoided, and closed
              figures are roughly <span className="text-ink">$840K</span> in
              hard dollars: canceled invoices and a closed deal, not estimates.
            </p>
            <p className="mt-3 max-w-[72ch] font-mono text-caption text-ink-soft">
              Today that capacity runs at 1.65x average employee productivity,
              measured on live work.
            </p>
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

      {/* ---- Endorsement ---- */}
      <BootheQuote />

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
              This is for leaders who want real change, not a pilot on the
              shelf. Engagements are custom, usually a monthly partnership in
              senior strategy and hands-on enablement that leaves your team
              self-sufficient. We&rsquo;d start with a short call: where you
              are, where AI pays off, and whether I&rsquo;m the right partner.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
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
            </div>
            <p className="mt-5 max-w-[60ch] font-mono text-eyebrow leading-relaxed text-ink-soft">
              A 30-minute call: no pitch, just whether there&rsquo;s a fit and
              where to start. The full transformation record is available on
              request.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* Reuse the brand's grayscale logo strip + Boothe pull quote. */
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

/** Simple client logo bar, near the top of the page. */
function LogoStrip() {
  return (
    <section className={SECTION}>
      <div className={`${WRAP} py-14 md:py-16`}>
        <Reveal>
          <Eyebrow as="h2">Companies I&rsquo;ve worked with</Eyebrow>
          <ul className="mt-10 flex list-none flex-wrap items-center justify-center gap-x-12 gap-y-10 p-0 md:justify-between md:gap-x-8">
            {clients.map((c) => (
              <li key={c.name} className="flex items-center">
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  className={`${c.h} w-auto max-w-[150px] object-contain opacity-65 mix-blend-multiply grayscale transition-opacity duration-200 hover:opacity-100`}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** The Boothe endorsement, its own moment before the close. */
function BootheQuote() {
  return (
    <section className={SECTION}>
      <div className={`${WRAP} py-20 md:py-28`}>
        <Reveal>
          <figure className="m-0">
            <blockquote className="m-0">
              <p className="max-w-[26ch] font-display text-h2 italic leading-[1.3] text-ink [hanging-punctuation:none] [text-indent:-0.45em] md:text-[2.125rem]">
                &ldquo;One of the best hires I&rsquo;ve made in my entire
                career.&rdquo;
              </p>
            </blockquote>
            <figcaption className="eyebrow mt-8 text-ink-soft">
              Mark Boothe&ensp;&middot;&ensp;Chief Marketing Officer, Domo
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
