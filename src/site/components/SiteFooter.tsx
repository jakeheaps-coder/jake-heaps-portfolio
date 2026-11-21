import { Link } from "react-router";
import { BrandLockup } from "../../components/ui/Brandmark";
import { CONTACT } from "../../data/contact";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/approach", label: "Approach" },
];

/* Footer links are full 44px hit areas; on phones they stack as a short
   ledger, from sm they run in a line. */
const LINK =
  "tap-inline text-caption text-ink-soft no-underline transition-colors hover:text-ink";

/**
 * The colophon. Closes every page the way it opens: a 2px ink rule, the
 * nameplate, then the page list and the ways to reach me. The last line says
 * what the site is set in, which is the kind of thing a kept notebook notes.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper px-6">
      <div className="mx-auto max-w-[1100px] rule-strong pt-8 pb-10 sm:pt-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <Link
            to="/"
            aria-label="Jake Heaps, home"
            className="tap-inline self-start text-ink no-underline"
          >
            <BrandLockup />
          </Link>
          <nav aria-label="Footer">
            <ul className="m-0 grid list-none grid-cols-2 gap-x-6 p-0 sm:flex sm:flex-wrap sm:gap-x-8">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={LINK}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 flex flex-col border-t border-hairline pt-4 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
          <a href={`mailto:${CONTACT.email}`} className={`${LINK} break-all`}>
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={LINK}
          >
            LinkedIn
          </a>
          <span className="tap-inline text-caption text-ink-soft">
            {CONTACT.location}
          </span>
        </div>

        <p className="mt-4 flex flex-col gap-1 font-mono text-eyebrow text-ink-soft sm:flex-row sm:justify-between sm:gap-6">
          <span>&copy; {year} Jake Heaps</span>
          <span>Set in Newsreader, General Sans and IBM Plex Mono.</span>
        </p>
      </div>
    </footer>
  );
}
