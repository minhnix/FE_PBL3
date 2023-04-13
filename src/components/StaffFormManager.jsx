import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/esm/Image";
import { AiOutlineClose } from "react-icons/ai";
const StaffFormManager = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [shift, setShift] = useState("Morning");

  useEffect(() => {
    setFullName(props.data?.name);
    setEmail(props.data?.email);
    setPhone(props.data?.phone);
    setAddress(props.data?.address);
  }, []);

  return (
    <>
      <div
        className="faj-center flex-column"
        style={{
          width: "500px",
          minHeight: "700px",
          backgroundColor: "#1f1f1f",
          position: "fixed",
          top: "10%",
          left: "40%",
          borderRadius: "15px",
          borderLeft: "10px solid gray",
          borderRight: "10px solid gray",
          borderTop: "10px solid red",
          borderBottom: "10px solid red",
          zIndex: "999",
        }}
      >
        <Button
          onClick={() => {
            props.handleSetShowStatus(false);
            props.handleGetData({});
          }}
          className="btn btn-danger m-2"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            minWidth: "50px",
          }}
        >
          <AiOutlineClose />
        </Button>
        <Image
          src="/staffImg.png"
          roundedCircle
          width={150}
          height={150}
          className="mb-4 mt-4"
        ></Image>
        <input
          required
          className="m-2 p-2"
          style={{
            outline: "0",
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottom: "1px solid black",
            backgroundColor: "#222e3c",
            minWidth: "300px",
            color: "white",
          }}
          type="text"
          placeholder="Fullname"
          name=""
          id=""
          value={fullName || ""}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          required
          className="m-2 p-2"
          style={{
            outline: "0",
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottom: "1px solid black",
            backgroundColor: "#222e3c",
            minWidth: "300px",
            color: "white",
          }}
          type="email"
          placeholder="Email"
          name=""
          id=""
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          className="m-2 p-2"
          style={{
            outline: "0",
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottom: "1px solid black",
            backgroundColor: "#222e3c",
            minWidth: "300px",
            color: "white",
          }}
          type="text"
          placeholder="Phone"
          value={phone || ""}
          name=""
          id=""
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          required
          className="m-2 p-2"
          style={{
            outline: "0",
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderBottom: "1px solid black",
            backgroundColor: "#222e3c",
            minWidth: "300px",
            color: "white",
          }}
          type="text"
          placeholder="Address"
          value={address || ""}
          name=""
          id=""
          onChange={(e) => setAddress(e.target.value)}
        />
        <div
          className="m-2 p-2"
          style={{ border: "1px solid gray", borderRadius: "15px" }}
        >
          <label htmlFor="" style={{ marginRight: "24px", color: "white" }}>
            Shift
          </label>
          <select onChange={(e) => setShift(e.target.value)} name="" id="">
            <option value="Morning">Morning</option>
            <option selected value="Afternoon">
              Afternoon
            </option>
            <option value="Night">Night</option>
          </select>
        </div>
        {props.action === "Add" ? (
          <Button
            type="sumbit"
            className="btn btn-primary m-4"
            style={{ minWidth: "100px" }}
          >
            {props.action}
          </Button>
        ) : (
          <Button
            type="sumbit"
            className="btn btn-primary m-4"
            style={{ minWidth: "100px" }}
          >
            {props.action}
          </Button>
        )}
      </div>
    </>
  );
};

export default StaffFormManager;
