import type { Variants } from "motion/react";

/* Eases for system-initiated motion; springs only for user-driven motion. */
export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_CUBIC = [0.33, 1, 0.68, 1] as const;

export const STAGGER = 0.09;

/* Below-the-fold sections animate once. Threshold stays low because tall
   blocks can never reach high intersection ratios on small screens. */
export const VIEWPORT = { once: true, amount: 0.15 } as const;
export const VIEWPORT_EAGER = { once: true, amount: 0.05 } as const;

/* The one shared entrance: a quiet 16px rise. */
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_CUBIC },
  },
};

export const fadeRiseGroup: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: STAGGER } },
};

/* Hero only: masked line reveal — wrap each line in overflow-hidden. */
export const lineReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.7, ease: EASE_EXPO },
  },
};
