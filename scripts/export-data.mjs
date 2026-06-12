/**
 * Single-sources site data for the PDF: bundles src/data/*.ts with esbuild,
 * imports the result, and writes scripts/data.json for generate-pdf.py.
 * Run: node scripts/export-data.mjs
 */
import { build } from "esbuild";
import { writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tmp = mkdtempSync(join(tmpdir(), "jh-data-"));

const entry = join(tmp, "entry.ts");
writeFileSync(
  entry,
  `export * as metrics from "${join(root, "src/data/metrics.ts")}";
export * as projects from "${join(root, "src/data/projects.ts")}";
export * as roster from "${join(root, "src/data/roster.ts")}";`,
);

const out = join(tmp, "data.mjs");
await build({ entryPoints: [entry], bundle: true, format: "esm", outfile: out });

const data = await import(pathToFileURL(out).href);
const json = {
  metrics: { ...data.metrics },
  projects: { ...data.projects },
  roster: { ...data.roster },
};
writeFileSync(join(root, "scripts/data.json"), JSON.stringify(json, null, 2));
rmSync(tmp, { recursive: true, force: true });
console.log("Wrote scripts/data.json");
