import { record } from "../data/metrics";
import { BigNumeral } from "./ui/BigNumeral";
import { Eyebrow } from "./ui/Eyebrow";
import { RevealGroup, RevealItem } from "./ui/Reveal";

/** The Record — Stripe-style stat band. Five numerals, hairlines, no cards. */
export default function Record() {
  return (
    <section id="record" className="scroll-mt-24 bg-surface px-6">
      <div className="mx-auto max-w-[1100px] py-24 md:py-32">
        <Eyebrow as="h2">The record</Eyebrow>
        <RevealGroup className="mt-10 grid grid-cols-2 gap-y-12 md:grid-cols-5 md:gap-y-0">
          {record.map((m, i) => (
            <RevealItem
              key={m.label}
              className={`md:px-8 ${
                i > 0 ? "md:border-l md:border-hairline" : ""
              } ${i === 0 ? "md:pl-0" : ""} ${
                i === record.length - 1 ? "md:pr-0" : ""
              }`}
            >
              <BigNumeral
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                className="block text-[2.75rem] leading-none text-ink md:text-[3rem]"
              />
              <p className="mt-3 text-caption text-ink-soft">{m.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>
        <p className="mt-10 font-mono text-caption text-ink-soft">
          Counting rules and itemization:{" "}
          <a href="#ledger" className="text-cedar">
            the ledger
          </a>
          . Adoption measured on live workflows; productivity is current, while
          the December business review logged ~280 hrs/week saved; pipeline
          tracked separately from P&amp;L.
        </p>
      </div>
    </section>
  );
}
