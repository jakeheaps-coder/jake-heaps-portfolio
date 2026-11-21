# jakeheaps.com

Jake Heaps' personal site. Who I am, what I've built, and how I approach AI work.
Hosted on Cloudflare Workers (static assets).

## Pages

| Path | What it is | Source |
|---|---|---|
| `/` | Home: intro, career ledger, the Domo ledger, contact | `src/site/pages/Home.tsx` |
| `/work` | Domo transformation (figures, ledger, systems), Bissell, client outbound system, talks | `src/site/pages/Work.tsx` |
| `/about` | The longer personal story | `src/site/pages/About.tsx` |
| `/approach` | How I think about AI at work, rules, FAQ | `src/site/pages/Approach.tsx` |
| `/brief` | The long Domo case study. Unlisted, email-gated | `src/brief/BriefPage.tsx` + `src/components/*` |
| `/uvu` | UVU marketing capstone page, plain static HTML | `public/uvu/` |

The structure of the four public pages started from the `/new` staged pages in
`jakeheaps-coder/naitive-website`, rebranded to the jakeheaps "Manuscript" system
(see DESIGN.md) and rewritten as a personal profile.

## Develop

```bash
npm install
npm run dev        # Vite at localhost:5173
npm run build      # tsc + vite build + head prerender (one index.html per route)
npm run preview    # build, then serve dist/ through wrangler dev (real Worker behavior)
npm run check      # confidentiality check (forbidden terms)
```

## Deploy (Cloudflare)

`wrangler.jsonc` describes an assets-only Worker named `jakeheaps-site`. It is
connected to this GitHub repo through Cloudflare Workers Builds, so you never
deploy by hand:

| Push to | What happens |
|---|---|
| `main` | Production deploy (`npx wrangler deploy`) to `jakeheaps-site` |
| any other branch | Preview version (`npx wrangler versions upload`) with its own preview URL |

Both run `npm ci && npm run build && ./scripts/check-confidentiality.sh` first, so a
confidentiality hit fails the build. Build logs are in the Cloudflare dashboard under
Workers & Pages → jakeheaps-site → Deployments.

`npm run deploy` still works from a laptop with `wrangler login` if you ever need it.

Routing details:

- `html_handling: drop-trailing-slash` serves `dist/work/index.html` at `/work`.
- `not_found_handling: 404-page` returns `dist/404.html` with a 404 status; the
  client router renders the not-found page.
- `public/_headers` sets the CSP and security headers. The CSP is self-only plus
  the Google Apps Script host the contact form posts to. Add hosts there if you
  embed anything external.

### Custom domain

`jakeheaps.com` and `www.jakeheaps.com` are Workers custom domains on `jakeheaps-site`
(attached 2026-11-21). DNS for the zone is on Cloudflare (nameservers
`alfred.ns.cloudflare.com`, `arely.ns.cloudflare.com`); Cloudflare manages the records
and certificates for both hostnames. The only other record is the `_dmarc` TXT.

## Contact

Public pages link to LinkedIn only. `/brief` still has a short form:
`src/site/components/ContactForm.tsx` → `logConsultRequest()` in `src/lib/access.ts`
→ a Google Apps Script web app (`scripts/access-log.gs`, deployed separately).

## Other scripts

- `scripts/generate-og.py`: builds `public/og.png` (Pillow).
- `scripts/generate-pdf.py`: the brief PDF (WeasyPrint).
- `scripts/check-confidentiality.sh`: run before every deploy (`npm run deploy` does).
