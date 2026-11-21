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

/** The four the user asked to lead with, in this order. */
export const FEATURED: WorkProject[] = [
  {
    name: "Messaging Brain",
    body: [
      "Our product messaging and competitive research lived in scattered documents, so everyone paraphrased it a little differently. I moved all of it into a graph database and gave every agent on the team a way to query it.",
      "Then I built a Figma plugin on top, so designers pull the approved line straight onto the canvas instead of retyping it from a deck.",
    ],
    note: `Built instead of bought · ${usd(ledgerAmount("Messaging intelligence system"))} a year in the ledger`,
  },
  {
    name: "Apollo outbound engine",
    body: [
      "One pipeline for outbound instead of a pile of separate tools. It finds accounts, enriches them, runs the sequences in Apollo, and feeds what the agent learns back into the next round. Nothing sends until a person approves it.",
      "Later, through Naitive, I built a version for a client. Theirs warms accounts up and waits for someone to engage. Then a research agent writes that person a hosted account plan, they can start a trial on their own, and the system books the meeting. It runs inside tools the client already paid for and needs a person a few times a month.",
    ],
    note: "Domo first, then a client through Naitive",
  },
  {
    name: "Media monitoring agent",
    body: [
      "Keeping up with press coverage used to be a manual job. Two workflows now read the news and send a daily digest that follows a story from one day to the next, instead of repeating it every morning.",
      "The tedious parts were duplicate stories and stock-ticker spam. I handled those with plain rules rather than asking a model to guess.",
    ],
    note: "Replaced · manual media monitoring",
  },
  // TODO(jake): add what it did and a number
  {
    name: "Domopalooza scheduler",
    body: [
      "A scheduling tool I built for Domopalooza, Domo’s annual conference.",
    ],
    note: "Conference tooling",
  },
];

export const MORE: WorkProject[] = [
  {
    name: "Media relations platform",
    body: [
      "Reads the news every morning, scores each story on whether Domo has a credible angle, and drafts a pitch for the ones that do. It replaced a paid PR platform.",
    ],
    note: "17 news feeds scanned daily",
  },
  {
    name: "Video pipeline",
    body: [
      "Writes scripts from the Messaging Brain, renders them with AI avatars, and cuts each one for widescreen and vertical.",
    ],
    note: "16 hours to 1 hour 15 minutes per video",
  },
  {
    name: "AI SDR",
    body: [
      "A chat widget and form handler that qualifies prospects and books meetings. I built it to replace a sales engagement tool we were paying a lot for.",
    ],
    note: "Replaced · a sales engagement platform",
  },
  {
    name: "Live translator agent",
    body: [
      "Translates both sides of a live call as it happens, so two people without a shared language can just talk.",
    ],
    note: "Used on meetings and customer calls",
  },
  {
    name: "CMO marketing analysis",
    body: [
      "Attribution, funnel and ROI questions that used to wait in an analyst’s queue come back in minutes. A fixed set of test questions has to pass before any release goes out.",
    ],
    note: "Replaced · the analyst queue",
  },
  {
    name: "Paid search agent",
    body: [
      "Reads Google Ads performance for every region, drafts keywords and ad copy, and checks competitors when someone asks. It only recommends. A person approves every change.",
    ],
    note: "Does the work of a paid media analyst",
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
