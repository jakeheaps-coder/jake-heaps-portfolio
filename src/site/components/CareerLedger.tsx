import { career } from "../../data/career";
import { RevealGroup, RevealItem } from "../../components/ui/Reveal";

/**
 * The career as a ledger: strong top rule, mono years in the gutter, hairline
 * rows. Newest first. The current role carries a small sienna "Now" mark.
 */
export function CareerLedger({ detail = false }: { detail?: boolean }) {
  return (
    <RevealGroup as="ol" className="m-0 list-none rule-strong p-0">
        {career.map((r, i) => (
          <RevealItem
            as="li"
            key={r.org}
            className="grid gap-x-8 gap-y-1.5 border-b border-hairline py-5 md:grid-cols-[96px_minmax(0,220px)_minmax(0,1fr)] md:items-baseline"
          >
              <span className="font-mono text-caption text-ink-soft tabular-nums">
                {r.years}
                {i === 0 && <span className="ml-2 text-sienna">Now</span>}
              </span>
              <span className="font-display text-h3 text-ink">
                {r.href ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline"
                  >
                    {r.org}
                  </a>
                ) : (
                  r.org
                )}
              </span>
              <span className="text-body text-ink-soft">
                {detail ? (
                  <>
                    <span className="text-ink">{r.role}.</span> {r.short}
                  </>
                ) : (
                  r.short
                )}
              </span>
          </RevealItem>
        ))}
    </RevealGroup>
  );
}
