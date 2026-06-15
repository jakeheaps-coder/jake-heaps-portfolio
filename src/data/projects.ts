export type ProjectCategory =
  | "agents"
  | "displacement"
  | "infrastructure"
  | "creative"
  | "revenue"
  | "operations"
  | "education"
  | "personal";

export type ProjectKind = "system" | "artifact";

export interface Project {
  name: string;
  category: ProjectCategory;
  /** system = production software in use; artifact = video/deck/course/docs */
  kind: ProjectKind;
  description: string;
  roi: string;
  tech: string[];
  screenshot?: string;
  link?: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  agents: "Enterprise AI Agents",
  displacement: "Vendor Displacement",
  infrastructure: "Knowledge & Infrastructure",
  creative: "Creative & Media Production",
  revenue: "Sales & Revenue",
  operations: "Operations & Automation",
  education: "Education & Enablement",
  personal: "Personal / Side Projects",
};

export const categoryColors: Record<ProjectCategory, string> = {
  agents: "bg-crimson",
  displacement: "bg-gold",
  infrastructure: "bg-steel",
  creative: "bg-crimson",
  revenue: "bg-navy",
  operations: "bg-steel",
  education: "bg-gold",
  personal: "bg-navy",
};

export const projects: Project[] = [
  // Enterprise AI Agents
  {
    name: "Paid Search Agent",
    category: "agents",
    kind: "system",
    description:
      "Paid media analyst and optimization specialist. Google Ads analysis, keyword generation, ad copy, competitor analysis. 24 tools across 6 regional datasets.",
    roi: "$80–120K/yr analyst equivalent",
    tech: ["Gemini 2.5 Flash", "Vertex AI ADK", "Google Ads API", "Domo"],
  },
  {
    name: "CMO Marketing Intelligence",
    category: "agents",
    kind: "system",
    description:
      "Executive marketing brain for the CMO. Strategic reasoning engine with attribution, funnel analysis, and ROI modeling. 20 tools, 110-question regression suite gating every deploy.",
    roi: "2–3 analyst functions consolidated",
    tech: ["Gemini 2.5 Flash", "Vertex AI ADK", "Domo", "Salesforce"],
  },
  {
    name: "Competitive Intel Agent",
    category: "agents",
    kind: "system",
    description:
      "AI competitive intelligence analyst. Battle cards, M&A tracking, sales enablement. 23 tools, 18 competitors tracked daily with live internet research.",
    roi: "$100K+/yr analyst displaced",
    tech: ["Gemini 2.5 Flash", "Vertex AI ADK", "Domo AppDB"],
  },
  {
    name: "Sales Discovery Agent",
    category: "agents",
    kind: "system",
    description:
      "Sales discovery coach using a structured questioning framework. Generates 10–20 open-ended discovery questions with real-time adaptation from prospect responses. 11 graph-database tools.",
    roi: "AE ramp time reduced",
    tech: ["Gemini 2.5 Flash", "Vertex AI ADK", "Knowledge Graph API"],
  },
  {
    name: "MarketingHub",
    category: "agents",
    kind: "system",
    description:
      "Multi-agent router that delegates to specialized agents (Competitive Intel, Knowledge Graph Assistant). Orchestration layer enabling agents to work as a coordinated system.",
    roi: "One interface for all marketing AI",
    tech: ["Gemini", "Vertex AI ADK", "Multi-agent routing"],
  },
  {
    name: "Creative Asset System",
    category: "agents",
    kind: "system",
    description:
      "Gemini Enterprise agent generating brand-compliant creative across 6 output types: images, emails, presentations, SVG/vector, video, and social assets.",
    roi: "$50–100K/yr agency reliance cut",
    tech: ["Gemini", "Vertex AI ADK", "Creative MCP Server", "Veo 3.1"],
  },
  {
    name: "Agent Factory",
    category: "agents",
    kind: "system",
    description:
      "AI agent inside Domo that builds other AI agents. Meta-tool: describe what you need, and it designs, builds, tests, and deploys the agent. 91% test pass rate.",
    roi: "Agent creation: weeks to hours",
    tech: ["Domo Code Engine", "Domo Workflows", "AppDB", "Custom Apps"],
  },
  {
    name: "One Chat Agent",
    category: "agents",
    kind: "system",
    description:
      "Unified front-line agent connecting knowledge base, community, website, CRM, and support. One interface for all customer-facing interactions: the single pane of glass for customer engagement.",
    roi: "Support channels consolidated",
    tech: ["Gemini", "Vertex AI ADK", "Knowledge Graph", "Domo"],
  },
  {
    name: "Stock Distribution Agent",
    category: "agents",
    kind: "system",
    description:
      "Built for the HR and finance teams under their access controls: monitors employee stock distributions, departures, tax-document deadlines, and compliance events. Automated tracking of equity-related workflows.",
    roi: "Manual equity tracking automated",
    tech: ["Gemini", "Vertex AI ADK", "Domo Workflows"],
  },
  {
    name: "AI Onboarding Experience",
    category: "agents",
    kind: "system",
    description:
      "Onboards new customers with AI-guided training checklists, product tours, and personalized enablement paths. Adapts to each customer's use case and maturity level.",
    roi: "Onboarding scaled, no added roles",
    tech: ["Gemini", "Vertex AI ADK", "Domo", "Custom Apps"],
  },
  {
    name: "Rooster IQ",
    category: "agents",
    kind: "system",
    description:
      "Brand intelligence watcher for the executive team. Monitors market trends, brand sentiment, competitor moves, voice of customer, and AI industry developments in real time.",
    roi: "Always-on brand intelligence",
    tech: ["Gemini", "Vertex AI ADK", "Domo AppDB", "Web Scraping"],
  },
  {
    name: "Live Translator Agent",
    category: "agents",
    kind: "system",
    description:
      "Real-time call translation agent enabling cross-language conversations during live meetings and customer calls. Bidirectional audio translation with minimal latency.",
    roi: "Language barriers removed",
    tech: ["Gemini", "Google Cloud STT", "LiveKit", "Python"],
  },

  // Vendor Displacement
  {
    name: "DAM Platform (Vendor Replacement)",
    category: "displacement",
    kind: "system",
    description:
      "Domo-native Digital Asset Management platform replacing an enterprise DAM vendor. 35K+ documents migrated with zero mismatches. 87 Code Engine functions, full ACL permission layer.",
    roi: "Mid-five-figure license displaced",
    tech: [
      "Domo Fileset",
      "AppDB",
      "Code Engine",
      "Custom Apps",
      "SQL DataFlows",
    ],
    screenshot: "screenshots/asset-library.png",
  },
  {
    name: "Employee Recognition Platform",
    category: "displacement",
    kind: "system",
    description:
      "Domo-native employee recognition and rewards platform. Nomination approvals, spot-bonus routing, anniversary tiers, budget management. 125 live budgets, 34/34 tests passing.",
    roi: "Five-figure license displaced",
    tech: ["Domo Custom Apps", "Code Engine", "Workflows", "AppDB"],
  },
  {
    name: "Signal Platform (AI SDR)",
    category: "displacement",
    kind: "system",
    description:
      "AI-powered SDR platform replacing a six-figure sales engagement tool. Chat widget, form interceptor, calendar booking, AI avatar modal. Full prospect qualification and meeting scheduling.",
    roi: "$36K–130K/yr platform displaced",
    tech: ["Flask", "Gemini 2.5 Flash", "SocketIO", "React", "Domo AppDB"],
  },
  {
    name: "Media Relations Platform",
    category: "displacement",
    kind: "system",
    description:
      "Proactive AI media relations replacing a PR platform. Scans 17 RSS feeds daily, scores stories for company angle credibility, auto-generates pitches in 3 formats (interview, byline, Q&A).",
    roi: "Five-figure PR license displaced",
    tech: ["Python", "Gemini", "RSS", "Domo Workflows"],
  },

  // Knowledge & Infrastructure
  {
    name: "Knowledge Graph + Figma Plugin",
    category: "infrastructure",
    kind: "system",
    description:
      "Graph database storing product messaging, competitive intelligence, and industry data. 55-tool API powering all agents. Custom Figma plugin connecting designers directly to on-brand messaging.",
    roi: "$65K/yr license equivalent",
    tech: ["Graph Database", "Python", "Flask", "React", "Figma Plugin API"],
  },
  {
    name: "MCP Servers (3)",
    category: "infrastructure",
    kind: "system",
    description:
      "Three Model Context Protocol servers: Creative (image/video generation with brand enforcement), Knowledge Graph (23 tools), and Data Platform (146 tools, 647 endpoints).",
    roi: "Powers all agent/creative systems",
    tech: ["Python", "MCP Protocol", "Serverless Containers", "OAuth"],
  },
  {
    name: "Domo Toolkit & Onboarding",
    category: "infrastructure",
    kind: "artifact",
    description:
      "Shared documentation platform and GitHub Pages onboarding site for the marketing team. Platform catalog, best practices, and getting-started guides.",
    roi: "Knowledge transfer scaled past 1:1",
    tech: ["GitHub Pages", "Markdown", "Domo APIs"],
  },

  // Creative & Media Production
  {
    name: "CEO Keynote (AI Graphics)",
    category: "creative",
    kind: "artifact",
    description:
      "All AI-generated graphics for the CEO's keynote presentation. 100+ slides of professional presentation graphics produced entirely with AI.",
    roi: "$20–50K/event agency cost avoided",
    tech: ["Gemini", "AI Image Generation", "Presentation Design"],
    link: "https://youtu.be/7HvOlSnfubQ",
  },
  {
    name: "Build-First AI Agent (Video)",
    category: "creative",
    kind: "artifact",
    description:
      "Complete polished video tutorial teaching viewers to build their first AI agent. 15+ iterations refined to a final cut. Entirely AI-produced: script, visuals, voiceover.",
    roi: "Fraction of studio production cost",
    tech: ["AI Video", "HeyGen", "Remotion", "FFmpeg"],
  },
  {
    name: "One Health Solutions Video",
    category: "creative",
    kind: "artifact",
    description:
      "Client-facing video showcasing AI transformation results, presented at a major company event.",
    roi: "Client engagement + event content",
    tech: ["AI Video Production", "Remotion"],
  },
  {
    name: "Gemini Agent Animations",
    category: "creative",
    kind: "artifact",
    description:
      "Animated agent demonstrations featured in the Google Cloud partner keynote. Head of AI GTM at Google Cloud presented these on stage.",
    roi: "Google Cloud keynote feature",
    tech: ["Remotion", "React", "Motion Graphics"],
    link: "https://www.domo.com/domopalooza/resources/partner-keynote-from-jim-fairweather-head-of-ai-gtm-google-cloud",
  },
  {
    name: "Video Pipeline",
    category: "creative",
    kind: "system",
    description:
      "Scalable AI-avatar video production system. Script generation via Knowledge Graph, AI avatar rendering, multi-format output (16:9, 9:16, vertical). Avatar registry for consistent branding.",
    roi: "Video: 16 hrs to 1 hr 15 min",
    tech: ["HeyGen", "Knowledge Graph", "Python", "FFmpeg"],
  },
  {
    name: "Board & Executive Presentations",
    category: "creative",
    kind: "artifact",
    description:
      "Countless AI-crafted presentations for board meetings, executive reviews, and stakeholder briefings. Strategy narratives, data visualizations, and talking points, all AI-assisted at scale.",
    roi: "Presentations at scale, no agency",
    tech: ["Gemini", "python-pptx", "AI Image Generation", "Domo"],
  },

  // Sales & Revenue
  {
    name: "Sales Navigator",
    category: "revenue",
    kind: "system",
    description:
      "Real-time AI sales coaching desktop app. Captures two-channel audio (rep + prospect), streams to speech recognition, delivers real-time coaching via AI overlay invisible on screen-share.",
    roi: "AE ramp cut, close rates improved",
    tech: [
      "Electron",
      "React",
      "Flask",
      "Google Cloud STT",
      "Gemini 2.5 Flash",
    ],
  },
  {
    name: "AI Outbound Engine",
    category: "revenue",
    kind: "system",
    description:
      "Full automated outbound pipeline. Multi-stage: discover, enrich, sequence, agent feedback, converted prospect. Orchestrates data platform + Apollo for end-to-end prospecting.",
    roi: "End-to-end outbound orchestration",
    tech: ["Domo", "Apollo.io", "Gemini", "JavaScript"],
    screenshot: "screenshots/outbound-engine.png",
  },
  {
    name: "SAVOS Law Outreach",
    category: "personal",
    kind: "system",
    description:
      "Automated law firm outreach: Google Places + Apollo discovery, SEMrush audit, Claude Agent SDK mockup generation, Apollo cadence enrollment. 5-stage idempotent pipeline.",
    roi: "Automated client acquisition",
    tech: [
      "Python",
      "Claude Agent SDK",
      "Apollo.io",
      "SEMrush",
      "Google Places",
    ],
  },
  {
    name: "Deck Builder",
    category: "revenue",
    kind: "system",
    description:
      "Automated PowerPoint generation from templates + data. Turns structured data into polished presentation decks without manual slide creation.",
    roi: "Deck creation: hours to minutes",
    tech: ["Python", "python-pptx", "Domo APIs"],
  },

  // Operations & Automation
  {
    name: "Weekly Executive Report",
    category: "operations",
    kind: "system",
    description:
      "Automated CMO Friday report. Collects from SharePoint (Excel, Word) + Domo dashboards (cards + screenshots), generates Word + PowerPoint output via AI.",
    roi: "4–6 hrs/wk saved (~$15K/yr)",
    tech: ["Python", "Gemini", "MSAL", "SharePoint", "Domo API", "Playwright"],
  },
  {
    name: "Domo Monitoring Agents",
    category: "operations",
    kind: "system",
    description:
      "Autonomous system health monitoring. Checks service health, data quality, git repos, toolkit sync, and cookie expiration. Hourly via launchd, alerts via email.",
    roi: "Production incidents prevented",
    tech: ["Python", "launchd", "Email", "Domo APIs"],
  },
  {
    name: "Tracking Workflow (News Monitor)",
    category: "operations",
    kind: "system",
    description:
      "Two-workflow media monitoring system. Topic-continuity digest, airtight dedup, deterministic ticker-spam filter, SSRF host-resolution. 90-agent security audit remediated.",
    roi: "Zero manual media monitoring",
    tech: ["Domo Workflows", "Code Engine", "Gemini"],
  },
  {
    name: "Marketing Bundle",
    category: "operations",
    kind: "artifact",
    description:
      "Bundled agent suite: Paid Search Agent + Competitive Intel + Knowledge Graph Assistant + MarketingHub router. Complete AI operating system for the marketing team.",
    roi: "Marketing's AI operating system",
    tech: ["Gemini Enterprise", "Vertex AI", "Multi-agent"],
  },

  // Education & Enablement
  {
    name: "Team Onboarding Course (15 modules)",
    category: "education",
    kind: "artifact",
    description:
      "Complete interactive onboarding course for the team. 15 modules covering tooling, accounts, vocabulary, operations, deployments, visuals, and projects, so the marketing team runs the systems independently.",
    roi: "The team runs it independently",
    tech: ["Interactive Docs", "GitHub Pages", "Try-it Checkpoints"],
  },
  {
    name: "575+ AI Skills & Workflows",
    category: "education",
    kind: "artifact",
    description:
      "The aggregate output of the education program. 575+ production AI workflows built and deployed across the team. Not ChatGPT prompts. Specific, repeatable, role-based processes.",
    roi: "Education program scorecard",
    tech: ["Claude Code", "Gemini Enterprise", "Domo", "Various"],
  },
  {
    name: "AgentGuide",
    category: "education",
    kind: "artifact",
    description:
      "Framework and guide for building AI agents inside the data platform. Democratizes agent creation so anyone on the team can build, not just the AI lead.",
    roi: "Anyone can build agents",
    tech: ["Domo", "Documentation", "Templates"],
  },
  {
    name: "Front-End Sites (14)",
    category: "education",
    kind: "system",
    description:
      "Internal tools: operations consoles, agent showcases, monitoring dashboards, an executive reporting app, a messaging knowledge base, and more, fourteen in total. All React + Vite or Next.js.",
    roi: "$70–210K agency cost avoided",
    tech: ["React", "Next.js", "Vite", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "Claudeopedia",
    category: "personal",
    kind: "system",
    description:
      "Personal LLM-powered knowledge base with Obsidian frontend. RSS feed aggregation, wiki article generation, Q&A interface. 10+ automated jobs for continuous learning.",
    roi: "Personal knowledge system",
    tech: ["Python", "Obsidian", "LLM", "launchd", "RSS"],
  },

  // Personal / Side Projects
  {
    name: "CrowdSync AI DJ",
    category: "personal",
    kind: "system",
    description:
      "Autonomous AI wedding DJ. Custom C++ Mixxx fork with state readback IPC, 126 MIDI mappings, 12 transition techniques, wedding brain (11 phases), crowd perception (YOLO + MediaPipe + Gemini). 4.77/5.0 rubric score.",
    roi: "Full C++ fork + real-time AI brain",
    tech: ["C++", "Python", "MIDI", "YOLO", "MediaPipe", "Gemini", "Mixxx"],
  },
  {
    name: "Land Engine",
    category: "personal",
    kind: "system",
    description:
      "AI-powered property due diligence SaaS for Utah developers. Credit-based reports ($10–65), 60-second pipeline, 16 external data sources (UGRC, ATTOM, FEMA, EPA, Census). 209 tests.",
    roi: "Full SaaS: auth, payments, API",
    tech: ["FastAPI", "Next.js 16", "Stripe", "Vercel", "GCP"],
  },
];

/* Derived counts — headline stats come from here, never hand-typed. */
export const productionSystems = projects.filter(
  (p) => p.kind === "system" && p.category !== "personal",
);
export const systemCount = productionSystems.length;
