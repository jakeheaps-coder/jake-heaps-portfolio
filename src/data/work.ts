/**
 * Copy and data for the /work page. Project descriptions are sourced from
 * src/data/projects.ts and src/data/flagships.ts and rewritten in Jake's voice.
 * Numbers used here must be on the contract's list of allowed stats or come
 * from a ledger row (src/data/ledger.ts).
 */
import { ledger, capacityTotal, firstYearTotal } from "./ledger";

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

const ledgerAmount = (item: string) => {
  const row = ledger.find((r) => r.item === item);
  if (!row) throw new Error(`Ledger row missing: ${item}`);
  return row.amount;
};

/** $840K: everything in the ledger except created capacity. */
export const hardDollars = firstYearTotal - capacityTotal;

/** The four figures, each with the way it was counted. */
export const FIGURES = [
  {
    value: "93%",
    what: "Team adoption",
    how: "The share of the marketing team building with AI on their own by the end of the year. It comes from a survey of the team.",
  },
  {
    value: "26",
    what: "Production systems",
    how: "Systems the team uses every day. I didn’t count pilots or demos.",
  },
  {
    value: "1.65x",
    what: "Team productivity",
    how: "Ten roles opened up during the year and we didn’t backfill them. The people who stayed absorbed that work with the systems’ help.",
  },
  {
    value: "$2.3M",
    what: "First-year value",
    how: "Itemized in the ledger below: software we canceled, tools we built instead of buying, spend we avoided, capacity the team got back, and one closed deal.",
  },
];

export interface WorkProject {
  name: string;
  /** One or two plain sentences. Featured entries may carry a second paragraph. */
  body: string[];
  /** Small mono line: what it replaced, or the one number. */
  note: string;
}

/**
 * The four Jake asked to lead with, in this order. Facts and order come from
 * coordination/notes/projects.md; don't add details that aren't there.
 */
export const FEATURED: WorkProject[] = [
  {
    name: "Messaging Brain",
    body: [
      "Domo’s product messaging, competitive research and industry data lived in scattered documents, so everyone paraphrased it a little differently. I moved it into a knowledge graph that every agent on the team queries, and it feeds the content we write.",
      "Then I built a Figma plugin on top, so designers pull the approved line straight onto the canvas instead of retyping it from a deck.",
    ],
    note: `55 tools connected across the agents · built instead of bought, ${usd(ledgerAmount("Messaging intelligence system"))} a year in the ledger`,
  },
  {
    name: "Apollo outbound engine",
    body: [
      "One pipeline for outbound. It finds accounts, enriches them, runs the sequences in Apollo, and feeds what an agent learns back in until a prospect converts.",
      "It only reacts to repeated interest: two opens, two clicks, or any reply. A single open is noise and gets ignored. When someone does engage, they get a landing page written for them and their lead score updates. It’s running now, and it has taken over part of what we paid outside tools for, though not all of it yet.",
    ],
    note: "Signal · 2+ opens, 2+ clicks, or a reply",
  },
  {
    name: "Media monitoring agent",
    body: [
      "Every day it watches news about Domo and its competitors, sends alerts when something matters, and emails a daily update. It follows a story from one day to the next instead of repeating it.",
      "The tedious parts were duplicate stories and stock-ticker spam, and it filters both. It went through a large security audit before anyone else used it.",
    ],
    note: "Replaced · manual media monitoring",
  },
  {
    name: "Domopalooza scheduler",
    body: [
      "Domopalooza is Domo’s annual conference. I built an AI scheduler that placed more than 6,000 registrants into breakout sessions and kept the meetings and speaker slots around them lined up.",
    ],
    note: "6,000+ registrants scheduled",
  },
];

export const MORE: WorkProject[] = [
  {
    name: "Competitive intel agent",
    body: ["Watches what competitors do every day and keeps the battle cards current."],
    note: "Daily collector",
  },
  {
    name: "Executive assistants",
    body: ["A custom AI assistant for each C-suite leader, set up around how that person writes and what they care about."],
    note: "11 C-suite leaders",
  },
  {
    name: "Weekly executive report",
    body: ["Pulls from SharePoint, Domo and Gemini and builds the PowerPoint every Friday without anyone touching it."],
    note: "Every Friday",
  },
  {
    name: "CMO marketing analysis",
    body: ["Attribution, funnel and ROI questions for the CMO, answered in minutes. A release doesn’t ship until it passes the full test set."],
    note: "20 tools · 110 test questions",
  },
  {
    name: "Paid search agent",
    body: ["Reads Google Ads performance by region and drafts keywords and ad copy. It only recommends. A person approves every change."],
    note: "24 tools · 6 regional datasets",
  },
  {
    name: "Sales Navigator",
    body: ["Coaches reps during live sales calls, using speech to text and Gemini."],
    note: "Live calls",
  },
  {
    name: "Media relations platform",
    body: ["Scores each day’s stories for a Domo angle and drafts pitches in three formats. It replaced a paid PR tool."],
    note: "17 news feeds scanned daily",
  },
  {
    name: "Video pipeline",
    body: ["Produces videos with AI avatars, from script to finished cut."],
    note: "8 to 16 hours down to 1 hour 15 minutes",
  },
  {
    name: "Domopalooza keynote creative",
    body: ["The keynote visuals, the opening video and the speaker cards, all generated with AI."],
    note: "100+ slides in the CEO keynote",
  },
  {
    name: "Skills library",
    body: ["Claude Code skills for the marketing team’s functions and workflows, each one owned and changed through pull requests."],
    note: "575+ skills",
  },
  {
    name: "jake-heaps-os",
    body: ["My own setup in one private repo: every skill, agent, hook and config, so a new machine is ready after one clone."],
    note: "Personal",
  },
];

export const PUBLIC_RECORD = [
  {
    kind: "Press",
    title: "TechRepublic wrote up the two-day Bissell build",
    href: "https://www.techrepublic.com/article/news-bissell-ai-workflows-two-day-build-domo/",
    cta: "Read the article",
  },
  {
    kind: "Keynote",
    title: "Google Cloud’s partner keynote at Domopalooza used agent animations I made",
    href: "https://www.domo.com/domopalooza/resources/partner-keynote-from-jim-fairweather-head-of-ai-gtm-google-cloud",
    cta: "Watch the keynote",
  },
  {
    kind: "Keynote",
    title: "Domo’s CEO keynote. All 100+ slides of graphics came out of a pipeline I built",
    href: "https://youtu.be/7HvOlSnfubQ",
    cta: "Watch on YouTube",
  },
];
