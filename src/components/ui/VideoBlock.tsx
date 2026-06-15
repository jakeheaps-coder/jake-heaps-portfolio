/**
 * One video treatment for the whole site. With a `src` it renders a
 * click-to-play 16:9 plate matching the brand; without one it renders an
 * on-brand placeholder so the page ships before the footage exists.
 * Captions are burned into the file (no <track> plumbing on a static host).
 */
export function VideoBlock({
  src,
  poster,
  caption,
  title,
  className = "",
}: {
  /** Public path, e.g. `${import.meta.env.BASE_URL}video/overview.mp4`. Omit for placeholder. */
  src?: string;
  poster?: string;
  caption: string;
  title: string;
  className?: string;
}) {
  return (
    <figure className={`m-0 ${className}`}>
      {src ? (
        <video
          controls
          preload="metadata"
          poster={poster}
          aria-label={title}
          className="plate block aspect-video w-full bg-night object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div
          role="img"
          aria-label={`${title}: video coming soon`}
          className="plate flex aspect-video w-full flex-col items-center justify-center gap-3 bg-surface"
        >
          <span
            aria-hidden
            className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/15 text-ink-soft"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="eyebrow text-ink-soft">{title}</span>
          <span className="font-mono text-eyebrow text-ink-soft/70">
            Video coming shortly
          </span>
        </div>
      )}
      <figcaption className="mt-3 max-w-[72ch] font-mono text-eyebrow text-ink-soft">
        {caption}
      </figcaption>
    </figure>
  );
}
