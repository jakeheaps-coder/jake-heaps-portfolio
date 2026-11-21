import { Link } from "react-router";
import { PageHeader } from "../../components/ui/PageHeader";
import { Section } from "../../components/ui/Section";
import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { MarginGrid, MarginNote } from "../../components/ui/Chapter";
import { CareerLedger } from "../components/CareerLedger";
import { ContactBand } from "../components/ContactBand";
import { CONTACT, NOW } from "../../data/contact";
import headshot from "../../assets/jake-headshot.jpeg";
import signature from "../../assets/signature.svg";

const H2 = "max-w-[22ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]";

export default function About() {
  return (
    <>
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] lg:items-end lg:gap-16">
          <PageHeader kicker="About" title="I’m Jake. Here’s the longer version.">
            I grew up the youngest of three brothers in Utah, studied
            marketing, and got into AI by trying to make marketing teams
            faster. Now I build AI systems for a living.
          </PageHeader>
          <Reveal as="figure" className="m-0 hidden lg:block">
            <img
              src={headshot}
              alt="Jake Heaps"
              width={800}
              height={800}
              className="plate aspect-[4/5] w-full object-cover object-[50%_20%]"
            />
            <figcaption className="mt-3 font-mono text-eyebrow text-ink-soft">
              {CONTACT.location}
            </figcaption>
          </Reveal>
        </div>
      </Section>

      {/* Growing up */}
      <Section id="growing-up" tone="surface">
        <Reveal>
          <h2 className={H2}>Never allowed to win anything easily.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              Being the youngest of three brothers meant every game in the
              driveway was a fight I was supposed to lose. I played everything
              I could: baseball, basketball, soccer, and football through high
              school. Football is where a phrase got stuck in my head and never
              left: love the challenge, love your teammates, love the process.
            </p>
            <p>
              I&rsquo;m also an Eagle Scout. Between scouting and sports I spent
              most of my childhood on teams, and I still like work better when
              it&rsquo;s done with other people.
            </p>
          </div>
          <MarginNote label="The phrase">
            Love the challenge, love your teammates, love the process. Still the
            best job description I&rsquo;ve found.
          </MarginNote>
        </MarginGrid>
      </Section>

      {/* Service */}
      <Section id="service" tone="paper">
        <Reveal>
          <p className="font-mono text-caption text-ink-soft">San Bernardino, California&ensp;·&ensp;2020–2022</p>
          <h2 className={`mt-3 ${H2}`}>Two years that explain how I work.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              After high school I spent two years in full-time volunteer service
              in San Bernardino, and learned Spanish along the way.
            </p>
            <p>
              I also learned the thing I&rsquo;ve leaned on in every job since.
              You don&rsquo;t change what people do by sending them a document.
              You change it by sitting down next to them and doing it together
              until it&rsquo;s theirs. Years later that turned out to be most of
              what it takes to get a company to use AI.
            </p>
          </div>
          <MarginNote label="Languages">English and Spanish, fluent.</MarginNote>
        </MarginGrid>
      </Section>

      {/* Career */}
      <Section id="career" tone="surface">
        <Reveal>
          <h2 className={H2}>From funnels to AI systems.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              My first real marketing job was at Bucked Up, the supplement
              brand, as a marketing funnel manager. I built more than thirty
              funnels, worked with influencers, and helped produce national TV
              commercials. I also wrote down how we did it, so the program kept
              running after each launch.
            </p>
            <p>
              At Adminify AI I was the only marketer. I led a full rebrand,
              from the logo and type to the positioning, and set up the process
              that took someone from lead to long-term customer. The longer I did
              marketing, the more I cared about the systems underneath it: why
              the work flowed the way it did, and what would happen if the
              repetitive part of it went away.
            </p>
            <p>
              Domo let me answer that at scale. I joined in June 2025 as AI
              Marketing Operations Manager, built 26 production systems, and
              spent most of the year teaching people to build their own. By May
              2026 I was Manager, Internal AI Projects, taking the same approach
              across the company. That year is most of what&rsquo;s on the{" "}
              <Link to="/work" className="text-cedar underline decoration-cedar/30 underline-offset-4 hover:decoration-cedar">
                work page
              </Link>
              .
            </p>
            <p>
              In 2026 I also started Naitive, a small consulting practice, to
              take the same approach to other companies. The biggest project
              was an outbound system for a client that runs on its own.
            </p>
            <p>
              Now I&rsquo;m {NOW.title} at {NOW.company}. It&rsquo;s the same job
              at an earlier stage: find the work that eats people&rsquo;s weeks,
              build the systems that take it over, and stay with the team until
              using them is a habit. Huckleberry hasn&rsquo;t launched publicly
              yet, so I&rsquo;ll keep the details short for now.
            </p>
          </div>
          <MarginNote label="School">
            B.S. in Marketing at Utah Valley University, in progress.
          </MarginNote>
        </MarginGrid>

        <Reveal className="mt-14">
          <CareerLedger detail />
        </Reveal>
      </Section>

      {/* Outside work */}
      <Section id="outside" tone="paper">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,58ch)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <h2 className={H2}>Outside of work.</h2>
            <div className="mt-8 space-y-5 text-body text-ink">
              <p>
                Family comes first. Ella and I got married in August 2026. We
                met through my mom, who she works with.
              </p>
              <p>
                The rest of my time goes to sports, the gym, and building things
                on nights and weekends, mostly because I can&rsquo;t help it. If
                you want to talk shop, about AI or baseball, I&rsquo;m easy to
                find.
              </p>
            </div>
            <img src={signature} alt="Jake Heaps signature" className="mt-10 h-16 w-auto md:h-20" />
          </Reveal>
          <Reveal className="lg:pt-24">
            <dl className="m-0 border-t-2 border-ink">
              {[
                ["Lives in", CONTACT.location],
                ["Works at", `${NOW.company}, ${NOW.title}`],
                ["Studying", "B.S. Marketing, Utah Valley University"],
                ["Speaks", "English, Spanish"],
                ["Builds with", "Claude, Gemini, Python, TypeScript, SQL"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[110px_minmax(0,1fr)] gap-4 border-b border-hairline py-4">
                  <dt className="font-mono text-caption text-ink-soft">{k}</dt>
                  <dd className="m-0 text-body text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <Button variant="quiet" to="/approach">
                How I approach the work
              </Button>
              <Button variant="quiet" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <ContactBand />
    </>
  );
}
