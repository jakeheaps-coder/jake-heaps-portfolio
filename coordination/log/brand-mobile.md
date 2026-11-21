# brand-mobile log

## 2026-11-21, shared layer rebrand + mobile

**What I did**
- Tokens (`src/index.css`): fluid type scale (body 16 to 17, h1 32 to 40, new
  `text-display` 36 to 56 for page titles, new `text-note` 15), `py-section`
  spacing token (56 to 112px), themed browser surfaces (scrollbar, caret, tap
  highlight), global `summary` marker reset, the missing `.night` token scope,
  print rule that forces reveals visible. New utilities: `rule-strong`,
  `rule-hair`, `tap`, `tap-inline`, `faq-summary`, `faq-sign`.
- Mobile nav (`SiteNav`): phones get a nameplate row that scrolls away plus a
  pinned 44px section bar with Work / About / Approach / Contact in four equal
  columns. From 640px it's the single sticky row as before ("Get in touch").
  Why no hamburger: four short labels fit at 360 with ~80px per column, a
  menu adds a tap to every visit, and only 44px of chrome stays pinned.
  Contact falls back to `/#contact` on a page with no contact band (404).
- `PageHeader`: masthead treatment. 2px ink rule, running head (kicker left,
  JH mark right, hairline under), `text-display` title. The JH mark in the
  running head is the recurring signature element.
- `MarginGrid`/`MarginNote`: notes fold in after their paragraph below lg,
  marked by a short sienna rule; body is General Sans 16px on phones, 15px in
  the desktop rail (was 14px mono). AA: ink-soft 6.3:1 paper, 5.8:1 surface;
  sienna 6.6 / 6.1.
- `Reveal`: viewport amount 0 with a -10% bottom margin (tall blocks on
  phones no longer stay invisible); new `useStillMotion()` hook renders final
  state for reduced motion and automated browsers (`navigator.webdriver`).
  BigNumeral and LedgerWaterfall use it too, so captures show real figures.
- `Button`: quiet variant has a 44px hit area (negative margin keeps layout);
  primary is 48px with 3px corners. Class strings moved to `buttonStyles.ts`.
- `LedgerTable` on phones: stacked entries, lead cell as heading, other cells
  under their own label, prose at 16px.
- `SiteFooter`: colophon with 44px links (2-col grid on phones), contact
  line at 14px (was 12px mono), "Set in Newsreader, General Sans and IBM
  Plex Mono." line.
- `ContactForm`: 48px fields, shares the primary button classes, 3px corners.
- `CareerLedger`, `LogoRow`: rule utility, tighter phone gaps.
- `ChapterOpener` (brief): same rule and display size as PageHeader.
- `public/favicon.svg`: JH drawn as Newsreader outlines, ink on paper between
  sienna rules (was cedar tile with live text that fell back to Georgia).
- `DESIGN.md` rewritten to describe the system as built.

**Files**: `src/index.css`, `src/components/ui/{BigNumeral,Button,Chapter,
Eyebrow,LedgerTable,LedgerWaterfall,PageHeader,Reveal,Section}.tsx`, new
`src/components/ui/buttonStyles.ts`, new `src/components/ui/useStillMotion.ts`,
`src/site/components/{SiteNav,SiteFooter,ContactForm,CareerLedger,LogoRow}.tsx`,
`public/favicon.svg`, `DESIGN.md`. Layout.tsx unchanged (it was fine).

**For the page sessions (all optional, APIs are backward compatible)**
- FAQ: `<summary className="faq-summary">Q<span className="faq-sign" aria-hidden /></summary>`
  inside `<details className="group border-b border-hairline">`. Approach FAQ
  summaries currently measure 27px tall; this makes them 44px+.
- Work's "full ledger" disclosure summary is 22px tall: add `tap-inline`.
- Page titles: `text-display` instead of `text-h1 md:text-[3.25rem]`.
- Section padding: Section already uses `py-section`; no page change needed.
- `PageHeader` new optional prop `mark` (default true); `children` optional.
- `MarginNote` new optional `className`.
- Figure captions (Home/About headshot) are `font-mono text-eyebrow`, 12px;
  consider `text-note text-ink-soft`.
- Avoid a mono eyebrow above sections (Home hero has "Jake Heaps · American
  Fork, Utah" kicker; that is the page's one, fine).

**Verified**: `npm ci && npm run build` pass; lint has only the known
`src/components/Nav.tsx` error; confidentiality check passes. Playwright at
360/390/768/1440 on /, /work, /about, /approach, /brief: no horizontal scroll,
no element overflow, nav/footer/buttons/fields >= 44px. Reveal re-tested with
webdriver spoofed false: all blocks reveal on scroll.

**Not verified**: real iOS Safari / Android (sticky + backdrop blur, safe
areas); keyboard pass of the nav beyond focus ring presence; screen reader.
Pages were checked against the pre-rewrite page files, not the other
sessions' branches (not pushed yet when I checked).

**Open questions**
- NotFound has no ContactBand; Contact in the nav falls back to the home
  page's band. Fine, or should the 404 get one?
- PRODUCT.md still says Jake "isn't taking consulting work" (contract rule 2);
  coordinator owns that file.

## 2026-11-21, second pass after the coordinator update (kit + LinkedIn only)

**What I did**
- Merged `origin/claude/charming-cori-j61y86` (contract items 4, 11-15, brand-kit/).
- Favicon: replaced my outlined version with the kit's `favicon.svg` (cedar
  tile). Added `public/apple-touch-icon.png` (kit's 180px icon).
- `PageHeader`: the small JH mark in the running head is now off by default
  (`mark` prop, default false). LOGO-USAGE.md sets a ~72px minimum for the
  rule-and-initials mark, and the running-head mark was 11px.
- `SiteFooter`: email removed. LinkedIn is the one contact link (cedar,
  underlined, with an arrow and "(opens in a new tab)" for screen readers).
  The kit's hand signature signs the footer (imported from
  `brand-kit/logo/signature.svg`, so it's one file, not a copy).
- `SiteNav`: Contact still goes to `#contact`. I kept it internal so all four
  bar items behave the same and the band can say a line before linking out.
  If the 404 page has no band it falls back to `/#contact`.
- DESIGN.md updated for the kit, footer, favicon and PageHeader change.

**For the coordinator: add to `index.html` `<head>`** (the existing
`<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` stays):
```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="theme-color" content="#f7f4ee" />
```

**For pages-copy:** `ContactBand` must keep `id="contact"` (via
`<Section id="contact">`), since the nav's Contact item and its 404 fallback
jump there.

**Notes**
- `brand-kit/logo/social-icons.svg` has no LinkedIn glyph (bluesky,
  discord, documentation, github, a generic purple "social" and x; it looks
  like the Vite starter sprite). I didn't draw one; LinkedIn is a text link.
- The kit README says em dashes are welcome; CONTRACT.md rule 6 bans them.
  I followed the contract.
- The nav and footer nameplate mark is ~20px wide, under the kit's ~72px
  minimum. That's how the old site used it, and the lockup with the wordmark
  reads clearly at that size. Flagging it in case Jake wants the cedar tile
  there instead.

**Verified**: build passes; lint only the known Nav.tsx error; confidentiality
passes; Playwright 360/390/768/1440 on all five routes: no horizontal scroll,
no overflow, footer signature renders.

**Not verified**: real devices; the pages from the other sessions' branches
(screenshots are of the pages as they are on this branch after the merge).
