import { ChapterOpener, MarginGrid, MarginNote } from "../ui/Chapter";
import { Eyebrow } from "../ui/Eyebrow";
import { LedgerTable } from "../ui/LedgerTable";
import { Reveal } from "../ui/Reveal";

/** The standards ledger — every check traces to a published framework. */
const standards = [
  {
    framework: "OWASP Top 10 2021",
    scope: "Web application security",
    checks: "43",
  },
  {
    framework: "OWASP LLM Top 10",
    scope: "Prompt injection, output handling, excessive agency",
    checks: "10",
  },
  {
    framework: "OWASP Agentic Top 10",
    scope: "Tool misuse, memory poisoning, cascading failures",
    checks: "10",
  },
  {
    framework: "OWASP MCP Top 10",
    scope: "Token hygiene, tool poisoning, shadow servers",
    checks: "10",
  },
  {
    framework: "SOC 2 CC6–CC9",
    scope: "Access, operations, change management, risk mitigation",
    checks: "14",
  },
  {
    framework: "CIS Controls v8",
    scope: "Enterprise security baselines",
    checks: "13",
  },
  {
    framework: "NIST SP 800-53",
    scope: "Selected controls from the catalog",
    checks: "12",
  },
  {
    framework: "GDPR / CCPA",
    scope: "Privacy obligations — applied when PII is present",
    checks: "8",
  },
];

/**
 * Chapter 02 — Governance. The gates, the standards ledger, agentic risk,
 * adversarial verification, and the data perimeter.
 */
export default function Governance() {
  return (
    <section id="governance" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-24 md:py-32">
        <ChapterOpener
          kicker="Cross-cutting"
          title="How this runs safely"
          stat="3"
          statLabel="gates before anything ships"
        >
          Governance is not a fourth step — it runs through all three. Plan-time
          at strategy, controls shipped with every system, gates the team
          learned to run themselves.
        </ChapterOpener>

        {/* — The posture: shift-left, three gates — */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <Eyebrow>The posture</Eyebrow>
            <h3 className="mt-4 font-display text-h2">Three gates</h3>
            <MarginGrid className="mt-6">
              <div className="measure space-y-5">
                <p className="text-body text-ink-soft">
                  Governance here is shift-left — review moves to the earliest
                  point where it can still change the design. Three gates.
                  Plan-time review reads the plan before any code exists: threat
                  model, PII handling, compliance posture, eval strategy. The
                  pre-deploy gate runs on every merge, four domains deep. And
                  milestone review runs the full system — all 13 audit domains,
                  roughly 43 specialist auditors working in parallel.
                </p>
                <p className="text-body text-ink-soft">
                  Every review ends in one of three verdicts — block deploy,
                  proceed with caveats, or ship — and severity is policy, not
                  opinion. Critical and high findings block the merge. Medium
                  findings get scheduled. Low findings get logged. Nobody
                  negotiates with the gate.
                </p>
              </div>
              <MarginNote label="The gates">
                plan-time → pre-deploy → milestone
              </MarginNote>
            </MarginGrid>
          </Reveal>
        </div>

        {/* — The standards ledger — */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <Eyebrow>The rulebook</Eyebrow>
            <h3 className="mt-4 font-display text-h2">The standards ledger</h3>
            <MarginGrid className="mt-6">
              <div className="measure">
                <p className="text-body text-ink-soft">
                  A finding that traces to a published framework survives an
                  audit; a finding that traces to my taste does not. Every check
                  in the review system maps to one — the same standards an
                  external assessor would bring, run before the assessor
                  arrives.
                </p>
                <LedgerTable
                  className="mt-8"
                  caption="152 security checks per full review · 115 backend, 37 frontend"
                  columns={[
                    {
                      key: "framework",
                      label: "Framework",
                      lead: true,
                      width: "md:w-[34%]",
                    },
                    { key: "scope", label: "Scope" },
                    {
                      key: "checks",
                      label: "Checks",
                      numeric: true,
                      width: "md:w-[14%]",
                    },
                  ]}
                  rows={standards.map((s) => ({
                    framework: s.framework,
                    scope: s.scope,
                    checks: s.checks,
                  }))}
                />
              </div>
              <MarginNote label="Why standards">
                The 120 framework-mapped checks above are the core; the
                remaining 32 are implementation-level — client-side AI surfaces,
                platform specifics. Findings are defensible in audit, not taste.
              </MarginNote>
            </MarginGrid>
          </Reveal>
        </div>

        {/* — Agentic risk — */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <Eyebrow>Agentic risk</Eyebrow>
            <h3 className="mt-4 font-display text-h2">
              What AI changes about risk
            </h3>
            <div className="measure mt-6 space-y-5">
              <p className="text-body text-ink-soft">
                Most of the rulebook predates AI; the newest checks exist
                because agents are different. Software that reads, decides, and
                acts needs controls ordinary code never did. Prompt injection,
                direct and indirect — including tool descriptors poisoned to
                turn an agent’s own instructions against it. Human-in-the-loop
                gates on any tool that is destructive or irreversible. Agent
                identity and confused-deputy prevention, so a system acting on
                someone’s behalf can never borrow more authority than that
                person holds. Memory poisoning. Cross-tenant context bleed. Cost
                and turn caps, so no agent can run away with a loop or a budget.
              </p>
              <p className="text-body text-ink-soft">
                Customer-facing agents carry the strictest set — they ship with
                approval gates, suppression lists, and disclosure.
              </p>
            </div>
          </Reveal>
        </div>

        {/* — Verification — */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <Eyebrow>Verification</Eyebrow>
            <h3 className="mt-4 font-display text-h2">Trust is adversarial</h3>
            <MarginGrid className="mt-6">
              <div className="measure space-y-5">
                <p className="text-body text-ink-soft">
                  The verification rule is blunt: a check without a command run
                  is a skip. An auditor that reads code and nods has verified
                  nothing — run the probe, capture the output, then judge. The
                  same rule covers fixes: reproduce the bug before trusting the
                  patch.
                </p>
                <p className="text-body text-ink-soft">
                  Evals are model-risk controls, not marketing. The CMO agent’s
                  110-question suite gates its deploys — fail the suite, miss
                  the release. And the honest number is the held-out one: the
                  Agent Factory ships at a 91% pass rate, published because a
                  self-graded 100% means the test is too easy.
                </p>
              </div>
              <MarginNote label="In practice">
                The news-monitoring workflow shipped only after a 90-agent
                security audit surfaced — and remediated — an SSRF class.
              </MarginNote>
            </MarginGrid>
          </Reveal>
        </div>

        {/* — Data boundaries — */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <Eyebrow>The perimeter</Eyebrow>
            <h3 className="mt-4 font-display text-h2">Data boundaries</h3>
            <div className="measure mt-6">
              <p className="text-body text-ink-soft">
                Everything in this record runs inside the company’s existing
                platform permissions — no system widens the aperture. Dataset
                access controls are reproduced in full; the DAM migration
                shipped with a complete ACL parity layer, granting exactly what
                the old system granted and nothing more. MCP servers sit behind
                OAuth with allowlisted tools. Secrets live in managed stores.
                Nothing is trained on customer data.
              </p>
              <p className="mt-8 border-t border-hairline pt-4 font-mono text-caption text-ink-soft">
                Published screenshots in this brief are blurred for
                confidentiality.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
