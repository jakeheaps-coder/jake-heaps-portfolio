# Jake Heaps — AI Strategy & Transformation Portfolio

Personal portfolio showcasing 40+ production AI systems, 9 enterprise engagements, $300K+ in vendor displacement, and 93% team AI adoption across a 12-month transformation.

**Live:** https://jakeheaps.com (Vercel, auto-deploys `main`; GitHub Pages is a fallback mirror)

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

## Architecture

Two surfaces, selected by pathname (no router lib — see `currentView()` in `App.tsx`):

- **Vision** (`/`) — the public landing page (`components/VisionPage.tsx`): practice positioning, the "Working System" method, tiers, proof/ledger, FAQ, and the lead form. Always open.
- **Brief** (`/brief`) — the deep Domo flagship case study (the `App.tsx` section stack). Email-gated (lead capture, not access control — content still ships in the bundle).

**Lead capture:** `components/LeadForm.tsx` → `lib/access.ts` (`logConsultRequest` / `logAccess`, fire-and-forget no-cors form POST) → external Google Apps Script web app (`scripts/access-log.gs`, deployed separately) → Google Sheet + an email notification to the owner.

## Project Structure

```
src/
  components/         # Vision page + Brief (DomoStory/), shared ui/, LeadForm, FAQ
  components/vision/  # Vision-only sections (Method, OperatingSystemExplainer, HowToWorkTogether)
  data/               # ledger.ts (single source for $ figures), tiers, faq, metrics, roster
  lib/                # access.ts (lead logging), motion, flags (SHOW_VIDEOS)
  App.tsx             # Pathname-routed: Vision (public) vs Brief (email-gated)
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

React 19, TypeScript, Vite 8, Tailwind CSS v4, Motion (motion/react), WeasyPrint

## Documentation

- [CONTEXT.md](CONTEXT.md) — Full project context, brand system, confidentiality rules, data provenance, deployment, setup
- [docs/PLAN.md](docs/PLAN.md) — Original portfolio specification from planning phase
- [docs/QUOTES.md](docs/QUOTES.md) — Endorsement quote tracking for 9 people
