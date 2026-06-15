import { Button } from "./ui/Button";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";

/**
 * On the record — three public reference artifacts set as a citation list,
 * plus the one embedded plate: the AI-produced tutorial video.
 */
const references = [
  {
    n: "Ref 01",
    kind: "Press",
    title: "Bissell’s AI workflows, built in two days",
    context:
      "TechRepublic’s national coverage of the two-day Bissell build. This is the engagement I delivered. Attribution available on a reference call.",
    href: "https://www.techrepublic.com/article/news-bissell-ai-workflows-two-day-build-domo/",
    cta: "Read the article",
  },
  {
    n: "Ref 02",
    kind: "Keynote",
    title: "Google Cloud partner keynote, Domopalooza",
    context:
      "Jim Fairweather, Head of AI GTM at Google Cloud, presented the agent animations I produced. The keynote is public; my authorship is attested on request.",
    href: "https://www.domo.com/domopalooza/resources/partner-keynote-from-jim-fairweather-head-of-ai-gtm-google-cloud",
    cta: "Watch the keynote",
  },
  {
    n: "Ref 03",
    kind: "Keynote",
    title: "CEO keynote · AI transformation showcase",
    context:
      "Every graphic in the keynote was AI-generated. Produced by my pipeline; 100+ slides, no design agency.",
    href: "https://youtu.be/7HvOlSnfubQ",
    cta: "Watch on YouTube",
  },
];

export default function ExternalValidation() {
  return (
    <section id="recognition" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-24 md:py-32">
        <Reveal>
          <Eyebrow as="h2">On the record</Eyebrow>
          <p className="measure mt-5 font-display text-lede text-ink">
            The work described in this brief is on the public record: in
            national press, in a Google Cloud partner keynote, and on the
            CEO&rsquo;s main stage.
          </p>
        </Reveal>

        <RevealGroup className="mt-12">
          {references.map((r) => (
            <RevealItem
              key={r.n}
              className="grid gap-3 border-t border-hairline py-7 md:grid-cols-[140px_1fr] md:gap-10"
            >
              <p className="eyebrow">
                <span className="text-sienna">{r.n}</span>
                <span className="text-ink-soft">&ensp;·&ensp;{r.kind}</span>
              </p>
              <div>
                <h3 className="font-display text-h3 text-ink">{r.title}</h3>
                <p className="measure mt-2 text-body text-ink-soft">
                  {r.context}
                </p>
                <Button
                  variant="quiet"
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-caption"
                >
                  {r.cta}
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal as="figure" className="m-0 mt-16 md:mt-20">
          <video
            controls
            preload="metadata"
            aria-label="Tutorial video: build your first AI agent"
            className="plate block w-full"
          >
            <source
              src="/jake-heaps-portfolio/video/build-first-agent-v14.mp4"
              type="video/mp4"
            />
          </video>
          <figcaption className="mt-3 max-w-[72ch] font-mono text-eyebrow text-ink-soft">
            Fig. 04 · &ldquo;Build your first AI agent&rdquo; tutorial · script,
            visuals, and voiceover produced entirely with AI · 15+ iterations to
            the final cut
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
