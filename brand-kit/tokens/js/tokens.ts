// ==========================================================================
// Manuscript — design tokens as a typed TS object (jakeheaps.com brand).
// Import where you need raw values (charts, canvas, inline styles, RN, etc.).
// ==========================================================================

export const manuscript = {
  color: {
    paper: "#F7F4EE",
    surface: "#EFEAE0",
    ink: "#1A1714",
    inkSoft: "#5F594F",
    hairline: "#E2DCCF",
    cedar: "#2D4A3A",
    sienna: "#8A4226",
  },
  nightfall: {
    night: "#131210",
    surface: "#1C1A17",
    ink: "#ECE7DD",
    soft: "#A39B8B",
    hairline: "#2A2722",
    amber: "#E09B62",
  },
  font: {
    display: '"Newsreader", "Iowan Old Style", Georgia, serif',
    body: '"General Sans", "Avenir Next", system-ui, sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, "SF Mono", monospace',
  },
  // rem values; multiply by 16 for px
  text: {
    eyebrow: "0.75rem", // 12
    caption: "0.875rem", // 14
    body: "1.0625rem", // 17
    h3: "1.1875rem", // 19
    lede: "1.3125rem", // 21
    h2: "1.75rem", // 28
    h1: "2.5rem", // 40
    hero: "4rem", // ~64
  },
  lineHeight: {
    eyebrow: 1.4,
    caption: 1.6,
    body: 1.65,
    h3: 1.35,
    lede: 1.55,
    h2: 1.2,
    h1: 1.1,
  },
  shadow: {
    hairline:
      "inset 0 1px 0 rgb(255 255 255 / 0.85), 0 0 0 1px rgb(26 23 20 / 0.06), 0 1px 2px rgb(26 23 20 / 0.04)",
    low: "0 1px 2px rgb(26 23 20 / 0.05), 0 2px 4px rgb(26 23 20 / 0.04)",
    medium:
      "0 1px 2px rgb(26 23 20 / 0.05), 0 2px 4px rgb(26 23 20 / 0.05), 0 4px 8px rgb(26 23 20 / 0.05), 0 8px 16px rgb(26 23 20 / 0.04)",
    high: "0 1px 2px rgb(26 23 20 / 0.06), 0 2px 4px rgb(26 23 20 / 0.05), 0 4px 8px rgb(26 23 20 / 0.05), 0 8px 16px rgb(26 23 20 / 0.05), 0 16px 32px rgb(26 23 20 / 0.06), 0 32px 64px rgb(26 23 20 / 0.05)",
  },
  easing: {
    outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
    outCubic: "cubic-bezier(0.33, 1, 0.68, 1)",
    inOutCirc: "cubic-bezier(0.85, 0, 0.15, 1)",
  },
  layout: {
    containerMax: "1100px",
    measure: "58ch",
    measureNarrow: "45ch",
  },
} as const;

export default manuscript;
