import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";
// StrictMode was temporarily removed (because of React 18+)
var rootElement = document.getElementById("root");
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(_jsx(App, {}));
}
else {
    console.error("Root element not found");
}
