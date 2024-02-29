import React from "react";
import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

const ErrorPage = () => {
  //   const error = useRouteError();
  //   let errorMessage: string;

  //   if (isRouteErrorResponse(error)) {
  //     // error is type `ErrorResponse`
  //     errorMessage = error.data.message || error.statusText;
  //   } else if (error instanceof Error) {
  //     errorMessage = error.message;
  //   } else if (typeof error === "string") {
  //     errorMessage = error;
  //   } else {
  //     console.error(error);
  //     errorMessage = "Unknown error";
  //   }
  const navigate = useNavigate();
  const error = useRouteError() as Error;
  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <>
      <div className="container mt-5 text-danger text-center">
        <hr />
        <h1>Oops! Something went wrong 😢</h1>
        <p>{error.data}</p>
        <button
          className="btn btn-warning btn-sm fw-bold"
          onClick={() => navigate(-1)}
        >
          &larr; Go back
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
