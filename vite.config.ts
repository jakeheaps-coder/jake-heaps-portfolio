import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  /* Root for the Vercel / custom-domain build (jakeheaps.com); subpath for the
     GitHub Pages build. Vercel sets VERCEL=1 in its build environment. */
  base: process.env.VERCEL ? "/" : "/jake-heaps-portfolio/",
});
