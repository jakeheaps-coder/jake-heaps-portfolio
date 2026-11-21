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
