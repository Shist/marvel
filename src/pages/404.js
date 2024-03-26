import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
var Page404 = function () {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("meta", { name: "description", content: "This page does not exsist" }), _jsx("title", { children: "Page not found" })] }), _jsxs("div", { children: [_jsx(ErrorMessage, {}), _jsx("p", { style: { textAlign: "center", fontWeight: "bold", fontSize: "24px" }, children: "Page doesn't exsist" }), _jsx(Link, { style: {
                            display: "block",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "24px",
                            marginTop: "30px",
                        }, to: "/", children: "Back to main page" })] })] }));
};
export default Page404;
