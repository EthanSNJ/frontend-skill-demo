import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { WorkitLandingPage } from "./routes/workitLandingPage/index.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/workit-landing-page" element={<WorkitLandingPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
