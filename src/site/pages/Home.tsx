import type React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";
import { Section } from "../../components/ui/Section";
import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { LedgerWaterfall } from "../../components/ui/LedgerWaterfall";
import { EASE_CUBIC, EASE_EXPO } from "../../lib/motion";
import { CareerLedger } from "../components/CareerLedger";
import { ContactBand } from "../components/ContactBand";
import { LogoRow } from "../components/LogoRow";
import { NOW, CONTACT } from "../../data/contact";
import { firstYearTotal } from "../../data/ledger";
import headshot from "../../assets/jake-headshot.jpeg";

/** The hero headline, one entry per masked line. Short enough to hold at 360px. */
const LINES: React.ReactNode[] = [
  "I build the AI",
  "my coworkers",
  <>
    <em className="text-sienna">use</em> every day.
  </>,
];

/** The four numbers Jake wants up front. The dollar figure is computed from the ledger. */
const DOMO_YEAR: [string, string][] = [
  ["93%", "of the team building with AI on their own"],
  ["26", "AI systems in production"],
  [`$${(firstYearTotal / 1_000_000).toFixed(1)}M`, "in first-year value"],
  ["1.65x", "team productivity"],
];

function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE_CUBIC, delay },
  });

  return (
    <section className="px-6">
      <div className="mx-auto grid max-w-[1100px] gap-12 pt-14 pb-20 md:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-end lg:gap-16 lg:pb-24">
        <div className="lg:pb-4">
          <motion.p className="font-mono text-caption text-ink-soft" {...rise(0)}>
            Jake Heaps&ensp;·&ensp;{CONTACT.location}
          </motion.p>

          <h1 className="mt-6 font-display text-[2.25rem] leading-[1.06] tracking-[-0.015em] min-[400px]:text-[2.5rem] sm:text-[3.5rem] lg:text-[4.25rem]">
            {LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial={reduced ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, ease: EASE_EXPO, delay: 0.12 + i * 0.09 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="mt-8 max-w-[44ch] text-lede text-ink-soft" {...rise(0.5)}>
            I&rsquo;m {NOW.title} at{" "}
            <a
              href={NOW.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
            >
              {NOW.company}
            </a>
            . Before that I spent a year at Domo building AI systems with the
            marketing team. We got 26 of them into production, and by the end
            93% of the team was building with AI on their own.
          </motion.p>

          <motion.div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4" {...rise(0.62)}>
            <Button to="/about">About me</Button>
            <Button variant="quiet" to="/work">
              What I&rsquo;ve built
            </Button>
          </motion.div>
        </div>

        <motion.figure
          className="m-0 w-full max-w-[240px] sm:max-w-[320px] lg:max-w-[400px]"
          initial={reduced ? false : { opacity: 0, clipPath: "inset(8% 0 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.9, ease: EASE_EXPO, delay: 0.2 }}
        >
          <img
            src={headshot}
            alt="Jake Heaps, against a concrete wall, in a black shirt."
            width={800}
            height={800}
            fetchPriority="high"
            className="plate aspect-[4/5] w-full object-cover object-[50%_20%]"
          />
        </motion.figure>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
              Where I&rsquo;ve been.
            </h2>
            <p className="mt-5 text-body text-ink-soft">
              I started in marketing, building funnels and running campaigns.
              What kept pulling at me was the repetitive work underneath, and
              whether something else could do it.
            </p>
            <div className="mt-6">
              <Button variant="quiet" to="/about">
                How I got here
              </Button>
            </div>
          </Reveal>
          <CareerLedger />
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-start lg:gap-16">
          <Reveal>
            <h2 className="max-w-[16ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
              What my year at Domo added up to.
            </h2>
            <p className="measure mt-5 text-lede text-ink-soft">
              Most of the value came from software we canceled and tools we
              built ourselves instead of buying. I kept a line for every dollar.
            </p>
            <dl className="m-0 mt-8 border-t-2 border-ink">
              {DOMO_YEAR.map(([fig, label]) => (
                <div
                  key={label}
                  className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-baseline gap-4 border-b border-hairline py-4 sm:grid-cols-[8rem_minmax(0,1fr)]"
                >
                  <dt className="numeral text-[2rem] leading-none text-ink sm:text-[2.5rem]">{fig}</dt>
                  <dd className="m-0 text-body text-ink-soft">{label}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6">
              <Button variant="quiet" to="/work#ledger">
                See the full list
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <LedgerWaterfall />
          </Reveal>
        </div>
      </Section>

      <Section tone="paper" innerClassName="!pt-0">
        <Reveal>
          <div className="border-t border-hairline pt-10">
            <p className="text-caption text-ink-soft">
              Places I&rsquo;ve worked or built for
            </p>
            <LogoRow className="mt-8" />
          </div>
        </Reveal>
      </Section>

      <Section tone="paper" innerClassName="!pt-0">
        <Reveal>
          <div className="grid gap-px border-y border-hairline sm:grid-cols-3">
            {[
              { to: "/work", label: "Work", blurb: "What I built at Domo and what each piece was worth." },
              { to: "/about", label: "About", blurb: "Two older brothers, a lot of sports, and two years in San Bernardino." },
              { to: "/approach", label: "Approach", blurb: "How I pick what to build and how I get people to use it." },
            ].map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group block py-6 no-underline sm:px-5 sm:first:pl-0"
              >
                <span className="font-display text-h2 text-ink">
                  {r.label}
                  <span
                    aria-hidden
                    className="ml-2 inline-block text-sienna transition-transform duration-300 ease-(--ease-out-expo) group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
                <span className="mt-2 block max-w-[30ch] text-caption text-ink-soft">
                  {r.blurb}
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Section>

      <ContactBand />
    </>
  );
}
