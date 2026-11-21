import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";
import { PRIMARY_CLASS, QUIET_CLASS } from "./buttonStyles";

/**
 * The only two buttons on the site.
 * primary: the cedar CTA. Squared-off 3px corners (a ledger stamp, not a
 *          pill), a layered warm-ink shadow, a 1px press-in. 48px tall.
 * quiet:   underlined cedar text with an arrow. The hit area is 44px tall,
 *          pulled back with negative margin so it sits in a line of text
 *          without pushing the layout around.
 *
 * Pass `to` to render a react-router <Link> (internal routes, no full reload).
 * Without `to` it renders a plain <a>, so the brief keeps working unchanged.
 */
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
