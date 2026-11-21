# DESIGN.md: The Manuscript Brief

Jake Heaps' site is typeset like a well-kept notebook and ledger: warm paper,
ink, a serif voice, and a mono ledger for every number. The register is quiet
confidence and a real person: photo, signature, career ledger. The data does
the talking.

Jake's official kit lives in `brand-kit/` (tokens, marks, signature, type
scale, `logo/LOGO-USAGE.md`); this file is how the site applies it. The
direction is "the old jakeheaps system, modernized": same palette and type,
fresher rhythm, spacing, nav and components.

The signature is the **masthead**: the JH monogram set between two sienna
rules. It is the nav and footer nameplate; the favicon is the kit's cedar
tile version. The kit sets a ~72px minimum for the rule-and-initials mark, so
it is never used as a small ornament inside pages. The hand signature
(`brand-kit/logo/signature.svg`) signs the footer. Rules are the brand's material: a 2px
ink rule opens every page and ledger, hairlines divide what's inside.

## Palette

| Token | Hex | Use | On paper | On surface |
|---|---|---|---|---|
| paper | `#F7F4EE` | canvas | | |
| surface | `#EFEAE0` | alternate bands, form ground | | |
| ink | `#1A1714` | text | 16.3:1 | 14.9:1 |
| ink-soft | `#5F594F` | secondary text, notes, labels | 6.3:1 | 5.8:1 |
| hairline | `#E2DCCF` | row rules | | |
| cedar | `#2D4A3A` | links, CTA, focus ring | 8.9:1 | 8.1:1 |
| sienna | `#8A4226` | numerals, active rule, note labels, mark rules | 6.6:1 | 6.1:1 |

Every text pairing passes WCAG AA for body text. Paper on cedar (the CTA)
is 8.9:1. Tints are allowed only as alpha of these tokens (`bg-paper/92` for
the sticky bar, `decoration-cedar/30` for resting underlines, `bg-ink/25` for
the capacity bar).

**Nightfall** (PDF cover/dividers and the `.night` token scope behind
`Section tone="night"`, nowhere else): night `#131210`, surface `#1C1A17`,
ink `#ECE7DD`, soft `#A39B8B`, hairline `#2A2722`, amber `#E09B62`.

## Type

- **Newsreader** (display, serif numerals; opsz auto; 400/500 + italic)
- **General Sans** (body and UI; 400/500/600)
- **IBM Plex Mono** (the page kicker, ledger labels, numeric annotations; 400/500)

Fluid scale (tokens in `src/index.css`, phone value to laptop value):

| Token | Size | Use |
|---|---|---|
| `text-eyebrow` | 12 | mono caps labels only |
| `text-caption` | 14 | nav, footer, table prose on desktop |
| `text-note` | 15 | margin notes and captions on desktop |
| `text-body` | 16 to 17 | body; never below 16 on a phone |
| `text-h3` | 18 to 19 | |
| `text-lede` | 18 to 21 | |
| `text-h2` | 24 to 28 | |
| `text-h1` | 32 to 40 | section titles |
| `text-display` | 36 to 56 | page titles (PageHeader, ChapterOpener) |

Metrics in Newsreader 400 with `tabular-nums` (`numeral` utility). Mono caps
(`eyebrow`, tracked 0.08em) are the only uppercase. Sentence case headings,
`text-wrap: balance`. Form fields inherit `text-body`, so iOS never zooms.

## Rules (the acceptance bar)

One canvas, one ink, one accent pair, one type voice per role, one signature
idea, zero loops.

- Rules instead of cards. `rule-strong` (2px ink) opens; `rule-hair` and
  `border-hairline` divide. No card grids, badge pills, colored chips,
  one-sided accent bars, emoji, or icon tiles.
- Lists and Tufte ledgers (strong top rule, mono header row, hairline rows,
  right-aligned tabular numerals) instead of grids.
- Layered hairline ring (`ring-hairline`) instead of gray 1px borders on
  panels; warm-ink shadows, never pure black. Corners are 2 to 3px.
- Kickers: one small mono kicker per page header at most (PageHeader's
  running head). Section headings stand on their own. Numbered markers only
  on the real three-step sequence on /approach. No hero-metric tile rows.
- Voice: first person, plain, specific. No em dashes, no exclamation marks,
  no hype words, no "Not X. Y." reframes. Curly quotes, middle dots and
  en-dash ranges are fine.

## Layout and mobile

Designed at 360 and 390 first, then 768 and 1440.

- Container `max-w-[1100px] px-6`. Sections use `py-section`
  (56px on a phone, fluid to 112px). No horizontal scroll at 360.
- **Nav.** Phones: a nameplate row (JH mark + "Jake Heaps") that scrolls
  away, then a pinned 44px section bar with Work, About, Approach and Contact
  in four equal columns (Contact jumps to the LinkedIn contact band). No hamburger: four destinations fit, and a hidden
  menu would cost a tap on every visit. From 640px: one sticky 56px row.
  The active page gets a 2px sienna rule. "Contact" jumps to `#contact` and
  falls back to `/#contact` on a page without a contact band.
- **Touch targets.** Every standalone link, summary and control is at least
  44px tall. Use `tap` (block) or `tap-inline` (inline) on new ones. The
  quiet button carries a 44px hit area with negative margin so it doesn't
  push layout; the primary button and form fields are 48px.
- **Scholar's margin.** `MarginGrid` is a 58ch column with a 200 to 240px
  right rail from lg. Below lg each `MarginNote` folds in after the paragraph
  it belongs to, marked by a short sienna rule (a footnote mark), with a
  sienna mono label and a 16px General Sans body.
- **Ledgers on phones.** `LedgerTable` rows become stacked entries: the lead
  cell as the heading, every other cell under its own small mono label.

## Motion

- Entrances only via `Reveal` / `RevealGroup` / `RevealItem`: a 16px rise
  and fade, 600ms, ease-out-cubic, once. They fire as soon as a block's top
  clears the bottom tenth of the screen (amount 0), so tall blocks on phones
  never sit invisible.
- Content is never left blank. `useStillMotion()` (in `ui/`) returns true for
  reduced-motion visitors and for automated browsers (`navigator.webdriver`:
  screenshot tools, preview renderers, Lighthouse), and those render the
  final state directly. Print CSS forces every `[data-reveal]` visible.
  `BigNumeral` and `LedgerWaterfall` use the same hook, so captures show the
  real figures, not zeros or empty bars.
- `MotionConfig reducedMotion="user"` is wired globally; bespoke motion uses
  `useStillMotion` or `useReducedMotion`. No loops, no parallax, no hover
  scale beyond 1.02.

## Primitives (src/components/ui/)

| Component | Notes |
|---|---|
| `PageHeader` | 2px ink rule, running head (the kicker, hairline under), `text-display` title as the one h1, optional lede and sienna stat. Optional `mark` adds a small JH mark to the running head (off by default, see the kit's minimum size). `children` is optional. |
| `Section` | `tone` paper / surface / night; `py-section`; scroll margin matches the sticky bar. |
| `Button` | `variant` primary (cedar, 3px corners) or quiet (underlined cedar with an arrow); `to` for internal routes. Class strings live in `buttonStyles.ts` for native `<button>`s. |
| `MarginGrid`, `MarginNote` | Scholar's margin; `MarginNote` takes an optional `className`. |
| `ChapterOpener` | The brief's chapter head; same rule and display size as PageHeader. |
| `Reveal`, `RevealGroup`, `RevealItem` | The one entrance. |
| `Eyebrow` | Mono caps label. Sparingly. |
| `LedgerTable`, `LedgerWaterfall`, `BigNumeral` | Ledger figures. |
| `Brandmark`, `BrandLockup` | The masthead mark, alone or with the italic wordmark. |

Shared utilities in `src/index.css`: `eyebrow`, `numeral`, `ring-hairline`,
`plate`, `measure`, `measure-narrow`, `rule-strong`, `rule-hair`, `tap`,
`tap-inline`, `faq-summary`, `faq-sign`.

FAQ / disclosure pattern:

```tsx
<details className="group border-b border-hairline">
  <summary className="faq-summary">
    {question}
    <span className="faq-sign" aria-hidden />
  </summary>
  <div className="pb-5 text-body text-ink-soft">{answer}</div>
</details>
```

The browser triangle is removed globally; `faq-sign` shows a sienna + that
turns to a minus when open.

Site-level pieces live in `src/site/components/` (`SiteNav`, `SiteFooter`,
`CareerLedger`, `LogoRow`, `ContactBand`, `ContactForm`). The footer is a
colophon: rule, nameplate, page list, the hand signature, LinkedIn (the only
public contact, CONTRACT.md rule 12) and the typefaces the site is set in.
`ContactForm` stays for `/brief` only.

## Favicon and app icon

From the kit: `public/favicon.svg` (JH reversed in a cedar tile) and
`public/apple-touch-icon.png` (180px). `index.html` links both.

## Confidentiality

`scripts/check-confidentiality.sh` gates every deploy. Forbidden terms are
listed there; abstractions: "enterprise DAM platform", "graph database",
"serverless containers", "~30-person marketing org". Phone number appears in
the PDF only, never on the site.

## PDF

Same brand, print-native (scripts/generate-pdf.py): white stock, paper tone
as panel fills, Nightfall cover/back cover, running heads via `string-set`,
TOC with dot leaders, 0.4pt hairline tables, static-instanced TTFs
(scripts/fonts-print/). Data single-sourced from `scripts/data.json`
(`node scripts/export-data.mjs` regenerates it from src/data/*.ts).
