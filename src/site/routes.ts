import routes from "./routes.json";

/**
 * Route metadata lives in routes.json so the client head hook (below) and the
 * build-time prerender script (scripts/prerender.mjs) read the same source.
 * A route can't have a page without meta, or meta without a static HTML file.
 */
export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  noindex: boolean;
}

export const ROUTE_META: RouteMeta[] = routes;

export const SITE_URL = "https://jakeheaps.com";

export const routeMetaFor = (pathname: string): RouteMeta | undefined => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return ROUTE_META.find((r) => r.path === clean);
};
