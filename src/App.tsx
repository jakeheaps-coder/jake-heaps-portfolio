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

/** Empty hash, #/vision, or a vision section anchor (#who, #method …) →
    vision; anything else (incl. brief #section anchors like #record) → the
    brief. */
const VISION_ANCHORS = new Set([
  "",
  "vision",
  "who",
  "problem",
  "method",
  "proof",
  "contact",
]);
function currentView(): "vision" | "brief" {
  const h = window.location.hash.replace(/^#\/?/, "");
  return VISION_ANCHORS.has(h) ? "vision" : "brief";
}

export default function App() {
  const [entered, setEntered] = useState(hasAccess);
  const [view, setView] = useState<"vision" | "brief">(currentView);

  useEffect(() => {
    const onHash = () => {
      const next = currentView();
      setView(next);
      /* Route-level hashes (#/vision, #/brief) have no target element — jump
         to top. Section anchors (#record …) keep native scroll. */
      const h = window.location.hash;
      if (h === "" || h === "#/vision" || h === "#/brief") {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

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
