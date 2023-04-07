import Card from "react-bootstrap/Card";
import "../styles/cardBox.css";
import { useState } from "react";
function CardBox(props) {
  const extraPrice = {
    S: 0,
    M: 5000,
    L: 8000,
    XL: 15000,
  };

  const [size, setSize] = useState("S");

  const getPrice = (originPrice, size) => {
    return originPrice + extraPrice[size];
  };

  return (
    <Card
      className={props.type ? "info" : "items"}
      style={{ width: "18rem", boxShadow: "7px 4px 4px 0 rgba(0,0,0,0.25)" }}
    >
      <Card.Img
        variant="top"
        src={props.menu?.imageUrl ? props.menu?.imageUrl : "Card1.png"}
      />
      <Card.Body>
        {props.type === "info" ? (
          <Card.Text style={{ textAlign: "center" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        ) : (
          <Card.Text style={{ textAlign: "center" }}>
            <h3>{props.menu?.name}</h3>
            <select name="" id="" onChange={(e) => setSize(e.target.value)}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <h4>Prices: {getPrice(props.menu.cost, size)} VNĐ</h4>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardBox;
