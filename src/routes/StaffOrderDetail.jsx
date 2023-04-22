import React, { useEffect } from "react";
import NavbarMenu from "../components/NavbarMenu";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import OrderDetailItems from "../components/OrderDetailItems";
import { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { axios } from "../api/config";
import { formatCostNumber } from "../utils/helper";
import jwtDecode from "jwt-decode";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNotification } from "../Context/Notification.context";

const StaffOrderDetail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = jwtDecode(token).user.role[0].name;
  if (role !== "ROLE_STAFF") {
    navigate("/");
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [order, setOrder] = useState();
  const { id } = useParams();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = order?.orderDetails.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const { stompClient } = useNotification();

  const notify = (msg, type) => {
    if (type === "success")
      toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    else if (type === "error")
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    else if (type === "info")
      toast.info(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  };

  const handleReceiveOrder = () => {
    fetch(`http://localhost:8080/api/v1/orders/${id}/receive`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.id) {
          sendUserNotificationDelivery();
          notify("Nhận đơn thành công", "success");
          setOrder(json);
        } else {
          if (json.message === "Không đủ nguyên liệu")
            sendUserNotificationFailed();
          notify(json.message, "error");
        }
      });
  };
  const handlePayOrder = () => {
    fetch(`http://localhost:8080/api/v1/orders/${id}/paid`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.id) {
          sendUserNotificationPaid();
          notify("Đơn đã thanh toán thành công", "success");
          setOrder(json);
        } else notify(json.message, "error");
      })
      .catch((err) => console.log(err));
  };

  const sendUserNotificationDelivery = async () => {
    if (stompClient) {
      const notification = {
        title: "Đặt hàng thành công",
        message: "Đơn hàng đang được giao đến cho bạn",
        type: "delivery",
        slug: `/order-detail/${order.id}`,
        toUser: {
          id: order.customer.id,
        },
      };
      const res = await axios.post("notification", notification, {
        headers: { Authorization: `Bearer ${token}` },
      });
      stompClient.send("/app/user-notification", {}, JSON.stringify(res.data));
    }
  };
  const sendUserNotificationPaid = async () => {
    if (stompClient) {
      const notification = {
        title: "Thanh toán thành công",
        message: "Bạn đã thanh toán đơn hàng thành công!",
        type: "paid",
        slug: `/order-detail/${order.id}`,
        toUser: {
          id: order.customer.id,
        },
      };
      const res = await axios.post("notification", notification, {
        headers: { Authorization: `Bearer ${token}` },
      });
      stompClient.send("/app/user-notification", {}, JSON.stringify(res.data));
    }
  };

  const sendUserNotificationFailed = async () => {
    if (stompClient) {
      const notification = {
        title: "Đặt đơn hàng thất bại",
        message: "Đã hết hàng. Vui lòng đặt lại sau!!!",
        type: "FAILED",
        slug: `/order-detail/${order.id}`,
        toUser: {
          id: order.customer.id,
        },
      };
      const res = await axios.post("notification", notification, {
        headers: { Authorization: `Bearer ${token}` },
      });
      stompClient.send("/app/user-notification", {}, JSON.stringify(res.data));
    }
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
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403 && role === "ROLE_CUSTOMER")
          navigate("/403");
        if (error.response.status === 403 && role === "ROLE_STAFF") {
          navigate("/");
          notify("Đơn hàng này đã được nhận!!!", "info");
        }
      });
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        <NavbarMenu
          currentManagePage={"Order"}
          position={"vertical"}
        ></NavbarMenu>
        <div
          style={{
            backgroundColor: "#1f1f1f",
            width: "100%",
            marginLeft: "250px",
            overflow: "hidden",
            minHeight: "100vh",
          }}
        >
          <h4
            className="p-3"
            style={{
              textAlign: "center",
              borderBottom: "1px solid #979797",
              color: "white",
            }}
          >
            Order
          </h4>
          <Row className="m-4">
            <Col lg={6}>
              <Button
                onClick={() => {
                  navigate("/");
                }}
                className="btn btn-primary"
                style={{ float: "left", minWidth: "100px" }}
              >
                <AiOutlineArrowLeft></AiOutlineArrowLeft>
              </Button>
            </Col>
          </Row>
          <Row className="faj-center" style={{ marginTop: "76px" }}>
            <Col lg={10}>
              <ul
                className="p-3"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  backgroundColor: "#222e3c",
                  color: "white",
                  borderBottom: "1px solid white",
                }}
              >
                <li style={{ width: "80px", textAlign: "center" }}>Product</li>
                <li style={{ width: "80px", textAlign: "center" }}>Name</li>
                <li style={{ width: "80px", textAlign: "center" }}>Total</li>
                <li style={{ width: "80px", textAlign: "center" }}>Size</li>
                <li style={{ width: "80px", textAlign: "center" }}>Quantity</li>
              </ul>

              {currentPosts?.map((item) => (
                <OrderDetailItems
                  key={item.id}
                  type={"staff-order-detail"}
                  items={item}
                ></OrderDetailItems>
              ))}
              <PaginationControl
                page={currentPage}
                between={3}
                total={order?.orderDetails.length}
                limit={postsPerPage}
                changePage={(currentPage) => {
                  setCurrentPage(currentPage);
                }}
                last={true}
                ellipsis={0}
              />
            </Col>
          </Row>
          <div
            className="mt-4"
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: "250px",
            }}
          >
            <div>
              <h3 className="p-4" style={{ color: "white" }}>
                Total : {formatCostNumber(order?.totalCost)}
              </h3>
              <div className="p-4">
                <Button
                  style={{ marginRight: "24px" }}
                  className="btn btn-info"
                  onClick={handleReceiveOrder}
                >
                  Nhận Đơn
                </Button>
                <Button className="btn btn-success" onClick={handlePayOrder}>
                  Thanh Toán
                </Button>
              </div>
            </div>
            <div style={{ background: "white", height: "100%" }}>
              <h3
                className="pt-4"
                style={{ color: "black", textAlign: "center" }}
              >
                Order Infomation
              </h3>
              <div className="p-4" style={{ display: "flex" }}>
                <ul
                  style={{
                    maxWidth: "60%",
                    color: "gray",
                    borderRight: "2px solid gray",
                  }}
                >
                  <li>
                    Fullname :{" "}
                    {order?.customer?.lastname
                      ? order?.customer?.lastname +
                        " " +
                        order?.customer?.firstname
                      : ""}
                  </li>
                  <li>Phone Number : {order?.customer?.phoneNumber}</li>
                  <li>Address : {order?.address}</li>
                </ul>
                <ul style={{ maxWidth: "40%", color: "gray" }}>
                  <li className="mb-3">
                    {order?.status === "DELIVERING" ||
                    order?.status === "PAID" ? (
                      <AiFillCheckCircle fill="green" size={30} />
                    ) : (
                      <AiOutlineCheckCircle size={30} />
                    )}
                    <span className="mx-4">Đã nhận đơn</span>
                  </li>
                  <li className="mb-3">
                    {order?.status === "PAID" ? (
                      <AiFillCheckCircle fill="green" size={30} />
                    ) : (
                      <AiOutlineCheckCircle size={30} />
                    )}
                    <span className="mx-4">Đã thanh toán</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StaffOrderDetail;
