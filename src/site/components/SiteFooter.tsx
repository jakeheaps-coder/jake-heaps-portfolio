import { Link } from "react-router";
import { BrandLockup } from "../../components/ui/Brandmark";
import { CONTACT } from "../../data/contact";
import signature from "../../../brand-kit/logo/signature.svg";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/approach", label: "Approach" },
];

/* Footer links are full 44px hit areas; on phones they sit in a two-column
   grid, from sm they run in a line. */
const LINK =
  "tap-inline text-caption text-ink-soft no-underline transition-colors hover:text-ink";

/**
 * The colophon. Closes every page the way it opens: a 2px ink rule, the
 * nameplate, the page list, then a signed line with the one way to reach me
 * (LinkedIn, per CONTRACT.md rule 12) and what the site is set in.
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

        <div className="mt-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 border-t border-hairline pt-5 sm:mt-8">
          <img
            src={signature}
            alt="Jake Heaps signature"
            width={112}
            height={80}
            className="h-auto w-24 opacity-90 sm:w-28"
            decoding="async"
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-8">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`${LINK} gap-1 font-medium text-cedar hover:text-cedar`}
            >
              <span className="underline decoration-cedar/30 underline-offset-4 hover:decoration-cedar">
                LinkedIn
              </span>
              <span aria-hidden>&#8599;</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <span className="tap-inline text-caption text-ink-soft">
              {CONTACT.location}
            </span>
          </div>
        </div>

        <p className="mt-4 flex flex-col gap-1 font-mono text-eyebrow text-ink-soft sm:flex-row sm:justify-between sm:gap-6">
          <span>&copy; {year} Jake Heaps</span>
          <span>Set in Newsreader, General Sans and IBM Plex Mono.</span>
        </p>
      </div>
    </footer>
  );
}
