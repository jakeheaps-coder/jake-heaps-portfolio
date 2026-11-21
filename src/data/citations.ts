/**
 * The external sources cited across the site. These are the only third-party
 * numbers on the site and they carry their links inline. URLs match the ones
 * already live in the legacy page.
 */
export interface Citation {
  id: string;
  href: string;
  /** Short label for the source, used in mono margin notes. */
  source: string;
}

export const citations: Record<string, Citation> = {
  mckinsey: {
    id: "mckinsey",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value",
    source: "McKinsey, State of AI",
  },
  stanford: {
    id: "stanford",
    href: "https://digitaleconomy.stanford.edu/app/uploads/2026/03/EnterpriseAIPlaybook_PereiraGraylinBrynjolfsson.pdf",
    source: "Stanford Digital Economy Lab",
  },
  fortune: {
    id: "fortune",
    href: "https://fortune.com/2026/05/11/what-microsoft-research-tells-cfo-roi-ai/",
    source: "Fortune, on Microsoft research",
  },
  gallup: {
    id: "gallup",
    href: "https://www.gallup.com/workplace/704225/rising-adoption-spurs-workforce-changes.aspx",
    source: "Gallup",
  },
  techrepublic: {
    id: "techrepublic",
    href: "https://www.techrepublic.com/article/news-bissell-ai-workflows-two-day-build-domo/",
    source: "TechRepublic",
  },
};
