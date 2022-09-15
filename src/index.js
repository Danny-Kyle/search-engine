import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./context";
import "./global.css";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <ResultContextProvider>
      <Router>
        <App />
      </Router>
    </ResultContextProvider>
  </AppProvider>
);
