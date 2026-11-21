import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

/**
 * Route-change scroll behavior for the staged pages.
 *
 * `index.css` sets `html { scroll-behavior: smooth }`, so a plain
 * `scrollTo(0, 0)` would animate a half-second scroll on every navigation.
 * `behavior: "instant"` overrides that for the jump-to-top case. A hash target
 * takes precedence over the top so `/new/?tier=x#contact` lands on the form,
 * not the top of the page.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
