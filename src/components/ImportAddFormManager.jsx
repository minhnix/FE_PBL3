import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/esm/Image";
import { AiOutlineClose } from "react-icons/ai";
const ImportAddFormManager = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0)
    useEffect(() => {
        setName(props.data?.name);
        setPrice(props.data?.price);
        setCount(props.data?.count);
    }, []);

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
                src="/menuImg.png"
                roundedCircle
                width={150}
                height={150}
                className="mb-4 mt-4"
            ></Image>

            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    props.handleSetShowStatus(false);
                    console.log(props.ingredientDetails);
                }}
            >
                <div className="faj-center flex-column">
                    <>
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
                            placeholder="Name"
                            name=""
                            id=""
                            value={name || ""}
                            onChange={(e) => setName(e.target.value)}
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
                            type="number"
                            placeholder="Count"
                            name=""
                            id=""
                            value={count || ""}
                            onChange={(e) => setCount(e.target.value)}
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
                            type="number"
                            placeholder="Price"
                            value={price || ""}
                            name=""
                            id=""
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </>
                    <Button
                        type="sumbit"
                        className="btn btn-primary m-4"
                        style={{ minWidth: "100px" }}
                    >
                        {props.action}
                    </Button>
                </div>
            </form >
        </div >
    );
};

export default ImportAddFormManager;

