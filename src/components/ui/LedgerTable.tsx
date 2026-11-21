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
 * Below md each row becomes a stacked entry: the lead cell as its heading,
 * then each other cell under its own small mono label.
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
        : "text-body leading-relaxed text-ink-soft md:text-caption";

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
        <tr className="rule-strong">
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
      <tbody className="max-md:block max-md:rule-strong">
        {rows.map((row, i) => (
          <tr
            key={i}
            className="border-t border-hairline max-md:grid max-md:gap-2.5 max-md:py-5 max-md:first:border-t-0"
          >
            {columns.map((c) => (
              <td
                key={c.key}
                className={`py-3 pr-4 align-top last:pr-0 max-md:block max-md:py-0.5 max-md:pr-0 max-md:text-left ${cellClass(c)}`}
              >
                {!c.lead && (
                  <span className="eyebrow mb-0.5 hidden text-ink-soft max-md:block">
                    {c.label}
                  </span>
                )}
                {row[c.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
