# Board

Coordinator: jakeheaps.com redesign (this session). Updated 2026-11-21.

Goal: jakeheaps.com redesigned in the jakeheaps brand, same layout and outline,
rewritten so it does not read AI-written, mobile first-class, deployed on
Cloudflare from GitHub on push.

All sessions branch from `claude/charming-cori-j61y86` and push to their own
branch (listed below). The coordinator merges them.

| Session | Task | Owns (files) | Branch | Status | Last report |
| --- | --- | --- | --- | --- | --- |
| work-page | Rebuild /work around the featured projects, remove screenshots, rewrite copy, mobile layout | `src/site/pages/Work.tsx`, `src/data/work.ts` (new) | `claude/jh-work-page` | briefed | |
| pages-copy | Rewrite Home, About, Approach, 404 and the contact band; remove consulting lines and Naitive phrasing; mobile layout of those pages | `src/site/pages/Home.tsx`, `src/site/pages/About.tsx`, `src/site/pages/Approach.tsx`, `src/site/pages/NotFound.tsx`, `src/site/components/ContactBand.tsx`, `src/data/career.ts`, `src/site/routes.json`, `index.html` | `claude/jh-pages-copy` | briefed | |
| brand-mobile | jakeheaps brand polish of shared components and tokens; mobile nav and touch targets; fluid type | `src/index.css`, `src/components/ui/*`, `src/site/Layout.tsx`, `src/site/components/SiteNav.tsx`, `src/site/components/SiteFooter.tsx`, `src/site/components/CareerLedger.tsx`, `src/site/components/LogoRow.tsx`, `src/site/components/ContactForm.tsx`, `public/favicon.svg`, `DESIGN.md` | `claude/jh-brand-mobile` | briefed | |
| coordinator | Deploy wiring, confidentiality script, docs, integration, final mobile check, blind review | `wrangler.jsonc`, `.github/**`, `scripts/check-confidentiality.sh`, `README.md`, `CONTEXT.md`, `PRODUCT.md`, `CLAUDE.md`, `coordination/BOARD.md`, `coordination/CONTRACT.md`, `src/brief/**`, `src/components/*.tsx` (brief) | `claude/charming-cori-j61y86` | working | |

## Waiting on the user

- Domopalooza scheduler: what it did, who used it, any number.
- Messaging Brain naming confirmed by "talk about the messaging brain"; coordinator is publishing the name.
- Whether the screenshots should also come out of /brief.
- Bio details (hometown, Ella line, sports, side projects, UVU finish date).
- One-time Cloudflare dashboard step to connect the GitHub repo.

## Done and verified by the coordinator

- 
