# Work page projects (source notes)

Coordinator-written. Facts come from Jake's own repos, mostly the *external*
version of his Domo case study (`ai_projects/board_case_study_marketing_ai_transformation_external.md`
in jakeheaps-coder/jake-heaps-os), plus `src/data/projects.ts` here, plus Jake's
answers in chat. Only use what is written here; don't infer more.

Banned names (confidentiality script): Clanker, ADM Discovery, AirOps, Aprimo,
Salesloft, ZoomInfo, Neo4j, Cloud Run, Minky. Use the plain descriptions instead.

## Featured (Jake asked for these by name), in this order

1. **Messaging Brain** (Domo). Name it. The knowledge graph that holds Domo's
   product messaging, competitive intelligence, and industry data as connected
   knowledge. Every agent queries it (55 tools connected across the agents), it
   feeds content, and a Figma plugin puts the approved messaging inside the
   design canvas. Ledger: "Messaging intelligence system", built in-house instead
   of buying, $65K/yr equivalent (already in ledger.ts as $65,000).

2. **Apollo outbound engine** (Domo version only; Apollo may be named). One
   pipeline: discover accounts, enrich them, sequence them in Apollo, then an
   agent feedback stage, ending at a converted prospect. Signals only fire on
   repeated interest: 2+ opens, 2+ clicks, or any reply. Single opens are ignored
   as noise. Engaged contacts get an AI-generated personalized landing page and
   an updated lead score. Honest status from the case study: operational, has
   not fully retired the paid tools yet ("displacing portions of" outbound and
   enrichment tools). Do not mention Naitive or any client version.

3. **Media monitoring agent / tracking workflow** (Domo). Daily monitoring of
   Domo and competitor news with automated alerts and an email update. It keeps
   topic continuity from day to day, removes duplicates, and filters
   ticker spam. Went through a large security audit before rollout.

4. **Domopalooza scheduler** (Domo). An AI scheduler for Domopalooza, Domo's
   annual conference: it scheduled attendee breakout sessions for 6,000+
   registrants, plus sessions, meetings, and speakers.

## Others to feature (coordinator picks; keep each to 1 to 2 sentences)

- **Competitive intel agent + daily collector.** Watches competitor activity
  every day and keeps battle cards current.
- **Executive assistants.** Custom AI assistants for 11 C-suite leaders, each set
  up around how that person writes and what they care about.
- **Weekly executive report.** Pulls from SharePoint, Domo, and Gemini and
  produces the PowerPoint every Friday on its own.
- **CMO marketing analysis.** 20 tools; every release has to pass 110 test
  questions.
- **Paid search agent.** 24 tools across 6 regional datasets. Recommends; a
  person approves every change.
- **Sales Navigator.** Real-time coaching on live sales calls (speech to text plus
  Gemini).
- **Media relations platform.** Scans 17 news feeds daily, scores stories for a
  Domo angle, drafts pitches in three formats. Replaced a paid PR tool.
- **Video pipeline.** AI avatar video production; a video went from 8 to 16 hours
  to 1 hour 15 minutes.
- **Domopalooza keynote creative.** AI-generated keynote visuals, opening video,
  and speaker cards; the CEO keynote had 100+ slides of AI-generated graphics.
- **Skills library.** 575+ Claude Code skills covering marketing functions and
  workflows, owned through pull requests.
- **jake-heaps-os** (personal). Jake's whole working setup in one private repo:
  every skill, agent, hook, and config, so a new machine is fully set up from one
  clone. Jake asked for it to be added.

## Removed by Jake

- AI SDR (remove).
- Naitive and anything built through it (remove everywhere).
- Domo screenshots on /work (keep them in /brief).
