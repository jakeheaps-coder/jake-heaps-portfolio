# Portfolio Project — Full Handoff Context

> This document is the self-contained reference for continuing work on Jake Heaps' AI portfolio site and PDF. It assumes partial Claude Code setup (CLI installed, but not all custom skills/agents/playbooks from the original machine).

## Project Overview

**What:** Personal portfolio/resume showcasing Jake Heaps' AI transformation work — strategy, implementation, and education across 9 enterprise clients with 40+ production systems.

**Two output formats:**
1. **Website** — GitHub Pages single-page scroll site with animations, embedded video, interactive filters
2. **PDF** — 13-page print-optimized document with clickable links, same data as the site

**Positioning:** Fractional Chief AI Officer credibility — without using that title. The title stays "AI Strategy & Transformation Leader." The work speaks for itself.

**Audience:** C-suite hiring managers, AI/tech leadership, consulting prospects.

**Live URL:** https://jakeheaps-coder.github.io/jake-heaps-portfolio/
**Repo:** https://github.com/jakeheaps-coder/jake-heaps-portfolio.git

---

## Brand System

This is Jake's **personal brand**, NOT the Domo brand (Domo Blue #99CCEE is not used here).

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#0F1B2D` | Hero bg, section dividers, footer |
| Crimson | `#C41E3A` | CTAs, highlight badges, active nav |
| Gold | `#C9A84C` | Achievement markers, premium accents, metric numbers |
| Steel Blue | `#4A7C9B` | Links, secondary buttons, tech badges |
| Slate | `#1E293B` | Body text |
| Light | `#F7F8FA` | Alternating section backgrounds |
| White | `#FFFFFF` | Cards, primary backgrounds |

### Typography (Google Fonts CDN)

| Role | Font | Weights |
|------|------|---------|
| Headings | Plus Jakarta Sans | 700, 800 |
| Body | Inter | 400, 500 |
| Code/Tech | JetBrains Mono | 400 |

### Design Principles
- Dark hero + alternating light/dark sections for scroll rhythm
- Cards with subtle gold border-top for project items
- Crimson for all CTAs and interactive elements
- Counters/metrics always in Gold
- Generous whitespace, max-w-5xl (1200px) content width
- Smooth scroll with sticky nav highlighting current section

---

## Confidentiality Rules

### Tier 1: Hard Numbers (NEVER share)
- `$45` or `$45/hr` (internal blended rate)
- `$832K` or `$832,000` (internal budget figure)
- `$13M` or `$13 million` (internal revenue figure)
- `$6M` or `$6M ACV` (specific deal size)
- `28-person` or `26 of 28` (exact headcount)
- `32` or `26` respondents (exact survey counts)
- Any exact vendor contract values

### Tier 2: Named Entities (abstract or remove)
- `Aprimo` → "enterprise DAM platform"
- `Salesloft` → "sales engagement platform"
- `ZoomInfo` → "data enrichment platform"
- `Qualified` → "AI SDR platform" (but Qualified.com pricing is public, ranges OK)
- `Neo4j` → "graph database"
- `Cloud Run` → "serverless containers"
- `board of directors` → never reference
- `Finance review` → never reference

### Tier 3: Sensitive Context (reframe)
- No references to backfills, attrition, or headcount reduction
- No peer comparisons (Shopify/Klarna/HubSpot)
- No direct quotes attributed to Jake (endorsement quotes from others are OK)
- No internal org chart details beyond "~30-person marketing org"

### Tier 4: External Client Confidentiality
- No specific revenue/cost numbers for external clients
- No proprietary client data or internal systems described
- Bissell details limited to public TechRepublic article content
- No NDA-covered deliverables described

### Safe to Include
- 93% adoption rate, 575+ skills, $300K+ displacement, 7-figure pipeline
- All project names (Jake's work, not proprietary)
- Wes Holley, Milo Bush, Mark Boothe (named with permission)
- Three-ingredient formula (Jake's framework)
- All external URLs (TechRepublic, YouTube, Domo.com)
- ROI ranges/estimates (not exact internal figures)
- Team roster (anonymized by role)

### Pre-Deploy Check
Run `./scripts/check-confidentiality.sh` before every deploy. Exits 1 if any forbidden term found.

---

## Site Architecture

Single-page scroll with 9 sections:

| # | Section | Component | Data Source | Notes |
|---|---------|-----------|-----------|-------|
| 1 | Hero | `Hero.tsx` | `metrics.ts` | 6 animated count-up metrics, tagline, badge |
| 2 | Clients | `ClientLogos.tsx` | inline array | 9 company logos with actual images |
| 3 | Strategy | `DomoStory/Strategy.tsx` | inline | Three-ingredient formula, decision log, failures, "what didn't work" |
| 4 | Transformation | `DomoStory/Transformation.tsx` | inline | Timeline (6 phases), task-level impact table, 4 standout projects |
| 5 | Education | `DomoStory/Education.tsx` | `roster.ts` + inline | Training vs enablement, 93% roster (filterable by dept), 3 human stories |
| 6 | Projects | `ProjectPortfolio.tsx` + `ProjectCard.tsx` | `projects.ts` | 40+ projects, 8 categories, filterable pills |
| 7 | Recognition | `ExternalValidation.tsx` | inline | TechRepublic article, Google keynote, CEO keynote, embedded video |
| 8 | Tech Stack | `TechStack.tsx` | inline | 7-category mastery grid |
| 9 | About | `About.tsx` | inline | Mark Boothe quote, summary, CTA buttons, footer |

Navigation: `Nav.tsx` — sticky top bar with IntersectionObserver-based section highlighting.

---

## Data Source Provenance

Where each data set came from and whether it can be updated:

| Data | File | Source | Updatable? |
|------|------|--------|-----------|
| 40+ projects | `src/data/projects.ts` | Jake's direct knowledge + project READMEs | Yes — add new projects as built |
| 6 headline metrics | `src/data/metrics.ts` | External case study doc + Jake's estimates | Yes — numbers may evolve |
| 4 result metrics | `src/data/metrics.ts` | Team survey data | Locked (from survey) |
| 28 team members | `src/data/roster.ts` | Jake's knowledge of team workflows | Yes — anonymized by role |
| Decision log | `Strategy.tsx` inline | Jake's strategic reasoning (captured during grilling) | Mostly locked, could add new |
| Failure narratives | `Strategy.tsx` inline | Jake's retrospective analysis | Locked (historical) |
| Task improvements table | `Transformation.tsx` inline | Team survey + measurements | Locked |
| Timeline (6 phases) | `Transformation.tsx` inline | 12-month engagement arc | Locked |
| Human stories | `Education.tsx` inline | Wes Holley, Milo Bush, Mark Boothe — named with permission | Could add more |
| Client list | `ClientLogos.tsx` inline | Jake's 9 enterprise engagements | Could add more |

---

## PDF Generation

**Tool:** WeasyPrint + Jinja2 (Python)
**Script:** `scripts/generate-pdf.py`
**Output:** `jake-heaps-portfolio.pdf` (13 pages, ~600KB)

### How it works
1. All project/metric/roster data is embedded as Python dicts in the script (NOT imported from TypeScript)
2. A Jinja2 HTML template is rendered with this data
3. Company logos are base64-encoded and embedded as data URIs
4. WeasyPrint converts the HTML to PDF with print CSS (page breaks, footer with page numbers)
5. Intermediate HTML saved to `scripts/portfolio-rendered.html` (gitignored)

### Important sync note
When updating site data (`src/data/*.ts`), you must also update the corresponding Python dicts in `generate-pdf.py`. They are NOT auto-synced.

### Running
```bash
source .venv/bin/activate
python scripts/generate-pdf.py
# Output: jake-heaps-portfolio.pdf (repo root)
# Copy to Downloads: cp jake-heaps-portfolio.pdf ~/Downloads/
```

---

## Deployment

### Build + Deploy
```bash
npm run build                           # Vite build → dist/
./scripts/check-confidentiality.sh      # Pre-deploy safety check
npx gh-pages -d dist                    # Push dist/ to gh-pages branch
```

### GitHub Pages Configuration
- **Source:** Deploy from branch → `gh-pages` / `/ (root)`
- **Base path:** `vite.config.ts` has `base: '/jake-heaps-portfolio/'`
- **Account:** `jakeheaps-coder` (NOT `jake-heaps_domo` which is EMU/private-only)

### After Deploy
Verify: `curl -s -o /dev/null -w "%{http_code}" https://jakeheaps-coder.github.io/jake-heaps-portfolio/`

---

## Design Decisions

| Decision | Rationale |
|----------|-----------|
| Personal brand, not Domo brand | This is Jake's portfolio, not a Domo asset |
| Single-page scroll | Busy C-suite audience won't click through multi-page sites |
| WeasyPrint over Puppeteer | Native page break handling, print CSS support |
| IntersectionObserver animations | Scroll-triggered reveals for engagement (known: won't fire in headless Chrome) |
| HashRouter-style nav | Smooth scroll with section highlighting, no actual routes |
| Tailwind CSS v4 | Uses `@import "tailwindcss"` syntax (not v3 `@tailwind` directives) |
| Mark Boothe quote in About section | About talks about Jake specifically; Education stories are about other people |
| Framer Motion for counters | Animated count-up on scroll using `useInView` with `triggerOnce` |
| Base64 logos in PDF | No external file dependencies — PDF is fully self-contained |

---

## Known Limitations

- **IntersectionObserver** — Animations don't trigger in headless Chrome (all sections appear invisible). Deploy verification uses `curl` status codes, not screenshots.
- **Hash nav** — `#section` anchors don't auto-scroll in headless Chrome.
- **PDF data duplication** — Site data (TypeScript) and PDF data (Python dicts) are independent. Must update both.
- **One Health Solutions logo** — 311KB PNG, could be optimized (but not critical).
- **No responsive testing in CI** — Responsive design verified manually in browser only.

---

## Setup on New Machine

```bash
# 1. Clone
git clone https://github.com/jakeheaps-coder/jake-heaps-portfolio.git
cd jake-heaps-portfolio

# 2. Install frontend deps
npm install

# 3. Run local dev server
npm run dev

# 4. (Optional) PDF generation
uv venv && source .venv/bin/activate
uv pip install weasyprint jinja2
python scripts/generate-pdf.py

# 5. Build + Deploy
npm run build
./scripts/check-confidentiality.sh
npx gh-pages -d dist
```

---

## What's Next

- **Testimonials section** — 9 endorsement quotes being collected (see `docs/QUOTES.md`). Once received, add a new section between Recognition and Tech Stack.
- **More screenshots** — Could add screenshots for Signal Platform, Sales Navigator, KG Admin
- **Mobile optimization** — Responsive but not heavily tested on small screens
- **SEO meta tags** — Open Graph, Twitter card, meta description not yet added
- **Custom domain** — Currently on github.io subdomain
