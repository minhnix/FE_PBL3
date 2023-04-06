import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/esm/Image";
import { AiOutlineClose } from "react-icons/ai";
import IngredientInput from "./IngredientInput";
const MenuFormManager = (props) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [ingredient, setIngredient] = useState(0);
    const [type, setType] = useState("Drink");
    useEffect(() => {
        setName(props.data?.name);
        setPrice(props.data?.price);
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
                        <div
                            className="m-2 p-2 faj-center"
                            style={{ border: "1px solid gray", borderRadius: "15px" }}
                        >
                            <label
                                htmlFor=""
                                style={{ marginRight: "24px", color: "white", width: "auto" }}
                            >
                                Upload Item Image
                            </label>
                            <input type="file" style={{ width: "100px" }} />
                        </div>
                        <select onChange={(e) => setType(e.target.value)} name="" id="">
                            <option value="Drink">Drink</option>
                            <option value="Food">Food</option>
                        </select>
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
                            value={name || ""}
                            name=""
                            id=""
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
                            placeholder="Amount of ingredients"
                            name=""
                            id=""
                            onChange={(e) => setIngredient(e.target.value)}
                        />
                        {ingredient | (ingredient > 1) && (
                            <div
                                className="p-3"
                                style={{
                                    maxHeight: "200px",
                                    overflowY: "scroll",
                                    border: "1px solid white",
                                    borderRadius: "15px",
                                }}
                            >
                                <IngredientInput ingredient={ingredient} />
                                <Button
                                    className="btn btn-primary"
                                    onClick={() => props.handleGetIngredientDetail()}
                                >
                                    Apply
                                </Button>
                            </div>
                        )}

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
            </form >
        </div >
    );
};

export default MenuFormManager;

