import { teamRoster } from "../../data/roster";
import { ChapterOpener, MarginGrid, MarginNote } from "../ui/Chapter";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

/* Personnel appendix: group the roster by department, in source order. */
const departments = [...new Set(teamRoster.map((m) => m.department))].map(
  (name) => ({
    name,
    members: teamRoster.filter((m) => m.department === name),
  }),
);

/**
 * Chapter 03 — Education. The thesis (training vs. enablement), the
 * personnel appendix, and three case notes. No cards, no filters — the
 * visual mass of the roster is the argument.
 */
export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-24 md:py-32">
        <ChapterOpener
          n="03"
          title="Education"
          stat="575+"
          statLabel="AI skills built by the team"
        >
          How a non-technical marketing team became AI builders: one person, one
          bottleneck, one working system at a time. It is where the company-wide
          rollout started.
        </ChapterOpener>

        {/* 1 · The thesis */}
        <Reveal className="mt-16 md:mt-20">
          <h3 className="font-display text-h2">Training is not enablement</h3>
          <MarginGrid className="mt-8">
            <div className="measure">
              <p>
                My first pass looked like every enterprise rollout: announcement
                emails, documentation, office hours, a standing invitation to
                experiment. People showed up. Then they went back to their desks
                and worked exactly as before. Measured honestly, adoption was
                near zero.
              </p>
            </div>
            <MarginNote label="First pass">
              <p>workshops · docs · office hours</p>
              <p className="mt-1">adoption ≈ 0</p>
            </MarginNote>
            <div className="measure space-y-5">
              <p>
                So I stopped teaching the tool and started building the
                workflow. I sat down with each person on the team, asked to see
                the worst bottleneck in their week, and built the fix with them,
                in their files, on their accounts, against their real deadlines.
                A session ended when the system ran, and the only measure I kept
                was whether it was still running a month later.
              </p>
              <p>
                The order never changed: strategy, then implementation, then
                education.
              </p>
            </div>
            <MarginNote label="Second pass">
              <p>one-on-one build sessions</p>
              <p className="mt-1">adoption 93%</p>
              <p className="mt-1">measured on live workflows, not attendance</p>
            </MarginNote>
          </MarginGrid>
        </Reveal>

        {/* 2 · The personnel appendix */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <Eyebrow>Appendix · Personnel</Eyebrow>
            <h3 className="mt-4 font-display text-h2">
              The roster, by department
            </h3>
            <p className="measure mt-4 text-ink-soft">
              Selected entries from the roster: each one a workflow now running
              in production, built or co-built during enablement, documented,
              and in daily use.
            </p>
            <p className="measure mt-3 font-mono text-caption text-ink-soft">
              Published with the consent of those named; roles are generalized
              to protect internal detail.
            </p>
          </Reveal>

          <div className="mt-10 space-y-12">
            {departments.map((dept) => (
              <Reveal key={dept.name}>
                <h4 className="eyebrow m-0 font-medium text-ink">
                  {dept.name}
                </h4>
                <ul className="m-0 mt-3 list-none border-b border-hairline p-0">
                  {dept.members.map((m) => (
                    <li
                      key={m.role}
                      className="grid gap-x-8 gap-y-1 border-t border-hairline py-3 md:grid-cols-[230px_minmax(0,1fr)_max-content] md:items-baseline"
                    >
                      <span className="text-caption font-medium text-ink">
                        {m.role}
                      </span>
                      <span className="text-caption text-ink-soft">
                        <span className="sr-only">Workflow: </span>
                        {m.workflow}
                      </span>
                      <span className="font-mono text-eyebrow text-ink-soft md:text-right">
                        <span className="sr-only">Tool: </span>
                        {m.tool}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 3 · Case notes */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <Eyebrow>From the roster</Eyebrow>
            <h3 className="mt-4 font-display text-h2">Three case notes</h3>
          </Reveal>

          <div className="mt-10 space-y-10">
            <Reveal>
              <MarginGrid className="border-t border-hairline pt-8">
                <div className="measure">
                  <p className="eyebrow text-sienna">
                    Wes Holley · Creative Director
                  </p>
                  <p className="mt-4">
                    Wes ran creative delivery on a five-day turnaround, and a
                    single video cost sixteen working hours. We rebuilt the
                    pipeline in his enablement sessions; creative now ships the
                    same day, and a video takes him just over an hour. He is
                    clear about the trade: most of the hand-finished quality at
                    ten times the speed. And he calls it the right one.
                  </p>
                </div>
                <MarginNote label="Video production">
                  <p>16 h → 1 h 15 m per video</p>
                  <p className="mt-1">creative delivery: 5 days → same day</p>
                  <p className="mt-1">
                    “85–90% at 10× speed is the right tradeoff”
                  </p>
                </MarginNote>
              </MarginGrid>
            </Reveal>

            <Reveal>
              <MarginGrid className="border-t border-hairline pt-8">
                <div className="measure">
                  <p className="eyebrow text-sienna">
                    Milo Bush · Events Manager
                  </p>
                  <p className="mt-4">
                    Milo had never written a line of code. His webinar program
                    ran on roughly twenty hours a week of manual administration:
                    scheduling, logistics, follow-up. With AI as his coach, he
                    automated the entire sequence himself, and agents now handle
                    the daily follow-up on their own. The same program takes
                    about two hours of his week.
                  </p>
                </div>
                <MarginNote label="Webinar program">
                  <p>~20 h/wk → ~2 h/wk</p>
                  <p className="mt-1">follow-up: daily, by agents</p>
                </MarginNote>
              </MarginGrid>
            </Reveal>

            <Reveal>
              <MarginGrid className="border-t border-hairline pt-8">
                <div className="measure">
                  <p className="eyebrow text-sienna">
                    The executive sponsor · CMO
                  </p>
                  <p className="mt-4">
                    Before the program, AI inside the department was a set of
                    individual experiments with no coordinated strategy. An
                    executive sponsor made adoption an operating priority: the
                    design and implementation of the department-wide strategy
                    was orchestrated from the top, and the results were held to
                    measurement. The roster above is as long as it is because
                    the program had an owner at the top.
                  </p>
                </div>
                <MarginNote label="Sponsorship">
                  <p>individual experiments → coordinated strategy</p>
                  <p className="mt-1">department-wide, measured</p>
                </MarginNote>
              </MarginGrid>
            </Reveal>
          </div>
        </div>
        <Reveal className="mt-16 md:mt-20">
          <p className="font-mono text-caption text-ink-soft">
            The team didn’t just learn the tools. They learned the gates, so the
            discipline scales without me in the room.&ensp;
            <a href="#governance" className="text-cedar">
              How this runs safely →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
