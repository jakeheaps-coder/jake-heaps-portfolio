/** Site colophon line — a real contentinfo landmark, outside <main>. */
export default function Footer() {
  return (
    <footer className="px-6">
      <div className="mx-auto max-w-[1100px] border-t border-hairline py-6">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="font-mono text-caption text-ink-soft">
            © {new Date().getFullYear()} Jake Heaps
          </p>
          <p className="font-mono text-caption text-ink-soft">
            Set in Newsreader, General Sans &amp; IBM Plex Mono · Built with
            React, Tailwind &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
