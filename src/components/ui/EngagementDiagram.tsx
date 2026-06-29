import { motion, useReducedMotion } from "motion/react";
import { EASE_EXPO } from "../../lib/motion";

/**
 * EngagementDiagram — the titled hero visual for the named method. Three
 * stages, drawn as numbered nodes joined by hairline connectors that draw in
 * left-to-right (the same scaleX technique as the task bars).
 *
 * Decorative: the whole figure is role="img" with a descriptive aria-label;
 * the inner nodes/connectors are aria-hidden so a screen reader hears one
 * clean summary, not a pile of disconnected labels.
 */
const VIEW = { once: true, amount: 0.5 } as const;

export interface DiagramStage {
  n: string;
  label: string;
}

export function EngagementDiagram({
  name,
  stages,
  className = "",
}: {
  /** The method name, used in the accessible label. */
  name: string;
  stages: DiagramStage[];
  className?: string;
}) {
  const reduced = useReducedMotion();
  const labels = stages.map((s) => s.label).join(", ");

  return (
    <figure
      className={`m-0 ${className}`}
      role="img"
      aria-label={`${name}: ${stages.length} stages — ${labels}.`}
    >
      {/* desktop: horizontal flow; mobile: stacked */}
      <ol
        aria-hidden
        className="m-0 grid list-none gap-x-0 gap-y-6 p-0 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center"
      >
        {stages.map((s, i) => (
          <li key={s.n} className="contents">
            {/* connector before every node except the first (desktop only) */}
            {i > 0 && (
              <span className="hidden h-px w-full bg-hairline md:block">
                <motion.span
                  className="block h-px origin-left bg-sienna"
                  initial={reduced ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={VIEW}
                  transition={{
                    duration: 0.7,
                    ease: EASE_EXPO,
                    delay: 0.2 + i * 0.25,
                  }}
                />
              </span>
            )}
            <motion.div
              className="flex items-start gap-4 md:flex-col md:items-center md:gap-3 md:text-center"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.5, ease: EASE_EXPO, delay: i * 0.25 }}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-hairline">
                <span className="numeral text-[1.25rem] leading-none text-sienna">
                  {s.n}
                </span>
              </span>
              <span className="pt-2.5 font-display text-h3 md:pt-0">
                {s.label}
              </span>
            </motion.div>
          </li>
        ))}
      </ol>
    </figure>
  );
}
