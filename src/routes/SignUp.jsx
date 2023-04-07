import React, { useState } from "react";
import "../styles/signIn.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import { Link, useNavigate } from "react-router-dom";

import { axios } from "../api/config";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleShowPassword = () => {
    document.querySelector("#Password").type === "text"
      ? (document.querySelector("#Password").type = "password")
      : (document.querySelector("#Password").type = "text");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
      email,
    };

    const data = await axios
      .post("auth/signup", user)
      .then((response) => {
        navigate("/signin");
      })
      .catch((err) => err.response);

    if (data.status === 400) {
      setError(data.data);
    }
  };

  return (
    <>
      <div className="container1">
        <div className="form-box">
          <Row style={{ color: "white" }}>
            <Col lg={7} sm={12} className="p-4">
              <h1 style={{ textAlign: "center", color: "white" }}>Sign Up</h1>
              <form
                action=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onSubmit={(e) => handleSignUp(e)}
              >
                <div className="form-input-box">
                  <div style={{ position: "relative" }}>
                    <label style={{ position: "absolute" }} htmlFor="Username">
                      <i
                        style={{ marginRight: "12px" }}
                        class="bi bi-person-circle"
                      ></i>
                      Username
                    </label>
                    <input
                      type="text"
                      name=""
                      style={{
                        width: "100%",
                        marginTop: "24px",
                        padding: "0px 12px",
                      }}
                      placeholder="Enter your username"
                      id="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <span style={{ color: "#FA9884" }}>
                      {error.username ||
                        (error?.message?.includes("Username")
                          ? error?.message
                          : null)}
                    </span>
                  </div>
                  <div style={{ position: "relative" }}>
                    <label style={{ position: "absolute" }} htmlFor="Email">
                      <i
                        style={{ marginRight: "12px" }}
                        class="bi bi-person-circle"
                      ></i>
                      Email
                    </label>
                    <input
                      type="email"
                      name=""
                      style={{
                        width: "100%",
                        marginTop: "24px",
                        padding: "0px 12px",
                      }}
                      placeholder="Enter your email"
                      id="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span style={{ color: "#FA9884" }}>
                      {error.email ||
                        (error?.message?.includes("Email")
                          ? error?.message
                          : null)}
                    </span>
                  </div>
                  <div style={{ position: "relative" }}>
                    <label style={{ position: "absolute" }} htmlFor="Password">
                      <i style={{ marginRight: "12px" }} class="bi bi-lock"></i>
                      Password
                    </label>
                    <input
                      type="password"
                      name=""
                      style={{
                        width: "100%",
                        marginTop: "24px",
                        padding: "0px 12px",
                      }}
                      placeholder="Enter your password"
                      id="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {password ? (
                      <i
                        className="fa-solid fa-eye registry__eye"
                        onClick={(e) => handleShowPassword(e.target)}
                        id="input-icon"
                        style={{
                          width: "",
                          height: "",
                          position: "absolute",
                          right: "0.5rem",
                          top: "1.5rem",
                          bottom: 0,
                          margin: "auto 0",
                          fontSize: 18,
                          cursor: "pointer",
                        }}
                      />
                    ) : null}

                    <span style={{ color: "#FA9884" }}>{error.password}</span>
                  </div>
                </div>
                <button>
                  <i class="bi bi-arrow-right"></i>
                </button>
                <div style={{ marginTop: "24px" }}>
                  <p>
                    Already have any account ?{" "}
                    <Link
                      style={{ textDecoration: "none", color: "#80BBFF" }}
                      to="/signin"
                    >
                      Sign In Now !
                    </Link>
                  </p>
                </div>
              </form>
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

export default SignUp;
