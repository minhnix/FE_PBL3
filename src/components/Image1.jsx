import React from "react";
import OrderDetailItems from "./OrderDetailItems";

const Image1 = ({ images, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ul className="list-group mb-4 faj-center" style={{ display: "flex" }}>
      {images?.map((image) => (
        <>
          <OrderDetailItems type={"profile"} items={image} />
        </>
      ))}
    </ul>
  );
};

export default Image1;
