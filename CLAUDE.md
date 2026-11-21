# CLAUDE.md: jakeheaps.com

Jake Heaps' personal site. A profile, not a sales funnel: who Jake is, what he has
built, how he approaches AI work, and an easy way to say hello. Jake is Manager,
Internal AI Projects at Huckleberry AI. The site is hosted on Cloudflare Workers
(static assets) and deploys from this GitHub repo.

Read README.md for structure and commands, DESIGN.md for the visual system, and
PRODUCT.md for audience and voice.

Voice for anything that ends up on the site: first person, plain, specific. No em
dashes, no exclamation marks, no hype words, no "Not X. Y." constructions, no
stacked triplets. It must not read as AI-written.

## Coordination

This project is run by a coordinator session directing other sessions. Shared working state lives in `coordination/`.

- Before starting work, read `coordination/CONTRACT.md` (shared decisions you must follow) and `coordination/BOARD.md` (who owns which files).
- Write only the files your brief or the board assigns to you. If you need to change a file someone else owns, say so in your log and your final message instead of editing it.
- Do not edit `BOARD.md` or `CONTRACT.md` unless you are the coordinator. If the contract is wrong or missing something, note it in your log.
- When you finish a turn of real work, append an entry to `coordination/log/<your-session-name>.md` with: date and time; what you did; files you created or changed; decisions you made and why; what you did not verify; open questions for the coordinator or the user.
- Other sessions' logs are readable. Check them when your work depends on theirs.
- Subagents you spawn follow the same rules and report through you; they do not write logs of their own.
