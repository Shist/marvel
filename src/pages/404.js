import React from "react";
import { Helmet } from "react-helmet";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="This page does not exsist" />
        <title>Page not found</title>
      </Helmet>
      <div>
        <ErrorMessage />
        <p
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}
        >
          Page doesn't exsist
        </p>
        <Link
          style={{
            display: "block",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "24px",
            marginTop: "30px",
          }}
          to="/"
        >
          Back to main page
        </Link>
      </div>
    </>
  );
};

export default Page404;
