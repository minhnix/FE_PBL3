import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="faj-center"
        style={{
          height: "100vh",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <h1 style={{ fontSize: "100px" }}>Oops!</h1>
        <h1>404 Not Found</h1>
        <h3>
          The page you are looking for might have been removed had its name
          changed or is temporarily unvailable.
        </h3>
        <img src="/notfound.gif" alt="" />
        <p
          className="text403"
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "#837256",
            fontSize: "25px",
            fontStyle: "italic",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Please, go back this way.
        </p>
      </div>
    </>
  );
};

export default NotFound;
