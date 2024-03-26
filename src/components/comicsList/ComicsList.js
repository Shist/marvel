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
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";
import ComicsListItem from "./ComicsListItem/ComicsListItem";
import "./comicsList.scss";
import "./ComicsListItem/comicsListItem.scss";
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
var ComicsList = function () {
    var _a = useState([]), comicsList = _a[0], setComicsList = _a[1];
    var _b = useState(false), newItemsLoading = _b[0], setNewItemsLoading = _b[1];
    var _c = useState(0), offset = _c[0], setOffset = _c[1];
    var _d = useState(false), comicsEnded = _d[0], setComicsEnded = _d[1];
    var _e = useMarvelService(), getAllComics = _e.getAllComics, process = _e.process, setProcess = _e.setProcess;
    useEffect(function () {
        onRequest(offset, true);
    }, []);
    var onRequest = function (offset, initial) {
        initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
            .then(function () { return setProcess("confirmed"); });
    };
    var onComicsListLoaded = function (newComicsList) {
        var ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }
        setComicsList(function (comicsList) { return __spreadArray(__spreadArray([], comicsList, true), newComicsList, true); });
        setNewItemsLoading(false);
        setOffset(function (offset) { return offset + 8; });
        setComicsEnded(ended);
    };
    var content = (_jsx("ul", { className: "comics__grid", children: _jsx(TransitionGroup, { component: null, appear: !newItemsLoading, children: comicsList.map(function (comicsItem, index) {
                return comicsItem ? (_jsx(CSSTransition, { timeout: 500, classNames: "comics-list-item", children: _jsx(ComicsListItem, { comic: comicsItem }, index) }, index)) : null;
            }) }) }));
    return (_jsxs("div", { className: "comics__list", children: [setContent(process, function () { return content; }, newItemsLoading), _jsx("button", { className: "button button__main button__long", disabled: newItemsLoading, style: { display: comicsEnded ? "none" : "block" }, onClick: function () { return onRequest(offset, false); }, children: _jsx("div", { className: "inner", children: "load more" }) })] }));
};
export default ComicsList;
