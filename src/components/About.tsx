import signature from "../assets/signature.svg";
import headshot from "../assets/jake-headshot.jpeg";
import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

/** The closing letter — signed, first person, one personal paragraph. */
export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-24 md:py-32">
        <Reveal>
          <hr className="m-0 border-0 border-t-2 border-ink" />
          <div className="grid gap-12 pt-8 lg:grid-cols-[minmax(0,58ch)_minmax(180px,220px)] lg:gap-x-16">
            <div>
              <Eyebrow n="05">A letter</Eyebrow>
              <h2 className="mt-4 font-display text-h1 md:text-[3.25rem] md:leading-[1.05]">
                The proof of concept is complete.
              </h2>

              <div className="mt-10 space-y-6 text-body text-ink">
                <p>
                  I started in growth marketing, running campaigns, then teams.
                  The longer I ran them, the more I was pulled toward the
                  systems underneath: why work flowed the way it did, and what
                  would happen if the repetitive ninety percent of it simply
                  went away. That question became my career. Today I design AI
                  operating systems for enterprises: the strategy, the
                  production systems, and the part almost everyone skips, the
                  adoption.
                </p>
                <p>
                  I lead AI implementation at Domo today, full-time, in the
                  operating seat. This brief is that seat&rsquo;s output: 26
                  production systems, a first-year value ledger that closed at
                  $2.3M, and a ~30-person marketing organization where 93% of
                  the team now builds with AI independently. The transfer
                  completed in May 2026, and the systems have run without my
                  daily hands since, by design. Enablement, not dependency, is
                  the product.
                </p>
                <p>
                  I&rsquo;ll name the question this document raises rather than
                  leave it to your diligence: the job I&rsquo;m describing
                  barely existed three years ago. Nobody has twenty years of it.
                  The only credential anyone in this discipline can offer is an
                  operating record: measured, itemized, attested. And that is
                  what you&rsquo;re holding.
                </p>
                <p>
                  How I work comes from how I grew up. I&rsquo;m the youngest of
                  three brothers, which means I have never once been allowed to
                  win anything easily. I played everything: baseball,
                  basketball, soccer, and football through high school, where a
                  phrase got into my bones and never left: love the challenge,
                  love your teammates, love the process. I spent two years of
                  service in San Bernardino, California, where I learned Spanish
                  and learned that you change what people do by sitting next to
                  them, not by sending them a document. That, it turns out, is
                  also the entire secret of enterprise AI adoption.
                </p>
                <p>
                  Outside of work: family first. This August I&rsquo;m marrying
                  Ella. We met through my mom, who she works with. The rest of
                  my time goes to sports, the gym, and building things on nights
                  and weekends because I genuinely cannot help it.
                </p>
                <p>
                  The proof of concept is complete. If you&rsquo;re building
                  toward the seat this record describes, where AI becomes how
                  the company operates, not a pilot program on its edge,
                  I&rsquo;d like to talk.
                </p>
              </div>

              <img
                src={signature}
                alt="Jake Heaps signature"
                className="mt-12 h-16 w-auto md:h-20"
              />
              <p className="eyebrow mt-2 text-ink-soft">
                Jake Heaps · Lehi, Utah
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
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
                <Button
                  variant="quiet"
                  href="/jake-heaps-portfolio/jake-heaps-portfolio.pdf"
                  download
                >
                  Download the brief
                </Button>
              </div>
            </div>

            <figure className="order-first m-0 lg:order-none lg:pt-14">
              <img
                src={headshot}
                alt="Jake Heaps"
                width={800}
                height={800}
                loading="lazy"
                className="plate aspect-square w-44 object-cover lg:w-full"
              />
              <figcaption className="eyebrow mt-3 text-ink-soft">
                Fig. 05 · The author
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
