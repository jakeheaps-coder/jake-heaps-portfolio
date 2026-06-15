import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Minimal nav for the vision page — logo, the full-brief link, email.
 * No section tracking; fades in after the hero like the brief's nav.
 */
export default function VisionNav() {
  const [shown, setShown] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      aria-label="Primary"
      inert={!shown}
      className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-md"
      initial={false}
      animate={{ y: shown ? 0 : -64, opacity: shown ? 1 : 0 }}
      transition={
        reduced ? { duration: 0 } : { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
      }
    >
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6">
        <a href="#/vision" className="font-display text-h3 italic no-underline">
          Jake Heaps
        </a>
        <div className="flex h-full items-stretch gap-6">
          <a
            href="#/brief"
            className="flex items-center font-mono text-eyebrow uppercase tracking-[0.08em] text-ink-soft no-underline transition-colors duration-200 hover:text-ink"
          >
            The full brief →
          </a>
          <a
            href="mailto:jakeheaps@me.com"
            className="flex items-center font-mono text-eyebrow uppercase tracking-[0.08em] text-cedar no-underline transition-colors duration-200 hover:text-ink"
          >
            Email
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
