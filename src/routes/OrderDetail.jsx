import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import NavbarMenu from '../components/NavbarMenu'
import Footer from '../components/Footer'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import OrderDetailItems from '../components/OrderDetailItems'
import { PaginationControl } from 'react-bootstrap-pagination-control';
const OrderDetail = () => {
    const { id } = useParams()
    const temp = [
        {
            id: 1,
            name: "Cafe",
            quantity: 1,
            imgUrl: "/Card1.png"
        },
        {
            id: 2,
            name: "Cafe 1",
            quantity: 2,
            imgUrl: "/Card1.png"
        },
        {
            id: 3,
            name: "Cafe 2",
            quantity: 3,
            imgUrl: "/Card1.png"
        },
        {
            id: 4,
            name: "Cafe 3",
            quantity: 2,
            imgUrl: "/Card1.png"
        },
        {
            id: 5,
            name: "Cafe 4",
            quantity: 2,
            imgUrl: "/Card1.png"
        }
    ]
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(2)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = temp.slice(indexOfFirstPost, indexOfLastPost)
    useEffect(() => {
        localStorage.getItem("currentOrderPage") ? setCurrentPage(localStorage.getItem("currentOrderPage")) : setCurrentPage(1)
    })

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    if (id < 10) {
        return (
            <>
                <NavbarMenu></NavbarMenu>
                <Container className='mt-4' style={{ height: "auto", display: "flex", justifyContent: "center", flexDirection: "column", paddingTop: "70px" }}>
                    <Row>
                        <Col lg={6} sm={12} className="faj-center mb-4" >
                            <div className='shadow-box faj-center p-4' style={{ backgroundColor: "white", borderRadius: "15px", flexDirection: "column", width: "100%", height: "100%", justifyContent: "normal" }}>
                                <h3 style={{ justifyContent: "self-start" }}>Order Summary</h3>
                                <div style={{ alignSelf: "self-start" }}>
                                    <ul style={{ display: "flex", flexDirection: "column", rowGap: "16px" }}>
                                        <li>Date :</li>
                                        <li>Subtotal :</li>
                                        <li>Shipping Fee :</li>
                                        <li>Discount :</li>
                                        <li>Total : </li>
                                    </ul>
                                </div>
                            </div></Col>
                        <Col lg={6} sm={12} className="faj-center" >
                            <div className='shadow-box faj-center p-4' style={{ backgroundColor: "white", borderRadius: "15px", flexDirection: "column", width: "100%", height: "100%", justifyContent: "normal" }}>
                                <h3 style={{ justifySelf: "self-start" }}>Shipping Infomation</h3>
                                <div style={{ alignSelf: "self-start", display: "flex", justifyContent: "space-between", height: "100%" }}>
                                    <ul style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", rowGap: "16px" }}>
                                        <li>Fullname :</li>
                                        <li>Email :</li>
                                        <li>Phone Lumber :</li>
                                        <li>Address :</li>
                                    </ul>
                                </div>
                            </div></Col>
                    </Row>
                    <Row className="mt-4 mb-4">
                        <Col lg={12} className="faj-center">
                            <div className='shadow-box faj-center p-4' style={{ backgroundColor: "#f5f5f5", borderRadius: "15px", flexDirection: "column", width: "100%" }}>
                                <h3>Order Items</h3>
                                <div className='order-detail-box' style={{ width: "100%" }} >
                                    <OrderDetailItems canEdit={false} type={"order-detail"} items={currentPosts}></OrderDetailItems>
                                    {/* <PaginationComponent postsPerPage={postsPerPage} totalPosts={temp.length} paginate={paginate}></PaginationComponent> */}

                                </div>
                                <div className='faj-center'>
                                    <PaginationControl
                                        page={currentPage}
                                        between={4}
                                        total={temp.length}
                                        limit={2}
                                        changePage={(currentPage) => {
                                            setCurrentPage(currentPage);
                                            localStorage.setItem('currentOrderPage', currentPage);
                                        }}
                                        ellipsis={4}
                                    />
                                </div>
                            </div></Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </>
        )
    }

    return (
        <div>
            <p>Vinh iu Vi</p>
        </div>
    )

}

export default OrderDetail
