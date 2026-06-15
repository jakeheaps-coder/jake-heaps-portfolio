import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const sections = [
  { id: "record", label: "Record" },
  { id: "strategy", label: "Strategy" },
  { id: "transformation", label: "Transformation" },
  { id: "education", label: "Education" },
  { id: "governance", label: "Governance" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
];

/**
 * Quiet text nav. Chrome fades in after ~80vh; the active indicator glides
 * between links via layoutId; backdrop blur eases off during fast scroll.
 * On mobile a Contents toggle exposes the chapter index.
 */
export default function Nav() {
  const [active, setActive] = useState("");
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    let lastY = window.scrollY;
    let lastT = performance.now();
    let idleTimer: number;

    const onScroll = () => {
      const y = window.scrollY;
      setShown(y > window.innerHeight * 0.8);

      /* Velocity-damped blur: heavy blur during fast motion reads as smear. */
      if (navRef.current && !reduced) {
        const now = performance.now();
        const v = Math.abs(y - lastY) / Math.max(now - lastT, 1);
        const blur = v > 1.5 ? 3 : 12;
        navRef.current.style.setProperty("--nav-blur", `${blur}px`);
        lastY = y;
        lastT = now;
        window.clearTimeout(idleTimer);
        idleTimer = window.setTimeout(() => {
          navRef.current?.style.setProperty("--nav-blur", "12px");
        }, 150);
      }

      const past = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          return {
            id: s.id,
            top: el ? el.getBoundingClientRect().top : Infinity,
          };
        })
        .filter((s) => s.top <= 160);
      setActive(past.length ? past[past.length - 1].id : "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(idleTimer);
    };
  }, [reduced]);

  useEffect(() => {
    if (!shown) setOpen(false);
  }, [shown]);

  return (
    <motion.nav
      ref={navRef}
      aria-label="Section navigation"
      inert={!shown}
      className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-paper/85 [backdrop-filter:blur(var(--nav-blur,12px))]"
      initial={false}
      animate={{ y: shown ? 0 : -64, opacity: shown ? 1 : 0 }}
      transition={
        reduced ? { duration: 0 } : { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
      }
    >
      <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6">
        <div className="flex items-baseline gap-4">
          <a href="#brief" className="font-display text-h3 italic no-underline">
            Jake Heaps
          </a>
          <a
            href="#/vision"
            className="hidden font-mono text-eyebrow uppercase tracking-[0.08em] text-ink-soft no-underline transition-colors duration-200 hover:text-ink sm:inline"
          >
            ← Overview
          </a>
        </div>

        <div className="hidden h-full items-stretch gap-7 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative flex items-center font-mono text-eyebrow uppercase tracking-[0.08em] no-underline transition-colors duration-200 ${
                active === s.id ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {s.label}
              {active === s.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute inset-x-0 bottom-0 h-px bg-sienna"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 400, damping: 34 }
                  }
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex h-full items-stretch gap-6">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="nav-contents"
            className="flex cursor-pointer items-center border-0 bg-transparent p-0 font-mono text-eyebrow uppercase tracking-[0.08em] text-ink-soft transition-colors duration-200 hover:text-ink md:hidden"
          >
            {open ? "Close" : "Contents"}
          </button>
          <a
            href="mailto:jakeheaps@me.com"
            className="flex items-center font-mono text-eyebrow uppercase tracking-[0.08em] text-cedar no-underline transition-colors duration-200 hover:text-ink"
          >
            Email
          </a>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="nav-contents"
            className="border-t border-hairline bg-paper md:hidden"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
            style={{ overflow: "hidden" }}
          >
            <ol className="m-0 list-none px-6 py-3">
              {sections.map((s, i) => (
                <li
                  key={s.id}
                  className="border-t border-hairline first:border-t-0"
                >
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-3 py-3 font-mono text-eyebrow uppercase tracking-[0.08em] no-underline ${
                      active === s.id ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    <span className="text-sienna">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
