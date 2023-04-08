import React, { useState } from "react";
import "../styles/signIn.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import { Link, useNavigate } from "react-router-dom";

import { axios } from "../api/config";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleShowPassword = () => {
    document.querySelector("#Password").type === "text"
      ? (document.querySelector("#Password").type = "password")
      : (document.querySelector("#Password").type = "text");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      usernameOrEmail: username,
      password,
    };
    const res = await axios
      .post("/auth/login", body)
      .then((response) => response)
      .catch((error) => error.response);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.accessToken);
      navigate("/");
      window.location.reload();
    } else if (res.status === 401) {
      setError(res.data);
    } else if (res.status === 400) {
      setError(res.data);
    }
  };

  return (
    <>
      <div className="container1">
        <div className="form-box">
          <Row style={{ color: "white" }}>
            <Col lg={7} sm={12} className="p-4">
              <h1 style={{ textAlign: "center", color: "white" }}>Login</h1>
              <form
                onSubmit={(e) => handleSubmit(e)}
                action=""
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
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
                  <div style={{ position: "relative" }}>
                    <label style={{ position: "absolute" }} htmlFor="Password">
                      <i style={{ marginRight: "12px" }} class="bi bi-lock"></i>
                      Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name=""
                      style={{
                        width: "100%",
                        marginTop: "24px",
                        padding: "0px 12px",
                      }}
                      placeholder="Enter your password"
                      id="Password"
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
                    <span style={{ color: "#FA9884" }}>
                      {error.password ||
                        (error?.message ? error?.message : null)}
                    </span>
                  </div>
                </div>
                <button>
                  <i class="bi bi-arrow-right"></i>
                </button>
                <div style={{ marginTop: "24px" }}>
                  <p>
                    Don't have account ?{" "}
                    <Link
                      style={{ textDecoration: "none", color: "#80BBFF" }}
                      to="/signup"
                    >
                      Sign Up Now !
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

export default SignIn;
