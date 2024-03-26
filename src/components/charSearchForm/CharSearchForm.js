import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage, } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import "./charSearchForm.scss";
var CharSearchForm = function () {
    var _a = useState([]), chars = _a[0], setChars = _a[1];
    var _b = useMarvelService(), clearError = _b.clearError, getCharactersByName = _b.getCharactersByName, process = _b.process, setProcess = _b.setProcess;
    var errorMessage = process === "error" ? (_jsx("div", { className: "char__search-critical-error", children: _jsx(ErrorMessage, {}) })) : null;
    var results = !chars ? null : chars.length > 0 ? (_jsxs("div", { className: "char__search-wrapper", children: [_jsxs("div", { className: "char__search-success", children: ["There is! Visit ", chars[0].name, " page?"] }), _jsx(Link, { to: "/characters/".concat(chars[0].id), className: "button button__secondary", children: _jsx("div", { className: "inner", children: "To page" }) })] })) : (_jsx("div", { className: "char__search-error", children: "The character was not found. Check the name and try again" }));
    return (_jsxs("div", { className: "char__search-form", children: [_jsx(Formik, { initialValues: { charName: "" }, validationSchema: Yup.object({
                    charName: Yup.string().required("This field is required"),
                }), onSubmit: function (_a) {
                    var charName = _a.charName;
                    clearError();
                    getCharactersByName(charName)
                        .then(function (chars) { return setChars(chars); })
                        .then(function () { return setProcess("confirmed"); });
                }, children: _jsxs(Form, { children: [_jsx("label", { className: "char__search-label", htmlFor: "charName", children: "Or find a character by name:" }), _jsxs("div", { className: "char__search-wrapper", children: [_jsx(Field, { id: "charName", name: "charName", type: "text", placeholder: "Enter name" }), _jsx("button", { type: "submit", className: "button button__main", disabled: process === "loading", children: _jsx("div", { className: "inner", children: "find" }) })] }), _jsx(FormikErrorMessage, { component: "div", className: "char__search-error", name: "charName" })] }) }), results, errorMessage] }));
};
export default CharSearchForm;
