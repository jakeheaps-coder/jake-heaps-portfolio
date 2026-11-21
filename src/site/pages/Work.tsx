import { PageHeader } from "../../components/ui/PageHeader";
import { Section } from "../../components/ui/Section";
import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { MarginGrid, MarginNote } from "../../components/ui/Chapter";
import { LedgerWaterfall } from "../../components/ui/LedgerWaterfall";
import { LedgerTable } from "../../components/ui/LedgerTable";
import { ContactBand } from "../components/ContactBand";
import { LogoRow } from "../components/LogoRow";
import { citations } from "../../data/citations";
import { ledger, classLabels, countingRules } from "../../data/ledger";
import {
  FIGURES,
  FEATURED,
  MORE,
  PUBLIC_RECORD,
  hardDollars,
  usd,
} from "../../data/work";

const LEDGER_COLUMNS = [
  { key: "item", label: "Item", lead: true, width: "md:w-[46%]" },
  { key: "class", label: "Class" },
  { key: "basis", label: "Basis" },
  { key: "amount", label: "Amount", numeric: true },
];

const ledgerRows = ledger.map((r) => ({
  item: r.item,
  class: classLabels[r.cls],
  basis: r.basis === "yearly" ? "Run-rate" : "One-time",
  amount: usd(r.amount),
}));

const H2 =
  "max-w-[22ch] font-display text-h2 sm:text-h1 md:text-[2.75rem] md:leading-[1.08]";

export default function Work() {
  return (
    <>
      <Section tone="paper">
        <PageHeader
          kicker="Work"
          title="What I’ve built, and how I counted it."
          stat="26"
          statLabel="Production systems at Domo"
        >
          Nearly all of this is from my year at Domo, plus a few things that
          ended up on stage or in print. Every number has a note on where it
          came from.
        </PageHeader>
      </Section>

      {/* Domo */}
      <Section id="domo" tone="surface">
        <Reveal>
          <h2 className={H2}>My year at Domo.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              I joined Domo&rsquo;s marketing team in June 2025 to get AI into
              the way the team actually worked. Most people had tried a chatbot
              once and gone back to what they knew. A year later, 93% of them
              were building with AI on their own, and I usually wasn&rsquo;t in
              the room.
            </p>
            <p>
              I started with the most repetitive work and built systems for
              that first. Then I sat with people while they learned to build
              their own. By May 2026 those systems ran without me touching them
              every day, so I took the same approach to the whole company as
              Manager, Internal AI Projects.
            </p>
          </div>
          <MarginNote label="My role">
            AI Marketing Operations Manager, then Manager, Internal AI Projects.
            I set the plan, built the systems, trained 80+ people, and advised
            the CMO.
          </MarginNote>
        </MarginGrid>

        <Reveal className="mt-14">
          <h3 className="sr-only">The four figures and how each was counted</h3>
          <dl className="m-0 border-t-2 border-ink">
            {FIGURES.map((f) => (
              <div
                key={f.value}
                className="grid gap-x-8 gap-y-1 border-b border-hairline py-6 md:grid-cols-[150px_200px_minmax(0,1fr)] md:items-baseline"
              >
                <dt className="contents">
                  <span className="numeral block text-[2.5rem] leading-none text-sienna">
                    {f.value}
                  </span>
                  <span className="mt-2 block font-display text-h3 text-ink md:mt-0">
                    {f.what}
                  </span>
                </dt>
                <dd className="m-0 mt-1 max-w-[56ch] text-body text-ink-soft md:mt-0">
                  {f.how}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* The ledger */}
      <Section id="ledger" tone="paper">
        <Reveal>
          <h2 className={H2}>Where the $2.3M came from.</h2>
          <p className="measure mt-5 text-lede text-ink-soft">
            The biggest line is capacity, the work the systems took on so we
            didn&rsquo;t have to hire for it. Everything else is harder money:
            software we canceled, tools we built instead of buying, and a deal
            that closed.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <LedgerWaterfall className="mx-auto max-w-[760px]" />
        </Reveal>

        <Reveal className="mt-14">
          <MarginGrid>
            <details className="group">
              <summary className="flex min-h-11 cursor-pointer items-center gap-2 font-mono text-caption text-ink marker:content-none">
                <span
                  aria-hidden
                  className="text-sienna transition-transform group-open:rotate-45"
                >
                  +
                </span>
                See every line of the ledger
              </summary>
              <div className="mt-6">
                <LedgerTable columns={LEDGER_COLUMNS} rows={ledgerRows} />
                <ul className="m-0 mt-6 list-none space-y-2 p-0 font-mono text-eyebrow leading-relaxed text-ink-soft">
                  {countingRules.map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              </div>
            </details>
            <MarginNote label="Hard dollars">
              Leave out the capacity line and {usd(hardDollars)} is left:
              canceled invoices, things we built in-house, spend we avoided, and
              the closed deal.
            </MarginNote>
          </MarginGrid>
        </Reveal>
      </Section>

      {/* Projects */}
      <Section id="projects" tone="surface">
        <Reveal>
          <h2 className={H2}>Some of what I built.</h2>
          <p className="measure mt-5 text-lede text-ink-soft">
            These are the ones I&rsquo;d show you first, all from my year at
            Domo.
          </p>
        </Reveal>

        <ul className="m-0 mt-12 list-none border-t-2 border-ink p-0">
          {FEATURED.map((p) => (
            <Reveal
              as="li"
              key={p.name}
              className="grid gap-x-12 gap-y-4 border-b border-hairline py-9 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:py-12"
            >
              <div>
                <h3 className="font-display text-h2 text-ink md:text-[2rem] md:leading-[1.15]">
                  {p.name}
                </h3>
                <p className="mt-3 font-mono text-caption text-sienna">
                  {p.note}
                </p>
              </div>
              <div className="max-w-[60ch] space-y-4 text-body text-ink">
                {p.body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <h3 className="mt-16 font-mono text-caption text-ink-soft">
            And a few more
          </h3>
        </Reveal>
        <ul className="m-0 mt-4 list-none border-t border-ink p-0">
          {MORE.map((p) => (
            <Reveal
              as="li"
              key={p.name}
              className="grid gap-x-10 gap-y-1.5 border-b border-hairline py-6 md:grid-cols-[220px_minmax(0,1fr)_200px] md:items-baseline"
            >
              <h4 className="font-display text-h3 text-ink">{p.name}</h4>
              <p className="max-w-[60ch] text-body text-ink-soft">
                {p.body[0]}
              </p>
              <p className="font-mono text-caption text-ink-soft md:text-right">
                {p.note}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Bissell */}
      <Section id="bissell" tone="paper">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <Reveal>
            <h2 className={H2}>Bissell, in two days.</h2>
            <p className="measure mt-5 text-lede text-ink-soft">
              Bissell wanted AI in their team&rsquo;s hands fast. Working with
              Domo, we went from the first conversation to workflows their
              people were using in two days. We built it next to them instead of
              handing something over, and TechRepublic wrote it up.
            </p>
            <div className="mt-6">
              <Button
                variant="quiet"
                href={citations.techrepublic.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the write-up
              </Button>
            </div>
          </Reveal>
          <Reveal className="md:text-right">
            <span className="numeral block text-[4.5rem] leading-none text-sienna md:text-[6rem]">
              2
            </span>
            <span className="eyebrow mt-2 block text-ink-soft">
              Days to workflows in use
            </span>
          </Reveal>
        </div>
      </Section>

      {/* Public record */}
      <Section id="record" tone="surface">
        <Reveal>
          <h2 className={H2}>On stage and in print.</h2>
        </Reveal>
        <ul className="m-0 mt-10 list-none border-b border-hairline p-0">
          {PUBLIC_RECORD.map((r) => (
            <Reveal
              as="li"
              key={r.href}
              className="grid gap-x-10 gap-y-2 border-t border-hairline py-6 md:grid-cols-[120px_minmax(0,1fr)_max-content] md:items-baseline"
            >
              <span className="font-mono text-caption text-ink-soft">
                {r.kind}
              </span>
              <span className="font-display text-h3 text-ink">{r.title}</span>
              <span>
                <Button
                  variant="quiet"
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {r.cta}
                </Button>
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20">
          <p className="text-caption text-ink-soft">
            Companies I&rsquo;ve built for or with
          </p>
          <LogoRow className="mt-8" />
        </Reveal>
      </Section>

      <ContactBand tone="paper" />
    </>
  );
}
