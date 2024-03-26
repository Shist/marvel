import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
var Page404 = lazy(function () { return import("../../pages/404"); });
var MainPage = lazy(function () { return import("../../pages/MainPage"); });
var ComicsPage = lazy(function () { return import("../../pages/ComicsPage"); });
var SinglePageTemplate = lazy(function () { return import("../../pages/SinglePageTemplate"); });
var SingleComicLayout = lazy(function () { return import("../../pages/SingleComicLayout/SingleComicLayout"); });
var SingleCharLayout = lazy(function () { return import("../../pages/SingleCharLayout/SingleCharLayout"); });
var App = function () {
    return (_jsx(Router, { children: _jsxs("div", { className: "app", children: [_jsx(AppHeader, {}), _jsx("main", { children: _jsx(Suspense, { fallback: _jsx(Spinner, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(MainPage, {}) }), _jsx(Route, { path: "/comics", element: _jsx(ComicsPage, {}) }), _jsx(Route, { path: "/comics/:id", element: _jsx(SinglePageTemplate, { Component: SingleComicLayout, dataType: "comic" }) }), _jsx(Route, { path: "/characters/:id", element: _jsx(SinglePageTemplate, { Component: SingleCharLayout, dataType: "character" }) }), _jsx(Route, { path: "*", element: _jsx(Page404, {}) })] }) }) })] }) }));
};
export default App;
