import {
  projects,
  categoryLabels,
  systemCount,
  type Project,
  type ProjectCategory,
} from "../data/projects";
import { flagships, flagshipNames, type Flagship } from "../data/flagships";
import { Eyebrow } from "./ui/Eyebrow";
import { Reveal } from "./ui/Reveal";
import { ChapterOpener, MarginGrid, MarginNote } from "./ui/Chapter";

const categoryOrder = Object.keys(categoryLabels) as ProjectCategory[];

/** First clause of a description, lowercased for the index gloss. */
function indexGloss(text: string): string {
  const cut = text.indexOf(". ");
  const clause = (cut === -1 ? text : text.slice(0, cut)).replace(/\.$/, "");
  return /^[A-Z][a-z]/.test(clause)
    ? clause.charAt(0).toLowerCase() + clause.slice(1)
    : clause;
}

/** One flagship spread: file eyebrow, serif title, briefing prose, data rail, plate. */
function CaseFile({ flagship }: { flagship: Flagship }) {
  const {
    file,
    kind,
    title,
    body,
    roi,
    roiLabel,
    stack,
    spec,
    controls,
    owner,
    figure,
  } = flagship;
  return (
    <article className="border-t border-hairline pt-12">
      <Reveal>
        <MarginGrid>
          <div>
            <Eyebrow n={file}>{kind}</Eyebrow>
            <h3 className="mt-4 font-display text-h2 md:text-[2.125rem] md:leading-[1.15]">
              {title}
            </h3>
            <p className="measure mt-5 text-body text-ink-soft">{body}</p>
          </div>
          <div className="space-y-7">
            <MarginNote label={roiLabel ?? "Return"}>
              <span className="text-sienna">{roi}</span>
            </MarginNote>
            <MarginNote label="Stack">{stack.join(", ")}</MarginNote>
            {spec.length > 0 && (
              <MarginNote label="System spec">
                <dl className="m-0 space-y-1">
                  {spec.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <dt>{s.label}</dt>
                      <dd className="m-0 text-right text-ink">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </MarginNote>
            )}
            {controls && <MarginNote label="Controls">{controls}</MarginNote>}
            {owner && <MarginNote label="Owner">{owner}</MarginNote>}
          </div>
        </MarginGrid>
      </Reveal>
      {figure && (
        <Reveal as="figure" className="m-0 mt-10">
          <div className="plate aspect-[16/9] overflow-hidden bg-surface">
            <img
              src={figure.src}
              alt={figure.alt}
              className="h-full w-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption className="mt-3 font-mono text-eyebrow text-ink-soft">
            {figure.caption}
          </figcaption>
        </Reveal>
      )}
    </article>
  );
}

/** One catalog line: name — first clause, return at the right margin. */
function CatalogRow({ project, quiet }: { project: Project; quiet: boolean }) {
  const name = project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="underline decoration-ink/20 decoration-1 underline-offset-4 transition-colors duration-200 hover:decoration-ink"
    >
      {project.name}
    </a>
  ) : (
    project.name
  );
  return (
    <li className="border-t border-hairline py-3.5 md:grid md:grid-cols-[minmax(0,1fr)_minmax(200px,260px)] md:gap-x-10">
      <p className="text-body">
        <span className={`font-medium ${quiet ? "text-ink-soft" : "text-ink"}`}>
          {name}
        </span>
        <span className="text-ink-soft">
          {" "}
          — {indexGloss(project.description)}
        </span>
      </p>
      <p className="mt-1 font-mono text-caption text-ink-soft md:mt-0.5 md:text-right">
        {project.roi}
      </p>
    </li>
  );
}

/**
 * The work — six case files examined in detail, then the full catalog:
 * production systems indexed by domain, the artifacts they produced, and
 * personal builds last. Hairlines and ledger lines; no cards, no chips.
 */
export default function ProjectPortfolio() {
  const systemCatalog = categoryOrder
    .filter((cat) => cat !== "personal")
    .map((cat) => ({
      cat,
      items: projects.filter(
        (p) =>
          p.kind === "system" &&
          p.category === cat &&
          !flagshipNames.has(p.name),
      ),
    }))
    .filter((group) => group.items.length > 0);

  const artifacts = projects.filter(
    (p) => p.kind === "artifact" && p.category !== "personal",
  );
  const personal = projects.filter((p) => p.category === "personal");

  const catalogCount =
    systemCatalog.reduce((n, g) => n + g.items.length, 0) +
    artifacts.length +
    personal.length;

  return (
    <section id="work" className="scroll-mt-24 px-6">
      <div className="mx-auto max-w-[1100px] py-24 md:py-32">
        {/* Section opener — chapter 04 of the brief */}
        <ChapterOpener
          n="04"
          title="Six case files"
          stat={`${systemCount}`}
          statLabel="systems in production"
        >
          Every system in this section is in production. Six are examined in
          detail; the rest are indexed in the catalog.
        </ChapterOpener>

        {/* Tier 1 — the case files */}
        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          {flagships.map((f) => (
            <CaseFile key={f.source} flagship={f} />
          ))}
        </div>

        {/* Tier 2 — the catalog index */}
        <div className="mt-24 md:mt-28">
          <Reveal>
            <hr className="m-0 border-0 border-t-2 border-ink" />
            <div className="pt-8">
              <Eyebrow>Catalog&ensp;·&ensp;{catalogCount} entries</Eyebrow>
              <h3 className="mt-4 font-display text-h2">
                The rest of the record
              </h3>
              <p className="measure mt-4 text-body text-ink-soft">
                One line per entry, returns set at the margin — production
                systems first, then artifacts, then personal builds.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 space-y-16 md:space-y-20">
            {/* a · Production systems, indexed by domain */}
            <div>
              <Reveal>
                <h4 className="font-display text-h3">Production systems</h4>
              </Reveal>
              <div className="mt-8 space-y-12">
                {systemCatalog.map(({ cat, items }) => (
                  <Reveal key={cat}>
                    <Eyebrow>
                      {categoryLabels[cat]}&ensp;·&ensp;{items.length}
                    </Eyebrow>
                    <ul className="m-0 mt-4 list-none border-b border-hairline p-0">
                      {items.map((p) => (
                        <CatalogRow key={p.name} project={p} quiet={false} />
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* b · The artifacts — output, not machinery */}
            <Reveal>
              <h4 className="font-display text-h3">Selected artifacts</h4>
              <p className="measure mt-3 text-body text-ink-soft">
                Not systems — the videos, courses, and presentations the systems
                made possible.
              </p>
              <ul className="m-0 mt-6 list-none border-b border-hairline p-0">
                {artifacts.map((p) => (
                  <CatalogRow key={p.name} project={p} quiet={false} />
                ))}
              </ul>
            </Reveal>

            {/* c · Personal builds, outside the record */}
            <Reveal>
              <h4 className="font-display text-h3">Off the clock</h4>
              <p className="measure mt-3 text-body text-ink-soft">
                Personal builds from nights and weekends — they sit outside the
                record’s production stats.
              </p>
              <ul className="m-0 mt-6 list-none border-b border-hairline p-0">
                {personal.map((p) => (
                  <CatalogRow key={p.name} project={p} quiet />
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
