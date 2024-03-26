import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink } from "react-router-dom";
import "./appHeader.scss";
var AppHeader = function () {
    return (_jsxs("header", { className: "app__header", children: [_jsx("h1", { className: "app__title", children: _jsxs(Link, { to: "/", children: [_jsx("span", { children: "Marvel" }), " information portal"] }) }), _jsx("nav", { className: "app__menu", children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(NavLink, { style: function (_a) {
                                    var isActive = _a.isActive;
                                    return ({
                                        color: isActive ? "#9f0013" : "inherit",
                                    });
                                }, end: true, to: "/", children: "Characters" }) }), "/", _jsx("li", { children: _jsx(NavLink, { style: function (_a) {
                                    var isActive = _a.isActive;
                                    return ({
                                        color: isActive ? "#9f0013" : "inherit",
                                    });
                                }, to: "/comics", children: "Comics" }) })] }) })] }));
};
export default AppHeader;
