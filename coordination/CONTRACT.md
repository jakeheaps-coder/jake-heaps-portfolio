# Contract

Shared decisions every session follows. Coordinator edits only. Each entry says
whether the user approved it or the coordinator set it.

## Purpose and scope

Redesign jakeheaps.com (this repo, React + Vite + Tailwind v4, react-router) so it
is fully **jakeheaps branded** (nothing that reads as Naitive), **keep the current
layout and page outline**, **rework all wording so it does not sound AI-written**,
and make the **mobile experience first-class**. (User.)

Page outline stays: `/` Home, `/work`, `/about`, `/approach`, plus `/brief`
(unlisted, gated) and `/uvu` (static, untouched). (User.)

## Constraints

1. **Huckleberry: public info only.** The only public facts are the company name
   "Huckleberry AI", its site huckleberry.ai (which says "More information coming
   soon"), and Jake's title "Manager, Internal AI Projects" (from Jake). Say nothing
   about what Huckleberry does, its customers, product, team, or internal projects.
   (User.)
2. **No "not taking consulting work" messaging anywhere.** Remove the FAQ entry and
   any other line saying so, including the contact section lede. Do not replace it
   with a sales pitch either. (User.)
3. **No Domo internal screenshots on the public pages.** The asset-library and
   recognition-feed screenshots come off /work. (User.) /brief is untouched unless
   the user says otherwise.
4. **Brand is jakeheaps "Manuscript"** (DESIGN.md). Tokens in `src/index.css`
   `@theme`: paper, surface, ink, ink-soft, hairline, cedar, sienna. Fonts:
   Newsreader (display), General Sans (body), IBM Plex Mono (numbers, small
   labels). JH masthead mark (`Brandmark`). No amber CTA, no woven-thread motif, no
   Naitive logos or icons. (Coordinator default; user did not name another kit.)
5. **Banned Naitive phrasing:** "AI operating system(s)", "woven", "The Working
   System", "three gears", "earns its keep", "earn the right to scale", "what you
   can buy", "Find your first system", "Measured, not estimated". (Coordinator.)
6. **Voice:** first person, plain, specific, contractions fine. No em dashes (use
   commas, periods, colons). No exclamation marks. No hype words (leverage,
   seamless, robust, unlock, transform as a verb for hype, cutting-edge, empower,
   game-changer, journey, passionate). No "Not X. Y." or "X, not Y" reframes used as
   a rhetorical device. Avoid tidy triplets and rhythmic three-beat sentences; vary
   sentence length. No invented facts: every claim about Jake must come from the
   repo (README, CONTEXT.md, src/data/*, src/components/About.tsx letter,
   public/uvu/index.html) or this contract. (User + coordinator.)
7. **Kickers and numbers:** at most one small mono kicker per page header. No
   uppercase tracked eyebrow above every section. Numbered markers only on the real
   three-step sequence on /approach. No hero-metric tile rows. (Coordinator, per
   design skill.)
8. **Mobile first-class:** design at 360px and 390px first, then 768 and 1440. No
   horizontal scroll at 360px. Tap targets at least 44x44px. Body text at least 16px
   on mobile. Headings must not overflow at 360px. Nav must give access to all four
   pages plus contact on mobile. (User.)
9. **Accessibility:** WCAG 2.2 AA contrast, visible focus, reduced-motion respected
   (MotionConfig is global; bespoke motion uses `useReducedMotion`). (Coordinator.)
10. **Confidentiality gate:** `scripts/check-confidentiality.sh` must pass, except
    that "Messaging Brain" is being removed from its blocklist by the coordinator
    because the user asked for it to be featured by name. No vendor names from that
    list (e.g. the old DAM or sales-engagement vendor names), no client "Minky",
    no internal dollar codes. Apollo (Apollo.io) may be named. (User + coordinator.)

## Stats the site may use (all from Jake's Domo year)

93% team adoption · 26 production systems · $2.3M first-year value (ledger rows in
`src/data/ledger.ts`, total computed) · $840K hard dollars · 1.65x team
productivity · 80+ people trained · Bissell: 2 days to workflows in use ·
30+ funnels at Bucked Up · CEO keynote: 100+ slides of AI-generated graphics ·
video pipeline: 16 hours to 1 hour 15 minutes per video · media relations: 17 news
feeds scanned daily. Story leads; numbers support. Don't add numbers not listed
here. (Coordinator default; user did not object.)

## Shared names, formats and interfaces

- Routes and per-route meta: `src/site/routes.json` (title, description, noindex).
- Contact details: `src/data/contact.ts` (`CONTACT`, `NOW`). Use these, do not
  hard-code the email or title.
- Career rows: `src/data/career.ts`.
- Buttons: `Button` from `src/components/ui/Button.tsx` (`variant` primary|quiet,
  `to` for internal routes). Sections: `Section` (`tone` paper|surface).
  Page header: `PageHeader`. Margin notes: `MarginGrid` + `MarginNote`.
- Work page project data goes in a new file `src/data/work.ts` owned by the
  work-page session.
- Each page ends with `<ContactBand />`.

## Decisions

| Date | Decision | Set by | Reason |
| --- | --- | --- | --- |
| 2026-11-21 | Remove the "not taking consulting work" Q&A and similar lines | User | Asked directly |
| 2026-11-21 | Remove Domo screenshots from /work | User | Asked directly |
| 2026-11-21 | Feature on /work: Messaging Brain, media monitoring agent, Domopalooza scheduler, Apollo outbound engine, plus others | User | Asked directly |
| 2026-11-21 | Others to feature: media relations platform, video pipeline, AI SDR, live translator, keynote graphics, CMO analysis, paid search agent | Coordinator | From src/data/projects.ts |
| 2026-11-21 | Keep layout and outline; rebrand + rewrite + mobile | User | Asked directly |
| 2026-11-21 | Naitive: one line in the career story and as context for the client outbound work | Coordinator default | User did not answer; flagged in PR |
| 2026-11-21 | Contact: form + email + LinkedIn | Coordinator default | User did not answer |
| 2026-11-21 | Deploys: Cloudflare Workers Builds connected to GitHub (push to main deploys) | Coordinator default | User asked for push-to-deploy; dashboard step is the user's |
| 2026-11-21 | Domopalooza scheduler: describe only as a scheduling tool for Domopalooza, Domo's annual conference, until Jake supplies details | Coordinator | No source in repo; no invented specifics |
