export interface TeamMember {
  role: string;
  department: string;
  workflow: string;
  tool: string;
}

export const teamRoster: TeamMember[] = [
  // Creative & Design
  {
    role: "Creative Director",
    department: "Creative & Design",
    workflow:
      "Automated the entire PowerPoint presentation process for individuals across the organization",
    tool: "Claude Code",
  },
  {
    role: "Sr. Motion Designer",
    department: "Creative & Design",
    workflow:
      "Utilized AI for the entirety of a major opening video and animation creation",
    tool: "Claude Code + AI Video",
  },
  {
    role: "Sr. Designer",
    department: "Creative & Design",
    workflow: "Creating variations of graphics and videos at scale",
    tool: "Claude Code",
  },
  {
    role: "Design Lead",
    department: "Creative & Design",
    workflow:
      "Utilizing components, code connect, and Figma MCP to completely automate website design and creation",
    tool: "Figma MCP + Claude Code",
  },
  {
    role: "Production Designer",
    department: "Creative & Design",
    workflow:
      "Automating scalability of assets, reduced 50 speaker cards from 3 hours to 10 minutes",
    tool: "Claude Code",
  },

  // Marketing Ops & Demand Gen
  {
    role: "Paid Media Manager",
    department: "Marketing Ops",
    workflow:
      "Optimizing paid media spend by connecting to GA4, Google Ads, and Search Console via AI",
    tool: "Claude Code",
  },
  {
    role: "SEO Specialist",
    department: "Marketing Ops",
    workflow:
      "Automated SEO optimization from 8 hours to 1 hour per batch using Webflow MCP",
    tool: "Webflow MCP + Claude Code",
  },
  {
    role: "CRO Specialist",
    department: "Marketing Ops",
    workflow:
      "Using an agent trained on CRO best practices and page data for conversion optimization",
    tool: "Custom AI Agent",
  },
  {
    role: "Events Manager",
    department: "Marketing Ops",
    workflow:
      "Automated the entire webinar process with daily follow-up from agents",
    tool: "Data platform + AI Agents",
  },
  {
    role: "Event Coordinator",
    department: "Marketing Ops",
    workflow:
      "Built a scheduler to help attendees get scheduled for breakouts using AI",
    tool: "Data platform + AI",
  },
  {
    role: "Digital Marketing Analyst",
    department: "Marketing Ops",
    workflow:
      "Utilizing AI in asset creation, event strategy, and overall research",
    tool: "Gemini Enterprise",
  },

  // Content & Communications
  {
    role: "VP, Corporate Communications",
    department: "Content & Comms",
    workflow:
      "Created specific agents for each communication type with custom guidelines",
    tool: "Custom AI Agents",
  },
  {
    role: "Content Strategists",
    department: "Content & Comms",
    workflow: "Using AI and the Knowledge Graph to create and audit content",
    tool: "Knowledge Graph + AI",
  },
  {
    role: "Email Marketing Specialist",
    department: "Content & Comms",
    workflow: "Using AI to generate email copy, briefs, and campaign assets",
    tool: "Gemini Enterprise",
  },
  {
    role: "Product Marketing Manager",
    department: "Content & Comms",
    workflow:
      "Created and using multiple agents, optimizing the product launch content process",
    tool: "Custom AI Agents",
  },

  // Web & Digital
  {
    role: "Sr. Web Developer",
    department: "Web & Digital",
    workflow: "Implemented Webflow MCP to automate website audits",
    tool: "Webflow MCP",
  },
  {
    role: "Web Developer",
    department: "Web & Digital",
    workflow:
      "Using code connect, Figma MCP, and Webflow MCP to ensure pages are built correctly",
    tool: "Figma + Webflow MCP",
  },
  {
    role: "Creative Technologist",
    department: "Web & Digital",
    workflow:
      "Using Claude Code to create animations and optimize the messaging knowledge base",
    tool: "Claude Code",
  },

  // Brand & Community
  {
    role: "Sr. Brand Manager",
    department: "Brand & Community",
    workflow:
      "All major event creative assets were influenced and created with AI",
    tool: "AI Creative Tools",
  },
  {
    role: "Community Manager",
    department: "Brand & Community",
    workflow:
      "Utilizing AI in community responses and working with the AI team on customer insights",
    tool: "Gemini Enterprise",
  },
  {
    role: "Content Distribution Specialist",
    department: "Brand & Community",
    workflow: "Using Notebook LM for content distribution workflows",
    tool: "Notebook LM + AI",
  },
  {
    role: "Sr. Blog Manager",
    department: "Brand & Community",
    workflow:
      "Implemented an AI content platform, automating the blog creation process end-to-end",
    tool: "AI content platform",
  },

  // Leadership & Strategy
  {
    role: "CMO",
    department: "Leadership",
    workflow:
      "Orchestrated the design and implementation of the department-wide AI adoption strategy",
    tool: "Strategic Leadership",
  },
  {
    role: "Executive Assistant to CMO",
    department: "Leadership",
    workflow:
      "Utilizing Gemini Enterprise and Claude for calendar organization and communications",
    tool: "Gemini + Claude",
  },
  {
    role: "Presentation Specialist",
    department: "Leadership",
    workflow: "Utilizing AI to create complete slide decks end-to-end",
    tool: "AI Presentation Tools",
  },
];
