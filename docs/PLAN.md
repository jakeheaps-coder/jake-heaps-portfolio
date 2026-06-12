# Plan: Jake Heaps Personal Portfolio — AI Transformation Resume

> This is the original specification document created during the planning/grilling phase. It captures all decisions, content rules, architecture choices, and verification checklists that guided the portfolio build.

## Context

Jake needs a comprehensive personal portfolio/resume as a **GitHub Pages single-page scroll site** showcasing everything he's built, the strategy behind it, and the teams he's transformed. The existing 3-pillar Domo case study (Strategy / Transformation / Education) stays as the **centerpiece**, but the site wraps it in a broader portfolio with all projects, external clients, videos, screenshots, and ROI metrics.

**This is NOT "someone who's good with Claude Code."** This is a strategic AI leader who designs frameworks, builds production systems, displaces vendors, generates pipeline, and transforms non-technical teams into AI builders.

**Positioning (updated):** Fractional Chief AI Officer — without using that title. The portfolio should make a CEO say "I need this person running our AI strategy." The work speaks for itself: 9 enterprise clients, 40+ production systems, $300K+ displaced, 93% adoption, 2,000+ hours of AI research and implementation. The title stays "AI Strategy & Transformation Leader" — the intro, framing, and enterprise breadth do the CAIO positioning.

**Audience:** C-suite hiring managers, AI/tech leadership, consulting prospects — all at once.

**Key decisions from grilling:**
- Format: GitHub Pages, single-page smooth-scroll
- Depth: Mini case studies per project (problem -> built -> result -> screenshot)
- Projects: All presented equally (no POC/production tiering)
- ROI: Cost avoidance framing for everything. Estimates OK. Abstract confidential numbers.
- Client logos: Download official SVGs. Bissell gets a deep section (TechRepublic article). Rest get logo + brief.
- 93% stat: Backed by full 28-person roster (anonymized by role, not name)
- Strategy proof: Three-ingredient formula + decision log + failures-as-insight
- KG cost: $65K/yr annual license equivalent
- Media: Case study graphics, build-first-agent-v14 video, Jim Fairweather/Josh James keynote links, key project screenshots. Selective, not exhaustive.
- Visual: Personal brand (NOT Domo brand). Red, blue, gold palette. No yellow/green/purple.
- Structure: Single page, section scroll with nav

---

## 1. Personal Brand System

### Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#0F1B2D` | Hero bg, section dividers, footer |
| Crimson | `#C41E3A` | CTAs, highlight badges, active nav |
| Gold | `#C9A84C` | Achievement markers, premium accents, metric numbers |
| Steel Blue | `#4A7C9B` | Links, secondary buttons, tech badges |
| Slate | `#1E293B` | Body text |
| Light | `#F7F8FA` | Alternating section backgrounds |
| White | `#FFFFFF` | Cards, primary backgrounds |

### Typography (Google Fonts, free)
- **Headings:** Plus Jakarta Sans (700, 800)
- **Body:** Inter (400, 500)
- **Monospace:** JetBrains Mono

### Design Principles
- Dark hero + alternating light/dark sections for scroll rhythm
- Cards with subtle gold border-top for project items
- Crimson for all CTAs and interactive elements
- Counters/metrics always in Gold
- Generous whitespace, 1200px max content width
- Smooth scroll with sticky nav that highlights current section

---

## 2. Site Architecture (Single-Page Scroll)

### Section 1: Hero
- Full-viewport dark navy background
- Jake's name (large), title: "AI Strategy & Transformation Leader"
- Tagline: "I design AI operating systems for enterprises — from strategy to production to org-wide adoption"
- 6 headline metrics in gold (animated count-up on scroll), 2 rows of 3:
  - **2,000+** hours of AI research & implementation
  - **40+** production systems built
  - **93%** team AI adoption rate
  - **$300K+** annual software displaced
  - **7-figure** AI-attributed pipeline
  - **9** enterprise engagements
- Subtitle: "1,000+ hours of AI strategy research. 1,000+ hours of Claude Code implementation."

### Section 2: Client Logos
- Light background
- Heading: "AI Transformation — Select Engagements"
- Logo grid: Domo (featured), Bissell, Manscaped, Cox Automotive, Thryv, Carvana, Roku, Foot Locker, One Health Solutions
- Bissell has "Featured in TechRepublic" badge

### Section 3: The Domo Story (CENTERPIECE — 3 Pillars)

#### 3a: Strategy
- Three-Ingredient Formula (mindset -> enablement -> tools)
- Operating Model (hub-and-spoke, 3-tier, 8-factor priority matrix)
- Research credential: 1,000+ hours
- Decision Log (5 strategic decisions with rationale)
- What Didn't Work (4 failures as strategic insight)
- The Pattern: every failure = trying to scale without human readiness first

#### 3b: Transformation
- Timeline: Jun 2025 -> May 2026 (Foundation -> Enablement -> Infrastructure -> Gemini -> Scaling -> Transfer)
- Task-level improvements table (video 85-92%, creative SLA 80%+, webinar 90%, SEO 87%, speaker cards 94%)
- Standout projects (CMO Intelligence, DAM Replacement, Knowledge Graph, Paid Search Agent)

#### 3c: Education
- Training vs. Enablement comparison
- 93% Adoption Roster (28 members, filterable by department)
- Human Stories (Wes Holley, Milo Bush, Mark Boothe)
- The 93% result callout

### Section 4: Project Portfolio
40+ projects across 8 categories:
- Enterprise AI Agents (12)
- Vendor Displacement (4)
- Knowledge & Infrastructure (3)
- Creative & Media Production (6)
- Sales & Revenue (4)
- Operations & Automation (4)
- Education & Enablement (5)
- Personal / Side Projects (2)

Each project card: name, category badge, 2-3 sentence description, ROI metric, tech stack badges, optional screenshot/link.

### Section 5: External Validation
- TechRepublic: Bissell AI Workflows Two-Day Build
- Google Cloud Partner Keynote: Jim Fairweather
- CEO Keynote: Josh James (YouTube)
- Build-First AI Agent Video (embedded)

### Section 6: Tech Stack
7 categories: AI/ML, Cloud, Data, Frontend, Backend, APIs & Protocols, DevOps & Tools

### Section 7: About & Contact
- Mark Boothe quote: "One of the best hires I've made in my entire career."
- Summary paragraph
- CTA buttons: Get In Touch (email) + LinkedIn
- Footer with copyright

---

## 3. ROI Framework

Every project gets a cost-avoidance number:
1. Vendor displacement: equivalent SaaS license cost
2. Agency avoidance: agency build cost
3. FTE equivalent: analyst/developer hours replaced
4. Time savings: hours saved x blended rate

**Aggregate metrics (safe to state):**
- $300K+ annual software displacement
- Seven-figure AI-attributed pipeline
- 264-273 hours/week team productivity gains
- 93% adoption rate

---

## 4. Media Assets Included

**Embedded video (1):** `build-first-agent-v14.mp4` (11 MB) in `public/video/`

**External video links (2):**
- Jim Fairweather Google keynote (domo.com)
- Josh James CEO keynote (YouTube)

**Case study charts (4):** in `public/charts/`
- `01_survey_data.png`, `02_timeline.png`, `03_software_displacement.png`, `04_operating_model.png`

**Project screenshots (5):** in `public/screenshots/`
- `dam-browse.png`, `awardco-welcome.png`, `awardco-dashboard.png`, `outbound-engine.png`

**Company logos (9):** in `public/logos/`
- domo.svg, bissell.svg, manscaped.svg, cox-automotive.webp, thryv.png, carvana.png, roku.png, foot-locker.png, one-health-solutions.png

---

## 5. Project Details (All 40+)

### Enterprise AI Agents (12)
| Project | Description | ROI |
|---------|-------------|-----|
| Paid Search Agent | Paid media analyst. 24 tools, 6 regional datasets. | $80-120K/yr analyst equivalent |
| CMO Marketing Intelligence | Executive marketing brain. 20 tools, 110-question test suite, 100% pass. | Consolidates 2-3 analyst functions |
| Competitive Intel Agent | Battle cards, M&A tracking. 23 tools, 18 competitors daily. | $100K+/yr analyst + research |
| ADM Discovery Agent | Sales discovery coach. 11 KG tools, real-time adaptation. | Reduces AE ramp time |
| MarketingHub | Multi-agent router. | Unified agent access |
| Creative Asset System | 6 output types: image, email, PPTX, SVG, video, social. | $50-100K/yr agency dependency |
| Agent Factory | AI that builds AI agents. 91% test pass rate. | Weeks to hours for agent creation |
| One Chat Agent | Unified front-line agent: KB, community, website, CRM, support. | Consolidates support channels |
| Stock Distribution Agent | Equity tracking: distributions, departures, tax docs, compliance. | Automates HR/finance tracking |
| AI Onboarding Experience | AI-guided training checklists, product tours, enablement paths. | Scales onboarding without headcount |
| Rooster IQ | Brand intelligence: trends, sentiment, competitors, VOC, AI news. | Always-on market intelligence |
| Live Translator Agent | Real-time call translation for live meetings. | Removes language barriers |

### Vendor Displacement (4)
| Project | What It Replaced | ROI |
|---------|-----------------|-----|
| DAM Platform | Enterprise Digital Asset Management | Mid-five-figure annual license. 35K+ docs, zero mismatches. |
| Employee Recognition (RecognizeHQ) | Rewards platform | Five-figure annual license. 125 budgets, 34/34 tests. |
| Signal Platform (AI SDR) | AI SDR platform | Six-figure ($36K-130K/yr range). Chat + calendar + form. |
| Media Relations Platform | PR platform | Five-figure annual. 17 RSS feeds, 3 pitch formats. |

### Knowledge & Infrastructure (3)
| Project | Description | ROI |
|---------|-------------|-----|
| Knowledge Graph + Figma Plugin | Graph DB + 55-tool API + Figma plugin | $65K/yr license equivalent |
| MCP Servers (3) | Creative, KG, Data Platform MCPs | Infrastructure for all agents |
| Domo Toolkit & Onboarding | Docs platform + GitHub Pages | Scales knowledge transfer |

### Creative & Media Production (6)
| Project | Description | ROI |
|---------|-------------|-----|
| CEO Keynote (AI Graphics) | 100+ slides, all AI-generated | $20-50K per event |
| Build-First AI Agent (Video) | 15+ iterations, AI-produced | Fraction of studio cost |
| One Health Solutions Video | Client video for company event | Client engagement |
| Gemini Agent Animations | Google Cloud partner keynote | External validation |
| Video Pipeline | HeyGen + KG script generation | 16hrs to 1hr 15min |
| Board & Executive Presentations | Countless AI-crafted presentations | No agency dependency |

### Sales & Revenue (4)
| Project | Description | ROI |
|---------|-------------|-----|
| Sales Navigator | Real-time AI coaching, Electron app | Reduces AE ramp |
| AI Outbound Engine | Full Domo + Apollo pipeline | Multi-system orchestration |
| SAVOS Law Outreach | 5-stage idempotent pipeline | Automated acquisition |
| Deck Builder | Template + data -> PowerPoint | Hours to minutes |

### Operations & Automation (4)
| Project | Description | ROI |
|---------|-------------|-----|
| Weekly Executive Report | SharePoint + Domo -> Word + PPTX | 4-6 hrs/week (~$15K/yr) |
| Domo Monitoring Agents | Health, data quality, git, toolkit | Prevents incidents |
| Tracking Workflow | Media monitoring, dedup, digest | Automated awareness |
| Marketing Bundle | Bundled agent suite | Complete AI operating system |

### Education & Enablement (5)
| Project | Description | ROI |
|---------|-------------|-----|
| Replacement Training | 15-module successor course | Built himself out of the job |
| 575+ AI Skills | Production workflows across team | Education scorecard |
| AgentGuide | Framework for building agents | Democratizes agent creation |
| Front-End Sites (14) | Internal tools | $70-210K total agency equivalent |
| Claudeopedia | LLM knowledge base + Obsidian | Personal knowledge system |

### Personal / Side Projects (2)
| Project | Description | ROI |
|---------|-------------|-----|
| CrowdSync AI DJ | C++ Mixxx fork, 126 MIDI mappings, crowd perception | Full C++ + Python AI brain |
| Land Engine | Property due diligence SaaS, 209 tests | Full SaaS product |

---

## 6. Confidentiality Verification Checklist

### MUST NOT appear (grep before deploy):
- $45, $45/hr, $832K, $13M, $6M ACV
- 28-person, 26 of 28, 32 respondents, 26 respondents
- Aprimo, Salesloft, ZoomInfo, Neo4j, Cloud Run
- board of directors, Finance review
- backfill, attrition, headcount reduction

### Pre-Deploy Script
```bash
./scripts/check-confidentiality.sh
```

---

## 7. Tech Stack

- **Vite + React 19 + TypeScript 6 + Tailwind CSS v4**
- **Framer Motion** for scroll animations
- **react-intersection-observer** for trigger animations
- **gh-pages** for deployment
- **WeasyPrint + Jinja2** for PDF generation
- **Google Fonts CDN** for typography

---

## 8. "More Than Claude Code" Framework

The portfolio proves Jake operates at three levels:

**Strategy Level:** Designed the three-ingredient framework, made build/buy decisions for 4+ vendor displacements, chose marketing as proving ground, identified failure patterns, created enterprise scaling playbook.

**Implementation Level:** 12 production Gemini agents, graph database + API, Domo platform (Code Engine, Workflows, AppDB), Google Cloud, React/Next.js/Electron, MCP servers, Python/TypeScript/Flask/FastAPI, video production pipeline.

**Education Level:** 93% adoption across non-technical team, named human stories, 15-module replacement training, 575+ skills, toolkit and onboarding docs. Built himself out of the job.

---

## 9. PDF Version

Same content, optimized for print:
- Video embeds -> clickable links
- Animated counters -> static gold numbers
- Scroll animations -> removed
- Filter pills -> all projects shown by category
- Nav -> implied by section headers
- Logos -> base64 embedded images
- Mark Boothe quote -> centered gold text before CTA
- 13 pages, letter size, page numbers in footer
