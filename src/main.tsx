import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "./index.css";
import App from "./App";
import LandingPage from "./pages/LandingPage";

function LandingPageRoute() {
  const { slug } = useParams();
  return <LandingPage slug={slug || ""} />;
}

function ScrollToTop() {
  // Al navegar entre páginas, volver arriba (no al ancla anterior)
  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicios/:slug" element={<LandingPageRoute />} />
        <Route path="*" element={<LandingPageRoute />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
