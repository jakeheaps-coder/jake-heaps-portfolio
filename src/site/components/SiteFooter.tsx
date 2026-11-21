import { Link } from "react-router";
import { BrandLockup } from "../../components/ui/Brandmark";
import { CONTACT } from "../../data/contact";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/approach", label: "Approach" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper px-6">
      <div className="mx-auto max-w-[1100px] border-t-2 border-ink py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Link to="/" aria-label="Jake Heaps, home" className="text-ink no-underline">
            <BrandLockup />
          </Link>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-caption text-ink-soft no-underline transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 font-mono text-eyebrow text-ink-soft sm:flex-row sm:flex-wrap sm:gap-x-6">
          <a href={`mailto:${CONTACT.email}`} className="no-underline hover:text-ink">
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-ink"
          >
            LinkedIn
          </a>
          <span>{CONTACT.location}</span>
          <span className="sm:ml-auto">&copy; {year} Jake Heaps</span>
        </div>
      </div>
    </footer>
  );
}
