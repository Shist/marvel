import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./singleComicLayout.scss";
var SingleComicLayout = function (_a) {
    var data = _a.data;
    var title = data.title, description = data.description, pageCount = data.pageCount, thumbnail = data.thumbnail, language = data.language, price = data.price;
    return (_jsxs("div", { className: "single-comic", children: [_jsxs(Helmet, { children: [_jsx("meta", { name: "description", content: "".concat(title, " comics book") }), _jsx("title", { children: title })] }), _jsx("img", { src: thumbnail, alt: title, className: "single-comic__img" }), _jsxs("div", { className: "single-comic__info", children: [_jsx("h2", { className: "single-comic__name", children: title }), _jsx("p", { className: "single-comic__descr", children: description }), _jsx("p", { className: "single-comic__descr", children: pageCount }), _jsxs("p", { className: "single-comic__descr", children: ["Language: ", language] }), _jsx("div", { className: "single-comic__price", children: price })] }), _jsx(Link, { to: "/comics", className: "single-comic__back", children: "Back to all" })] }));
};
export default SingleComicLayout;
