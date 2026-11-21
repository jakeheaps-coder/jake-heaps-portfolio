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

`wrangler.jsonc` describes an assets-only Worker named `jakeheaps-site`.

- Manual: `npm run deploy` (build, confidentiality check, `wrangler deploy`). Needs
  `wrangler login` or a `CLOUDFLARE_API_TOKEN` with Workers edit permission.
- Automatic (recommended): in the Cloudflare dashboard, Workers & Pages → Create →
  Import a repository → this repo. Build command `npm run build`, deploy command
  `npx wrangler deploy`. Every push to `main` then deploys, like Vercel did.

Routing details:

- `html_handling: drop-trailing-slash` serves `dist/work/index.html` at `/work`.
- `not_found_handling: 404-page` returns `dist/404.html` with a 404 status; the
  client router renders the not-found page.
- `public/_headers` sets the CSP and security headers. The CSP is self-only plus
  the Google Apps Script host the contact form posts to. Add hosts there if you
  embed anything external.

### Custom domain

The `jakeheaps.com` zone has been added to Cloudflare (pending). To cut over:

1. At GoDaddy, change the nameservers to `alfred.ns.cloudflare.com` and
   `arely.ns.cloudflare.com`.
2. Wait for the zone to show Active in Cloudflare.
3. Uncomment `routes` in `wrangler.jsonc` and deploy. Wrangler creates the DNS
   records and certificates for `jakeheaps.com` and `www.jakeheaps.com`.
4. Remove the domain from the old Vercel project.

## Contact form

`src/site/components/ContactForm.tsx` → `logConsultRequest()` in `src/lib/access.ts`
→ a Google Apps Script web app (`scripts/access-log.gs`, deployed separately) that
writes a row to a private Sheet and emails Jake. Best-effort, no-CORS POST.

## Other scripts

- `scripts/generate-og.py`: builds `public/og.png` (Pillow).
- `scripts/generate-pdf.py`: the brief PDF (WeasyPrint).
- `scripts/check-confidentiality.sh`: run before every deploy (`npm run deploy` does).
