import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import About from "./pages/about";
import Home from "./pages/Home";
import Routes from "./Routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);
