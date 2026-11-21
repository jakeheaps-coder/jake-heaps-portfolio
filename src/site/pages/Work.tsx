import { PageHeader } from "../../components/ui/PageHeader";
import { Section } from "../../components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { MarginGrid, MarginNote } from "../../components/ui/Chapter";
import { LedgerWaterfall } from "../../components/ui/LedgerWaterfall";
import { LedgerTable } from "../../components/ui/LedgerTable";
import { ContactBand } from "../components/ContactBand";
import { LogoRow } from "../components/LogoRow";
import { citations } from "../../data/citations";
import { ledger, classLabels, countingRules } from "../../data/ledger";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

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

/** The four figures, each with the way it was counted. */
const FIGURES = [
  {
    value: "93%",
    what: "Team adoption",
    how: "Share of the marketing team building with AI on their own by the end of the year, from a team survey.",
  },
  {
    value: "26",
    what: "Production systems",
    how: "Systems in daily use by the team. Pilots and demos don't count.",
  },
  {
    value: "1.65x",
    what: "Team productivity",
    how: "Ten roles that opened up weren't backfilled. The same work spread across the remaining team.",
  },
  {
    value: "$2.3M",
    what: "First-year value",
    how: "Itemized below. Software we stopped paying for, tools we built instead of bought, avoided spend, created capacity, and one closed deal.",
  },
];

const SYSTEMS = [
  {
    title: "An in-house asset library",
    body: "Replaced a paid digital asset management platform with one built on Domo, with search, collections, and permissions. More than 35,000 files moved over with zero mismatches.",
    img: { src: "/screenshots/asset-library.png", w: 1280, h: 828, alt: "The asset library in production: a filter rail on the left and a grid of files on the right." },
  },
  {
    title: "Employee recognition and rewards",
    body: "A second replacement, this one for HR. Nominations, approvals, spot bonuses, and 125 live budgets, with a test suite that runs on every release.",
    img: { src: "/screenshots/recognition-feed.png", w: 1186, h: 767, alt: "The recognition app: a thank-you banner, a recognize-someone search, and the recognition feed." },
  },
  {
    title: "Marketing analysis for the CMO",
    body: "Attribution, funnel, and ROI questions that used to wait in an analyst's queue now come back in minutes. Every release has to pass a 110-question test before it ships.",
  },
  {
    title: "A paid search analyst",
    body: "Reads ad performance across six regions, drafts keywords and copy, and runs competitor checks on request. It recommends; a person approves every change.",
  },
  {
    title: "One source of truth for messaging",
    body: "Product messaging and competitive research stored as connected knowledge, served to every agent, and pulled straight into Figma so designers stop paraphrasing.",
  },
];

const PUBLIC_RECORD = [
  {
    kind: "Press",
    title: "TechRepublic on the two-day Bissell build",
    href: citations.techrepublic.href,
    cta: "Read the article",
  },
  {
    kind: "Keynote",
    title: "Google Cloud partner keynote at Domopalooza, showing agent animations I produced",
    href: "https://www.domo.com/domopalooza/resources/partner-keynote-from-jim-fairweather-head-of-ai-gtm-google-cloud",
    cta: "Watch the keynote",
  },
  {
    kind: "Keynote",
    title: "Domo CEO keynote. Every graphic, over 100 slides, came out of a pipeline I built",
    href: "https://youtu.be/7HvOlSnfubQ",
    cta: "Watch on YouTube",
  },
];

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
          Most of this comes from Domo, where I led the AI transformation. The
          rest is client work and a few things that ended up on stage or in the
          press. Wherever there&rsquo;s a number, there&rsquo;s a note on where
          it came from.
        </PageHeader>
      </Section>

      {/* Domo */}
      <Section id="domo" tone="surface">
        <Reveal>
          <p className="font-mono text-caption text-ink-soft">Domo&ensp;·&ensp;2025–2026</p>
          <h2 className="mt-3 max-w-[22ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
            An AI transformation, line by line.
          </h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              I joined Domo&rsquo;s marketing team in June 2025 to make AI part
              of how the team worked. Most people there had tried a chatbot and
              moved on. A year later, 93% of them were building with AI on
              their own, without me in the room.
            </p>
            <p>
              The order mattered. I built a handful of systems for the most
              repetitive work first, then sat with people while they learned to
              build their own. When the systems were running without my daily
              hands, in May 2026, I took the same approach company-wide as
              Manager, Internal AI Projects.
            </p>
          </div>
          <MarginNote label="My role">
            AI Marketing Operations Manager, then Manager, Internal AI Projects.
            I set the strategy, built the systems, ran training for 80+
            people, and advised the CMO.
          </MarginNote>
        </MarginGrid>

        <Reveal className="mt-14">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">The four headline figures and how each was counted</caption>
            <thead>
              <tr className="border-t-2 border-ink">
                <th scope="col" className="eyebrow py-3 pr-6 font-medium text-ink-soft">Figure</th>
                <th scope="col" className="eyebrow py-3 pr-6 font-medium text-ink-soft">Measures</th>
                <th scope="col" className="eyebrow hidden py-3 font-medium text-ink-soft md:table-cell">How it was counted</th>
              </tr>
            </thead>
            <tbody>
              {FIGURES.map((f) => (
                <tr key={f.value} className="border-t border-hairline align-baseline">
                  <td className="numeral py-5 pr-6 text-[2rem] leading-none text-sienna md:text-[2.5rem]">{f.value}</td>
                  <td className="py-5 pr-6">
                    <span className="font-display text-h3 text-ink">{f.what}</span>
                    <span className="mt-1 block text-caption text-ink-soft md:hidden">{f.how}</span>
                  </td>
                  <td className="hidden max-w-[52ch] py-5 text-body text-ink-soft md:table-cell">{f.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      {/* The ledger */}
      <Section id="ledger" tone="paper">
        <Reveal>
          <h2 className="max-w-[22ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
            Where the $2.3M came from.
          </h2>
          <p className="measure mt-5 text-lede text-ink-soft">
            The biggest line is capacity: work the systems absorbed so the team
            didn&rsquo;t have to hire. The rest is harder money, software we
            canceled, tools we built instead of buying, and a closed deal.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <LedgerWaterfall className="mx-auto max-w-[760px]" />
        </Reveal>

        <Reveal className="mt-14">
          <MarginGrid>
            <details className="group">
              <summary className="flex cursor-pointer items-center gap-2 font-mono text-caption text-ink marker:content-none">
                <span aria-hidden className="text-sienna transition-transform group-open:rotate-45">
                  +
                </span>
                The full ledger, line by line
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
              Set the capacity line aside and the rest is $840K in hard
              dollars: canceled invoices, in-house builds, avoided spend, and a
              closed deal.
            </MarginNote>
          </MarginGrid>
        </Reveal>
      </Section>

      {/* Systems */}
      <Section id="systems" tone="surface">
        <Reveal>
          <h2 className="max-w-[22ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
            A few of the 26.
          </h2>
          <p className="measure mt-5 text-lede text-ink-soft">
            Each one has a named owner on the team and runs without me. Some
            screens are blurred where they show internal data.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-x-12">
          {SYSTEMS.filter((s) => s.img).map((s) => (
            <Reveal key={s.title} as="figure" className="m-0">
              <img
                src={s.img!.src}
                alt={s.img!.alt}
                width={s.img!.w}
                height={s.img!.h}
                loading="lazy"
                className="plate w-full bg-paper"
              />
              <figcaption className="mt-5">
                <h3 className="font-display text-h2 text-ink">{s.title}</h3>
                <p className="mt-2 max-w-[52ch] text-body text-ink-soft">{s.body}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <RevealGroup as="ul" className="m-0 mt-16 list-none border-b border-hairline p-0">
          {SYSTEMS.filter((s) => !s.img).map((s) => (
            <RevealItem
              as="li"
              key={s.title}
              className="grid gap-x-10 gap-y-2 border-t border-hairline py-6 md:grid-cols-[260px_minmax(0,1fr)] md:items-baseline"
            >
              <h3 className="font-display text-h3 text-ink">{s.title}</h3>
              <p className="max-w-[60ch] text-body text-ink-soft">{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Bissell */}
      <Section id="bissell" tone="paper">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <Reveal>
            <p className="font-mono text-caption text-ink-soft">Bissell&ensp;·&ensp;with Domo</p>
            <h2 className="mt-3 max-w-[20ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
              Working AI workflows in two days.
            </h2>
            <p className="measure mt-5 text-lede text-ink-soft">
              Bissell wanted AI in their team&rsquo;s hands quickly. We went from
              the first conversation to workflows their people were using in
              two days, built next to them rather than handed over. TechRepublic
              wrote it up.
            </p>
            <div className="mt-6">
              <Button variant="quiet" href={citations.techrepublic.href} target="_blank" rel="noopener noreferrer">
                Read the write-up
              </Button>
            </div>
          </Reveal>
          <Reveal className="md:text-right">
            <span className="numeral block text-[4.5rem] leading-none text-sienna md:text-[6rem]">2</span>
            <span className="eyebrow mt-2 block text-ink-soft">Days, start to in use</span>
          </Reveal>
        </div>
      </Section>

      {/* Outbound */}
      <Section id="outbound" tone="surface">
        <Reveal>
          <p className="font-mono text-caption text-ink-soft">Naitive&ensp;·&ensp;a client</p>
          <h2 className="mt-3 max-w-[22ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
            An outbound system that runs itself.
          </h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              Through Naitive, the consulting practice I started in 2026, I
              built a complete cold-outbound system for a client. It finds the
              right accounts, warms them up, and waits for a sign that someone
              is paying attention.
            </p>
            <p>
              When a contact engages, the system moves them into a sales
              sequence, and a research agent writes a hosted account plan for
              them. They can start a trial on their own, and the system books
              the follow-up meeting. It runs inside the tools the client
              already paid for, and it needs a person a few times a month.
            </p>
          </div>
          <MarginNote label="The pipeline">
            Prospecting, warm-up, an engagement trigger, a sales sequence, a
            research agent, a hosted plan, a self-serve trial, and a booked
            meeting.
          </MarginNote>
        </MarginGrid>
      </Section>

      {/* Public record */}
      <Section id="record" tone="paper">
        <Reveal>
          <h2 className="max-w-[22ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
            On stage and in print.
          </h2>
        </Reveal>
        <RevealGroup as="ul" className="m-0 mt-10 list-none border-b border-hairline p-0">
          {PUBLIC_RECORD.map((r) => (
            <RevealItem
              as="li"
              key={r.href}
              className="grid gap-x-10 gap-y-3 border-t border-hairline py-6 md:grid-cols-[120px_minmax(0,1fr)_max-content] md:items-baseline"
            >
              <span className="font-mono text-caption text-ink-soft">{r.kind}</span>
              <span className="font-display text-h3 text-ink">{r.title}</span>
              <Button variant="quiet" href={r.href} target="_blank" rel="noopener noreferrer">
                {r.cta}
              </Button>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-20">
          <p className="text-caption text-ink-soft">Companies I&rsquo;ve built for or alongside</p>
          <LogoRow className="mt-8" />
        </Reveal>
      </Section>

      <ContactBand />
    </>
  );
}
