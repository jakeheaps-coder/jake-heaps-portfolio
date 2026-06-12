import type { ReactNode } from "react";

export interface LedgerColumn {
  key: string;
  label: string;
  /** Right-align numeric columns; they also render in mono. */
  numeric?: boolean;
  /** The leading column: medium weight, full ink. */
  lead?: boolean;
  /** Tailwind width class applied from md up, e.g. "md:w-1/3" */
  width?: string;
}

/**
 * Tufte ledger table: one strong top rule, a header rule, hairlines between
 * rows, right-aligned tabular numerals. No zebra striping, no chips.
 * Cell conventions live here, not at call sites: lead columns are medium ink,
 * prose cells are caption-size soft ink, numeric cells are right-aligned mono.
 * Below md the table collapses to stacked label/value blocks.
 */
export function LedgerTable({
  columns,
  rows,
  caption,
  className = "",
}: {
  columns: LedgerColumn[];
  rows: Record<string, ReactNode>[];
  caption?: string;
  className?: string;
}) {
  const cellClass = (c: LedgerColumn) =>
    c.numeric
      ? "text-right font-mono text-caption text-ink"
      : c.lead
        ? "text-body font-medium text-ink"
        : "text-caption leading-relaxed text-ink-soft";

  return (
    <table
      className={`w-full border-collapse text-left max-md:block ${className}`}
    >
      {caption && (
        <caption className="eyebrow mb-3 text-left text-ink-soft max-md:block">
          {caption}
        </caption>
      )}
      <thead className="max-md:hidden">
        <tr className="border-t-2 border-ink">
          {columns.map((c) => (
            <th
              key={c.key}
              scope="col"
              className={`eyebrow py-2.5 pr-4 font-medium text-ink-soft last:pr-0 ${
                c.numeric ? "text-right" : ""
              } ${c.width ?? ""}`}
            >
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="max-md:block max-md:border-t-2 max-md:border-ink">
        {rows.map((row, i) => (
          <tr
            key={i}
            className="border-t border-hairline max-md:block max-md:py-4 max-md:first:border-t-0"
          >
            {columns.map((c) => (
              <td
                key={c.key}
                className={`py-3 pr-4 align-top last:pr-0 max-md:block max-md:py-0.5 max-md:pr-0 max-md:text-left ${cellClass(c)}`}
              >
                <span className="eyebrow mr-2 hidden text-ink-soft max-md:inline">
                  {c.label}&ensp;·&ensp;
                </span>
                {row[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
