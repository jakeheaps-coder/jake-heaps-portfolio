import { Section } from "../../components/ui/Section";
import { Reveal } from "../../components/ui/Reveal";
import { CONTACT } from "../../data/contact";
import { ContactForm } from "./ContactForm";

/** The closing section on every public page. */
export function ContactBand({ tone = "surface" }: { tone?: "paper" | "surface" }) {
  return (
    <Section id="contact" tone={tone}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <h2 className="font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
            Say hello.
          </h2>
          <p className="measure mt-5 text-lede text-ink-soft">
            I&rsquo;m not taking consulting work right now. I&rsquo;m still glad
            to compare notes with people putting AI to work inside their
            companies, and I say yes to speaking when I can.
          </p>
          <dl className="mt-8 grid gap-4 text-body">
            <div>
              <dt className="eyebrow text-ink-soft">Email</dt>
              <dd className="m-0 mt-1">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-display text-h2 text-cedar underline decoration-cedar/30 underline-offset-4 hover:decoration-cedar"
                >
                  {CONTACT.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-ink-soft">Elsewhere</dt>
              <dd className="m-0 mt-1">
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cedar underline decoration-cedar/30 underline-offset-4 hover:decoration-cedar"
                >
                  LinkedIn
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
