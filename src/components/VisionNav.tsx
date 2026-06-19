import { motion, useReducedMotion } from "motion/react";

/**
 * Vision-page nav — a persistent top bar: the name, in-page section links,
 * and email. Visible the whole time; section links scroll within the page.
 * Standalone page: no link to the brief.
 */
const SECTIONS = [
  { href: "#who", label: "Who I am" },
  { href: "#problem", label: "Problem" },
  { href: "#method", label: "Approach" },
  { href: "#proof", label: "Proof" },
];

const LINK =
  "flex items-center font-mono text-eyebrow uppercase tracking-[0.08em] no-underline transition-colors duration-200";

export default function VisionNav() {
  const reduced = useReducedMotion();

  return (
    <motion.nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-md"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
    >
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between gap-6 px-6">
        <a
          href="#vision"
          className="shrink-0 font-display text-h3 italic no-underline"
        >
          Jake Heaps
        </a>

        <div className="hidden items-stretch gap-6 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className={`${LINK} text-ink-soft hover:text-ink`}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex h-full shrink-0 items-stretch gap-6">
          <a
            href="mailto:jakeheaps@me.com"
            className={`${LINK} text-cedar hover:text-ink`}
          >
            Email
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
