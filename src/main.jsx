import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

import { initGA } from "./config/analytics";
import { initMetaPixel } from "./config/metaPixel";

import "./index.css";

// Safe Analytics Initialization (Prevents black screen if analytics keys are missing)
try {
  if (typeof initGA === "function") initGA();
} catch (err) {
  console.warn("GA initialization skipped:", err);
}

try {
  if (typeof initMetaPixel === "function") initMetaPixel();
} catch (err) {
  console.warn("Meta Pixel initialization skipped:", err);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);