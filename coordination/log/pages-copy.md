# pages-copy log

## 2026-11-21 (session pages-copy)

**What I did**
- Rewrote all copy on Home, About, Approach, 404 and the contact band in Jake's voice, keeping every page's section outline.
- Removed the "Are you taking consulting work?" FAQ entry and the contact band's "not taking consulting work" lede. Contact band now just points to email, the form and LinkedIn.
- Replaced the "What I mean by an AI operating system" section with "What I actually build", using two contract stats (17 news feeds daily, 16 hours to 1h15 per video) as examples.
- Huckleberry is name and title only everywhere, plus "hasn't launched publicly yet" (career row, About career story, FAQ answer).
- About: added Eagle Scout to the facts list, service section reworked, career story split into shorter paragraphs. Photo now shows on mobile (max 200px) instead of being hidden below lg.
- Home hero: new headline "I build the AI / my coworkers / use every day." (fits at 360 with room). Photo capped at 240px on mobile, 320px at sm, 400px at lg.
- Contact band links get vertical padding for 44px tap targets; LinkedIn link text now shows the URL (derived from CONTACT.linkedin).
- Rewrote routes.json titles/descriptions for /, /work, /about, /approach, and the matching home meta in index.html.

**Files changed**
src/site/pages/Home.tsx, src/site/pages/About.tsx, src/site/pages/Approach.tsx, src/site/pages/NotFound.tsx, src/site/components/ContactBand.tsx, src/data/career.ts, src/site/routes.json, index.html, coordination/log/pages-copy.md

**Decisions**
- Removed the mono "San Bernardino · 2020–2022" kicker above the service h2 (contract rule 7: one kicker per page header); the dates moved into the paragraph.
- Fortune margin note reworded from "organizational, not technical" to "comes from organizational change" to avoid the X-not-Y construction.
- Rule "Every system has an owner" no longer says "not me" (same reason).
- FAQ "How do you get people to use it" now cites 80+ people trained (contract stat).
- Did not use "grew up in Utah"; no hometown in the sources.

**Verified**
- `npm ci && npm run build` passes; `./scripts/check-confidentiality.sh` passes.
- Playwright screenshots of /, /about, /approach, 404 at 360, 390, 768, 1440 after scrolling. No horizontal overflow at any width; h1 never overflows. Looked at 360 and 1440 closely.

**Not verified**
- 390 and 768 checked only by the overflow numbers and a skim, not section by section.
- Did not check the reduced-motion path or the contact form submit.
- `/work#ledger` (Home) and `/work#systems` (Approach) anchors depend on ids the work-page session keeps; confirm after merge.

**TODO(jake) left (all in src/site/pages/About.tsx)**
- Hometown, and which sport or position you played longest.
- One line on your Eagle Scout project.
- Expected UVU graduation date.
- Ella line: `{/* TODO(jake): confirm */}` (married August 2026, met through Jake's mom).
- Teams you follow or a side project to name in "Outside of work".

**Open questions / notes for others**
- brand-mobile: the mobile nav shows Work, About, Approach but no Contact link at 360 (contract rule 8 wants contact reachable). Not my file.
- Coordinator: CONTEXT.md and PRODUCT.md still say Jake "isn't taking consulting work"; the site no longer says that, you may want those docs aligned.

## 2026-11-21, second pass (coordinator update: contract items 1, 4, 11 to 15)

**What I did**
- Merged `origin/claude/charming-cori-j61y86` into my branch and re-read the contract.
- Naitive removed: career row deleted, About paragraph deleted. No mention left in my files.
- Huckleberry is title only everywhere ("Manager, Internal AI Projects at Huckleberry AI", linked). Removed "hasn't launched publicly yet" from the career row, About and the FAQ. Dropped the Huckleberry FAQ entry entirely. Career row short line is now "Where I work now."
- ContactBand rewritten: LinkedIn only. Short invitation plus a primary "Message me on LinkedIn" button (min-h-11, full width on phones). No email, no form, no `ContactForm` import. Approach speaking FAQ now says LinkedIn instead of email.
- Home: new ledger in the Domo section (2px ink rule, hairline rows, serif numerals) with 93%, 26, $2.3M (computed from `firstYearTotal`), 1.65x. Heading is now "What my year at Domo added up to." Hero lede uses the exact title string; removed the hero photo caption (it repeated the title).
- Bio facts applied and all TODO(jake) comments removed: mission for The Church of Jesus Christ of Latter-day Saints, every sport growing up with football in high school, NCAA football and the NFL, Ella line without the TODO, UVU with no finish date. Career row is now "Mission".
- Approach video stat updated to "8 to 16 hours" per the new stats list. routes.json /work and /about descriptions updated (no "clients", mission wording).

**Verified**: build passes, confidentiality check passes, screenshots at 360/390/768/1440 of /, /about, /approach, 404 show no horizontal overflow. Looked at Home 360 and 1440 Domo section, Home 360 contact band, About 390.

**Removed TODO(jake)s**: all five from the first pass. I also dropped the Eagle project and hometown TODOs without adding those details.

**For other sessions**
- brand-mobile: `SiteFooter` still shows the email (contract 12). The mobile nav still has no Contact link at 360 (desktop has "Get in touch").
- brand-mobile/coordinator: `LogoRow` shows Manscaped, Cox Automotive, Thryv, Carvana, Regional One Health. If any of those were Naitive clients they should go (contract 11). The label above it in Home reads "Places I've worked or built for".
- `src/data/contact.ts` still has `email`; my files no longer use it.
