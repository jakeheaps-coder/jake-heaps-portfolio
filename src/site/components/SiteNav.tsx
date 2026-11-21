import type { MouseEvent } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { BrandLockup } from "../../components/ui/Brandmark";

const LINKS = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/approach", label: "Approach" },
];

const BAR =
  "sticky top-0 z-50 border-b border-hairline bg-paper/92 backdrop-blur-md [@supports_not_(backdrop-filter:blur(1px))]:bg-paper";

/* Every item is a 44px-tall hit area. The active page gets a 2px sienna rule
   at the foot of the bar: the same rule the masthead mark uses. */
const ITEM =
  "relative flex h-11 items-center justify-center text-caption text-ink no-underline transition-colors hover:text-ink-soft sm:h-14 sm:justify-start";
const ACTIVE =
  "font-medium after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-sienna sm:after:bottom-3.5";

/**
 * The masthead.
 *
 * Phones (<640px): two rows, like a newspaper front page. The nameplate
 * (JH mark + "Jake Heaps") sits at the top and scrolls away; under it, a
 * 44px section bar with all four destinations (Work, About, Approach,
 * Contact) in equal columns is what stays pinned. Nothing is hidden behind a
 * menu button, and the pinned chrome costs 44px instead of a full header.
 *
 * sm and up: one sticky row, nameplate left, links right, as before.
 */
export default function SiteNav() {
  const navigate = useNavigate();
  /* Every page ends with the contact band, so #contact is a same-page jump.
     A page without one (the 404) falls back to the band on the home page. */
  const toContact = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!document.getElementById("contact")) {
      e.preventDefault();
      navigate("/#contact");
    }
  };
  return (
    <>
      {/* Phone nameplate: scrolls with the page */}
      <div className="border-b border-hairline bg-paper px-6 sm:hidden">
        <Link
          to="/"
          aria-label="Jake Heaps, home"
          className="flex h-14 items-center text-ink no-underline"
        >
          <BrandLockup markClassName="text-[15px]" />
        </Link>
      </div>

      <header data-site-nav="" className={BAR}>
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-3 sm:px-6"
        >
          <Link
            to="/"
            aria-label="Jake Heaps, home"
            className="hidden h-14 items-center text-ink no-underline sm:inline-flex"
          >
            <BrandLockup markClassName="text-[15px]" />
          </Link>
          <ul className="m-0 grid w-full list-none grid-cols-4 p-0 sm:flex sm:w-auto sm:items-center sm:gap-8">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `${ITEM} ${isActive ? ACTIVE : ""}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={toContact}
                className={`${ITEM} font-medium text-cedar hover:text-cedar sm:underline sm:decoration-cedar/30 sm:underline-offset-4 sm:hover:decoration-cedar`}
              >
                <span className="sm:hidden">Contact</span>
                <span className="hidden sm:inline">Get in touch</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
