import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";
import "./charInfo.scss";
var CharInfo = function (_a) {
    var charId = _a.charId;
    var _b = useState({
        id: 0,
        name: "",
        description: "",
        thumbnail: "",
        homepage: "",
        wiki: "",
        comics: [],
    }), char = _b[0], setChar = _b[1];
    var _c = useMarvelService(), clearError = _c.clearError, getCharacter = _c.getCharacter, process = _c.process, setProcess = _c.setProcess;
    useEffect(function () {
        updateChar();
    }, [charId]);
    var updateChar = function () {
        if (!charId) {
            return;
        }
        clearError();
        getCharacter(charId.toString())
            .then(onCharLoaded)
            .then(function () { return setProcess("confirmed"); });
    };
    var onCharLoaded = function (char) {
        setChar(char);
    };
    return _jsx("div", { className: "char__info", children: setContent(process, View, char) });
};
var View = function (_a) {
    var data = _a.data;
    var name = data.name, description = data.description, thumbnail = data.thumbnail, homepage = data.homepage, wiki = data.wiki, comics = data.comics;
    var comicsArr = comics.map(function (item, index) {
        return index < 10 ? (_jsx("li", { className: "char__comics-item", children: item.name }, index)) : null;
    });
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "char__basics", children: [_jsx("img", { src: thumbnail, alt: name, style: thumbnail.endsWith("image_not_available.jpg")
                            ? { objectFit: "contain" }
                            : undefined }), _jsxs("div", { children: [_jsx("div", { className: "char__info-name", children: name }), _jsxs("div", { className: "char__btns", children: [_jsx("a", { href: homepage, className: "button button__main", children: _jsx("div", { className: "inner", children: "homepage" }) }), _jsx("a", { href: wiki, className: "button button__secondary", children: _jsx("div", { className: "inner", children: "Wiki" }) })] })] })] }), _jsx("div", { className: "char__descr", children: description }), _jsx("div", { className: "char__comics", children: "Comics:" }), _jsx("ul", { className: "char__comics-list", children: comicsArr.length
                    ? comicsArr
                    : "There are no any comics with this character" })] }));
};
// That part was in the project even before using TypeScript (working with PropTypes in react)
CharInfo.propTypes = {
    charId: PropTypes.number,
};
export default CharInfo;
