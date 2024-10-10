import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Component from "./Component.jsx";
import Component2 from "./Component2.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <div className="componentMain">
      <Component />
    </div>
    <div className="component">
      <Component2 />
    </div>
  </StrictMode>
);
