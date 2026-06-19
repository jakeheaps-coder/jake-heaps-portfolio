import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

const BASE = `${import.meta.env.BASE_URL}logos`;

/* Heights tuned per logo for equal optical weight, not equal box size. */
const clients = [
  { name: "Domo", logo: `${BASE}/domo.svg`, h: "h-6" },
  { name: "Bissell", logo: `${BASE}/bissell.svg`, h: "h-9" },
  { name: "Manscaped", logo: `${BASE}/manscaped.svg`, h: "h-5" },
  { name: "Cox Automotive", logo: `${BASE}/cox-automotive.webp`, h: "h-8" },
  { name: "Thryv", logo: `${BASE}/thryv.png`, h: "h-6" },
  { name: "Carvana", logo: `${BASE}/carvana.png`, h: "h-9" },
  {
    name: "One Health Solutions",
    logo: `${BASE}/one-health-solutions.png`,
    h: "h-7",
  },
];

/**
 * Select engagements — a quiet grayscale logo strip with an honest context
 * line, then one pull quote set as editorial typography.
 */
export default function ClientLogos() {
  return (
    <section id="engagements" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-24 md:py-32">
        <Reveal>
          <Eyebrow as="h2">Select engagements</Eyebrow>
          <ul className="mt-12 flex list-none flex-wrap items-center justify-center gap-x-12 gap-y-10 p-0 md:justify-between md:gap-x-8">
            {clients.map((client) => (
              <li key={client.name} className="flex items-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className={`${client.h} w-auto max-w-[150px] object-contain opacity-65 mix-blend-multiply grayscale transition-opacity duration-200 hover:opacity-100`}
                />
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-[60ch] font-mono text-caption text-ink-soft">
            Direct client engagements and partner-guided engagements.
          </p>
        </Reveal>

        <Reveal className="mt-24 md:mt-32">
          <figure className="m-0">
            <blockquote className="m-0">
              <p className="max-w-[26ch] font-display text-h2 italic leading-[1.3] text-ink [hanging-punctuation:none] [text-indent:-0.45em] md:text-[2.125rem]">
                &ldquo;One of the best hires I&rsquo;ve made in my entire
                career.&rdquo;
              </p>
            </blockquote>
            <figcaption className="eyebrow mt-8 text-ink-soft">
              Mark Boothe&ensp;&middot;&ensp;Chief Marketing Officer, Domo
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
