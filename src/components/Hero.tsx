import { motion, useReducedMotion } from "motion/react";
import { EASE_CUBIC, EASE_EXPO } from "../lib/motion";

/**
 * The opening page of the brief: one declarative sentence, one number.
 * Orchestrated entrance completes in ≤1.2s and never replays.
 */
export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="brief" className="px-6">
      <div className="mx-auto max-w-[1100px] pt-36 pb-24 md:pt-44 md:pb-32">
        <motion.p
          className="eyebrow text-ink-soft"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE_CUBIC }}
        >
          Jake Heaps&ensp;—&ensp;AI Strategy &amp; Transformation
        </motion.p>

        <motion.hr
          className="mt-5 mb-12 origin-left border-0 border-t border-hairline"
          initial={reduced ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: EASE_EXPO, delay: 0.1 }}
        />

        <h1 className="font-display text-[2.625rem] leading-[1.08] tracking-[-0.01em] md:text-[4rem] md:leading-[1.05]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduced ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.15 }}
            >
              I build AI operating systems
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={reduced ? false : { y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE_EXPO, delay: 0.24 }}
            >
              that people <em>actually</em> use.
            </motion.span>
          </span>
        </h1>

        <motion.div
          className="mt-16 md:mt-20"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_CUBIC, delay: 0.55 }}
        >
          <span className="numeral block text-[4rem] leading-none text-sienna md:text-[4.5rem]">
            93%
          </span>
          <p className="mt-3 max-w-[60ch] font-mono text-caption text-ink-soft">
            team adoption&ensp;·&ensp;12-month enterprise
            transformation&ensp;·&ensp;26 production systems
          </p>
        </motion.div>
      </div>
    </section>
  );
}
