# The Manuscript — Jake Heaps Personal Brand Kit

The complete design system behind **jakeheaps.com**: an editorial identity
typeset like a private intelligence briefing. Warm paper, ink, a serif display,
and a mono ledger carrying every number. Quiet confidence; the data does the
talking.

> This is the **personal** brand (jakeheaps.com). It is a different system from
> the **Naitive** consulting-practice brand (amber / Fraunces), which has its
> own kit. Don't mix them.

## Start here

1. **`BRAND-GUIDELINES.pdf`** — the one-document overview: palette, type, mark, rules, voice.
2. **`brand/guidelines.html`** — the same, live in the browser with the real fonts.
3. **`tokens/`** — drop the values straight into code.
4. **`fonts/`** — self-hosted web + print font files, ready to ship.

## What's inside

```
BRAND-GUIDELINES.pdf          Rendered overview (start here)
USAGE-AND-LICENSE.md          Rights + font licensing
brand/
  guidelines.html             Interactive guidelines (real fonts)
  DESIGN.md                   The design brief / acceptance bar
tokens/
  tailwind-theme.css          Tailwind v4 @theme block (verbatim source)
  manuscript.tokens.css       Framework-agnostic :root custom properties
  manuscript.tokens.json      Machine-readable tokens
  colors.md                   Palette reference + usage + contrast
  scss/_manuscript.scss       SCSS variables
  js/tokens.ts                Typed TS export
type/
  type-scale.md               Scale + roles
  type-specimen.html          Live specimen
fonts/
  fonts.css                   @font-face block (web)
  web/                        8 woff2 (latin subsets)
  print/                      13 TTF/OTF (print instances)
  FONTS.md                    Families, weights, licensing
logo/
  brandmark.svg               JH masthead (light)
  brandmark-inverse.svg       JH masthead (dark surfaces)
  favicon.svg                 App icon, vector (cedar tile)
  favicon-32.png              Raster favicon (32)
  apple-touch-icon-180.png    iOS/home-screen icon (180)
  avatar-512.png              Square avatar / profile image (512)
  signature.svg               Hand signature
  social-icons.svg            Social glyph sprite
  og-card.png                 1200×630 share card
  LOGO-USAGE.md               Usage rules
reference/
  palette.html                Color swatch sheet
  jake-heaps-portfolio.pdf    The brand in full application
```

## The system in one screen

- **Palette:** paper `#F7F4EE`, surface `#EFEAE0`, ink `#1A1714`, ink-soft `#5F594F`, hairline `#E2DCCF`, cedar `#2D4A3A` (links/CTA), sienna `#8A4226` (numerals/accents). Nightfall dark is reserved for covers and one interlude.
- **Type:** Newsreader (display + numerals), General Sans (body/UI), IBM Plex Mono (eyebrows, labels, numbers). Body 17px.
- **Rules:** hairlines not cards, ledgers not grids, warm-ink shadows never pure black, entrances-only motion, real typography.
- **Voice:** first-person operator, declarative, no hype, no exclamation marks. Em dashes and curly quotes are welcome here (unlike Naitive).

*Manuscript v1 · jakeheaps.com*
