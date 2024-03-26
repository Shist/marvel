import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Helmet } from "react-helmet";
import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";
import CharSearchForm from "../components/charSearchForm/CharSearchForm";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
// @ts-ignore
import decoration from "../resources/img/vision.png";
var MainPage = function () {
    var _a = useState(null), selectedChar = _a[0], setChar = _a[1];
    var onCharSelected = function (id) {
        setChar(id);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("meta", { name: "description", content: "Marvel information portal" }), _jsx("title", { children: "Marvel information portal" })] }), _jsx(ErrorBoundary, { children: _jsx(RandomChar, {}) }), _jsxs("div", { className: "char__content", children: [_jsx(ErrorBoundary, { children: _jsx(CharList, { onCharSelected: onCharSelected }) }), _jsxs("div", { children: [_jsx(ErrorBoundary, { children: _jsx(CharInfo, { charId: selectedChar }) }), _jsx(ErrorBoundary, { children: _jsx(CharSearchForm, {}) })] })] }), _jsx("img", { className: "bg-decoration", src: decoration, alt: "vision" })] }));
};
export default MainPage;
