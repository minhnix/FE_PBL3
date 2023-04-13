import React, { useEffect } from "react";
import NavbarMenu from "../components/NavbarMenu";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import OrderDetailItems from "../components/OrderDetailItems";
import { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { axios } from "../api/config";
import { formatCostNumber } from "../utils/helper";
const StaffOrderDetail = () => {
  const token = localStorage.getItem("token");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [order, setOrder] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = order?.orderDetails.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handleReceiveOrder = () => {};
  const handlePayOrder = () => {};

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
        if (error.response.status === 403) navigate("/403");
      });
  }, []);
  return (
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
          <Col lg={12}>
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
        <h3 className="p-4" style={{ color: "white" }}>
          Total : {formatCostNumber(order?.totalCost)}
        </h3>
        <div className="p-4">
          <Button
            style={{ marginRight: "24px" }}
            className="btn btn-info"
            onClick={() => handleReceiveOrder}
          >
            Nhận Đơn
          </Button>
          <Button className="btn btn-success" onClick={() => handlePayOrder}>
            Thanh Toán
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StaffOrderDetail;
