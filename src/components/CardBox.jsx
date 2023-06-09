import Card from "react-bootstrap/Card";
import "../styles/cardBox.css";
import { useState } from "react";
import { useCart } from "../Context/Cart.context";
import { useNavigate } from "react-router-dom";
function CardBox(props) {
  const extraPrice = {
    SIZE_S: 0,
    SIZE_M: 5000,
    SIZE_L: 8000,
    SIZE_XL: 15000,
  };
  const { addCart } = useCart();

  const [size, setSize] = useState("SIZE_S");
  const navigate = useNavigate();

  const getPrice = (originPrice, size) => {
    return originPrice + extraPrice[size];
  };

  return (
    <Card
      className={props.type ? "info" : "items"}
      style={{
        width: "18rem",
        boxShadow: "7px 4px 4px 0 rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "between",
      }}
    >
      <Card.Img
        style={{ height: "280px", objectFit: "contain", flexShrink: 0 }}
        variant="top"
        src={props.menu?.imageUrl ? props.menu?.imageUrl : "Card1.png"}
      />
      <Card.Body style={{ height: "calc(100 % -280px)" }}>
        {props.type === "info" ? (
          <Card.Text style={{ textAlign: "center" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        ) : (
          <Card.Text
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <h3>{props.menu?.name}</h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // marginTop: "auto",
                flexShrink: 0,
              }}
            >
              <select
                style={{
                  width: "40px",
                  textAlign: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
                name=""
                id=""
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                <option value="SIZE_S">S</option>
                <option value="SIZE_M">M</option>
                <option value="SIZE_L">L</option>
                <option value="SIZE_XL">XL</option>
              </select>
              <h4>Prices: {getPrice(props.menu.cost, size)} VNĐ</h4>
            </div>
          </Card.Text>
        )}
      </Card.Body>
      {!props.type && (
        <div
          className="item-box-hover"
          onClick={() => {
            const is = addCart({
              menuId: props.menu.id,
              quantity: 1,
              size,
            });
            is.then((res) => {
              if (!res) navigate("/signin");
            });
          }}
        >
          <div>🛒</div>
        </div>
      )}
    </Card>
  );
}

export default CardBox;
