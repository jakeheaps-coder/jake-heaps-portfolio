import type { ReactNode } from "react";

type Tone = "paper" | "surface" | "night";

const TONE_BG: Record<Tone, string> = {
  paper: "bg-paper",
  surface: "bg-surface",
  // `night` also carries the `.night` token scope (defined in index.css) so
  // ink/hairline/accent tokens flip to their dark values for descendants.
  night: "night bg-night",
};

/**
 * A full-bleed section band with a centered measure. `tone` sets the
 * background; sections alternate tones so two colored bands never stack.
 *
 * Vertical rhythm comes from the `section` spacing token (56px on a phone,
 * 112px on a laptop, fluid between). The scroll margin matches the sticky
 * nav bar (44px on phones, 56px from sm), so an anchor jump lands with the
 * band's top edge just under the bar.
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
      className={`scroll-mt-11 px-6 sm:scroll-mt-14 ${TONE_BG[tone]} ${className}`}
    >
      {bleed ? (
        children
      ) : (
        <div className={`mx-auto max-w-[1100px] py-section ${innerClassName}`}>
          {children}
        </div>
      )}
    </section>
  );
}
