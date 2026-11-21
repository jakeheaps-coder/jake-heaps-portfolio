import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";

/**
 * The only two buttons on the site.
 * primary: the cedar CTA, four-layer shadow build, 40ms press-in
 * quiet:   underlined text link with an arrow
 *
 * Pass `to` to render a react-router <Link> (internal routes, no full reload).
 * Without `to` it renders a plain <a>, so the brief keeps working unchanged.
 */
const PRIMARY_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-md bg-cedar px-6 py-3 font-medium text-paper transition-[transform,box-shadow] duration-150 ease-(--ease-out-cubic) [box-shadow:inset_0_1px_0_rgb(255_255_255/0.12),inset_0_-1px_0_rgb(0_0_0/0.18),0_0_0_1px_rgb(45_74_58/0.9),0_2px_6px_rgb(26_23_20/0.18)] hover:[box-shadow:inset_0_1px_0_rgb(255_255_255/0.16),inset_0_-1px_0_rgb(0_0_0/0.18),0_0_0_1px_rgb(45_74_58/0.9),0_4px_12px_rgb(26_23_20/0.22)] active:translate-y-px active:[box-shadow:inset_0_1px_2px_rgb(0_0_0/0.2),0_0_0_1px_rgb(45_74_58/0.9)]";

const QUIET_CLASS =
  "group -my-1.5 inline-flex items-baseline gap-1.5 py-1.5 font-medium text-cedar transition-colors duration-200";

function QuietInner({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="underline decoration-cedar/30 decoration-1 underline-offset-4 transition-colors duration-200 group-hover:decoration-cedar">
        {children}
      </span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 ease-(--ease-out-expo) group-hover:translate-x-0.5"
      >
        →
      </span>
    </>
  );
}

export function Button({
  variant = "primary",
  to,
  className = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "quiet";
  /** Internal route. Renders a react-router Link instead of an anchor. */
  to?: string;
}) {
  const cls = `${variant === "quiet" ? QUIET_CLASS : PRIMARY_CLASS} ${className}`;
  const body =
    variant === "quiet" ? <QuietInner>{children}</QuietInner> : children;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {body}
      </Link>
    );
  }
  return (
    <a {...rest} className={cls}>
      {body}
    </a>
  );
}
