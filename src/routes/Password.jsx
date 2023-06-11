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
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleEditPassword = () => {
    const code = document.querySelector(".password");
    // code.style.display = "block";
    const email = document.querySelector(".newpassword");
    const error = document.querySelector(".MessageError");
    // email.style.display = "none";
    if (password !== newPassword || !password || !newPassword) {
      //code to reset password
      error.style.display = "block";
    } else {
      error.style.display = "none";
      toast.success("Cập nhật mật khẩu thành công");
      navigate("/profile");
    }
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
            <div className="faj-center" style={{ width: "70%" }}>
              <input
                className="password"
                placeholder="New password"
                type="text"
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
                value={password}
              />
            </div>
            <div className="faj-center" style={{ width: "70%" }}>
              <input
                className="newpassword"
                placeholder="Confirm new password"
                type="text"
                style={{
                  width: "80%",
                  padding: "0 12px",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #B0906F",
                }}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                value={newPassword}
              />
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
            </div>

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
