import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Landing } from "./pages";
import BlogEndpoint from "./pages/BlogEndpoint";
import "@coreui/coreui/dist/css/coreui.min.css";

const App = () => {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (route.startsWith("#/blogs")) {
    return <BlogEndpoint />;
  }

  return <Landing />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
