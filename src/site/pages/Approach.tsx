import { Link } from "react-router";
import { PageHeader } from "../../components/ui/PageHeader";
import { Section } from "../../components/ui/Section";
import { MarginGrid, MarginNote } from "../../components/ui/Chapter";
import { Reveal, RevealGroup, RevealItem } from "../../components/ui/Reveal";
import { ContactBand } from "../components/ContactBand";
import { citations } from "../../data/citations";

const H2 = "max-w-[22ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]";
const CITE =
  "underline decoration-ink/30 underline-offset-2 transition-colors hover:decoration-ink";

/** The one real sequence on the site, so it's the one place with numbers. */
const STEPS = [
  {
    n: "1",
    title: "Find the work that eats the week.",
    body: "I start by watching how a team's week actually goes. A big chunk of it is usually the same few tasks, done over and over. The first system goes there, and I tie it to a number someone already tracks.",
  },
  {
    n: "2",
    title: "Build it with the people who'll use it.",
    body: "Whoever does the task today helps build the thing that does it next. They see how it works, so they trust it sooner. They're also the ones who keep it running once I've moved on.",
  },
  {
    n: "3",
    title: "Count what changed.",
    body: "I measure each system on real work. If it doesn't move the number, I turn it off. The ones that stay go in a ledger anyone can read.",
  },
];

const RULES = [
  ["Every system has an owner.", "Someone on the team, by name. It shouldn't be me."],
  ["Cost first, revenue second.", "Canceled software and hires you didn't have to make show up fastest, and they're easy to check."],
  ["People approve, agents draft.", "If it spends money or reaches a customer, a person looks at it first."],
  ["Test before it ships.", "Every release runs against a set of real questions with known answers. If the answers get worse, it doesn't ship."],
  ["Write it down.", "If it only works when I'm in the room, it isn't finished."],
];

const FAQ = [
  {
    q: "What do you build with?",
    a: "Mostly Claude and Claude Code. I use Gemini on Google Cloud and OpenAI models when they fit better, with Python, TypeScript, and SQL around all of it. I'd rather use what a company already pays for than add another tool.",
  },
  {
    q: "How do you get people to actually use it?",
    a: "I sit with them. I trained more than 80 people at Domo, and the sessions helped, but habits changed when I built something with a person on their own work until they didn't need me. That's how adoption got to 93%.",
  },
  {
    q: "Where does AI pay off first?",
    a: "Usually on the cost side. Software you can cancel and hours the team gets back show up first, and they're easy to check. Revenue comes later and the numbers are messier.",
  },
  {
    q: "Will you speak to my team or at my event?",
    a: "Sometimes, if the timing works. Message me on LinkedIn with who the audience is and the date.",
  },
];

export default function Approach() {
  return (
    <>
      <Section tone="paper">
        <PageHeader kicker="Approach" title="How I go about it.">
          I look for the work that eats up people&rsquo;s weeks and build
          something with the people who do it. Then I check whether it helped.
          That&rsquo;s most of it.
        </PageHeader>
      </Section>

      {/* The problem */}
      <Section id="problem" tone="surface">
        <Reveal>
          <h2 className={H2}>Most companies can&rsquo;t tell you what their AI did.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              The companies I talk to have usually bought AI tools. A handful of
              people use them, usually when they remember to.{" "}
              <a href={citations.mckinsey.href} target="_blank" rel="noopener noreferrer" className={CITE}>
                Fewer than four in ten
              </a>{" "}
              can point to any effect on the bottom line.
            </p>
            <p>
              The ones that can usually changed how the work itself gets done.
              In my experience the hard part there is people. It takes a while
              for a team to hand over a task they&rsquo;ve done the same way for
              years.
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
              comes from organizational change.
            </MarginNote>
          </div>
        </MarginGrid>
      </Section>

      {/* What I build */}
      <Section id="what-it-is" tone="paper">
        <Reveal>
          <h2 className={H2}>What I actually build.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              Small systems, mostly. Each one takes a repetitive piece of
              somebody&rsquo;s job off their plate. At Domo one of them scanned
              17 news feeds every day for media relations. Another took a video
              from 8 to 16 hours of work down to an hour and fifteen minutes.
            </p>
            <p>
              They hook into the company&rsquo;s own data and the tools people
              already use, so nobody has to learn a new app or change where they
              work. They just spend less time on busywork.
            </p>
          </div>
          <MarginNote label="At Domo">
            26 systems in production by the end of the first year. A few are
            on the{" "}
            <Link to="/work#systems" className={CITE}>
              work page
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
