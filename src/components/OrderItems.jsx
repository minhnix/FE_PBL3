import React from 'react'
import Image from 'react-bootstrap/esm/Image'

const OrderItems = (props) => {
    return (
        <ul className='shadow-box p-3' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", border: "1px solid black" }}>
            <li><Image width={"80px"} height={"80px"} src={props.img}></Image></li>
            <li>{props.name}</li>
            {props.canEdit ? <li>+ {props.quantity} -</li> : <li>{props.quantity}</li>}
        </ul>
    )
}

export default OrderItems