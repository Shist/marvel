import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from "react-helmet";
import "./singleCharLayout.scss";
var SingleCharLayout = function (_a) {
    var data = _a.data;
    var name = data.name, description = data.description, thumbnail = data.thumbnail;
    return (_jsxs(_Fragment, { children: [_jsxs(Helmet, { children: [_jsx("meta", { name: "description", content: "Character - ".concat(name) }), _jsx("title", { children: name })] }), _jsxs("div", { className: "single-comic", children: [_jsx("img", { src: thumbnail, alt: name, className: "single-comic__char-img" }), _jsxs("div", { className: "single-comic__info", children: [_jsx("h2", { className: "single-comic__name", children: name }), _jsx("p", { className: "single-comic__descr", children: description })] })] })] }));
};
export default SingleCharLayout;
