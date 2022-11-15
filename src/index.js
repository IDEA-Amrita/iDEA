import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navbar } from "./bit";
import { Landing } from "./word";

//TODO: Add routing once we add more pages (if).
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Landing />
  </>
);
