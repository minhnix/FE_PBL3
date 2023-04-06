import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/esm/Image";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import IngredientInput from "./IngredientInput";
const FormManager = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [shift, setShift] = useState("Morning");
    const [ingredient, setIngredient] = useState(0);
    const [name, setName] = useState("");
    const [type, setType] = useState("Drink");
    const [size, setSize] = useState("S");
    const [unit, setUnit] = useState("");
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0)
    useEffect(() => {
        setFullName(props.data?.name);
        setEmail(props.data?.email);
        setPrice(props.data?.price);
        setPhone(props.data?.phone);
        setAddress(props.data?.address);
        setName(props.data?.name);
        setPrice(props.data?.price);
        setUnit(props.data?.unit);
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
            {props.page === "Staff" ? (
                <Image
                    src="/staffImg.png"
                    roundedCircle
                    width={150}
                    height={150}
                    className="mb-4 mt-4"
                ></Image>
            ) : (
                <Image
                    src="/menuImg.png"
                    roundedCircle
                    width={150}
                    height={150}
                    className="mb-4 mt-4"
                ></Image>
            )}
            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    props.handleSetShowStatus(false);
                    console.log(props.ingredientDetails);
                }}
            >
                <div className="faj-center flex-column">
                    {props.page === "Staff" ? (
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
                                <label
                                    htmlFor=""
                                    style={{ marginRight: "24px", color: "white" }}
                                >
                                    Shift
                                </label>
                                <select
                                    onChange={(e) => setShift(e.target.value)}
                                    name=""
                                    id=""
                                >
                                    <option value="Morning">Morning</option>
                                    <option value="Afternoon">Afternoon</option>
                                    <option value="Night">Night</option>
                                </select>
                            </div>
                        </>
                    ) : props.page !== "Ingredient" && props.page !== "Import" && props.page !== "Import-add" ? (
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
                    ) : (
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
                            {props.page !== "Import-add" ? (
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
                                        placeholder="Unit"
                                        name=""
                                        id=""
                                        value={unit || ""}
                                        onChange={(e) => setUnit(e.target.value)}
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
                            ) : (
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
                                        type="number"
                                        placeholder="Count"
                                        name=""
                                        id=""
                                        value={unit || ""}
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
                            )
                            }
                        </>
                    )}
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
            </form>
        </div>
    );
};

export default FormManager;
