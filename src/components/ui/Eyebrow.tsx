/**
 * Mono ledger label. Optionally numbered: <Eyebrow n="03">Education</Eyebrow>
 * Use sparingly: one per page header at most (PageHeader already renders its
 * kicker this way). Section headings stand on their own without one.
 * Pass as="h2" on nav-target sections so the document outline includes them.
 */
export function Eyebrow({
  children,
  n,
  as: Tag = "p",
  className = "",
}: {
  children: React.ReactNode;
  n?: string;
  as?: "p" | "h2" | "h3" | "h4";
  className?: string;
}) {
  return (
    <Tag className={`eyebrow m-0 font-medium text-ink-soft ${className}`}>
      {n && <span className="text-sienna">{n}&ensp;·&ensp;</span>}
      {children}
    </Tag>
  );
}
