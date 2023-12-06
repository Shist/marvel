import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";

// StrictMode was temporarily removed (because of React 18+)
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
