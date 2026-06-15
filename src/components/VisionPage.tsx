import { motion, useReducedMotion } from "motion/react";
import { EASE_CUBIC, EASE_EXPO } from "../lib/motion";
import {
  attestation,
  classLabels,
  firstYearTotal,
  ledger,
} from "../data/ledger";
import signature from "../assets/signature.svg";
import headshot from "../assets/jake-headshot.jpeg";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import { VideoBlock } from "./ui/VideoBlock";
import { LedgerTable } from "./ui/LedgerTable";

const BASE = import.meta.env.BASE_URL;
/** Video sources — files land in public/video/ as Jake films. Until then,
    leaving these undefined renders the on-brand placeholder. */
const VID = {
  overview: undefined as string | undefined, // `${BASE}video/overview.mp4`
  problem: undefined as string | undefined,
  method: undefined as string | undefined,
  proof: undefined as string | undefined,
  whoIAm: undefined as string | undefined,
};

const SECTION = "scroll-mt-24 px-6";
const WRAP = "mx-auto max-w-[1100px]";

/** A consistent section frame: eyebrow, headline, optional one-line frame. */
function Header({
  eyebrow,
  title,
  frame,
}: {
  eyebrow: string;
  title: string;
  frame?: string;
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
            Jake Heaps&ensp;—&ensp;AI Strategy &amp; Transformation
          </motion.p>

          <motion.h1
            className="mt-6 max-w-[18ch] font-display text-[2.625rem] leading-[1.08] tracking-[-0.01em] md:text-[4rem] md:leading-[1.04]"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.1 }}
          >
            I build AI operating systems that people <em>actually</em> use.
          </motion.h1>

          <motion.p
            className="measure mt-6 text-lede text-ink-soft"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_CUBIC, delay: 0.2 }}
          >
            Most companies bolt AI on. I rebuild how the team works around it —
            so they actually use it. Here&rsquo;s ninety seconds on what that
            looks like.
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

          <motion.div
            className="mt-8"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_CUBIC, delay: 0.34 }}
          >
            <VideoBlock
              src={VID.overview}
              caption="The overview — what I do, and why it works."
              title="Overview — Jake Heaps"
            />
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE_CUBIC, delay: 0.5 }}
          >
            <Button href="mailto:jakeheaps@me.com">Start a conversation</Button>
            <Button
              variant="quiet"
              href="https://www.linkedin.com/in/jakeheaps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button variant="quiet" href="#/brief">
              Read the full brief
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ---- The problem ---- */}
      <section className={`${SECTION} bg-surface`}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Header
            eyebrow="The problem"
            title="AI is everywhere. None of it is connected."
            frame="Every team is being pitched AI from every direction. Tools pile up. Almost none of it makes it into how the work actually gets done."
          />
          <Reveal className="mt-10">
            <VideoBlock
              src={VID.problem}
              caption="Why most AI rollouts stall — and what they all get backwards."
              title="The problem"
            />
          </Reveal>
        </div>
      </section>

      {/* ---- The method ---- */}
      <section className={SECTION}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Header
            eyebrow="The method"
            title="Tools last. Not first."
            frame="Every failed rollout I studied led with the tool. The sequence that works runs the other way:"
          />
          <RevealGroup className="mt-10 border-b border-hairline">
            {[
              {
                n: "01",
                t: "Mindset",
                d: "Shift the story from “AI will replace me” to “AI makes me dangerous.” Nothing adopts without this.",
              },
              {
                n: "02",
                t: "Enablement",
                d: "Sit with each person and build their real workflow together. This is the hard part — and the part everyone skips.",
              },
              {
                n: "03",
                t: "Tools",
                d: "Role-specific systems that solve a real problem. They come last; without the first two they become shelfware.",
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
          <Reveal className="mt-10">
            <VideoBlock
              src={VID.method}
              caption="The three ingredients — and why the order is the whole secret."
              title="The method"
            />
          </Reveal>
        </div>
      </section>

      {/* ---- The proof = the ledger ---- */}
      <section className={`${SECTION} bg-surface`}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Header
            eyebrow="The proof"
            title="Measured, not estimated."
            frame="One year, one ~30-person organization. Every dollar itemized — not a projection."
          />

          <RevealGroup className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
            {[
              { v: "93%", l: "team adoption in 12 months" },
              { v: "$2.3M", l: "first-year economic value" },
              { v: "280", l: "hours/week returned to the team" },
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
              hard dollars — canceled invoices and a closed deal, not estimates.
            </p>
            <p className="mt-3 max-w-[72ch] font-mono text-caption text-ink-soft">
              &ldquo;{attestation.quote}&rdquo; — {attestation.source}.{" "}
              <a href="#/brief" className="text-cedar">
                See the full ledger and counting rules →
              </a>
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <VideoBlock
              src={VID.proof}
              caption="The numbers, in my own words — and how they were counted."
              title="The proof"
            />
          </Reveal>
        </div>
      </section>

      {/* ---- Who I am ---- */}
      <section className={SECTION}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,58ch)_minmax(180px,220px)] lg:gap-x-16">
              <div>
                <Eyebrow as="h2">Who I am</Eyebrow>
                <h3 className="mt-4 font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
                  This is all I do.
                </h3>
                <div className="mt-6 space-y-5 text-body text-ink">
                  <p>
                    I lead AI implementation at Domo today — full-time, in the
                    operating seat. This discipline didn&rsquo;t exist three
                    years ago; nobody has decades of it. What I have is a year
                    of actually doing it, measured and itemized.
                  </p>
                  <p>
                    The method comes from something I learned long before AI:
                    you change what people do by sitting next to them, not by
                    sending them a document. That&rsquo;s the whole secret of
                    adoption — and it&rsquo;s why the systems kept running after
                    I stepped back.
                  </p>
                  <p>
                    I&rsquo;m the youngest of three brothers, so I&rsquo;ve
                    never been allowed to win anything easily. This August
                    I&rsquo;m marrying Ella. And I build things on nights and
                    weekends because I genuinely cannot help it.
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
          <Reveal className="mt-12">
            <VideoBlock
              src={VID.whoIAm}
              caption="Why I do this — in my own words."
              title="Who I am"
            />
          </Reveal>
        </div>
      </section>

      {/* ---- Select engagements ---- */}
      <EngagementsStrip />

      {/* ---- Close ---- */}
      <section className={`${SECTION} bg-surface`}>
        <div className={`${WRAP} py-24 md:py-32`}>
          <Reveal>
            <hr className="m-0 border-0 border-t-2 border-ink" />
            <h2 className="mt-8 max-w-[24ch] font-display text-h1 md:text-[3rem] md:leading-[1.05]">
              If you&rsquo;re serious about making AI how your company runs,
              reach out.
            </h2>
            <p className="measure mt-6 text-lede text-ink-soft">
              Not a pilot on the edge — the operating layer. If that&rsquo;s the
              seat you&rsquo;re building toward, I&rsquo;d like to compare
              notes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="mailto:jakeheaps@me.com">
                Start a conversation
              </Button>
              <Button
                variant="quiet"
                href="https://www.linkedin.com/in/jakeheaps/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
              <Button variant="quiet" href="#/brief">
                Read the full brief
              </Button>
            </div>
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
  { name: "Roku", logo: `${BASE_LOGOS}/roku.png`, h: "h-6" },
  { name: "Foot Locker", logo: `${BASE_LOGOS}/foot-locker.png`, h: "h-8" },
  {
    name: "Regional One Health",
    logo: `${BASE_LOGOS}/one-health-solutions.png`,
    h: "h-7",
  },
];

function EngagementsStrip() {
  return (
    <section className={SECTION}>
      <div className={`${WRAP} py-20 md:py-28`}>
        <Reveal>
          <Eyebrow as="h2">Select engagements</Eyebrow>
          <ul className="mt-12 flex list-none flex-wrap items-center justify-center gap-x-12 gap-y-10 p-0 md:justify-between md:gap-x-8">
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
          <p className="mt-10 max-w-[60ch] font-mono text-caption text-ink-soft">
            Direct client engagements and Domo-guided engagements.
          </p>
        </Reveal>

        <Reveal className="mt-20 md:mt-24">
          <figure className="m-0">
            <blockquote className="m-0">
              <p className="max-w-[26ch] font-display text-h2 italic leading-[1.3] text-ink [hanging-punctuation:none] [text-indent:-0.45em] md:text-[2.125rem]">
                &ldquo;One of the best hires I&rsquo;ve made in my entire
                career.&rdquo;
              </p>
            </blockquote>
            <figcaption className="eyebrow mt-8 text-ink-soft">
              <span aria-hidden>&mdash;&ensp;</span>Mark
              Boothe&ensp;&middot;&ensp;Chief Marketing Officer, Domo
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
