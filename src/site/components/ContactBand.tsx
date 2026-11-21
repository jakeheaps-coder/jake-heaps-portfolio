import { Section } from "../../components/ui/Section";
import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { CONTACT } from "../../data/contact";

/** The closing section on every public page. LinkedIn is the only contact route. */
export function ContactBand({ tone = "surface" }: { tone?: "paper" | "surface" }) {
  return (
    <Section id="contact" tone={tone}>
      <Reveal>
        <div className="grid gap-8 border-t-2 border-ink pt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-16">
          <div>
            <h2 className="font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
              Say hello.
            </h2>
            <p className="measure mt-5 text-lede text-ink-soft">
              LinkedIn is the best place to reach me. Send a message and tell
              me what you&rsquo;re working on.
            </p>
          </div>
          <div className="md:pb-1">
            <Button
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 w-full sm:w-auto"
            >
              Message me on LinkedIn
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
