import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // THIS IS THE CRUCIAL LINE THAT WAS MISSING!

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);