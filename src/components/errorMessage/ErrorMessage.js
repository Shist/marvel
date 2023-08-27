import "./errorMessage.scss";

const ErrorMessage = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + "/error.gif"}
      alt="Error"
      className="error-msg"
    />
  );
};

export default ErrorMessage;
