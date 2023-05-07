import React, { useEffect } from "react";
import NavbarMenu from "../components/NavbarMenu";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import OrderDetailItems from "../components/OrderDetailItems";
import { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import { BsBell } from "react-icons/bs";
import { axios } from "../api/config";
import { useNotification } from "../Context/Notification.context";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
const StaffPage = () => {
  const token = localStorage.getItem("token");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [orders, setOrders] = useState();
  const [notiClick, setNotiClick] = useState(false);

  const {
    numberOfUnreadNotification,
    notifications,
    getNotifications,
    clearNotifications,
    last,
    fetchMoreNotification,
  } = useNotification();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`orders/pending?size=${postsPerPage}&page=${currentPage - 1}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setOrders(response.data);
      });
  }, [currentPage]);

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
            <Col
              lg={12}
              className="p-4"
              style={{ display: "flex", justifyContent: "right" }}
            >
              <span
                onClick={() => {
                  setNotiClick(!notiClick);
                  clearNotifications();
                  getNotifications(0, 10);
                }}
                className="cart-box"
                data-value={numberOfUnreadNotification}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#222e3c",
                  border: "2px solid white",
                  width: "50px",
                  height: "50px",
                  display: "grid",
                  placeItems: "center",
                  marginRight: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "24px",
                    lineHeight: "20px",
                    cursor: "pointer",
                  }}
                >
                  <BsBell style={{ color: "white" }}></BsBell>
                </div>
              </span>
              {notiClick && (
                <div
                  id="scrollableDiv"
                  className="px-4"
                  style={{
                    position: "absolute",
                    maxHeight: "350px",
                    border: "2px solid white",
                    overflowY: "auto",
                    marginTop: "64px",
                    backgroundColor: "rgb(30,30,30)",
                    // width: "20%",
                    maxWidth: "390px",
                    borderRadius: "15px",
                    flexDirection: "column",
                    color: "white",
                    padding: 0,
                  }}
                >
                  <div>
                    <h4
                      style={{
                        color: "white",
                        textAlign: "center",
                        padding: "16px 0",
                      }}
                    >
                      Thông báo
                    </h4>
                  </div>
                  {/* <ul
                    id="scrollableDiv"
                    className="mt-3"
                    style={{ color: "white", width: "100%", padding: 0 }}
                  > */}
                  {notifications && notifications.length > 0 && (
                    <InfiniteScroll
                      dataLength={notifications.length}
                      next={fetchMoreNotification}
                      hasMore={!last}
                      loader={
                        <h5 style={{ textAlign: "center" }}>Loading...</h5>
                      }
                      scrollableTarget="scrollableDiv"
                      endMessage={
                        <h5 style={{ textAlign: "center" }}>Hết thông báo</h5>
                      }
                    >
                      {notifications.map((notification) => (
                        <div className="mb-2 unread">
                          <div
                            className="p-2 flex-column"
                            style={{
                              display: "flex",
                              borderRadius: "15px",
                              backgroundColor: "rgb(50,50,50)",
                              gap: "8px",
                              border: "1px solid gray",
                            }}
                          >
                            <ul
                              className="px-3"
                              onClick={() => navigate(notification.slug)}
                            >
                              <li>
                                <span style={{ fontWeight: "bold" }}>
                                  {notification.message}
                                </span>
                              </li>
                              <li>
                                <span style={{ fontSize: "12px" }}>
                                  {moment(notification.createdAt).fromNow()}{" "}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </InfiniteScroll>
                  )}
                  {/* </ul> */}
                </div>
              )}
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

              {orders?.content?.map((item) => (
                <OrderDetailItems
                  type={"order"}
                  items={item}
                ></OrderDetailItems>
              ))}
              <PaginationControl
                page={currentPage}
                between={4}
                total={orders?.totalElements}
                limit={postsPerPage}
                changePage={(currentPage) => {
                  setCurrentPage(currentPage);
                }}
                last={true}
                ellipsis={1}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default StaffPage;
