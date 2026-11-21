import { Link } from "react-router";
import { PageHeader } from "../../components/ui/PageHeader";
import { Section } from "../../components/ui/Section";
import { MarginGrid, MarginNote } from "../../components/ui/Chapter";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/Reveal";
import { ContactBand } from "../components/ContactBand";
import { citations } from "../../data/citations";
import { NOW } from "../../data/contact";

const H2 = "max-w-[22ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]";
const CITE =
  "underline decoration-ink/30 underline-offset-2 transition-colors hover:decoration-ink";

/** The one real sequence on the site, so it's the one place with numbers. */
const STEPS = [
  {
    n: "1",
    title: "Find where it pays.",
    body: "I start by watching how the week goes. In most teams a big share of the time goes to the same few tasks, run over and over. That's where the first system goes, and it's tied to a number someone already cares about.",
  },
  {
    n: "2",
    title: "Build it next to the people who'll use it.",
    body: "Whoever does the work today helps build the thing that does it tomorrow. They learn how it works, they trust it sooner, and they're the ones who keep it running.",
  },
  {
    n: "3",
    title: "Count what changed.",
    body: "Every system gets measured on real work. If it doesn't move the number, it gets turned off. The ones that stay go in a ledger, so anyone can see what they're worth.",
  },
];

const RULES = [
  ["Every system has an owner.", "A named person on the team, not me."],
  ["Cost first, revenue second.", "Software you stop paying for and hires you don't need show up fastest and are the easiest to verify."],
  ["People approve, agents draft.", "Anything that spends money or reaches a customer goes past a person first."],
  ["Test before it ships.", "Each release runs against a set of real questions with known answers. If it gets worse, it doesn't go out."],
  ["Write it down.", "If it only works while I'm around, it isn't done."],
];

const FAQ = [
  {
    q: `What do you do at ${NOW.company}?`,
    a: "I build the internal AI systems the company runs on and help the team adopt them. It's the same job I did at Domo, at an earlier stage.",
  },
  {
    q: "Are you taking consulting work?",
    a: "Not right now. I'm full-time at Huckleberry. I'm still happy to trade notes if you're working on something similar, so feel free to email.",
  },
  {
    q: "What do you build with?",
    a: "Mostly Claude and Claude Code, Gemini on Google Cloud, and OpenAI models where they fit, with Python, TypeScript, and SQL around them. I'd rather use the tools and data a company already pays for than add new ones.",
  },
  {
    q: "How do you get people to actually use it?",
    a: "Sit with them. Training sessions help, but what changes habits is building alongside someone on their own work until they don't need you. That's how adoption at Domo got to 93%.",
  },
  {
    q: "Where does AI pay off first?",
    a: "On the cost side. Software you can cancel, work that no longer needs another hire, and hours handed back to the team. Revenue comes too, but later and with more noise in the numbers.",
  },
  {
    q: "Will you speak to my team or at my event?",
    a: "Sometimes, when the timing works. Send me a note with the audience and the date.",
  },
];

export default function Approach() {
  return (
    <>
      <Section tone="paper">
        <PageHeader kicker="Approach" title="How I think about AI at work.">
          Most of what I&rsquo;ve learned comes down to a few habits. Start with
          the work that eats people&rsquo;s weeks. Build with the people who
          will use it. Count what changed, honestly.
        </PageHeader>
      </Section>

      {/* The problem */}
      <Section id="problem" tone="surface">
        <Reveal>
          <h2 className={H2}>Lots of companies have AI. Few can show what it did.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              Most companies I talk to have bought AI tools, and a few people
              use them when they remember to.{" "}
              <a href={citations.mckinsey.href} target="_blank" rel="noopener noreferrer" className={CITE}>
                Fewer than four in ten
              </a>{" "}
              can point to an effect on the bottom line.
            </p>
            <p>
              The ones that can usually changed how the work gets done, and
              that change is mostly about people. The model is the easy part.
              Getting a team to hand over a task they&rsquo;ve done the same way
              for years is the hard part.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <MarginNote label="Stanford">
              Teams that redesign the work are{" "}
              <a href={citations.stanford.href} target="_blank" rel="noopener noreferrer" className={CITE}>
                three times more likely
              </a>{" "}
              to capture AI&rsquo;s value.
            </MarginNote>
            <MarginNote label="Fortune · Microsoft">
              <a href={citations.fortune.href} target="_blank" rel="noopener noreferrer" className={CITE}>
                Two-thirds of AI&rsquo;s impact
              </a>{" "}
              is organizational, not technical.
            </MarginNote>
          </div>
        </MarginGrid>
      </Section>

      {/* What I build */}
      <Section id="what-it-is" tone="paper">
        <Reveal>
          <h2 className={H2}>What I mean by an AI operating system.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              It&rsquo;s a fancy name for a simple idea. Instead of AI sitting
              off to the side as a chatbot, it becomes part of how the work gets
              done every day, connected to the company&rsquo;s real data and the
              tools people already use.
            </p>
            <p>
              In practice that&rsquo;s a set of small systems, each one taking
              over a repetitive chunk of somebody&rsquo;s job, sharing the same
              knowledge underneath. No one has to change where they work. The
              work just gets lighter.
            </p>
          </div>
          <MarginNote label="At Domo">
            26 systems in production by the end of the first year.{" "}
            <Link to="/work#systems" className={CITE}>
              A few of them
            </Link>
            .
          </MarginNote>
        </MarginGrid>
      </Section>

      {/* Steps */}
      <Section id="steps" tone="surface">
        <Reveal>
          <h2 className={H2}>The order I do it in.</h2>
        </Reveal>
        <RevealGroup as="ol" className="m-0 mt-12 list-none border-b border-hairline p-0">
          {STEPS.map((s) => (
            <RevealItem
              as="li"
              key={s.n}
              className="grid gap-x-10 gap-y-3 border-t border-hairline py-8 md:grid-cols-[64px_minmax(0,300px)_minmax(0,1fr)] md:items-baseline"
            >
              <span className="numeral text-[2.5rem] leading-none text-sienna">{s.n}</span>
              <h3 className="font-display text-h2 text-ink">{s.title}</h3>
              <p className="max-w-[54ch] text-body text-ink-soft">{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Rules */}
      <Section id="rules" tone="paper">
        <Reveal>
          <h2 className={H2}>A few rules I keep.</h2>
        </Reveal>
        <Reveal className="mt-10">
          <dl className="m-0 border-t-2 border-ink">
            {RULES.map(([k, v]) => (
              <div key={k} className="grid gap-x-10 gap-y-1 border-b border-hairline py-5 md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:items-baseline">
                <dt className="font-display text-h3 text-ink">{k}</dt>
                <dd className="m-0 max-w-[60ch] text-body text-ink-soft">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section id="questions" tone="surface">
        <Reveal>
          <h2 className={H2}>Questions I get.</h2>
        </Reveal>
        <div className="mt-10 border-t border-hairline">
          {FAQ.map((item) => (
            <details key={item.q} className="group border-b border-hairline py-5">
              <summary className="flex cursor-pointer items-baseline justify-between gap-4 font-display text-h3 text-ink marker:content-none">
                {item.q}
                <span aria-hidden className="font-mono text-body text-sienna transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[66ch] text-body text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <ContactBand tone="paper" />
    </>
  );
}
