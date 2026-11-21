import { logos } from "../../data/logos";

/**
 * Companies I've done work for, as a still row. No marquee: the brand runs
 * zero loops. Logos are grayscale and multiply into the section tone, so the
 * white boxes some of them ship with disappear.
 */
export function LogoRow({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`m-0 flex list-none flex-wrap items-center gap-x-10 gap-y-8 p-0 md:gap-x-14 ${className}`}
    >
      {logos.map((l) => (
        <li key={l.name}>
          <img
            src={`/logos/${l.file}`}
            alt={l.name}
            className={`${l.h} w-auto opacity-75 grayscale [mix-blend-mode:multiply]`}
            loading="lazy"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
}
