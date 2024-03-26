import { jsx as _jsx } from "react/jsx-runtime";
import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Skeleton from "../components/skeleton/Skeleton";
var setContent = function (process, Component, data) {
    switch (process) {
        case "waiting":
            return _jsx(Skeleton, {});
        case "loading":
            return _jsx(Spinner, {});
        case "confirmed":
            return _jsx(Component, { data: data });
        case "error":
            return _jsx(ErrorMessage, {});
        default:
            throw new Error("Unexpected process state");
    }
};
export default setContent;
