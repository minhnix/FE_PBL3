import React, { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Footer from "../components/Footer";
import NavbarMenu from "../components/NavbarMenu";
import OrderDetailItems from "../components/OrderDetailItems";
import PagePresent from "../components/PagePresent";
import Button from "react-bootstrap/esm/Button";
import CardBox from "../components/CardBox";
import { axios } from "../api/config";
import { useCart } from "../Context/Cart.context";
import { useNavigate } from "react-router-dom";
import { formatCostNumber } from "../utils/helper";
import { extraDeliveryCost } from "../utils/constant";
import { useNotification } from "../Context/Notification.context";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
const CartPage = () => {
  const [menu, setMenu] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [districtsCode, setDistrictsCode] = useState("490");
  const [wardsCode, setWardsCode] = useState("20194");
  const [road, setRoad] = useState("");
  const {
    cartItems,
    unCheckAll,
    checkAll,
    deleteCart,
    setAmountCart,
    amountCart,
  } = useCart();
  const { stompClient } = useNotification();

  const checkboxAll = useRef();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  let user = null;
  if (token) user = jwtDecode(token).user;

  useEffect(() => {
    axios
      .get("https://provinces.open-api.vn/api/p/48?depth=2")
      .then((response) => {
        setDistricts(response.data.districts);
      });
    axios
      .get("http://localhost:8080/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDistrictsCode(res.data?.address?.districtCode || "490");
        setWardsCode(res.data?.address?.wardCode || "20194");
        setRoad(res.data?.address?.road);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://provinces.open-api.vn/api/d/${districtsCode}?depth=2`)
      .then((response) => {
        setWards(response.data.wards);
        setWardsCode(response.data.wards[0].code);
      });
  }, [districtsCode]);

  useEffect(() => {
    const r = amountCart > 0 && cartItems.every((item) => item.selected);
    checkboxAll.current.checked = r;
  }, [amountCart]);

  const getSubTotal = () => {
    return cartItems.reduce(
      (total, item) => (item.selected ? total + item.totalCost : total),
      0
    );
  };

  const getDiscount = () => {
    const orderSelected = cartItems.filter((item) => item.selected);
    const totalCost = orderSelected.reduce(
      (total, item) => total + item.totalCost,
      0
    );
    if (totalCost > 300000) return 30000;
    if (totalCost > 200000) return 15000;
    if (orderSelected.length >= 5) return 10000;
    if (totalCost > 100000) return 7000;
    return 0;
  };

  const getShippingFee = () => {
    const fee = Number(
      extraDeliveryCost[districtsCode][0].hasOwnProperty(wardsCode)
        ? extraDeliveryCost[districtsCode][0][wardsCode]
        : extraDeliveryCost[districtsCode][0][
            Object.keys(extraDeliveryCost[districtsCode][0])[0]
          ]
    );
    if (isNaN(fee)) {
      return "Không ship";
    } else {
      return fee;
    }
  };

  const notifyError = (msgErr) => {
    toast.error(msgErr, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      newestOnTop: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const deliveryCost = getShippingFee();
  const amountDiscount = getDiscount();
  const getTotal = () => {
    if (deliveryCost === "Không ship") return deliveryCost;
    return getSubTotal() + deliveryCost - amountDiscount;
  };

  const handleSubmitOrder = async () => {
    if (getTotal() === "Không ship") {
      notifyError("Không nhận ship ở địa chỉ này");
      return;
    }
    const orderDetails = cartItems.filter((item) => item.selected);
    if (orderDetails.length <= 0) {
      notifyError("Bạn chưa chọn đơn hàng!!!");
      return;
    }
    const district = districts.find((item) => item.code == districtsCode)?.name;
    const ward = wards.find((item) => item.code == wardsCode)?.name;
    const address = road + ", " + ward + ", " + district;
    const reqBody = {
      orderDetails,
      address,
      deliveryCost,
      amountDiscount,
    };
    const res = await axios.post("orders", reqBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    sendSystemNotification(res.data.id);
    orderDetails.forEach((item) => deleteCart(item.id));
    checkboxAll.current.checked = false;
    setAmountCart(cartItems.length - orderDetails.length);
    navigate("/order-detail/" + res.data.id);
  };

  const sendSystemNotification = async (orderId) => {
    if (stompClient) {
      const notification = {
        title: "Có đơn hàng mới",
        message: "Khách hàng " + user.username + " đã đặt hàng",
        type: "system",
        slug: `/orders/${orderId}`,
        toUser: {
          id: 1,
        },
      };
      const res = await axios.post("notification", notification, {
        headers: { Authorization: `Bearer ${token}` },
      });
      stompClient.send(
        "/app/system-notification",
        {},
        JSON.stringify(res.data)
      );
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/signin");
    }
    axios
      .get(`/menu`)
      .then((res) => {
        setMenu(res.data.content);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavbarMenu isHomePage={false}></NavbarMenu>
      <PagePresent title={"Cart"} />
      <Container>
        <Row className="mt-3 mobile-container">
          <Col lg={8} sm={12}>
            <Row
              style={{
                justifyContent: "start",
              }}
            >
              <Col lg={5} sm={12} style={{ padding: "0px" }}>
                <ul
                  className="shadow-box p-3"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "#CEB195",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  <li style={{ width: "50px" }}>
                    <input
                      ref={checkboxAll}
                      type="checkbox"
                      name=""
                      id="cart-checkbox-all"
                      onClick={(e) => {
                        if (e.target.checked) {
                          document
                            .querySelectorAll(`input[name="cartCheckbox"]`)
                            .forEach((checkbox) => {
                              checkbox.checked = true;
                            });
                          checkAll();
                        } else {
                          document
                            .querySelectorAll(`input[name="cartCheckbox"]`)
                            .forEach((checkbox) => {
                              checkbox.checked = false;
                            });
                          unCheckAll();
                        }
                      }}
                      defaultChecked={false}
                    />
                  </li>
                  <li style={{ width: "80px" }}>Product</li>
                  <li style={{ width: "80px" }}>Name</li>
                  <li style={{ width: "80px" }}>Price</li>
                </ul>
              </Col>
              <Col lg={5} sm={12} style={{ paddingLeft: 0 }}>
                <ul
                  className="shadow-box p-3"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#CEB195",
                    color: "white",
                    width: "425px",
                    fontWeight: "600",
                  }}
                >
                  <li style={{ width: "80px" }}>Size</li>
                  <li style={{ width: "102px" }}>Quantity</li>
                  <li style={{ width: "80px" }}>Option</li>
                </ul>
              </Col>
            </Row>

            <OrderDetailItems
              canEdit={true}
              type={"order-detail"}
              venue={"cart"}
              items={cartItems}
              checkboxAll={checkboxAll}
            ></OrderDetailItems>
          </Col>
          <Col
            lg={4}
            sm={12}
            className="faj-center mt-5 mb-5 shadow-box summary-box"
            style={{
              flexDirection: "column",
              rowGap: "16px",
              backgroundColor: "white",
              borderRadius: "15px",
              height: "450px",
            }}
          >
            <h3>Order Summary</h3>
            <ul
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                rowGap: "12px",
                fontWeight: "600",
              }}
            >
              <ul
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingLeft: 0,
                }}
              >
                <li>{`Subtotal (${
                  cartItems.filter((item) => item.selected).length
                } items) : `}</li>
                <li>{formatCostNumber(getSubTotal())}</li>
              </ul>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingLeft: 0,
                }}
              >
                <li>Address : </li>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <select
                    onChange={(e) => {
                      setDistrictsCode(e.target.value);
                    }}
                    name=""
                    id=""
                    value={districtsCode}
                  >
                    {districts?.map((item) => (
                      <option value={item.code}>{item.name}</option>
                    ))}
                  </select>
                  <select
                    onChange={(e) => {
                      setWardsCode(e.target.value);
                    }}
                    name=""
                    id=""
                    value={wardsCode}
                  >
                    {wards?.map((item) => (
                      <option value={item.code}>{item.name}</option>
                    ))}
                  </select>
                  <input
                    style={{
                      outline: "none",
                      border: "none",
                      borderBottom: "1px solid gray",
                    }}
                    type="text"
                    name=""
                    id=""
                    value={road}
                    onChange={(e) => setRoad(e.target.value)}
                  />
                </div>
              </ul>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingLeft: 0,
                }}
              >
                <li>Shipping Fee : </li>
                <li>{formatCostNumber(deliveryCost)}</li>
              </ul>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingLeft: 0,
                }}
              >
                <li>Discount : </li>
                <li>{formatCostNumber(amountDiscount)}</li>
              </ul>
              <ul
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingLeft: 0,
                }}
              >
                <li>Total : </li>
                <li>{formatCostNumber(getTotal())}</li>
              </ul>
            </ul>
            <Button
              style={{
                backgroundColor: "#CEB195",
                outline: "none",
                border: "0",
              }}
              onClick={() => {
                handleSubmitOrder();
              }}
            >
              Confirm
            </Button>
          </Col>
        </Row>
        <Col lg={12} className="mb-4">
          <h4 className="p-3">Suggested For You</h4>
          <Row className="mt-4" style={{ rowGap: "48px" }}>
            {menu.map((menu) => (
              <Col
                key={menu.id}
                lg={4}
                sm={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <CardBox menu={menu} />
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
      <Footer />
    </>
  );
};
export default CartPage;
