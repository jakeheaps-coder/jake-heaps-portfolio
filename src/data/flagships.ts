import { projects, type Project } from "./projects";

/**
 * The six case files examined in detail in "The work."
 * Everything not named here falls to the catalog index.
 * Stack lists are pulled from projects.ts so the data stays single-sourced;
 * body copy is the expanded briefing prose.
 */

export interface SpecLine {
  label: string;
  value: string;
}

export interface FlagshipFigure {
  src: string;
  alt: string;
  caption: string;
}

export interface Flagship {
  /** Exact `name` in projects.ts — used to keep the catalog index in sync. */
  source: string;
  /** Mono file number, e.g. "File 01". */
  file: string;
  /** Eyebrow descriptor after the file number. */
  kind: string;
  title: string;
  body: string;
  /** Return note — set in mono sienna in the margin rail. */
  roi: string;
  /** Margin label for the roi slot; defaults to "Return". */
  roiLabel?: string;
  stack: string[];
  spec: SpecLine[];
  /** Guardrails note — rendered as a "Controls" margin note after the spec. */
  controls?: string;
  /** Who runs it now — rendered as an "Owner" margin note, last in the rail. */
  owner?: string;
  figure?: FlagshipFigure;
}

function stackOf(name: string): string[] {
  const p: Project | undefined = projects.find((x) => x.name === name);
  if (!p) throw new Error(`Flagship source missing from projects.ts: ${name}`);
  return p.tech;
}

const SHOTS = "/jake-heaps-portfolio/screenshots";

export const flagships: Flagship[] = [
  {
    source: "DAM Platform (Vendor Replacement)",
    file: "File 01",
    kind: "Vendor displacement",
    title: "The enterprise DAM displacement",
    body: "I replaced the marketing org’s enterprise DAM platform with a system built on the company’s internal platform, on infrastructure the company already pays for. Browse, search, collections, permissions: the full asset-management surface, rebuilt in-house. The migration moved more than 35,000 documents with zero mismatches. Underneath, 87 serverless functions carry the workflow logic, and a complete ACL layer reproduces the access model the vendor charged for. The displacement was run like a procurement exit: access parity proven, data egress verified, contract wound down on schedule.",
    roi: "Mid-five-figure annual license displaced",
    stack: stackOf("DAM Platform (Vendor Replacement)"),
    spec: [
      { label: "Documents migrated", value: "35,000+" },
      { label: "Migration mismatches", value: "0" },
      { label: "Serverless functions", value: "87" },
    ],
    controls:
      "Full ACL parity with the displaced platform; security-reviewed before cutover; zero-mismatch migration audit.",
    owner:
      "Marketing ops. Documented runbook, maintained without me since May 2026.",
    figure: {
      src: `${SHOTS}/asset-library.png`,
      alt: "The internal DAM in production: asset browser with filter rail and document grid.",
      caption:
        "Fig. 01 · Asset browser in production: filters, collections, and the migrated library.",
    },
  },
  {
    source: "AI Outbound Engine",
    file: "File 02",
    kind: "Sales & revenue",
    title: "The AI outbound engine",
    body: "A fully automated outbound pipeline, run as one system rather than a stack of disconnected tools. Five stages, discover then enrich then sequence then agent feedback then converted prospect, each handing a cleaner record to the next. The data platform supplies targeting and enrichment, Apollo carries the sequences, and the agent feedback stage closes the loop. The architecture below is the system as built.",
    roi: "In production, five-stage pipeline",
    roiLabel: "Status",
    stack: stackOf("AI Outbound Engine"),
    spec: [
      { label: "Pipeline stages", value: "5" },
      { label: "Systems orchestrated", value: "4" },
    ],
    controls:
      "Human approval gates before any send; suppression lists honored at every stage.",
    owner: "Revenue marketing.",
    figure: {
      src: `${SHOTS}/outbound-engine.png`,
      alt: "Architecture diagram of the AI outbound engine pipeline.",
      caption:
        "Fig. 02 · Pipeline architecture, first signal through converted prospect.",
    },
  },
  {
    source: "CMO Marketing Intelligence",
    file: "File 03",
    kind: "Enterprise AI agents",
    title: "Marketing intelligence for the CMO",
    body: "An executive reasoning engine built for the CMO: attribution, funnel analysis, and ROI modeling over the marketing data estate. Questions that once waited in an analyst queue come back in minutes. Twenty tools sit behind the conversation, and every release runs a 110-question test suite before it ships, and the current pass rate is 100%.",
    roi: "Consolidates 2–3 analyst functions; decision speed from days to minutes",
    stack: stackOf("CMO Marketing Intelligence"),
    spec: [
      { label: "Tools", value: "20" },
      { label: "Test suite", value: "110 questions" },
      { label: "Regression suite", value: "110 Q" },
    ],
    controls:
      "110-question eval suite gates every deploy; read-only data access.",
    owner: "Marketing analytics.",
  },
  {
    source: "Knowledge Graph + Figma Plugin",
    file: "File 04",
    kind: "Knowledge & infrastructure",
    title: "The knowledge graph platform",
    body: "The substrate beneath the agent fleet. A graph database holds product messaging, competitive intelligence, and industry data as connected knowledge rather than scattered documents, and a 55-tool API serves it to every agent in production. A custom Figma plugin puts the same source of truth inside the design canvas, so designers pull approved messaging instead of paraphrasing it.",
    roi: "$65K/yr license equivalent",
    stack: stackOf("Knowledge Graph + Figma Plugin"),
    spec: [
      { label: "API tools", value: "55" },
      { label: "Knowledge domains", value: "3" },
      { label: "Surfaces", value: "API · Figma" },
    ],
    controls: "OAuth-gated API; read-only by design; allowlisted tools.",
    owner: "Marketing ops.",
  },
  {
    source: "Employee Recognition Platform",
    file: "File 05",
    kind: "Vendor displacement",
    title: "The employee recognition platform",
    body: "A second displacement, this one for HR: an employee recognition and rewards platform built on the company’s internal platform, covering nomination approvals, spot-bonus routing, anniversary tiers, and budget management. It administers 125 live budgets in production, and its 34-test suite passes clean on every release. Compensation-adjacent routing shipped under finance’s approval rules from day one.",
    roi: "Five-figure annual license displaced",
    stack: stackOf("Employee Recognition Platform"),
    spec: [
      { label: "Live budgets", value: "125" },
      { label: "Tests passing", value: "34/34" },
    ],
    controls:
      "Spot-bonus routing under finance approval rules; access scoped by role.",
    owner: "HR program owner + marketing ops.",
    figure: {
      src: `${SHOTS}/recognition-feed.png`,
      alt: "The employee recognition platform in production: recognition feed, milestones, and rewards.",
      caption:
        "Fig. 03 · Recognition feed, milestones, and rewards in the live app.",
    },
  },
  {
    source: "Paid Search Agent",
    file: "File 06",
    kind: "Enterprise AI agents",
    title: "The paid search agent",
    body: "A paid media analyst that never leaves the account. The agent reads Google Ads performance across six regional datasets, generates keywords and ad copy, and runs competitor analysis on demand, 24 tools in one conversational surface. The work it absorbs is the work a dedicated analyst would otherwise be hired to do.",
    roi: "Equivalent to a dedicated paid media analyst ($80–120K/yr)",
    stack: stackOf("Paid Search Agent"),
    spec: [
      { label: "Tools", value: "24" },
      { label: "Regional datasets", value: "6" },
    ],
    controls:
      "Recommend-only. No autonomous spend changes, human approval on every action.",
    owner: "Paid media team.",
  },
];

export const flagshipNames: ReadonlySet<string> = new Set(
  flagships.map((f) => f.source),
);
