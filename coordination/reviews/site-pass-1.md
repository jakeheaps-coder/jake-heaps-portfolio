# Blind review · pass 1 · jakeheaps.com (/, /work, /about, /approach)

Reviewer: fresh Opus subagent, blind (site folder only). Cost: ~178K tokens, 54 tool calls, ~7 minutes.

Overall: **4.0 · Ready.** Brand 4, Voice 4, Story and stats 4, Work page 4, Mobile 4, Constraints 4, Craft and accessibility 4.

| # | Severity | Defect | Owner | Action |
|---|---|---|---|---|
| 1 | should fix | Straight apostrophes on Approach | coordinator (pages-copy stopped) | Fixed: converted to ’ |
| 2 | should fix | Work intro "the last one is my own" points 15 rows down | coordinator (work-page stopped) | Fixed: line now says all are from Domo |
| 3 | should fix | 1.65x arithmetic not shown | — | **Declined.** Jake: keep 1.65x as is (2026-11-21). |
| 4 | should fix | FAQ summary tap target 27px | coordinator | Fixed: padding on summary, min-h-11 (now 58 to 81px) |
| 5a | should fix | Email string in public JS bundle | coordinator | Fixed: email moved into ContactForm (only loaded by /brief) |
| 5b | should fix | /screenshots/* reachable by URL | — | **Declined.** Jake said leave /brief as is; those files serve /brief. |
| 6 | polish | Home stat numerals ink, not sienna | coordinator | Fixed |
| 7 | polish | Header inset from body grid at 1440 | coordinator | Fixed: nav left = h1 left = 163px |
| 8 | polish | "canceled software / built instead of buying" repeated | — | Left; noted |
| 9 | polish | Logo strip uneven on mobile | — | Left |
| 10 | polish | OG headline differs from hero | coordinator | Fixed: OG regenerated with hero line |
| 11 | polish | No meta description in route HTML | — | Not a defect: descriptions are present (multi-line tag); reviewer's grep missed them |
| 12 | polish | Work page long on mobile, no jump links | — | Left |
