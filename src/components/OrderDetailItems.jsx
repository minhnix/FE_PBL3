import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import "../styles/orderDetailItem.css"
const OrderDetailItems = (props) => {
    const { items } = props
    console.log(items)
    if (props.type === "order-detail") {
        return (
            <>
                {items?.map(item => (
                    <>
                        <Row style={{ justifyContent: "center", borderBottom: "1px solid black" }} className='mb-2'>
                            <Col lg="6" sm={12} style={{ padding: "0px" }}>
                                <ul className='shadow-box p-3 mobile' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "white", padding: "16px 0" }}>
                                    {props.canEdit ?
                                        <>
                                            <li style={{ width: "50px" }}><input type="checkbox" name="" id="" /></li>
                                        </> : null
                                    }

                                    <li style={{ width: "80px" }}><img width={"80px"} height={"80px"} src={item.imgUrl}></img></li>
                                    <li style={{ width: "80px" }}>{item.name}</li>
                                    <li style={{ width: "80px" }}>20000</li>
                                </ul>
                            </Col>
                            <Col lg="6" sm={12} className='shadow-box p-3 mobile mb-3' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "white", width: "425px" }}>
                                <ul className="pagination">
                                    <li style={{ width: "80px" }} className="page-item">
                                        <button className='page-link'>S</button>
                                    </li>
                                </ul>
                                {props.canEdit ?
                                    <>
                                        <ul style={{ width: "102px" }} className="pagination">
                                            <li className="page-item">
                                                <button className='page-link'>+</button>
                                            </li>
                                            <li className="page-item">
                                                <button className='page-link'>{item.quantity}</button>
                                            </li>
                                            <li className="page-item">
                                                <button className='page-link'>-</button>
                                            </li>
                                        </ul> <ul style={{ width: "80px" }} className="pagination">
                                            <li className="page-item">
                                                <button className='page-link'><i class="bi bi-trash"></i></button>
                                            </li>
                                        </ul></> :
                                    <ul style={{ width: "80px" }} className="pagination">
                                        <li className="page-item">
                                            <button className='page-link'>{item.quantity}</button>
                                        </li>
                                    </ul>
                                }



                            </Col>



                        </Row>
                    </>
                ))
                }
            </>
        )
    }
    else if (props.type === "profile")
        return (
            <>
                <ul className='shadow-box p-3 m-2' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", border: "1px solid black", width: "80%" }}>
                    <li>{props.title}</li>
                    <li>{props.title}</li>
                    <li><Link to={`/order-detail/${props.title}`}><i class="bi bi-gear"></i></Link></li>
                </ul>
            </>
        )
}

export default OrderDetailItems