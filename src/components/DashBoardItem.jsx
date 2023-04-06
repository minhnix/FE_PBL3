import React from 'react'
import { AiOutlineCreditCard, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsWallet } from "react-icons/bs";
import { BiPackage } from "react-icons/bi"
const DashBoardItem = (props) => {
    return (
        <>
            <div className='faj-center p-5' style={{ borderRadius: "15px", backgroundColor: "#222e3c", width: "400px", justifyContent: "space-around", border: "2px solid white" }}>
                <div className='p-3' style={{ border: "2px solid white", borderRadius: "50%", backgroundColor: "#1f1f1f" }}>
                    {props.title === "Export" && <BsWallet style={{ fontSize: "26px" }}></BsWallet>}
                    {props.title === "Import" && <AiOutlineShoppingCart style={{ fontSize: "26px" }}></AiOutlineShoppingCart>}
                    {props.title === "Orders" && <BiPackage style={{ fontSize: "26px" }}> </BiPackage>}
                </div>
                <div className="" style={{ marginLeft: "48px" }}>
                    <h4>{props.title}</h4>
                    {props.title === "Orders" ? <p style={{ textAlign: "center" }}>{props.data}</p> : <p style={{ textAlign: "center" }}>{props.data + " VND"}</p>}
                </div>
            </div >
        </>
    )
}

export default DashBoardItem