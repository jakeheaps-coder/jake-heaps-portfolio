# Board

Coordinator: jakeheaps.com redesign (this session). Updated 2026-11-21.

Goal: jakeheaps.com redesigned in the jakeheaps brand, same layout and outline,
rewritten so it does not read AI-written, mobile first-class, deployed on
Cloudflare from GitHub on push.

All sessions branch from `claude/charming-cori-j61y86` and push to their own
branch (listed below). The coordinator merges them.

| Session | Task | Owns (files) | Branch | Status | Last report |
| --- | --- | --- | --- | --- | --- |
| work-page ([session_01SUaNTNHNhEXMCAq6syKrPn](https://claude.ai/code/session_01SUaNTNHNhEXMCAq6syKrPn)) | Rebuild /work around the featured projects, remove screenshots, rewrite copy, mobile layout | `src/site/pages/Work.tsx`, `src/data/work.ts` (new) | `claude/jh-work-page` | verified (d4ea8dc) | Featured 4 + 11 more; Naitive/SDR/screenshots gone; build + confidentiality pass |
| pages-copy ([session_01SUaNTPbZbkLyseLXVbS7xv](https://claude.ai/code/session_01SUaNTPbZbkLyseLXVbS7xv)) | Rewrite Home, About, Approach, 404 and the contact band; remove consulting lines and Naitive phrasing; mobile layout of those pages | `src/site/pages/Home.tsx`, `src/site/pages/About.tsx`, `src/site/pages/Approach.tsx`, `src/site/pages/NotFound.tsx`, `src/site/components/ContactBand.tsx`, `src/data/career.ts`, `src/site/routes.json`, `index.html` | `claude/jh-pages-copy` | working | |
| brand-mobile ([session_01SUaNTRR7ruqJNyFY4Z9uC2](https://claude.ai/code/session_01SUaNTRR7ruqJNyFY4Z9uC2)) | jakeheaps brand polish of shared components and tokens; mobile nav and touch targets; fluid type | `src/index.css`, `src/components/ui/*`, `src/site/Layout.tsx`, `src/site/components/SiteNav.tsx`, `src/site/components/SiteFooter.tsx`, `src/site/components/CareerLedger.tsx`, `src/site/components/LogoRow.tsx`, `src/site/components/ContactForm.tsx`, `public/favicon.svg`, `DESIGN.md` | `claude/jh-brand-mobile` | working | |
| coordinator | Deploy wiring, confidentiality script, docs, integration, final mobile check, blind review | `wrangler.jsonc`, `.github/**`, `scripts/check-confidentiality.sh`, `README.md`, `CONTEXT.md`, `PRODUCT.md`, `CLAUDE.md`, `coordination/BOARD.md`, `coordination/CONTRACT.md`, `src/brief/**`, `src/components/*.tsx` (brief) | `claude/charming-cori-j61y86` | working | |

## Waiting on the user

- Confirm the mission wording (church named) once the copy is in.
- Logos (Manscaped, Cox, Thryv, Carvana, Regional One Health): confirm none were Naitive-only clients.
- GoDaddy nameserver switch for jakeheaps.com (zone pending in Cloudflare).

## Done and verified by the coordinator

- Workers Builds connected via API: repo connection cd8b4ac7, triggers "Production: main" (wrangler deploy) and "Previews: other branches" (wrangler versions upload). Worker `jakeheaps-site` created (placeholder until first build).
- `Messaging Brain` removed from the confidentiality blocklist (user asked to feature it).
