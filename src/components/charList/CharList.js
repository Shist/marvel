var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import useMarvelService from "../../services/MarvelService";
import CharListItem from "./CharListItem/CharListItem";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import "./charList.scss";
import "./CharListItem/charListItem.scss";
var setContent = function (process, Component, newItemsLoading) {
    switch (process) {
        case "waiting":
            return _jsx(Spinner, {});
        case "loading":
            return newItemsLoading ? _jsx(Component, {}) : _jsx(Spinner, {});
        case "confirmed":
            return _jsx(Component, {});
        case "error":
            return _jsx(ErrorMessage, {});
        default:
            throw new Error("Unexpected process state");
    }
};
var CharList = function (_a) {
    var onCharSelected = _a.onCharSelected;
    var _b = useState([]), charsList = _b[0], setCharsList = _b[1];
    var _c = useState(false), newItemsLoading = _c[0], setNewItemsLoading = _c[1];
    var _d = useState(210), offset = _d[0], setOffset = _d[1];
    var _e = useState(false), charsEnded = _e[0], setCharsEnded = _e[1];
    var _f = useMarvelService(), getAllCharacters = _f.getAllCharacters, process = _f.process, setProcess = _f.setProcess;
    useEffect(function () {
        onRequest(offset, true);
    }, []);
    var onRequest = function (offset, initial) {
        initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
        getAllCharacters(offset)
            .then(onCharsListLoaded)
            .then(function () { return setProcess("confirmed"); });
    };
    var onCharsListLoaded = function (newCharsList) {
        var ended = false;
        if (newCharsList.length < 9) {
            ended = true;
        }
        setCharsList(function (charsList) { return __spreadArray(__spreadArray([], charsList, true), newCharsList, true); });
        setNewItemsLoading(false);
        setOffset(function (offset) { return offset + 9; });
        setCharsEnded(ended);
    };
    var itemsRefs = useRef([]);
    var focusOnItem = function (id) {
        var _a, _b;
        itemsRefs.current.forEach(function (item) {
            return item === null || item === void 0 ? void 0 : item.classList.remove("char__item-selected");
        });
        (_a = itemsRefs.current[id]) === null || _a === void 0 ? void 0 : _a.classList.add("char__item-selected");
        (_b = itemsRefs.current[id]) === null || _b === void 0 ? void 0 : _b.focus();
    };
    var content = (_jsx("ul", { className: "char__grid", children: _jsx(TransitionGroup, { component: null, appear: !newItemsLoading, children: charsList.map(function (char) {
                return char ? (_jsx(CSSTransition, { timeout: 500, classNames: "char-list-item", children: _jsx(CharListItem, { char: char, itemsRefs: itemsRefs, onItemClicked: function () {
                            onCharSelected(char === null || char === void 0 ? void 0 : char.id);
                            focusOnItem(char === null || char === void 0 ? void 0 : char.id);
                        } }, char === null || char === void 0 ? void 0 : char.id) }, char === null || char === void 0 ? void 0 : char.id)) : null;
            }) }) }));
    var elements = useMemo(function () {
        return setContent(process, function () { return content; }, newItemsLoading);
    }, [process]);
    return (_jsxs("div", { className: "char__list", children: [elements, _jsx("button", { className: "button button__main button__long", disabled: newItemsLoading, style: { display: charsEnded ? "none" : "block" }, onClick: function () { return onRequest(offset, false); }, children: _jsx("div", { className: "inner", children: "load more" }) })] }));
};
CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
};
export default CharList;
