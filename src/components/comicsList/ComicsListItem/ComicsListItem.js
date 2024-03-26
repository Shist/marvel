import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./comicsListItem.scss";
var ComicsListItem = function (_a) {
    var comic = _a.comic;
    return (_jsx("li", { className: "comics-list-item", children: _jsxs(Link, { to: "/comics/".concat(comic.id), children: [_jsx("img", { src: comic.thumbnail, alt: comic.title, className: "comics-list-item__img" }), _jsx("div", { className: "comics-list-item__name", children: comic.title }), _jsx("div", { className: "comics-list-item__price", children: comic.price })] }) }));
};
export default ComicsListItem;
