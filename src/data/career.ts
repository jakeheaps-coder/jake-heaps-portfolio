/**
 * The career ledger, newest first. Shown in short form on the home page and in
 * full on About. Dates and titles follow the master resume; Huckleberry is the
 * current role.
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
    short: "Building the internal AI systems the company runs on.",
    href: "https://huckleberry.ai",
  },
  {
    years: "2026",
    org: "Naitive",
    role: "Founder",
    short: "Started an AI consulting practice. Built an outbound system that runs itself.",
  },
  {
    years: "2025–26",
    org: "Domo",
    role: "AI Marketing Operations Manager, then Manager, Internal AI Projects",
    short: "Led the AI transformation. 26 production systems, 93% of the team building on their own.",
  },
  {
    years: "2024–25",
    org: "Adminify AI",
    role: "Marketing Specialist",
    short: "The only marketer. Rebuilt the brand and the path from lead to customer.",
  },
  {
    years: "2022–24",
    org: "Bucked Up",
    role: "Marketing Funnel Manager",
    short: "Built 30+ funnels and helped produce national TV spots.",
  },
  {
    years: "2020–22",
    org: "Volunteer service",
    role: "San Bernardino, California",
    short: "Two years of full-time service. Learned Spanish.",
  },
];
