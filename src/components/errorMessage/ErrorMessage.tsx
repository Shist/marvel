// @ts-ignore
import errorImg from "./error.gif";

import "./errorMessage.scss";

const ErrorMessage = () => {
  return <img src={errorImg} alt="Error" className="error-msg" />;
};

export default ErrorMessage;
