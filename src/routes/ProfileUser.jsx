import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Image1 from "../components/Image1";
import NavbarMenu from "../components/NavbarMenu";
import PagePresent from "../components/PagePresent";
import { PaginationControl } from "react-bootstrap-pagination-control";
import "bootstrap/dist/css/bootstrap.min.css";
import { axios } from "../api/config";
import OrderDetailItems from "../components/OrderDetailItems";
import { formatDate } from "../utils/helper";
const ProfileUser = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [user, setUser] = useState();
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);

  useEffect(() => {
    axios
      .get(`users/me/orders?size=${postsPerPage}&page=${currentPage - 1}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => console.log(error));
  }, [currentPage]);

  return (
    <>
      <NavbarMenu></NavbarMenu>
      <PagePresent title={"Profile"}></PagePresent>
      <Container className="mt-4 mb-4">
        <Row style={{ rowGap: "16px" }}>
          <Col
            lg={4}
            sm={12}
            className="shadow-box faj-center p-4 "
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
            <div
              className="faj-center mb-4"
              style={{
                width: "250px",
                height: "250px",
                backgroundColor: "#1f1f1f",
                borderRadius: "50%",
              }}
            >
              <i
                class="bi bi-person"
                style={{
                  color: "white",
                  fontSize: "200px",
                  marginBottom: "80px",
                }}
              ></i>
            </div>
            <div className="mt-4 shadow-box" style={{ borderRadius: "15px" }}>
              <Link to="/edit-profile">
                {" "}
                <Button
                  style={{
                    backgroundColor: "#CEB195",
                    outline: "none",
                    border: "0",
                  }}
                >
                  Edit Profile
                </Button>
              </Link>
            </div>
            <div className="mt-4 shadow-box" style={{ borderRadius: "15px" }}>
              <Link to="/edit-password">
                <Button
                  style={{
                    backgroundColor: "#CEB195",
                    outline: "none",
                    border: "0",
                  }}
                >
                  Change password
                </Button>
              </Link>
            </div>
          </Col>
          <Col
            lg={8}
            sm={12}
            style={{ display: "flex", flexDirection: "column", rowGap: "16px" }}
          >
            <div
              className="shadow-box faj-center"
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                flexDirection: "column",
                height: "60%",
              }}
            >
              <h3 style={{ paddingTop: "10px" }}>Shipping Infomation</h3>
              <div style={{ alignSelf: "self-start" }}>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "16px",
                  }}
                >
                  <li>
                    Fullname :{" "}
                    {user?.lastname
                      ? user?.lastname + " " + user?.firstname
                      : ""}
                  </li>
                  <li>Username : {user?.username}</li>
                  <li>Email : {user?.email}</li>
                  <li>Phone Number : {user?.phoneNumber}</li>
                  <li>
                    Address :{" "}
                    {user?.address
                      ? user?.address?.road +
                        " " +
                        user?.address?.ward +
                        " " +
                        user?.address?.district
                      : ""}
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="shadow-box faj-center"
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                flexDirection: "column",
                height: "auto",
              }}
            >
              <h3>Order Infomation</h3>
              <div
                className="shadow-box"
                style={{
                  width: "100%",
                  flexDirection: "column",
                  borderRadius: "15px",
                }}
              >
                <ul
                  className="list-group mb-4 faj-center"
                  style={{ display: "flex" }}
                >
                  {orders.content?.length > 0 ? (
                    orders.content?.map((item) => (
                      <OrderDetailItems type={"profile"} items={item} />
                    ))
                  ) : (
                    <p
                      style={{
                        paddingTop: "22px",
                        fontSize: "17px",
                      }}
                    >
                      Chưa có đơn đặt hàng
                    </p>
                  )}
                </ul>
                <div className="faj-center pb-4">
                  <PaginationControl
                    page={currentPage}
                    between={2}
                    total={orders.totalElements}
                    limit={postsPerPage}
                    changePage={(currentPage) => {
                      setCurrentPage(currentPage);
                    }}
                    last={true}
                    ellipsis={0}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default ProfileUser;
