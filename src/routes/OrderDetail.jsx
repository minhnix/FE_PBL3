import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import NavbarMenu from "../components/NavbarMenu";
import Footer from "../components/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import OrderDetailItems from "../components/OrderDetailItems";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { axios } from "../api/config";
import { formatCostNumber } from "../utils/helper";
import moment from "moment";
const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState();
  const token = localStorage.getItem("token");

  const nav = useNavigate();

  const handleReOrder = async () => {
    console.log(order);
    const requests = order.orderDetails.map((item) => {
      return createCart({
        menuId: item.menuId,
        quantity: item.quantity,
        size: item.menuSize,
      });
    });
    Promise.all(requests);
  };

  const createCart = async (cart) => {
    console.log("🚀 ~ createCart ~ cart:", cart);
    axios.post("http://localhost:8080/api/v1/carts", cart, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  useEffect(() => {
    axios
      .get("orders/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response.status === 403 ||
          error.response.status === 401 ||
          error.response.status === 404 ||
          error.response.status === 400
        )
          nav("/401");
      });
  }, [id]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = order?.orderDetails.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  useEffect(() => {
    localStorage.getItem("currentOrderPage")
      ? setCurrentPage(localStorage.getItem("currentOrderPage"))
      : setCurrentPage(1);
  });

  return (
    <>
      <NavbarMenu></NavbarMenu>
      <Container
        className="mt-4"
        style={{
          height: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "70px",
        }}
      >
        <Row
          style={{
            rowGap: "16px",
          }}
        >
          <Col lg={6} sm={12} className="faj-center">
            <div
              className="shadow-box faj-center p-4"
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "normal",
              }}
            >
              <h3 style={{ justifyContent: "self-start" }}>Order Summary</h3>
              <div
                style={{
                  alignSelf: "self-start",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "16px",
                  }}
                >
                  <li>Date : {moment(order?.createdAt).format("LLLL")}</li>
                  <li>Status : {order?.status}</li>
                  <li>Subtotal : {formatCostNumber(order?.subTotalCost)}</li>
                  <li>
                    Shipping Fee : {formatCostNumber(order?.deliveryCost)}
                  </li>
                  <li>Discount : {formatCostNumber(order?.amountDiscount)}</li>
                  <li>Total : {formatCostNumber(order?.totalCost)}</li>
                </ul>
                <Link
                  to="/cart"
                  reloadDocument
                  style={{
                    // alignItems: "center",
                    margin: "auto",
                  }}
                >
                  <button
                    onClick={handleReOrder}
                    style={{
                      backgroundColor: "#CEB195",
                      outline: "none",
                      border: "0",
                      padding: "8px 20px",
                      borderRadius: "5px",
                      fontWeight: "500",
                    }}
                  >
                    Repurchase
                  </button>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12} className="faj-center">
            <div
              className="shadow-box faj-center p-4"
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "normal",
              }}
            >
              <h3 style={{ justifySelf: "self-start" }}>Shipping Infomation</h3>
              <div
                style={{
                  alignSelf: "self-start",
                  display: "flex",
                  justifyContent: "space-between",
                  height: "100%",
                  width: "100%",
                }}
              >
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    rowGap: "16px",
                  }}
                >
                  <li>
                    Fullname :{" "}
                    {order?.customer?.lastname +
                      " " +
                      order?.customer?.firstname}
                  </li>
                  <li>Username : {order?.customer.username}</li>
                  <li>Email : {order?.customer.email}</li>
                  <li>Phone Number : {order?.customer.phoneNumber}</li>
                  <li>Address : {order?.address}</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Col lg={12} className="faj-center">
            <div
              className="shadow-box faj-center p-4"
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "15px",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <h3>Order Items</h3>
              <div className="order-detail-box" style={{ width: "100%" }}>
                <OrderDetailItems
                  canEdit={false}
                  type={"order-detail"}
                  items={currentPosts}
                ></OrderDetailItems>
              </div>
              <div className="faj-center">
                <PaginationControl
                  page={currentPage}
                  between={4}
                  total={order?.orderDetails.length}
                  limit={postsPerPage}
                  changePage={(currentPage) => {
                    setCurrentPage(currentPage);
                    localStorage.setItem("currentOrderPage", currentPage);
                  }}
                  ellipsis={4}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default OrderDetail;
