import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./styles/tokens.css";
import "./styles/globals.css";
import "./styles/motion.css";
import "lenis/dist/lenis.css";
import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
