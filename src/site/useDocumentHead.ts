import { useLayoutEffect } from "react";
import { useLocation } from "react-router";
import { routeMetaFor, SITE_URL } from "./routes";

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (key: "name" | "property", id: string) => () => {
  const el = document.createElement("meta");
  el.setAttribute(key, id);
  return el;
};

/**
 * Keeps <title>, description, canonical, Open Graph, and robots in sync on
 * in-app navigation. The prerender step writes the same values into each
 * route's static HTML, so crawlers and link previews see them without JS.
 */
export default function useDocumentHead() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const m = routeMetaFor(pathname);
    if (!m) {
      document.title = "Page not found · Jake Heaps";
      upsert('meta[name="robots"]', meta("name", "robots"), "content", "noindex");
      return;
    }
    const url = `${SITE_URL}${m.path === "/" ? "/" : m.path}`;
    document.title = m.title;
    upsert('meta[name="description"]', meta("name", "description"), "content", m.description);
    upsert('meta[property="og:title"]', meta("property", "og:title"), "content", m.title);
    upsert('meta[property="og:description"]', meta("property", "og:description"), "content", m.description);
    upsert('meta[property="og:url"]', meta("property", "og:url"), "content", url);
    upsert('meta[name="robots"]', meta("name", "robots"), "content", m.noindex ? "noindex, nofollow" : "index, follow");
    upsert(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.rel = "canonical";
        return l;
      },
      "href",
      url,
    );
  }, [pathname]);
}
