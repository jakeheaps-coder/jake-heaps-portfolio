/**
 * FAQ copy, single-sourced so Jake edits one file. Answers are in his voice;
 * the platforms + guarantee answers are drafts he'll refine. An array answer
 * renders as stacked paragraphs.
 */
export interface FaqItem {
  q: string;
  a: string | string[];
}

export const faq: FaqItem[] = [
  {
    q: "Is this for my company?",
    a: "The wins are real and visible in manufacturing, e-commerce, SaaS, education, and government, and inside almost any function with repetitive work: marketing, content, software, accounting, and finance. If a meaningful slice of your team's week is the same tasks run over and over, that's where AI pays off first.",
  },
  {
    q: "What does an engagement look like?",
    a: "It runs on three gears: strategy, education, and implementation, weighted to where you need them. Strategy is a prioritized plan. Education is your team learning to build, by sitting next to them. Implementation is production systems inside the tools you already use. The core operating system usually lands in about a month, and the fuller transformation runs one to three. Productivity climbs to roughly 1.5 to 2x on average, about 1.65x team-wide today, and as high as 3x for the heavy adopters.",
  },
  {
    q: "What do you guarantee?",
    a: [
      "Most clients care first about saving money, and that's where the ledger starts: software you stop paying for, work that stops needing more people, and a closed deal.",
      "The capability stays with your team. Your people own and run every system after I step back, so you're never dependent on me to keep it alive.",
      "We start with a fixed-scope first phase you can judge on real output before you commit to more.",
      "Everything ships through the same security, evaluation, and verification gates that put twenty-six systems into production safely.",
      "Every system is measured on your live work. If it doesn't move a number you chose, it doesn't ship.",
    ],
  },
  {
    q: "What AI platforms do you specialize in?",
    a: "I build on the major model and cloud platforms: Gemini and Vertex AI, Claude, and the orchestration around them. I work inside the tools and data platform you already pay for and get them to produce. New tools come in only when they clearly earn their place.",
  },
  {
    q: "Where are the biggest wins, cost or revenue?",
    a: "Cost first, and fastest. Software you stop paying for, work that stops needing more headcount, and hours handed back to your team. Revenue follows, and a closed deal is already in the first-year ledger, but the surest and soonest dollars are on the cost side.",
  },
  {
    q: "How do I know it'll stick after you leave?",
    a: "Because your people build it. Enablement is the work itself, so the systems keep running without me. The first team I did this with has operated on its own since May 2026.",
  },
];
