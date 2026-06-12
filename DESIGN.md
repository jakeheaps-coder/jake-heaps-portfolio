# DESIGN.md — The Manuscript Brief

Jake Heaps' portfolio is typeset as a **private intelligence briefing**: Stripe
Press meets The Economist. Warm paper, ink, serif display, a mono ledger
carrying every number. The audience is C-suite; the register is quiet
confidence. The data does the talking.

## Palette

| Token | Hex | Use |
|---|---|---|
| paper | `#F7F4EE` | canvas |
| surface | `#EFEAE0` | stat band, panel fills |
| ink | `#1A1714` | text |
| ink-soft | `#5F594F` | secondary text |
| hairline | `#E2DCCF` | rules |
| cedar | `#2D4A3A` | links, CTA, active states |
| sienna | `#8A4226` | display numerals, accents in rules |

**Nightfall** (PDF cover/dividers + the single dark site interlude — nowhere
else): night `#131210`, surface `#1C1A17`, ink `#ECE7DD`, soft `#A39B8B`,
hairline `#2A2722`, amber `#E09B62`.

## Type

- **Newsreader** (display, serif numerals; opsz auto; 400/500 + italic)
- **General Sans** (body/UI; 400/500/600)
- **IBM Plex Mono** (eyebrows, labels, every numeric annotation; 400/500)

Scale: eyebrow 12 / caption 14 / body 17 / h3 19 / lede 21 / h2 28 / h1 40 /
hero ~64. Metrics in Newsreader 400 with `tabular-nums`. Eyebrows are the only
uppercase (tracked 0.08em). Sentence case headings, `text-wrap: balance`.

## Rules (the acceptance bar)

One canvas, one ink, one accent pair, one type voice per role, one signature
idea, zero loops.

- Hairlines instead of cards. No card grids, badge pills, colored chips,
  border-t-accents, emoji, or icon tiles.
- Lists and Tufte ledgers (strong top rule, mono header row, hairline rows,
  right-aligned tabular numerals) instead of grids.
- Layered hairline ring (`ring-hairline` / `shadow-hairline`) instead of gray
  1px borders; 3-tier warm-ink shadow palette, never pure black.
- Motion: entrances only via `Reveal` primitives (16px rise, 600ms,
  ease-out-cubic, once). Hero gets the one orchestrated sequence (≤1.2s,
  masked line reveals). `MotionConfig reducedMotion="user"` is wired; every
  bespoke animation must respect `useReducedMotion`. No loops, no parallax,
  no hover scale beyond 1.02.
- Real typography: em dashes, curly quotes, middle dots, en-dash ranges.
- Voice: first-person operator. Declarative. No hype adjectives, no
  "Not X. Not Y. Z." constructions, no exclamation marks.

## Layout

Container `max-w-[1100px] px-6`; sections `py-24 md:py-32`. Chapters open with
`ChapterOpener` (2px ink rule, numbered mono eyebrow, display title, sienna
stat). Reading column ≤66ch with a scholar's margin rail (`MarginGrid` +
`MarginNote`) where ROI figures, sources, and notes hang.

## Primitives (src/components/ui/)

`Reveal/RevealGroup/RevealItem`, `Eyebrow`, `BigNumeral`, `Button`
(primary cedar / quiet underline — the only two), `LedgerTable`,
`ChapterOpener`, `MarginGrid`, `MarginNote`.

## Confidentiality

`scripts/check-confidentiality.sh` gates every deploy. Forbidden terms listed
there; abstractions: "enterprise DAM platform", "graph database", "serverless
containers", "~30-person marketing org". Phone number appears in the PDF only,
never on the site.

## PDF

Same brand, print-native (scripts/generate-pdf.py): white stock, paper tone as
panel fills, Nightfall cover/back cover, running heads via `string-set`, TOC
with dot leaders, 0.4pt hairline tables, static-instanced TTFs
(scripts/fonts-print/). Data single-sourced from `scripts/data.json`
(`node scripts/export-data.mjs` regenerates it from src/data/*.ts).
