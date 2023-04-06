import React from "react";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/esm/Image";
import { AiOutlineClose } from "react-icons/ai";
import OrderDetailItems from '../components/OrderDetailItems'
import { PaginationControl } from 'react-bootstrap-pagination-control'
const ImportFormManager = (props) => {
    return (
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
                style={{ position: "absolute", top: "0", right: "0", minWidth: "50px" }}
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
            <label style={{ color: "white" }} htmlFor="">Date</label>
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
                placeholder="Date"
                name=""
                id=""
                value={props.data?.date || ""}

            />
            <label style={{ color: "white" }} htmlFor="">Provider</label>
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
                placeholder="Provider"
                name=""
                id=""
                value={props.data?.provider || ""}

            />
            <label style={{ color: "white" }} htmlFor="">Total</label>
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
                type="number"
                placeholder="Total"
                value={props.data?.total || ""}
                name=""
                id=""

            />
            <label style={{ color: "white" }} htmlFor="">Items</label>
            {props.data?.items.map((item) => <ul className="faj-center" style={{ border: "1px solid white" }}>
                <li className="p-4" style={{ color: "white" }}>{item.name}</li>
                <li className="p-4" style={{ color: "white" }}>{item.count}</li>
                <li className="p-4" style={{ color: "white" }}>{item.price}</li>
            </ul>)}
        </div>
    );
};

export default ImportFormManager;