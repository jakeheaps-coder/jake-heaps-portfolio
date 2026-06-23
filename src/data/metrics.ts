import { systemCount } from "./projects";

export interface RecordMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

/**
 * The Record — five numerals, each derivable: adoption (measured on live
 * workflows), system count (computed from the catalog), P&L (itemized in
 * the ledger, first-year total $2.34M), hours (a recent quarter's QBR),
 * pipeline (CRM-tracked, excluded from P&L).
 */
export const record: RecordMetric[] = [
  { value: 93, suffix: "%", label: "team adoption in 12 months" },
  { value: systemCount, label: "production systems in daily use" },
  {
    value: 2,
    prefix: "$",
    suffix: "M+",
    label: "first-year economic value, itemized in the ledger",
  },
  { value: 1.65, suffix: "x", label: "average employee productivity, today" },
  {
    value: 1,
    prefix: "$",
    suffix: "M+",
    label: "AI-attributed pipeline, tracked separately",
  },
];

export const taskImprovements = [
  {
    task: "Video Production",
    before: "8–16 hrs",
    after: "1.25 hrs",
    reduction: "85–92%",
  },
  {
    task: "Creative SLA",
    before: "5 days",
    after: "Same day",
    reduction: "80%+",
  },
  {
    task: "Webinar Management",
    before: "~20 hrs/week",
    after: "~2 hrs/week",
    reduction: "90%",
  },
  {
    task: "SEO Optimization",
    before: "8 hrs/batch",
    after: "1 hr/batch",
    reduction: "87%",
  },
  {
    task: "Speaker Cards",
    before: "3 hrs / 50 cards",
    after: "10 min",
    reduction: "94%",
  },
  {
    task: "Form Submission Routing",
    before: "Manual",
    after: "1 form triggers all",
    reduction: "88%",
  },
  {
    task: "Ad Creative SLA",
    before: "Baseline",
    after: "67% faster",
    reduction: "67%",
  },
];

export const transformationResults = [
  {
    category: "Time Efficiency",
    metric: "264–273 hrs/week",
    detail: "Saved across team (self-report survey)",
  },
  {
    category: "Cost eliminated",
    metric: "$495K/yr",
    detail: "Software displaced, built in-house, or avoided. See the ledger",
  },
  {
    category: "Economic value",
    metric: "$2.34M",
    detail: "First-year total, itemized in the ledger",
  },
  {
    category: "Pipeline",
    metric: "Seven-figure",
    detail: "AI-attributed pipeline (Salesforce-tracked)",
  },
  {
    category: "AI Utilization",
    metric: "20K+ queries",
    detail: "500–900 hrs/quarter saved via Gemini Enterprise",
  },
];

export const timelinePhases = [
  {
    period: "Jun–Aug 2025",
    name: "Foundation",
    desc: "Assessment, first agent builds, early enablement sessions",
  },
  {
    period: "Sep–Oct 2025",
    name: "Enablement",
    desc: "One-on-one coaching, workflow design, team-specific tools",
  },
  {
    period: "Nov–Dec 2025",
    name: "Infrastructure",
    desc: "Knowledge Graph, MCP servers, platform integrations",
  },
  {
    period: "Jan–Feb 2026",
    name: "Gemini Enterprise",
    desc: "Production agent deployments, enterprise-wide access",
  },
  {
    period: "Mar–Apr 2026",
    name: "Scaling",
    desc: "Vendor displacements, automation at scale, measurement",
  },
  {
    period: "May 2026",
    name: "Transfer",
    desc: "First team operates independently. The playbook is ready, and the company-wide rollout begins.",
  },
  {
    period: "Next phase · projected",
    name: "Company-wide",
    desc: "Same system across the whole company, on track to about 2x the first-phase efficiency rate.",
  },
];

export const decisionLog = [
  {
    decision: "Marketing as the proving ground",
    rationale:
      "Marketing had the highest density of repetitive, AI-automatable tasks combined with a CMO willing to sponsor the experiment. Engineering and Sales had neither. The plan was always company-wide: marketing was the proving ground to build and validate the system before scaling it across the org.",
  },
  {
    decision: "Enablement over training",
    rationale:
      "Emails, office hours, and documentation produced near-zero adoption. Sitting with each person and building their specific workflow together produced 93%.",
  },
  {
    decision: "Build vs. buy for vendor displacement",
    rationale:
      "When the existing vendor’s core value could be replicated with AI + existing data platform capabilities, building in-house saved five- to six-figure annual licenses while giving us full control.",
  },
  {
    decision: "Gemini for enterprise agents",
    rationale:
      "Vertex AI ADK provided enterprise-grade deployment, Google Cloud integration, and Gemini Enterprise gave every employee agent access without per-seat licensing friction.",
  },
  {
    decision: "Strategy, implementation, education, in that order",
    rationale:
      "Every failed AI rollout I studied led with the tool. A system shipped without strategy, or without the people to adopt it, becomes shelfware. The order is the core strategic insight: decide what to build, build it, then bring the team, never reversed.",
  },
];

export const failures = [
  {
    attempt: "Self-service AI interface",
    lesson:
      "People need role-specific tools, not a general-purpose AI chat. A “one tool for everything” approach created decision paralysis.",
  },
  {
    attempt: "Self-serve enablement (emails, office hours, docs)",
    lesson:
      "Focused 1:1 coaching produced results. Async materials alone produced almost nothing. People don’t adopt AI from a PDF.",
  },
  {
    attempt: "Early Gemini adoption push",
    lesson:
      "Access does not equal adoption. Giving everyone a tool without showing them their specific use case is giving them a hammer without showing them nails.",
  },
  {
    attempt: "AI outbound engine",
    lesson:
      "Multi-system integration (CRM + enrichment + sequencing + AI) requires more orchestration maturity than a team has in month three. Timing matters.",
  },
];
