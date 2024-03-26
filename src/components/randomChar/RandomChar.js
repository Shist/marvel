import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";
import "./randomChar.scss";
// @ts-ignore
import mjolnir from "../../resources/img/mjolnir.png";
var RandomChar = function () {
    var _a = useState(null), char = _a[0], setChar = _a[1];
    var _b = useMarvelService(), clearError = _b.clearError, getCharacter = _b.getCharacter, process = _b.process, setProcess = _b.setProcess;
    useEffect(function () {
        updateChar();
        var timerId = setInterval(updateChar, 60000);
        return function () {
            clearInterval(timerId);
        };
    }, []);
    var onCharLoaded = function (char) {
        setChar(char);
    };
    var updateChar = function () {
        clearError();
        var id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id.toString())
            .then(onCharLoaded)
            .then(function () { return setProcess("confirmed"); });
    };
    return (_jsxs("div", { className: "randomchar", children: [char ? setContent(process, View, char) : null, _jsxs("div", { className: "randomchar__static", children: [_jsxs("p", { className: "randomchar__title", children: ["Random character for today!", _jsx("br", {}), "Do you want to get to know him better?"] }), _jsx("p", { className: "randomchar__title", children: "Or choose another one" }), _jsx("button", { className: "button button__main", onClick: function () {
                            if (process !== "loading") {
                                updateChar();
                            }
                        }, children: _jsx("div", { className: "inner", children: "try it" }) }), _jsx("img", { src: mjolnir, alt: "mjolnir", className: "randomchar__decoration" })] })] }));
};
var View = function (_a) {
    var data = _a.data;
    if (!data)
        return null;
    var name = data.name, description = data.description, thumbnail = data.thumbnail, homepage = data.homepage, wiki = data.wiki;
    return (_jsxs("div", { className: "randomchar__block", children: [_jsx("img", { src: thumbnail, alt: "Random character", className: "randomchar__img", style: (thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.endsWith("image_not_available.jpg"))
                    ? { objectFit: "contain" }
                    : undefined }), _jsxs("div", { className: "randomchar__info", children: [_jsx("p", { className: "randomchar__name", children: name }), _jsx("p", { className: "randomchar__descr", children: description
                            ? description
                            : "There is currently no additional information about this character." }), _jsxs("div", { className: "randomchar__btns", children: [_jsx("a", { href: homepage, className: "button button__main", children: _jsx("div", { className: "inner", children: "homepage" }) }), _jsx("a", { href: wiki, className: "button button__secondary", children: _jsx("div", { className: "inner", children: "Wiki" }) })] })] })] }));
};
export default RandomChar;
