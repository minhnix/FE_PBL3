import React from "react";
import { Link } from "react-router-dom";

const ForbiddenPage = () => {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <h1 style={{ textAlign: "center", fontSize: "150px" }}>403</h1>
      <h1 style={{ textAlign: "center", fontSize: "70px", color: "red" }}>
        Forbidden
      </h1>
      <img
        src="/403Page.png"
        style={{
          width: "50%",
          height: "50vh",
          objectFit: "cover",
          position: "absolute",
          bottom: "20%",
          left: "25%",
        }}
        alt=""
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span
          style={{ textAlign: "center", fontSize: "40px", color: "#ea8a1a" }}
        >
          Sorry!!! It's not allowed to go beyond this point!
        </span>
        <Link
          className="text403"
          style={{
            textAlign: "center",
            textDecoration: "none",
            color: "#837256",
            fontSize: "25px",
            fontStyle: "italic",
          }}
          to={"/"}
        >
          Please, go back this way.
        </Link>
      </div>
    </div>
  );
};

export default ForbiddenPage;
