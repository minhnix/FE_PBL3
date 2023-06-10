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
    // <Card
    //   className={props.type ? "info" : "items"}
    //   style={{
    //     width: "18rem",
    //     boxShadow: "7px 4px 4px 0 rgba(0,0,0,0.25)",
    //     height: "100%",
    //   }}
    // >
    //   <Card.Img
    //     style={{ height: "280px", objectFit: "contain", flexShrink: 0 }}
    //     variant="top"
    //     src={props.menu?.imageUrl ? props.menu?.imageUrl : "Card1.png"}
    //   />
    //   <Card.Body style={{ flex: 1 }}>
    //     {props.type === "info" ? (
    //       <Card.Text style={{ textAlign: "center" }}>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //     ) : (
    //       <Card.Text style={{ display: "flex", flexDirection: "column" }}>
    //         <div style={{}}>
    //           <h4>{props.menu?.name}</h4>
    //         </div>
    //         <div style={{}}>
    //           <select
    //             style={{}}
    //             name=""
    //             id=""
    //             onChange={(e) => {
    //               setSize(e.target.value);
    //             }}
    //           >
    //             <option value="SIZE_S">S</option>
    //             <option value="SIZE_M">M</option>
    //             <option value="SIZE_L">L</option>
    //             <option value="SIZE_XL">XL</option>
    //           </select>
    //           <h4>Prices: {getPrice(props.menu.cost, size)} VNĐ</h4>
    //         </div>
    //       </Card.Text>
    //     )}
    //   </Card.Body>
    //   {!props.type && (
    //     <div
    //       className="item-box-hover"
    //       onClick={() => {
    //         const is = addCart({
    //           menuId: props.menu.id,
    //           quantity: 1,
    //           size,
    //         });
    //         is.then((res) => {
    //           if (!res) navigate("/signin");
    //         });
    //       }}
    //     >
    //       <div>🛒</div>
    //     </div>
    //   )}
    // </Card>
    <div
      className={props.type ? "info" : "items"}
      style={{
        width: "18rem",
        boxShadow: "7px 4px 4px 0 rgba(0,0,0,0.25)",
        height: "100%",
        background: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {props.type === "info" ? (
        <img
          style={{ height: "280px", objectFit: "cover", flexShrink: 0 }}
          variant="top"
          src={props.items?.image ? props.items?.image : "staffImg.png"}
          alt=""
        />
      ) : (
        <img
          style={{ height: "280px", objectFit: "contain", flexShrink: 0 }}
          variant="top"
          src={props.menu?.imageUrl ? props.menu?.imageUrl : "Card1.png"}
          alt=""
        />
      )}
      {/* <img
        style={{ height: "280px", objectFit: "contain", flexShrink: 0 }}
        variant="top"
        src={props.menu?.imageUrl ? props.menu?.imageUrl : "Card1.png"}
        alt=""
      /> */}
      <div
        style={{
          display: "flex",
          width: "100%",
          flex: 1,
          textAlign: "center",
          background: "rgb(200, 182, 162)",
        }}
      >
        {props.type === "info" ? (
          <h6 style={{ textAlign: "center", margin: "auto" }}>
            {props.items.title}
          </h6>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginTop: "8px",
            }}
          >
            <div style={{ padding: "4px 8px" }}>
              <h4>{props.menu?.name}</h4>
            </div>
            <div style={{ marginTop: "auto" }}>
              <select
                style={{
                  margin: "0px 4px",
                  padding: "4px",
                  borderRadius: "4px",
                  textWeight: "bold",
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
              <h4 style={{ margin: "8px 0px", padding: "4px 8px" }}>
                Prices: {getPrice(props.menu.cost, size)} VNĐ
              </h4>
            </div>
          </div>
        )}
      </div>
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
    </div>
  );
}

export default CardBox;
