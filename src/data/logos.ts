/**
 * The client logo row. All seven ship in the marquee. `note` is an optional
 * one-line context sentence rendered under the logo on the Track Record page;
 * add it as Jake provides each one. `file` is the basename under public/logos.
 */
export interface Logo {
  name: string;
  file: string;
  /** Tailwind height class tuned per logo so optical sizes match. */
  h: string;
  note?: string;
}

export const logos: Logo[] = [
  { name: "Domo", file: "domo.svg", h: "h-6" },
  { name: "Bissell", file: "bissell.svg", h: "h-9" },
  { name: "Manscaped", file: "manscaped.svg", h: "h-5" },
  { name: "Cox Automotive", file: "cox-automotive.webp", h: "h-8" },
  { name: "Thryv", file: "thryv.png", h: "h-6" },
  { name: "Carvana", file: "carvana.png", h: "h-9" },
  { name: "Regional One Health", file: "one-health-solutions.png", h: "h-7" },
];
