import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { EASE_CUBIC } from "../../lib/motion";

/**
 * Serif display numeral that eases up and settles hard at the real value.
 * The real value lives in the DOM (sr-only) so assistive tech, reader mode,
 * and crawlers never see a zero; the animated copy is presentation only.
 */
export function BigNumeral({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    if (reduced) {
      el.textContent = value.toLocaleString("en-US");
      return;
    }
    const controls = animate(0, value, {
      duration: 1.1,
      ease: EASE_CUBIC,
      onUpdate: (v) => {
        el.textContent = Math.round(v).toLocaleString("en-US");
      },
      onComplete: () => {
        el.textContent = value.toLocaleString("en-US");
      },
    });
    return () => controls.stop();
  }, [inView, value, reduced]);

  return (
    <span className={`numeral ${className}`}>
      <span className="sr-only">
        {prefix}
        {value.toLocaleString("en-US")}
        {suffix}
      </span>
      <span aria-hidden>
        {prefix}
        <span ref={ref}>{reduced ? value.toLocaleString("en-US") : 0}</span>
        {suffix}
      </span>
    </span>
  );
}
