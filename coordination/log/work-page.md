# work-page log

## 2026-11-21, first pass

**What I did**
- Rebuilt /work with the same outline: header, Domo story and four figures, $2.3M ledger (waterfall, expandable table, hard-dollars note), projects, Bissell, on stage and in print, companies, contact band.
- Took out both Domo screenshots (asset library, recognition feed). /work has no images of Domo internal tools now.
- Swapped "A few of the 26" for a hairline ledger index. Four featured entries get a two-column layout: name plus a mono sienna note on the left, one or two paragraphs on the right. Below them, "And a few more" lists six compact rows (name, one sentence, a mono note). It stacks at 360.
- Order: Messaging Brain, Apollo outbound engine, media monitoring agent, Domopalooza scheduler, then media relations platform, video pipeline, AI SDR, live translator agent, CMO marketing analysis, paid search agent.
- Merged the separate Naitive outbound section into the Apollo outbound engine entry, so it appears in one place only.
- Domopalooza scheduler gets one sentence and nothing more, with `// TODO(jake): add what it did and a number` above it in `src/data/work.ts`.
- Rewrote every line on the page. No em dashes, no exclamation marks. The per-section mono eyebrows ("Domo · 2025–2026" and so on) are gone, which leaves one kicker, in the page header.
- The four-figures table is now a `<dl>`: stacked at mobile, three columns from md up. The "how it was counted" text shows at every width (it used to be caption size on mobile).
- The contact band uses `tone="paper"` so two surface bands don't sit next to each other.

**Files**
- `src/site/pages/Work.tsx` (rewritten)
- `src/data/work.ts` (new: figures, featured and secondary projects, public record, `hardDollars` derived from the ledger)

**Decisions**
- Numbers: I used only contract stats plus ledger rows. The Messaging Brain's $65K is read from the ledger row "Messaging intelligence system" (the same figure is in the full ledger table on this page). I dropped figures that were on the old page but aren't on the contract list (110-question test, six regions, 35,000 files, 24 tools).
- The $840K hard-dollar figure is computed (`firstYearTotal - capacityTotal`), not typed in.
- Section h2s are `text-h2` below 640px and step up from there, so headings don't crowd at 360.

**Verified**
- `npm ci && npm run build` passes. `./scripts/check-confidentiality.sh` passes.
- Playwright full-page screenshots at 360, 390, 768 and 1440 after scrolling. No horizontal overflow at any width. I looked at the 360 and 1440 shots.

**Not verified**
- Keyboard/focus pass and reduced-motion behavior (both rely on shared components).
- How it looks combined with the brand-mobile session's token and nav changes.
- I only checked the 390 and 768 shots for overflow, not by eye.

**Open questions**
- Domopalooza scheduler: Jake needs to supply what it did and a number. The line also reads "Domo's annual conference" in the body.
- `src/data/projects.ts` still references `screenshots/asset-library.png` and `outbound-engine.png`, and `public/screenshots/*` still exists. /work no longer uses them; /brief may. Coordinator to decide whether to delete them.
- The /work description in `src/site/routes.json` (owned by pages-copy) may mention screenshots or the old framing. Worth checking.
- Mono notes in the secondary list are `text-caption` (14px). That's within the "small labels" exception, but flagging it.

## 2026-11-21, second pass (after the contract update)

**What I did**
- Merged `origin/claude/charming-cori-j61y86` (contract update, `coordination/notes/projects.md`, `brand-kit/`).
- Took Naitive out completely: the client paragraph in the Apollo entry, its mono note, and the "client work" wording in the header and projects ledes. The Apollo outbound engine is now the Domo version only: signal rule (2+ opens, 2+ clicks, any reply), personalized landing page, lead score, and an honest line that it has taken over only part of what the paid tools did.
- Removed the AI SDR and the live translator (the translator isn't in the notes, and the notes say to use only what's written there).
- Messaging Brain now carries "55 tools connected across the agents" plus the $65K ledger line.
- Media monitoring rewritten as Domo's tracking workflow: daily news on Domo and competitors, alerts, an email update, dedup, ticker-spam filtering, and the security audit before rollout.
- Domopalooza scheduler: breakout scheduling for 6,000+ registrants plus sessions, meetings and speakers. TODO removed.
- "And a few more" now holds the 11 projects from the notes, in the notes' order, ending with jake-heaps-os (personal). The layout is unchanged: compact hairline rows that stack at 360.
- Video pipeline stat updated to "8 to 16 hours down to 1 hour 15 minutes".

**Files:** `src/data/work.ts`, `src/site/pages/Work.tsx`, this log.

**Decisions**
- The CMO (20 tools, 110 test questions) and paid search (24 tools, 6 regional datasets) numbers are in projects.md but not in the contract's stats list. I used them because contract item 15 makes the notes the source for the projects section. If the stats list should win, they're two strings to remove in `MORE` in `src/data/work.ts`.
- The page has no email address and no form. ContactBand is left in place for pages-copy.

**Verified:** build passes, confidentiality check passes, and Playwright screenshots at 360, 390, 768 and 1440 show no horizontal overflow. I looked at the projects section at 360 and 1440.

**Not verified / open**
- `LogoRow` (owned by brand-mobile) shows Manscaped, Cox Automotive, Thryv, Carvana and Regional One Health under "Companies I've built for or with". If any of those were Naitive-era clients, that conflicts with contract item 11. Coordinator or brand-mobile to check.
- The "Bucked Up 30+ funnels" stat isn't used on /work.
