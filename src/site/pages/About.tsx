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

const H2 = "max-w-[22ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]";

export default function About() {
  return (
    <>
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)] lg:items-end lg:gap-16">
          <PageHeader kicker="About" title="Hi, I’m Jake.">
            I grew up playing every sport I could and got into AI through
            marketing. Now building with it is my job. Here&rsquo;s the longer
            version.
          </PageHeader>
          <Reveal as="figure" className="m-0 w-full max-w-[200px] lg:max-w-none">
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
          <h2 className={H2}>I never got to win anything easily.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              I&rsquo;m the youngest of three brothers. Every game in the
              driveway was one I was supposed to lose, so I got a lot of
              practice at losing and trying again.
            </p>
            <p>
              I played every sport I could growing up. In high school it was
              football, and that&rsquo;s where a phrase got stuck in my head
              that never left: love the challenge, love your teammates, love
              the process.
            </p>
            <p>
              I&rsquo;m also an Eagle Scout. Between scouting and sports I spent most of my childhood on
              teams, and I still do my best work with other people around me.
            </p>
          </div>
          <MarginNote label="The phrase">
            Love the challenge, love your teammates, love the process. I still
            use it at work.
          </MarginNote>
        </MarginGrid>
      </Section>

      {/* Service */}
      <Section id="service" tone="paper">
        <Reveal>
          <h2 className={H2}>Two years in San Bernardino.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              After high school I served a two-year mission for The Church of
              Jesus Christ of Latter-day Saints in San Bernardino, California,
              from 2020 to 2022. I learned Spanish there.
            </p>
            <p>
              I also learned how people change what they do. Handing someone a
              document almost never works. What works is sitting down next to
              them and doing the thing together until they can do it without
              you.
            </p>
            <p>
              I didn&rsquo;t know it at the time, but that&rsquo;s most of what
              it takes to get a team to use AI.
            </p>
          </div>
          <MarginNote label="Languages">English and Spanish.</MarginNote>
        </MarginGrid>
      </Section>

      {/* Career */}
      <Section id="career" tone="surface">
        <Reveal>
          <h2 className={H2}>How marketing turned into AI.</h2>
        </Reveal>
        <MarginGrid className="mt-8">
          <div className="space-y-5 text-body text-ink">
            <p>
              My first real marketing job was at Bucked Up, the supplement
              brand. I was the marketing funnel manager and built more than 30
              funnels. I worked with influencers and helped produce national TV
              commercials too.
            </p>
            <p>
              I wrote down how we ran each launch, so the next one didn&rsquo;t
              start from zero. That habit stuck.
            </p>
            <p>
              At Adminify AI I was the only marketer. I led a full rebrand, from
              the logo and type to the positioning, and set up the process that
              took someone from lead to long-term customer.
            </p>
            <p>
              The longer I did marketing, the more curious I got about the
              repetitive part of it. What would happen if most of that just went
              away?
            </p>
            <p>
              Domo is where I got to find out. I joined in June 2025 as AI
              Marketing Operations Manager. Over the next year we put 26 systems
              into production, and I spent most of my time teaching people on
              the team to build their own. In May 2026 I became Manager, Internal
              AI Projects, the same title I have now at Huckleberry, and started
              doing the same thing across the company.
              Most of the{" "}
              <Link to="/work" className="text-cedar underline decoration-cedar/30 underline-offset-4 hover:decoration-cedar">
                work page
              </Link>{" "}
              comes from that year.
            </p>
            <p>
              Now I&rsquo;m {NOW.title} at{" "}
              <a href={NOW.href} target="_blank" rel="noopener noreferrer" className="text-cedar underline decoration-cedar/30 underline-offset-4 hover:decoration-cedar">
                {NOW.company}
              </a>
              .
            </p>
          </div>
          <MarginNote label="School">
            B.S. in Marketing at Utah Valley University, still in progress.
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
                met through my mom, who works with her.
              </p>
              <p>
                I follow college football and the NFL. The rest of my free time
                goes to the gym and to building things late at night, because I
                can&rsquo;t leave an idea alone.
              </p>
              <p>
                If you want to talk about AI or football, find me on LinkedIn.
              </p>
            </div>
          </Reveal>
          <Reveal className="lg:pt-24">
            <dl className="m-0 border-t-2 border-ink">
              {[
                ["Lives in", CONTACT.location],
                ["Works at", `${NOW.title} at ${NOW.company}`],
                ["Studying", "B.S. Marketing, Utah Valley University"],
                ["Speaks", "English, Spanish"],
                ["Also", "Eagle Scout"],
                ["Builds with", "Claude, Gemini, Python, TypeScript, SQL"],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[96px_minmax(0,1fr)] gap-4 border-b border-hairline py-4 sm:grid-cols-[110px_minmax(0,1fr)]">
                  <dt className="font-mono text-caption text-ink-soft">{k}</dt>
                  <dd className="m-0 text-body text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <Button variant="quiet" to="/approach">
                How I work
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
