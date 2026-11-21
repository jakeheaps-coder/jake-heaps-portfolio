import type { ReactNode } from "react";

type Tone = "paper" | "surface" | "night";

const TONE_BG: Record<Tone, string> = {
  paper: "bg-paper",
  // `night` also carries the `.night` token scope (defined in index.css) so
  // ink/hairline/accent tokens flip to their dark values for descendants.
  surface: "bg-surface",
  night: "night bg-night",
};

/**
 * A full-bleed section band with a centered measure. Replaces the SECTION/WRAP
 * class strings that were copy-pasted across the legacy page. `tone` sets the
 * background and (for night) the dark token scope; sections must alternate
 * tones so two colored bands never stack.
 */
export function Section({
  id,
  tone = "paper",
  bleed = false,
  className = "",
  innerClassName = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  /** Skip the centered max-width wrapper (for edge-to-edge content). */
  bleed?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 ${TONE_BG[tone]} ${className}`}
    >
      {bleed ? (
        children
      ) : (
        <div
          className={`mx-auto max-w-[1100px] py-20 md:py-28 ${innerClassName}`}
        >
          {children}
        </div>
      )}
    </section>
  );
}
