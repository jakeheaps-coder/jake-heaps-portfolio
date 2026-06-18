# Video placement & restore log

**Status as of 2026-06-18:** the 5 talking-head videos for the vision page are
not filmed yet, so their placeholders were removed for a send-ready version.
The blocks are commented out in place (not deleted) for one-step restore. The
full brief keeps its one real, finished video (the AI tutorial).

## How the pages look right now

**Short page (vision, `#/vision` — the default view)**
Hero (headline + subline + headshot byline + CTAs, no video) → Who I am →
client logo strip → Problem → Method → Proof (numerals + itemized ledger +
FY27 projection) → Contact. Clean, text + ledger driven. No "coming soon"
placeholders anywhere.

**Full page (brief, `#/brief`)**
Unchanged. Still contains the one real video: the "Build your first AI agent"
AI-produced tutorial in the External Validation section (plays normally).

## The 5 vision-page video slots (to restore after filming)

All live in `src/components/VisionPage.tsx`, each commented with a restore note.
Drop the filed `.mp4`s into `public/video/` with these exact names.

| # | Section | File (`public/video/`) | `VID` key | Caption | Title |
|---|---------|------------------------|-----------|---------|-------|
| 1 | Hero (top, centerpiece) | `overview.mp4` | `overview` | The overview. What I do, and why it works. | Overview · Jake Heaps |
| 2 | Who I am | `whoiam.mp4` | `whoIAm` | Why I do this, in my own words. | Who I am |
| 3 | Problem | `problem.mp4` | `problem` | Why the market is full of AI advice and short on proof. | The problem |
| 4 | Method | `method.mp4` | `method` | Strategy, implementation, education. Why the order is everything. | The method |
| 5 | Proof (under the ledger) | `proof.mp4` | `proof` | The numbers, in my own words, and how they were counted. | The proof |

Talking points / scripts for each: `~/Downloads/jake-portfolio-review/video-kit.md`
(and the Desktop copy, "Jake Heaps - Video Talking Points").

## Copy that changed when the videos came off

- Hero subline lost its trailing line "Here's ninety seconds on what that looks
  like." It now ends at "…measured and itemized." Restore that sentence if the
  overview video goes back in.

## Restore procedure (after filming)

1. Drop the `.mp4`s into `public/video/` using the names in the table.
2. In `src/components/VisionPage.tsx`:
   - Uncomment the `import { VideoBlock } from "./ui/VideoBlock";` line.
   - Uncomment the `const VID = { … }` map and set each path, e.g.
     `overview: \`${BASE}video/overview.mp4\``.
   - Uncomment the 5 video blocks (each marked "removed 2026-06-18 — restore").
   - Re-add the "Here's ninety seconds…" sentence to the hero subline (optional).
3. `npx tsc --noEmit -p tsconfig.app.json` → `npm run build` →
   `./scripts/check-confidentiality.sh` (captions/on-screen text must pass).
4. Deploy: `npx gh-pages -d dist --no-history`.

The `VideoBlock` component (`src/components/ui/VideoBlock.tsx`) is unchanged and
still renders a click-to-play 16:9 plate when given a `src`.
