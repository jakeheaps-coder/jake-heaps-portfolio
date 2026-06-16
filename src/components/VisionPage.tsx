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
            Jake Heaps&ensp;·&ensp;AI Strategy &amp; Transformation
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
            Everyone is selling AI transformation. I&rsquo;ve actually done it,
            measured and itemized. Here&rsquo;s ninety seconds on what that
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
              caption="The overview. What I do, and why it works."
              title="Overview · Jake Heaps"
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

      {/* ---- Who I am — lead with the person ---- */}
      <section id="who" className={SECTION}>
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
              caption="Why I do this, in my own words."
              title="Who I am"
            />
          </Reveal>
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
            frame="You&rsquo;re being pitched AI from every direction. Decks, frameworks, big promises, mostly from people who&rsquo;ve never shipped it inside a real company. The rare thing isn&rsquo;t another opinion. It&rsquo;s someone who&rsquo;s done it and can hand you the receipts."
          />
          <Reveal className="mt-10">
            <VideoBlock
              src={VID.problem}
              caption="Why the market is full of AI advice and short on proof."
              title="The problem"
            />
          </Reveal>
        </div>
      </section>

      {/* ---- The method ---- */}
      <section id="method" className={SECTION}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Header
            eyebrow="The method"
            title="Strategy, implementation, education."
            frame="The three parts of every engagement, in that order. Skip straight to the tools, the way most AI projects do, and it becomes shelfware."
          />
          <RevealGroup className="mt-10 border-b border-hairline">
            {[
              {
                n: "01",
                t: "Strategy",
                d: "Decide what to automate, in what order, and why. Most rollouts fail right here, by leading with the tool instead of the sequence.",
              },
              {
                n: "02",
                t: "Implementation",
                d: "Build the systems and ship them into production, inside the platforms the company already runs on.",
              },
              {
                n: "03",
                t: "Education",
                d: "Get the team building on their own. Sitting next to one person beats any training deck. It is how adoption reached ninety-three percent.",
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
              caption="Strategy, implementation, education. Why the order is everything."
              title="The method"
            />
          </Reveal>
        </div>
      </section>

      {/* ---- The proof = the ledger ---- */}
      <section id="proof" className={`${SECTION} bg-surface`}>
        <div className={`${WRAP} py-20 md:py-28`}>
          <Header
            eyebrow="The proof"
            title="Measured, not estimated."
            frame="The first phase, inside a publicly traded company. One year, every dollar itemized, not a projection."
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
              hard dollars: canceled invoices and a closed deal, not estimates.
            </p>
            <p className="mt-3 max-w-[72ch] font-mono text-caption text-ink-soft">
              &ldquo;{attestation.quote}&rdquo;{" "}
              <a href="#/brief" className="text-cedar">
                See the full ledger and counting rules →
              </a>
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="border-t-2 border-ink pt-8">
              <Eyebrow as="h3">
                Where it&rsquo;s going&ensp;·&ensp;FY27 projection
              </Eyebrow>
              <p className="measure mt-4 text-lede text-ink">
                Marketing was where this started. The same system is now rolling
                across the whole company, roughly 850 people and $300M in
                operating spend, on track to about 2x that efficiency rate. That
                is the FY27 projection, built on the phase one results above.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <VideoBlock
              src={VID.proof}
              caption="The numbers, in my own words, and how they were counted."
              title="The proof"
            />
          </Reveal>
        </div>
      </section>

      {/* ---- Contact / close ---- */}
      <section id="contact" className={`${SECTION} bg-surface`}>
        <div className={`${WRAP} py-24 md:py-32`}>
          <Reveal>
            <hr className="m-0 border-0 border-t-2 border-ink" />
            <h2 className="mt-8 max-w-[24ch] font-display text-h1 md:text-[3rem] md:leading-[1.05]">
              If you&rsquo;re serious about making AI how your company runs,
              reach out.
            </h2>
            <p className="measure mt-6 text-lede text-ink-soft">
              Not a pilot on the edge. The operating layer. If that&rsquo;s the
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
