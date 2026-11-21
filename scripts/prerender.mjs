/**
 * Head prerender. Reads the built dist/index.html shell and, for each route in
 * src/site/routes.json, writes dist/<route>/index.html with that route's
 * title, description, canonical, Open Graph tags, and robots directive. The
 * client still renders the page body; this makes link previews and crawlers
 * see the right metadata without running JS. Also writes dist/sitemap.xml.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const SITE = "https://jakeheaps.com";
const routes = JSON.parse(readFileSync("src/site/routes.json", "utf8"));

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const shell = readFileSync(join(DIST, "index.html"), "utf8");

function setAttr(html, pattern, value, label) {
  if (!pattern.test(html)) throw new Error(`prerender: ${label} not found in shell`);
  return html.replace(pattern, (_, a, b) => `${a}${esc(value)}${b}`);
}

for (const r of routes) {
  const url = r.path === "/" ? `${SITE}/` : `${SITE}${r.path}`;
  let html = shell.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`);
  html = setAttr(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, r.description, "description");
  html = setAttr(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, r.title, "og:title");
  html = setAttr(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, r.description, "og:description");
  html = setAttr(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, url, "og:url");
  html = setAttr(html, /(<link\s+rel="canonical"\s+href=")[^"]*(")/, url, "canonical");
  html = setAttr(
    html,
    /(<meta\s+name="robots"\s+content=")[^"]*(")/,
    r.noindex ? "noindex, nofollow" : "index, follow",
    "robots",
  );

  const out = r.path === "/" ? join(DIST, "index.html") : join(DIST, r.path.slice(1), "index.html");
  mkdirSync(join(out, ".."), { recursive: true });
  writeFileSync(out, html);
}

// 404 page: same shell, noindex. Served by the Worker for unknown paths.
let notFound = shell.replace(/<title>[\s\S]*?<\/title>/, "<title>Page not found · Jake Heaps</title>");
notFound = notFound.replace(/(<meta\s+name="robots"\s+content=")[^"]*(")/, "$1noindex$2");
writeFileSync(join(DIST, "404.html"), notFound);

const urls = routes.filter((r) => !r.noindex).map((r) => (r.path === "/" ? `${SITE}/` : `${SITE}${r.path}`));
urls.push(`${SITE}/uvu`);
writeFileSync(
  join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join("\n")}\n</urlset>\n`,
);

console.log(`prerender: wrote ${routes.length} routes, 404.html, sitemap.xml`);
