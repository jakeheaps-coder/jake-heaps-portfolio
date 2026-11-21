import { Link, NavLink } from "react-router";
import { Brandmark } from "../../components/ui/Brandmark";

const LINKS = [
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/approach", label: "Approach" },
];

/**
 * The masthead. JH mark plus the italic wordmark on the left, three page links
 * on the right. Active page gets a 2px sienna underline, the same rule motif
 * the mark uses. On phones the wordmark drops so the links fit at 360px.
 */
export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-[1100px] items-center justify-between gap-4 px-6"
      >
        <Link
          to="/"
          aria-label="Jake Heaps, home"
          className="inline-flex items-center gap-2.5 text-ink no-underline"
        >
          <Brandmark className="text-[15px]" />
          <span className="hidden font-display text-h3 leading-none italic min-[400px]:inline">
            Jake Heaps
          </span>
        </Link>
        <div className="flex items-center gap-5 sm:gap-8">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative py-1 text-caption text-ink no-underline transition-colors hover:text-ink-soft ${
                  isActive
                    ? "font-medium after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-sienna"
                    : ""
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="#contact"
            className="hidden text-caption font-medium text-cedar underline decoration-cedar/30 underline-offset-4 transition-colors hover:decoration-cedar sm:inline"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
