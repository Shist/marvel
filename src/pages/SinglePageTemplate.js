import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMarvelService from "../services/MarvelService";
import AppBanner from "../components/appBanner/AppBanner";
import setContent from "../utils/setContent";
import { isIComic } from "../services/MarvelService";
function isComicComponent(component) {
    return component.displayName !== undefined;
}
var SinglePageTemplate = function (_a) {
    var Component = _a.Component, dataType = _a.dataType;
    var id = useParams().id;
    var _b = useState(null), data = _b[0], setData = _b[1];
    var _c = useMarvelService(), clearError = _c.clearError, getComic = _c.getComic, getCharacter = _c.getCharacter, process = _c.process, setProcess = _c.setProcess;
    useEffect(function () {
        updateData();
    }, [id]);
    var updateData = function () {
        clearError();
        if (id) {
            switch (dataType) {
                case "comic":
                    getComic(id)
                        .then(onDataLoaded)
                        .then(function () { return setProcess("confirmed"); });
                    break;
                case "character":
                    getCharacter(id)
                        .then(onDataLoaded)
                        .then(function () { return setProcess("confirmed"); });
                    break;
                default:
                    console.error("Unexpected dataType inside switch!");
            }
        }
        else {
            console.error("Warning: id of the data (either char or comic) was empty");
        }
    };
    var onDataLoaded = function (data) {
        setData(data);
    };
    return (_jsxs(_Fragment, { children: [_jsx(AppBanner, {}), data
                ? isIComic(data)
                    ? isComicComponent(Component)
                        ? setContent(process, Component, data)
                        : null
                    : isComicComponent(Component)
                        ? null
                        : setContent(process, Component, data)
                : null] }));
};
export default SinglePageTemplate;
