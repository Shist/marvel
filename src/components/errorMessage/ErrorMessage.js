import { jsx as _jsx } from "react/jsx-runtime";
// @ts-ignore
import errorImg from "./error.gif";
import "./errorMessage.scss";
var ErrorMessage = function () {
    return _jsx("img", { src: errorImg, alt: "Error", className: "error-msg" });
};
export default ErrorMessage;
