import { Outlet } from "react-router";
import ScrollManager from "./ScrollManager";
import useDocumentHead from "./useDocumentHead";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

/** Chrome for the public pages (home, work, about, approach, 404). */
export default function Layout() {
  useDocumentHead();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:bg-cedar focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <ScrollManager />
      <SiteNav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
