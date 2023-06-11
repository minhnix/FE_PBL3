import React, { useState } from "react";
import "../styles/signIn.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import { Link, useNavigate } from "react-router-dom";

import { axios } from "../api/config";
import { toast } from "react-toastify";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`/auth/reset-password?email=${email}`);
      setLoading(false);
      toast.success("Mật khẩu đã gửi đến email của bạn");
    } catch (err) {
      toast.error("Không tìm thấy email!!!");
      setLoading(false);
    }
  };

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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="form-input-box">
                  <div className="Email" style={{ position: "relative" }}>
                    <label style={{ position: "absolute" }} htmlFor="email">
                      <i
                        style={{ marginRight: "12px" }}
                        class="bi bi-person-circle"
                      ></i>
                      Please enter your email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name=""
                      style={{
                        width: "100%",
                        marginTop: "30px",
                        padding: "0px 12px",
                      }}
                      placeholder="Enter your email"
                      id="email"
                    />
                  </div>
                </div>
                <button disabled={loading} onClick={handleSubmit}>
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
