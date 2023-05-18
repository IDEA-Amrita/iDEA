import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Landing } from "./pages";
import '@coreui/coreui/dist/css/coreui.min.css'



//TODO: Add routing once we add more pages (if).
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Landing />
);
