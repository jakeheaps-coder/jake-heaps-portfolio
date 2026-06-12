# Jake Heaps — AI Strategy & Transformation Portfolio

Personal portfolio showcasing 40+ production AI systems, 9 enterprise engagements, $300K+ in vendor displacement, and 93% team AI adoption across a 12-month transformation.

**Live:** https://jakeheaps-coder.github.io/jake-heaps-portfolio/

## Quick Start

```bash
npm install
npm run dev          # Local dev server at localhost:5173
```

## Build & Deploy

```bash
npm run build                           # Vite build -> dist/
./scripts/check-confidentiality.sh      # Pre-deploy safety check (REQUIRED)
npx gh-pages -d dist                    # Deploy to GitHub Pages
```

## PDF Generation

```bash
uv venv && source .venv/bin/activate
uv pip install weasyprint jinja2
python scripts/generate-pdf.py          # Output: jake-heaps-portfolio.pdf
```

## Project Structure

```
src/
  components/         # React components (Hero, Nav, DomoStory/, ProjectPortfolio, etc.)
  data/               # Project catalog (projects.ts), metrics, team roster
  App.tsx             # Main app — single-page scroll layout
public/
  logos/              # 9 company logos (SVG, PNG, WebP)
  screenshots/        # Project screenshots
  charts/             # Case study charts (4 PNGs)
  video/              # build-first-agent-v14.mp4 (11MB)
scripts/
  generate-pdf.py     # WeasyPrint PDF generator (data embedded as Python dicts)
  check-confidentiality.sh  # Pre-deploy safety check for forbidden terms
docs/
  PLAN.md             # Original portfolio specification (500+ lines)
  QUOTES.md           # Endorsement quote tracking (9 people)
CONTEXT.md            # Full handoff doc (brand, confidentiality, architecture, setup)
```

## Stack

React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, WeasyPrint

## Documentation

- [CONTEXT.md](CONTEXT.md) — Full project context, brand system, confidentiality rules, data provenance, deployment, setup
- [docs/PLAN.md](docs/PLAN.md) — Original portfolio specification from planning phase
- [docs/QUOTES.md](docs/QUOTES.md) — Endorsement quote tracking for 9 people
