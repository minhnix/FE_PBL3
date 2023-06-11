import React, { useState } from "react";
import "../styles/signIn.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import { Link, useNavigate } from "react-router-dom";

import { axios } from "../api/config";

const Forgot = () => {
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleShowPassword = () => {
    document.querySelector("#Password").type === "text"
      ? (document.querySelector("#Password").type = "password")
      : (document.querySelector("#Password").type = "text");
  };
  const [action, setAction] = useState("email");
  const handleSendEmail = () => {
    const codeInput = document.querySelector(".Code");
    codeInput.style.display = "block";
    const emailInput = document.querySelector(".Email");
    emailInput.style.display = "none";
    const error = document.querySelector(".MessageError");
    // email.style.display = "none";
    if (codeInput.style.display === "block" && action === "code") {
      //code to reset password
      if (code !== "1") {
        error.style.display = "block";
      } else {
        error.style.display = "none";
        navigate("/reset");
      }
    }
    if (codeInput.style.display === "block" && action === "email") {
      setAction("code");
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const body = {
  //     usernameOrEmail: username,
  //     password,
  //   };
  //   const res = await axios
  //     .post("/auth/login", body)
  //     .then((response) => response)
  //     .catch((error) => error.response);
  //   if (res.status === 200) {
  //     localStorage.setItem("token", res.data.accessToken);
  //     navigate("/");
  //     window.location.reload();
  //   } else if (res.status === 401) {
  //     setError(res.data);
  //   } else if (res.status === 400) {
  //     setError(res.data);
  //   }
  // };

  return (
    <>
      <div className="container1">
        <div className="form-box">
          <Row style={{ color: "white" }}>
            <Col lg={7} sm={12} className="p-4">
              <h1 style={{ textAlign: "center", color: "white" }}>
                Forget password
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
                  <div className="Email" style={{ position: "relative" }}>
                    <label style={{ position: "absolute" }} htmlFor="Username">
                      <i
                        style={{ marginRight: "12px" }}
                        class="bi bi-person-circle"
                      ></i>
                      Please enter your email
                    </label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      name=""
                      style={{
                        width: "100%",
                        marginTop: "24px",
                        padding: "0px 12px",
                      }}
                      placeholder="Enter your username"
                      id="Username"
                    />
                    <span style={{ color: "#FA9884" }}>
                      {error.usernameOrEmail ||
                        (error?.message ? error?.message : null)}
                    </span>
                  </div>
                  <div
                    className="Code"
                    style={{ position: "relative", display: "none" }}
                  >
                    <label style={{ position: "absolute" }} htmlFor="Password">
                      <i style={{ marginRight: "12px" }} class="bi bi-lock"></i>
                      Please check your emails for a message with your code
                    </label>
                    <input
                      onChange={(e) => setCode(e.target.value)}
                      name=""
                      style={{
                        width: "100%",
                        marginTop: "80px",
                        padding: "0px 12px",
                      }}
                      placeholder="Enter your code here..."
                      id="Password"
                      required
                    />
                    <span style={{ color: "#FA9884" }}>
                      {error.password ||
                        (error?.message ? error?.message : null)}
                    </span>
                  </div>
                  <div
                    className="MessageError"
                    style={{ position: "relative", display: "none" }}
                  >
                    <label style={{ color: "red" }} htmlFor="Password">
                      Looks like you entered the wrong code
                    </label>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleSendEmail();
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
                </div>{" "}
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

export default Forgot;
