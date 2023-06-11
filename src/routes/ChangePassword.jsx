import React, { useState } from "react";
import "../styles/signIn.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import { Link, useNavigate } from "react-router-dom";

import { axios } from "../api/config";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleShowPassword = () => {
    document.querySelector("#Password").type === "text"
      ? (document.querySelector("#Password").type = "password")
      : (document.querySelector("#Password").type = "text");
  };
  const handleSetPassWord = () => {
    const code = document.querySelector(".password");
    // code.style.display = "block";
    const email = document.querySelector(".newpassword");
    const error = document.querySelector(".MessageError");
    // email.style.display = "none";
    if (password !== newPassword) {
      //code to reset password
      error.style.display = "block";
    } else {
      error.style.display = "none";
      navigate("/signin");
    }
  };

  return (
    <>
      <div className="container1">
        <div className="form-box">
          <Row style={{ color: "white" }}>
            <Col lg={7} sm={12} className="p-4">
              <h1 style={{ textAlign: "center", color: "white" }}>
                Reset password
              </h1>
              <div
                // onSubmit={(e) => handleSubmit(e)}
                // action=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="form-input-box">
                  <div className="password" style={{ position: "relative" }}>
                    <label style={{}} htmlFor="Password">
                      <i style={{ marginRight: "12px" }} class="bi bi-lock"></i>
                      Enter new password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      name=""
                      style={{
                        width: "100%",
                        marginTop: "8px",
                        padding: "0px 12px",
                      }}
                      placeholder="Enter your password"
                      id="Password"
                    />
                    <span style={{ color: "#FA9884" }}>
                      {error.password ||
                        (error?.message ? error?.message : null)}
                    </span>
                  </div>
                  <div className="newpassword" style={{ position: "relative" }}>
                    <label style={{ position: "absolute" }} htmlFor="Password">
                      <i style={{ marginRight: "12px" }} class="bi bi-lock"></i>
                      Confirm your new password
                    </label>
                    <input
                      onChange={(e) => setNewPassword(e.target.value)}
                      name=""
                      style={{
                        width: "100%",
                        marginTop: "40px",
                        padding: "0px 12px",
                      }}
                      placeholder="Enter your password"
                      id="Password"
                    />
                    <span style={{ color: "#FA9884" }}>
                      {error.password ||
                        (error?.message ? error?.message : null)}
                    </span>
                  </div>
                </div>
                <div
                  className="MessageError"
                  style={{ position: "relative", display: "none" }}
                >
                  <label
                    style={{ margin: "8px 0 16px", color: "red" }}
                    htmlFor="Password"
                  >
                    Looks like you entered the wrong new password
                  </label>

                  <span style={{ color: "#FA9884" }}>
                    {error.password || (error?.message ? error?.message : null)}
                  </span>
                </div>

                <button
                  onClick={() => {
                    handleSetPassWord();
                  }}
                >
                  <i class="bi bi-arrow-right"></i>
                </button>

                <div style={{ marginTop: "24px" }}>
                  <p>
                    Don't have account ?
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white !important",
                        marginLeft: "16px",
                      }}
                      to="/signup"
                    >
                      Sign Up Now !
                    </Link>
                  </p>
                </div>
                <div style={{ marginTop: "0px" }}>
                  <p>
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white !important",
                        marginLeft: "16px",
                      }}
                      to="/signin"
                    >
                      Sign In Now !
                    </Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={5} sm={0} className="imgDeco">
              <Image
                src="img1.png"
                style={{ maxWidth: "100%", height: "100%" }}
              ></Image>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
