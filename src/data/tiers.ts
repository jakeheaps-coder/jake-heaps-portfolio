/**
 * The three shapes an engagement takes. Scope only — no pricing on the site.
 * `key` is the closed set the lead form records (never free user text).
 */
export interface Tier {
  key: "analysis" | "consultancy" | "hours";
  name: string;
  /** One-word gutter label echoing the numeral gutter elsewhere. */
  gutter: string;
  scope: string;
  forWhom: string;
}

export const tiers: Tier[] = [
  {
    key: "analysis",
    name: "One-time analysis and strategy",
    gutter: "Once",
    scope:
      "A full strategic engagement, delivered once. I look at how your company works, find where AI pays off and where it doesn't, and hand you a prioritized, sequenced plan you can act on. You come away knowing exactly what to build and in what order.",
    forWhom: "For teams who want a clear plan before they commit to building.",
  },
  {
    key: "consultancy",
    name: "Ongoing consultancy",
    gutter: "Ongoing",
    scope:
      "A standing partnership: strategy, education, and a set amount of implementation each month. I keep the plan current as you learn, sit with your people so they become builders, and build the highest-value systems alongside them. The point is a team that can carry it without me.",
    forWhom:
      "For companies who want a partner through the whole transformation.",
  },
  {
    key: "hours",
    name: "Implementation hours",
    gutter: "Build",
    scope:
      "Straight building. You know what you want, and I build it. Production systems, wired into your data and tools, shipped the way the flagship systems were. Most of the core already exists, so your build goes in fast.",
    forWhom: "For teams who already have a plan and need it built.",
  },
];
