import { useEffect, useState } from "react";
import AccessGate from "./components/AccessGate";
import { hasAccess } from "./lib/access";
import Nav from "./components/Nav";
import VisionNav from "./components/VisionNav";
import VisionPage from "./components/VisionPage";
import Hero from "./components/Hero";
import Record from "./components/Record";
import AboutStrip from "./components/AboutStrip";
import ClientLogos from "./components/ClientLogos";
import Strategy from "./components/DomoStory/Strategy";
import Governance from "./components/DomoStory/Governance";
import Transformation from "./components/DomoStory/Transformation";
import Education from "./components/DomoStory/Education";
import Interlude from "./components/Interlude";
import ProjectPortfolio from "./components/ProjectPortfolio";
import ExternalValidation from "./components/ExternalValidation";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Footer from "./components/Footer";

const BASE = import.meta.env.BASE_URL;

/** Path-based view: `<base>brief` → the brief; everything else → vision.
    The two are standalone pages with no cross-links between them. In-page
    section anchors (#who, #record …) are plain hashes and don't switch view. */
function currentView(): "vision" | "brief" {
  const path = window.location.pathname;
  const rel = (
    path.startsWith(BASE) ? path.slice(BASE.length) : path.replace(/^\//, "")
  ).replace(/\/$/, "");
  return rel === "brief" ? "brief" : "vision";
}

export default function App() {
  const [entered, setEntered] = useState(hasAccess);
  const [view, setView] = useState<"vision" | "brief">(currentView);

  /* View is determined by path; keep it in sync on browser back/forward. */
  useEffect(() => {
    const onPop = () => setView(currentView());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  /* The brief is unlisted. robots.txt blocks crawl; this runtime tag is
     belt-and-suspenders for any renderer that reaches it directly. */
  useEffect(() => {
    const ID = "robots-noindex";
    const present = document.getElementById(ID);
    if (view === "brief" && !present) {
      const m = document.createElement("meta");
      m.id = ID;
      m.name = "robots";
      m.content = "noindex, nofollow";
      document.head.appendChild(m);
    } else if (view !== "brief" && present) {
      present.remove();
    }
  }, [view]);

  if (!entered) {
    return <AccessGate onEnter={() => setEntered(true)} />;
  }

  if (view === "vision") {
    return (
      <>
        <a
          href="#vision"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:bg-cedar focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <VisionNav />
        <main>
          <VisionPage />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <a
        href="#brief"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:bg-cedar focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Record />
        <AboutStrip />
        <ClientLogos />
        <Strategy />
        <Governance />
        <Transformation />
        <Education />
        <Interlude />
        <ProjectPortfolio />
        <ExternalValidation />
        <TechStack />
        <About />
      </main>
      <Footer />
    </>
  );
}
