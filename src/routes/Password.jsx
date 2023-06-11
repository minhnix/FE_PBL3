import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavbarMenu from "../components/NavbarMenu";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import PagePresent from "../components/PagePresent";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Password = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleShowPassword = () => {
    const hidden = document.querySelectorAll(".Password");
    for (let i = 0; i < hidden.length; i++) {
      if (hidden[i].type == "password") {
        hidden[i].type = "text";
      } else {
        hidden[i].type = "password";
      }
    }
    // document.querySelector(".Password").type === "text"
    //   ? (document.querySelector(".Password").type = "password")
    //   : (document.querySelector(".Password").type = "text");
  };

  const handleEditPassword = async () => {
    if (!checkPassword(newPassword, password)) {
      if (validatePassword(newPassword, confirmPassword)) {
        const body = {
          oldPassword: password,
          newPassword,
        };
        try {
          const res = await axios.put(
            `http://localhost:8080/api/v1/users/password`,
            body,
            {
              headers: {
                Authorization: `Bearer ${token}}`,
              },
            }
          );
          toast.success("Password updated successfully");
          navigate("/profile");
        } catch (error) {
          console.log("🚀 ~ handleEditPassword ~ error:", error);
          setErrorMsg(error.response.data.message);
        }
      } else {
        setErrorMsg("Looks like you entered the wrong confirm password");
      }
    } else {
      setErrorMsg("The new password must be different from the old password");
    }
  };

  const validatePassword = (newPassword, confirmPassword) => {
    return newPassword === confirmPassword;
  };
  const checkPassword = (newPassword, oldPassword) => {
    return newPassword === oldPassword;
  };

  return (
    <>
      <NavbarMenu isHomePage={false}></NavbarMenu>
      <PagePresent title={"Edit Profile"}></PagePresent>
      <Container>
        <Row
          className="mt-4 mb-4 shadow-box"
          style={{ height: "60vh", borderRadius: "15px" }}
        >
          <Col
            lg={12}
            className="faj-center"
            style={{
              flexDirection: "column",
              rowGap: "16px",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
            <h1>Edit your password</h1>
            <div className="faj-center" style={{ width: "calc(50% - 15px)" }}>
              <input
                className="password Password"
                placeholder="Old password"
                type="password"
                style={{
                  width: "80%",
                  padding: "0 12px",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #B0906F",
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {password ? (
                <i
                  className="fa-solid fa-eye registry__eye"
                  onClick={(e) => handleShowPassword(e.target)}
                  id="input-icon"
                  style={{
                    width: "15px",
                    height: "",
                    bottom: 0,
                    margin: "auto 0",
                    fontSize: 18,
                    cursor: "pointer",
                  }}
                />
              ) : null}
            </div>
            <div
              className="faj-center"
              style={{ width: "calc(50% )", position: "relative" }}
            >
              <input
                className="password Password"
                placeholder="New password"
                type="password"
                style={{
                  width: "80%",
                  padding: "0 12px",
                  right: 0,
                  top: 0,
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #B0906F",
                }}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>

            <div className="faj-center" style={{ width: "50%" }}>
              <input
                className="newpassword Password"
                placeholder="Confirm new password"
                type="password"
                style={{
                  width: "80%",
                  padding: "0 12px",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #B0906F",
                }}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            {errorMsg && errorMsg !== "" && (
              <div className="MessageError" style={{ position: "relative" }}>
                <label
                  style={{ marginBottom: "16px", color: "red" }}
                  htmlFor="Password"
                >
                  {errorMsg}
                </label>
              </div>
            )}

            <Button
              style={{
                backgroundColor: "#CEB195",
                outline: "none",
                border: "0",
                padding: "8px 40px",
              }}
              onClick={handleEditPassword}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Password;
