import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./site/Layout";
import Home from "./site/pages/Home";
import Work from "./site/pages/Work";
import About from "./site/pages/About";
import Approach from "./site/pages/Approach";
import NotFound from "./site/pages/NotFound";

/* The brief is a large, unlisted page. Load it only when someone opens it. */
const BriefPage = lazy(() => import("./brief/BriefPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/brief"
          element={
            <Suspense fallback={null}>
              <BriefPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
