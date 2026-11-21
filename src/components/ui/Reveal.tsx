import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeRise, fadeRiseGroup, VIEWPORT } from "../../lib/motion";

/** The one shared entrance. Wrap a block; it rises 16px once, on view. */
export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "figure";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={fadeRise}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
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
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={fadeRiseGroup}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
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
    <Tag className={className} variants={fadeRise}>
      {children}
    </Tag>
  );
}
