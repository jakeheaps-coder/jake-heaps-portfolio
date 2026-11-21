# Manuscript — Type Scale & Roles

Three families, one voice per role. Body is 17px. Editorial contrast lives at
the top of the scale.

## Families

| Family | Role | Weights | Styles | Notes |
|---|---|---|---|---|
| **Newsreader** | Display + all numerals | 400, 500 | normal, italic | `font-optical-sizing: auto`. Metrics use 400 with `tabular-nums`. |
| **General Sans** | Body / UI | 400, 500, 600 | normal, italic | Reading text and interface. |
| **IBM Plex Mono** | Eyebrows, labels, every numeric annotation | 400, 500 | normal | The ledger voice. |

## Scale

| Token | rem | px | Line height | Role |
|---|---|---|---|---|
| eyebrow | 0.75 | 12 | 1.4 | Mono caps only, tracked 0.08em |
| caption | 0.875 | 14 | 1.6 | Captions, margin notes |
| body | 1.0625 | 17 | 1.65 | Base reading size |
| h3 | 1.1875 | 19 | 1.35 | Sub-headings |
| lede | 1.3125 | 21 | 1.55 | Opening paragraphs |
| h2 | 1.75 | 28 | 1.2 | Section headings |
| h1 | 2.5 | 40 | 1.1 | Page headings |
| hero | ~4.0 | ~64 | ~1.05 | Hero display only |

## Rules

- **Eyebrows** are the only uppercase text, tracked `0.08em`, always in IBM Plex Mono.
- **Headings** are sentence case, `text-wrap: balance`, Newsreader 500.
- **Numerals** in Newsreader 400 with `font-variant-numeric: lining-nums tabular-nums`.
- **Body** uses `text-wrap: pretty` and `hanging-punctuation: first allow-end`.
- Reading measure token is **58ch** (`measure`) ≈ 70 rendered characters; the design brief frames the same reading column as ≤66ch. Narrow measure is **45ch** (`measure-narrow`).
