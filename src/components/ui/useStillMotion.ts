import { useReducedMotion } from "motion/react";

/**
 * True when entrances should be skipped and content rendered in its final
 * state: the visitor asked for reduced motion, or the page is being driven
 * by an automated browser (screenshot tools, link-preview renderers,
 * Lighthouse). A headless capture never scrolls, so on-view reveals would
 * otherwise leave every section below the fold blank in the image.
 */
const AUTOMATED =
  typeof navigator !== "undefined" && navigator.webdriver === true;

export function useStillMotion(): boolean {
  const reduced = useReducedMotion();
  return AUTOMATED || reduced === true;
}
