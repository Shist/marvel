import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./charListItem.scss";
var CharListItem = function (_a) {
    var char = _a.char, itemsRefs = _a.itemsRefs, onItemClicked = _a.onItemClicked;
    return (_jsxs("li", { className: "char-list-item", ref: function (element) { return (itemsRefs.current[char.id] = element); }, tabIndex: 0, role: "button", onClick: onItemClicked, onKeyDown: function (e) {
            if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                onItemClicked();
            }
        }, children: [_jsx("img", { src: char.thumbnail, alt: "character ".concat(char.name), style: char.thumbnail.endsWith("image_not_available.jpg")
                    ? { objectFit: "contain" }
                    : undefined }), _jsx("div", { className: "char-list-item__name", children: char.name })] }));
};
export default CharListItem;
