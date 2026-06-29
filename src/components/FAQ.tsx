import { faq } from "../data/faq";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

/**
 * Leading questions, answered. Native <details>/<summary> so it's keyboard +
 * screen-reader operable for free and works without JS. Manuscript styling:
 * hairline rows, a mono +/− marker that rotates on open. No height animation,
 * so it's reduced-motion-safe by default.
 */
export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-20 md:py-28">
        <Reveal>
          <Eyebrow as="h2">Questions</Eyebrow>
          <h3 className="mt-4 font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
            What people ask first.
          </h3>
        </Reveal>

        <Reveal className="mt-10 border-t border-hairline">
          {faq.map((item) => (
            <details key={item.q} className="group border-b border-hairline">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-h3 text-ink">{item.q}</span>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 font-mono text-h3 leading-none text-sienna transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="measure space-y-4 pb-7 text-body text-ink-soft">
                {(Array.isArray(item.a) ? item.a : [item.a]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
