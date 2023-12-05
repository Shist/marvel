import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";

// StrictMode was temporarily removed (because of React 18+)
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
