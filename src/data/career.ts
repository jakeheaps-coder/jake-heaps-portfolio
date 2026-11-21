/**
 * The career ledger, newest first. Shown in short form on the home page and in
 * full on About. Dates and titles follow the master resume; Huckleberry is the
 * current role.
 * Huckleberry gets its name and Jake's title only (contract item 1).
 */
export interface CareerRow {
  years: string;
  org: string;
  role: string;
  /** One line for the home ledger. */
  short: string;
  href?: string;
}

export const career: CareerRow[] = [
  {
    years: "2026–",
    org: "Huckleberry AI",
    role: "Manager, Internal AI Projects",
    short: "Where I'm leading AI strategy, education, and implementation now.",
    href: "https://huckleberry.ai",
  },
  {
    years: "2025–26",
    org: "Domo",
    role: "AI Marketing Operations Manager, then Manager, Internal AI Projects",
    short: "A year implementing AI with the marketing team, then six months across the whole company. 26 AI systems in production, and 93% of marketing building on their own.",
  },
  {
    years: "2024–25",
    org: "Adminify AI",
    role: "Marketing Specialist",
    short: "The only marketer. Redid the brand and the path from lead to customer.",
  },
  {
    years: "2022–24",
    org: "Bucked Up",
    role: "Marketing Funnel Manager",
    short: "Built 30+ funnels and helped make national TV commercials.",
  },
  {
    years: "2020–22",
    org: "Mission",
    role: "The Church of Jesus Christ of Latter-day Saints, San Bernardino, California",
    short: "Two years, full time. Learned Spanish.",
  },
];
