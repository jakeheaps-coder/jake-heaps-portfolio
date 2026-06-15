import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";

/**
 * The single Nightfall moment on the site — the act break between the story
 * and the catalog. It advances the argument: adoption was the metric;
 * independence was the goal. Dark appears nowhere else.
 */
export default function Interlude() {
  return (
    <section className="bg-night px-6" aria-label="The outcome">
      <div className="mx-auto max-w-[1100px] py-28 md:py-36">
        <Reveal>
          <Eyebrow className="text-night-soft!">The outcome</Eyebrow>
          <p className="mt-10 max-w-[20ch] font-display text-[2.5rem] leading-[1.15] text-night-ink md:text-[3.5rem]">
            Twelve months in, the team operates{" "}
            <em className="text-amber">without me.</em>
          </p>
          <p className="mt-8 max-w-[52ch] text-body text-night-soft">
            Transfer completed May 2026. That was the design. Enablement, not
            dependency: a marketing organization that builds its own AI systems,
            and a playbook ready for the next one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
