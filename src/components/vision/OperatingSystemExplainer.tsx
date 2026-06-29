import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

/**
 * "What an AI operating system actually is" — written for a non-technical
 * buyer. Blend framing: what it replaces + how the company runs. Single-column
 * for Phase 1; the layout rework (Phase 2) moves the two notes to a right rail.
 */
export function OperatingSystemExplainer() {
  return (
    <section id="what-it-is" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-20 md:py-28">
        <Reveal>
          <Eyebrow as="h2">What it is</Eyebrow>
          <h3 className="mt-4 max-w-[20ch] font-display text-h1 md:text-[2.75rem] md:leading-[1.08]">
            What an AI operating system actually is.
          </h3>
          <div className="mt-6 max-w-[58ch] space-y-5 text-body text-ink">
            <p>
              Most companies use AI as a side tool. A few people open a chatbot
              when they remember to. An AI operating system is the other thing.
              It&rsquo;s how the work actually gets done, every day, wired into
              your real data and the tools your team already uses.
            </p>
            <p>
              Start with the repetitive part of the job. In most teams about
              ninety percent of the work is the same handful of tasks, run over
              and over. That&rsquo;s the part the system absorbs, so your people
              spend their time on the part that actually needs them.
            </p>
            <p>
              It runs on your own data and inside your own tools, so it fits how
              the company already works instead of asking everyone to change.
              You end up with a company that runs on AI as a matter of course,
              not a pilot sitting off to the side.
            </p>
          </div>

          <dl className="mt-10 grid gap-x-10 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow text-sienna">Replaces</dt>
              <dd className="m-0 mt-2 max-w-[40ch] text-caption text-ink-soft">
                The repetitive ninety percent of a team&rsquo;s week: the same
                tasks, run over and over.
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-sienna">Runs on</dt>
              <dd className="m-0 mt-2 max-w-[40ch] text-caption text-ink-soft">
                Your real data, inside the tools your team already uses.
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
