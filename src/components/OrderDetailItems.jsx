import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link, useNavigate } from "react-router-dom";
import "../styles/orderDetailItem.css";
import { BsEye, BsTrash } from "react-icons/bs";
import Image from "react-bootstrap/esm/Image";
import { MdSettings } from "react-icons/md";
import { useCart } from "../Context/Cart.context";
const OrderDetailItems = (props) => {
  const { items } = props;
  const { updateCart, deleteCart, setAmountCart, checkOne, unCheckOne } =
    useCart();

  const navigate = useNavigate();
  if (props.type === "order-detail") {
    return (
      <>
        {items?.map((item) => (
          <>
            <Row
              key={item.id}
              style={
                props.venue === "cart"
                  ? {
                      justifyContent: "start",
                    }
                  : {
                      marginLeft: "0",
                    }
              }
              className="mb-2"
            >
              <Col lg={5} sm={12} style={{ padding: "0px" }}>
                <ul
                  className="shadow-box p-3 mobile"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    backgroundColor: "#C8B6A2",
                    padding: "16px 0",
                    textAlign: "center",
                    height: "100px",
                    fontWeight: "600",
                  }}
                >
                  {props.canEdit ? (
                    <>
                      <li style={{ width: "50px" }}>
                        <input
                          type="checkbox"
                          name="cartCheckbox"
                          id={item.id}
                          onClick={(e) => {
                            if (!e.target.checked) {
                              unCheckOne(item.id);
                              props.checkboxAll.current.checked = false;
                            } else {
                              checkOne(item.id);
                              let allChecked = true;
                              document
                                .querySelectorAll(`input[name="cartCheckbox"]`)
                                .forEach((checkbox) => {
                                  if (!checkbox.checked) allChecked = false;
                                });
                              console.log(allChecked);
                              props.checkboxAll.current.checked = allChecked;
                            }
                          }}
                        />
                      </li>
                    </>
                  ) : null}
                  <li style={{ width: "80px" }}>
                    <img
                      width={"80px"}
                      height={"80px"}
                      src={item.imageUrl || "/Card1.png"}
                      alt="menu"
                    ></img>
                  </li>
                  <li style={{ width: "80px" }}>{item.name || item.menu}</li>
                  <li style={{ width: "80px" }}>{item.totalCost}</li>
                </ul>
              </Col>
              <Col
                lg={5}
                sm={12}
                className="shadow-box p-3 mobile mb-3"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#C8B6A2",
                  width: "425px",
                  height: "100px",
                }}
              >
                <ul className="pagination">
                  <li style={{ width: "80px" }} className="page-item">
                    <button className="page-link">
                      {item?.size?.split("_")[1] ||
                        item?.menuSize?.split("_")[1]}
                    </button>
                  </li>
                </ul>
                {props.canEdit ? (
                  <>
                    <ul style={{ width: "102px" }} className="pagination">
                      <li className="page-item">
                        <button
                          className="page-link"
                          onClick={() =>
                            updateCart({
                              id: item.id,
                              quantity: item.quantity + 1,
                            })
                          }
                        >
                          +
                        </button>
                      </li>
                      <li className="page-item">
                        <button className="page-link">{item.quantity}</button>
                      </li>
                      <li className="page-item">
                        <button
                          className="page-link"
                          onClick={() =>
                            updateCart({
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          }
                        >
                          -
                        </button>
                      </li>
                    </ul>{" "}
                    <ul style={{ width: "80px" }} className="pagination">
                      <li className="page-item">
                        <button
                          className="page-link"
                          onClick={() => {
                            deleteCart(item.id);
                            setAmountCart((prev) => prev - 1);
                          }}
                        >
                          <i class="bi bi-trash"></i>
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <ul style={{ width: "80px" }} className="pagination">
                    <li className="page-item">
                      <button className="page-link">{item.quantity}</button>
                    </li>
                  </ul>
                )}
              </Col>
            </Row>
          </>
        ))}
      </>
    );
  } else if (props.type === "profile")
    return (
      <>
        <ul
          className="shadow-box p-3 m-2"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "80%",
            borderRadius: "15px",
            backgroundColor: "#C8B6A2",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <li
            style={{
              minWidth: "20%",
              textAlign: "center",
            }}
          >
            {items.createdAt.slice(0, 10)}
          </li>
          <li
            style={{
              minWidth: "20%",
              textAlign: "center",
            }}
          >
            {items.totalCost}
          </li>
          <li
            style={{
              minWidth: "20%",
              textAlign: "center",
            }}
          >
            {items.status}
          </li>
          <li>
            <Link to={`/order-detail/${items.id}`}>
              <i class="bi bi-gear"></i>
            </Link>
          </li>
        </ul>
      </>
    );
  else if (props.type === "manager")
    return (
      <>
        {props.containImg ? (
          <ul
            className="p-3"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "white",
              color: "black",
              height: "56px",
            }}
          >
            <li
              style={{ width: "80px", fontWeight: "bold", textAlign: "center" }}
            >
              <Image rounded width={50} height={50} src="/Card1.png" />
            </li>
            <li
              style={{ width: "80px", fontWeight: "bold", textAlign: "center" }}
            >
              {props.data.name}
            </li>
            <li
              style={{ width: "80px", fontWeight: "bold", textAlign: "center" }}
            >
              {props.object === "staff" ? props.data.shift : props.data.price}
            </li>
            <li
              style={{ width: "80px", fontWeight: "bold", textAlign: "center" }}
            >
              <BsTrash style={{ marginRight: "24px" }} />
              <MdSettings
                onClick={() => {
                  props.handleGetAction("Submit");
                  props.handleSetShowStatus(true);
                  props.handleGetData(props.data);
                }}
                style={{}}
              />
            </li>
          </ul>
        ) : (
          <ul
            className="p-3"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "white",
              color: "black",
            }}
          >
            {props.object !== "import" ? (
              <>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {props.data.name}
                </li>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {props.data.date}
                </li>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {props.data.total}
                </li>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <BsEye
                    onClick={() => navigate(`/order-detail/${props.data.id}`)}
                    style={{}}
                  />
                </li>
              </>
            ) : props.extend !== "add" ? (
              <>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {props.data.date}
                </li>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {props.data.provider}
                </li>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {props.data.total}
                </li>
                {props.extend !== "add" ? (
                  <li
                    style={{
                      width: "80px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    <BsEye
                      onClick={() => {
                        props.handleGetAction("Submit");
                        props.handleSetShowStatus(true);
                        props.handleGetData(props.data);
                      }}
                      style={{}}
                    />
                  </li>
                ) : (
                  <li
                    style={{
                      width: "80px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    <BsTrash onClick={() => {}} style={{}} />
                  </li>
                )}
              </>
            ) : (
              <>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {props.data.name}
                </li>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {props.data.count}
                </li>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {props.data.total}
                </li>
                <li
                  style={{
                    width: "80px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <BsTrash
                    onClick={() => {
                      props.handleDeleteItem();
                    }}
                    style={{}}
                  />
                </li>
              </>
            )}
          </ul>
        )}
      </>
    );
  else if (props.type === "order")
    return (
      <>
        <ul
          className="p-3"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/orders/${props.data.id}`)}
        >
          <li
            style={{
              minWidth: "120px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.data.name}
          </li>
          <li
            style={{
              minWidth: "120px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.data.date}
          </li>
          <li
            style={{
              minWidth: "250px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.data.address}
          </li>
          <li
            style={{
              minWidth: "120px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.data.phone}
          </li>
        </ul>
      </>
    );
  else if (props.type === "staff-order-detail")
    return (
      <>
        <ul
          className="p-3"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <li
            style={{ width: "80px", fontWeight: "bold", textAlign: "center" }}
          >
            <Image rounded width={50} height={50} src={props.data.imgUrl} />
          </li>
          <li
            style={{
              width: "80px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.data.name}
          </li>
          <li
            style={{
              width: "80px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.data.total}
          </li>
          <li
            style={{
              width: "80px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.data.size}
          </li>
          <li
            style={{
              width: "80px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {props.data.quantity}
          </li>
        </ul>
      </>
    );
};

export default OrderDetailItems;
