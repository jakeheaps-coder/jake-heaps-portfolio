import { useState } from "react";
import AccessGate from "./components/AccessGate";
import { hasAccess } from "./lib/access";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Record from "./components/Record";
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

export default function App() {
  const [entered, setEntered] = useState(hasAccess);

  if (!entered) {
    return <AccessGate onEnter={() => setEntered(true)} />;
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
        <ClientLogos />
        <Strategy />
        <Transformation />
        <Education />
        <Interlude />
        <Governance />
        <ProjectPortfolio />
        <ExternalValidation />
        <TechStack />
        <About />
      </main>
      <Footer />
    </>
  );
}
