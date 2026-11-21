import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeRise, fadeRiseGroup } from "../../lib/motion";
import { useStillMotion } from "./useStillMotion";

/* Fire as soon as the top of a block clears the bottom tenth of the screen.
   An amount of 0 matters on phones: a tall block (a long letter, a ledger)
   can never reach a 15% intersection ratio on a 640px screen, which used to
   leave it invisible until the reader was halfway through it. */
const VIEW = { once: true, amount: 0, margin: "0px 0px -10% 0px" } as const;

/**
 * The one shared entrance. Wrap a block; it rises 16px once, on view.
 * Content is never hidden from print, reduced-motion visitors, or automated
 * captures (see useStillMotion): those render the final state directly.
 */
export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "figure";
}) {
  const still = useStillMotion();
  const Tag = motion[as];
  return (
    <Tag
      data-reveal=""
      className={className}
      variants={fadeRise}
      initial={still ? false : "hidden"}
      whileInView="visible"
      viewport={VIEW}
    >
      {children}
    </Tag>
  );
}

/** Parent that staggers its <RevealItem> children. Max ~5 children per group. */
export function RevealGroup({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ol" | "ul";
}) {
  const still = useStillMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={fadeRiseGroup}
      initial={still ? false : "hidden"}
      whileInView="visible"
      viewport={VIEW}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Tag = motion[as];
  return (
    <Tag data-reveal="" className={className} variants={fadeRise}>
      {children}
    </Tag>
  );
}
