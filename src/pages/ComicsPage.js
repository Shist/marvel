import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import ComicsList from "../components/comicsList/ComicsList";
import AppBanner from "../components/appBanner/AppBanner";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";
var comicsPage = function () {
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("meta", { name: "description", content: "Page with list of marvel comics" }), _jsx("title", { children: "Comics page" })] }), _jsx(AppBanner, {}), _jsx(ErrorBoundary, { children: _jsx(ComicsList, {}) })] }));
};
export default comicsPage;
