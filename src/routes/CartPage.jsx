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
const CartPage = () => {
  const [menu, setMenu] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [districtsCode, setDistrictsCode] = useState("490");
  const [wardsCode, setWardsCode] = useState("20194");
  const { cartItems, unCheckAll, checkAll, deleteCart, setAmountCart } =
    useCart();

  const checkboxAll = useRef();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("https://provinces.open-api.vn/api/p/48?depth=2")
      .then((response) => {
        setDistricts(response.data.districts);
      });

    axios
      .get(`https://provinces.open-api.vn/api/d/${districtsCode}?depth=2`)
      .then((response) => {
        setWards(response.data.wards);
      });
  }, [districtsCode]);

  const getSubTotal = () => {
    return cartItems.reduce(
      (total, item) => (item.selected ? total + item.totalCost : total),
      0
    );
  };

  const getDiscount = () => {
    if (cartItems.length >= 5) {
      return 5000;
    }
    return 2000;
  };

  const getShippingFee = () => {
    return Number(
      extraDeliveryCost[districtsCode][0].hasOwnProperty(wardsCode)
        ? extraDeliveryCost[districtsCode][0][wardsCode]
        : extraDeliveryCost[districtsCode][0][
            Object.keys(extraDeliveryCost[districtsCode][0])[0]
          ]
    );
  };

  const deliveryCost = getShippingFee();
  const amountDiscount = getDiscount();
  const getTotal = () => {
    return getSubTotal() + deliveryCost - amountDiscount;
  };

  const handleSubmitOrder = async () => {
    const orderDetails = cartItems.filter((item) => item.selected);
    if (orderDetails.length <= 0) return;
    const reqBody = {
      orderDetails,
      address: "test",
      deliveryCost,
      amountDiscount,
    };
    const res = await axios.post("orders", reqBody, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    orderDetails.forEach((item) => deleteCart(item.id));
    checkboxAll.current.checked = false;
    setAmountCart(cartItems.length - orderDetails.length);
    navigate("/order-detail/" + res.data.id);
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
                <li>{`Subtotal (${cartItems.length} items) : `}</li>
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
                      let index = e.target.selectedIndex;
                      console.log(e.target[index].text);
                      setDistrictsCode(e.target.value);
                    }}
                    name=""
                    id=""
                  >
                    {districts?.map((item) => (
                      <option value={item.code}>{item.name}</option>
                    ))}
                  </select>
                  <select
                    onChange={(e) => {
                      let index = e.target.selectedIndex;
                      console.log(e.target[index].text);
                      setWardsCode(e.target.value);
                    }}
                    name=""
                    id=""
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
              onClick={() => handleSubmitOrder()}
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
