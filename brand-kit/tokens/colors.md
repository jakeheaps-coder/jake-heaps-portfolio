# Manuscript — Color Reference

The palette is deliberately small: one canvas, one ink, one accent pair. Warm
paper and ink carry everything; cedar and sienna are the only accents. Never
introduce a color outside this set. Shadows are hue-matched to warm ink
(`26 23 20`), never pure black.

## Manuscript (the everyday palette)

| Token | Hex | RGB | Use |
|---|---|---|---|
| paper | `#F7F4EE` | 247 244 238 | Canvas / page background |
| surface | `#EFEAE0` | 239 234 224 | Stat band, panel fills |
| ink | `#1A1714` | 26 23 20 | Primary text |
| ink-soft | `#5F594F` | 95 89 79 | Secondary text, captions |
| hairline | `#E2DCCF` | 226 220 207 | Rules, dividers, ring borders |
| cedar | `#2D4A3A` | 45 74 58 | Links, CTA, active states, selection |
| sienna | `#8A4226` | 138 66 38 | Display numerals, rule accents, the brandmark rules |

## Nightfall (reserved dark)

Used **only** on the PDF cover/dividers and the single dark site interlude.
Not a general dark mode.

| Token | Hex | RGB | Use |
|---|---|---|---|
| night | `#131210` | 19 18 16 | Dark canvas |
| night-surface | `#1C1A17` | 28 26 23 | Dark panel fills |
| night-ink | `#ECE7DD` | 236 231 221 | Text on dark |
| night-soft | `#A39B8B` | 163 155 139 | Secondary text on dark |
| night-hairline | `#2A2722` | 42 39 34 | Rules on dark |
| amber | `#E09B62` | 224 155 98 | The one warm accent on dark |

## Usage rules

- **Links / CTA / active = cedar.** It is the only interactive accent.
- **Numerals / accents in rules = sienna.** Sienna carries emphasis in the
  ledger and the display figures; it is not a link color.
- **Text selection** is cedar background, paper text.
- **Borders** are the layered hairline ring (`--shadow-hairline`), not a flat
  gray 1px line.
- **Contrast**: ink on paper ≈ 13:1; ink-soft on paper ≈ 6:1; cedar on paper
  ≈ 7.5:1 (AA for text, AAA for large). Keep body text on paper or surface,
  never on cedar or sienna.
