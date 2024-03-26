import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./appBanner.scss";
// @ts-ignore
import avengers from "../../resources/img/Avengers.png";
// @ts-ignore
import avengersLogo from "../../resources/img/Avengers_logo.png";
var AppBanner = function () {
    return (_jsxs("div", { className: "app__banner", children: [_jsx("img", { src: avengers, alt: "Avengers" }), _jsxs("div", { className: "app__banner-text", children: ["New comics every week!", _jsx("br", {}), "Stay tuned!"] }), _jsx("img", { src: avengersLogo, alt: "Avengers logo" })] }));
};
export default AppBanner;
