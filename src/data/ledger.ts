/**
 * The ledger — every dollar claim on the site is a row here, classed and
 * based. Headline numerals derive from these rows at build time; nothing
 * is hand-typed twice. Vendor names are abstracted for confidentiality.
 */

export type LedgerClass =
  | "capacity"
  | "displaced"
  | "equivalent"
  | "avoided"
  | "revenue";

export interface LedgerRow {
  item: string;
  cls: LedgerClass;
  basis: "yearly" | "one-time";
  amount: number;
  note?: string;
}

export const classLabels: Record<LedgerClass, string> = {
  capacity: "Capacity",
  displaced: "Displaced",
  equivalent: "Equivalent",
  avoided: "Avoided",
  revenue: "Revenue",
};

export const ledger: LedgerRow[] = [
  {
    item: "Team capacity created, workload absorbed by AI systems without additional hiring",
    cls: "capacity",
    basis: "yearly",
    amount: 1_500_000,
    note: "Valued at fully-loaded role cost · 280 hrs/week attested in a recent quarterly review",
  },
  {
    item: "Enterprise DAM platform license",
    cls: "displaced",
    basis: "yearly",
    amount: 85_000,
    note: "replaced by in-house build, File 01",
  },
  {
    item: "Employee recognition platform license",
    cls: "displaced",
    basis: "yearly",
    amount: 25_000,
    note: "replaced by in-house build, File 05",
  },
  {
    item: "AI meeting-intelligence platform",
    cls: "equivalent",
    basis: "yearly",
    amount: 240_000,
    note: "built in-house instead of buying",
  },
  {
    item: "Messaging intelligence system",
    cls: "equivalent",
    basis: "yearly",
    amount: 65_000,
    note: "built in-house instead of buying",
  },
  {
    item: "Marketing agent bundle",
    cls: "equivalent",
    basis: "one-time",
    amount: 20_000,
    note: "built in-house instead of buying",
  },
  {
    item: "Competitive intelligence service",
    cls: "avoided",
    basis: "yearly",
    amount: 80_000,
    note: "external spend not incurred",
  },
  {
    item: "Keynote & launch content production",
    cls: "avoided",
    basis: "one-time",
    amount: 50_000,
    note: "agency spend not incurred on keynotes and landing-page agents",
  },
  {
    item: "Enterprise customer deal, AI-attributed",
    cls: "revenue",
    basis: "one-time",
    amount: 275_000,
    note: "closed-won",
  },
];

/* Derived totals — the only place headline math lives. */
export const yearlyRunRate = ledger
  .filter((r) => r.basis === "yearly" && r.cls !== "revenue")
  .reduce((n, r) => n + r.amount, 0); // 1,995,000

export const oneTimeCosts = ledger
  .filter((r) => r.basis === "one-time" && r.cls !== "revenue")
  .reduce((n, r) => n + r.amount, 0); // 70,000

export const closedRevenue = ledger
  .filter((r) => r.cls === "revenue")
  .reduce((n, r) => n + r.amount, 0); // 275,000

export const firstYearTotal = yearlyRunRate + oneTimeCosts + closedRevenue; // 2,340,000

/** The attestation — quoted verbatim from the internal review. */
export const attestation = {
  quote:
    "Right around 280 hours each week are being saved using AI across the team.",
  source: "Quarterly business review",
};

export const countingRules = [
  "Yearly amounts are annual run-rate as of fiscal year end; one-time amounts are counted once.",
  "Displaced: a paid license canceled. Equivalent: a system built in-house instead of buying. Avoided: external spend not incurred. Capacity: measured hours returned, valued at fully-loaded cost of equivalent roles.",
  "AI-attributed pipeline (seven figures, CRM-tracked) is excluded from every total above.",
];
