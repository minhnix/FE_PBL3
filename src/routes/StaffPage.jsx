import React from "react";
import NavbarMenu from "../components/NavbarMenu";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import OrderDetailItems from "../components/OrderDetailItems";
import { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { BsBell } from "react-icons/bs";
const StaffPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const temp = [
    {
      id: 1,
      name: "Thuong",
      date: "01/06/2003",
      address: "03 Ngo Si Lien",
      phone: "0909009009",
    },
    {
      id: 2,
      name: "Vinh",
      date: "08/08/2003",
      address: "03 Ngo Si Lien",
      phone: "0909009009",
    },
    {
      id: 3,
      name: "Minh",
      date: "01/05/2003",
      address: "03 Ngo Si Lien",
      phone: "0909009009",
    },
  ];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = temp.slice(indexOfFirstPost, indexOfLastPost);
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
          marginLeft: "220px",
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
          <Col
            lg={12}
            className="p-4"
            style={{ display: "flex", justifyContent: "right" }}
          >
            <span
              className="cart-box"
              data-value={"!"}
              style={{
                borderRadius: "50%",
                backgroundColor: "#222e3c",
                border: "1px solid white",
                width: "50px",
                height: "50px",
                display: "grid",
                placeItems: "center",
                marginRight: "12px",
              }}
            >
              <div style={{ fontSize: "24px", lineHeight: "20px" }}>
                <BsBell style={{ color: "white" }}></BsBell>
              </div>
            </span>
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
              <li style={{ width: "60px", textAlign: "center" }}>Name</li>
              <li style={{ width: "60px", textAlign: "center" }}>Date</li>
              <li style={{ width: "120px", textAlign: "center" }}>Address</li>
              <li style={{ width: "120px", textAlign: "center" }}>
                Phone Number
              </li>
            </ul>

            {currentPosts?.map((item) => (
              <OrderDetailItems type={"order"} data={item}></OrderDetailItems>
            ))}
            <PaginationControl
              page={currentPage}
              between={3}
              total={temp.length}
              limit={postsPerPage}
              changePage={(currentPage) => {
                setCurrentPage(currentPage);
              }}
              last={true}
              ellipsis={0}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default StaffPage;
