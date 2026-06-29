import { tiers } from "../../data/tiers";
import { Button } from "../ui/Button";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

/** Preselect a tier in the lead form and let the #contact anchor scroll there. */
function selectTier(key: string) {
  window.dispatchEvent(new CustomEvent("jh:select-tier", { detail: key }));
}

/**
 * "How to work together" — the three shapes an engagement takes, as ledger
 * rows (not cards). Each row's CTA preselects the tier and scrolls to the form.
 */
export function HowToWorkTogether() {
  return (
    <section id="work-together" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-20 md:py-28">
        <Reveal>
          <Eyebrow as="h2">How to work together</Eyebrow>
          <h3 className="mt-4 font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
            Three ways to start.
          </h3>
          <p className="measure mt-5 text-lede text-ink-soft">
            Every engagement is custom. These are the three shapes it usually
            takes, depending on whether you want a plan, a partner, or a
            builder.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 border-b border-hairline">
          {tiers.map((t) => (
            <RevealItem
              key={t.key}
              className="grid gap-x-10 gap-y-3 border-t border-hairline py-8 md:grid-cols-[120px_minmax(0,1fr)_max-content] md:items-baseline"
            >
              <span className="font-mono text-eyebrow uppercase tracking-[0.08em] text-sienna">
                {t.gutter}
              </span>
              <div>
                <h4 className="m-0 font-display text-h3">{t.name}</h4>
                <p className="mt-2 max-w-[56ch] text-body text-ink-soft">
                  {t.scope}
                </p>
                <p className="mt-2 max-w-[56ch] font-mono text-caption text-ink-soft">
                  {t.forWhom}
                </p>
              </div>
              <Button
                variant="quiet"
                href="#contact"
                onClick={() => selectTier(t.key)}
                aria-label={`Start here: ${t.name}`}
              >
                Start here
              </Button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
