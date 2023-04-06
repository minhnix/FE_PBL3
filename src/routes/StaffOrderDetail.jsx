import React from 'react'
import NavbarMenu from '../components/NavbarMenu'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import OrderDetailItems from '../components/OrderDetailItems'
import { useState } from 'react'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
const StaffOrderDetail = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(5)
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(id)
    const temp = [
        {
            id: 1,
            name: "Cafe",
            quantity: 1,
            size: "S",
            total: 20000,
            imgUrl: "/Card1.png"
        },
        {
            id: 2,
            name: "Cafe 2",
            quantity: 2,
            size: "M",
            total: 20000,
            imgUrl: "/Card1.png"
        },
        {
            id: 3,
            name: "Cafe 3",
            quantity: 4,
            size: "S",
            total: 20000,
            imgUrl: "/Card1.png"
        },
        {
            id: 4,
            name: "Cafe 4",
            quantity: 3,
            size: "XL",
            total: 20000,
            imgUrl: "/Card1.png"
        },
        {
            id: 5,
            name: "Cafe 5",
            quantity: 3,
            size: "XL",
            total: 20000,
            imgUrl: "/Card1.png"
        },
        {
            id: 6,
            name: "Cafe 6",
            quantity: 3,
            size: "S",
            total: 20000,
            imgUrl: "/Card1.png"
        },
    ]
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = temp.slice(indexOfFirstPost, indexOfLastPost)
    return (

        <div style={{ display: "flex" }} >
            <NavbarMenu currentManagePage={"Order"} position={"vertical"}></NavbarMenu>
            <div style={{ backgroundColor: "#1f1f1f", width: "100%", marginLeft: "250px", overflow: "hidden", minHeight: "100vh" }}>
                <h4 className='p-3' style={{ textAlign: "center", borderBottom: "1px solid #979797", color: "white" }}>Order</h4>
                <Row className='m-4'>
                    <Col lg={12}>
                        <Button onClick={() => {
                            navigate("/")
                        }} className='btn btn-primary' style={{ float: "left", minWidth: "100px" }}><AiOutlineArrowLeft></AiOutlineArrowLeft></Button>
                    </Col>
                </Row>
                <Row className='faj-center' style={{ marginTop: "76px" }}>
                    <Col lg={10} >
                        <ul className='p-3' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "#222e3c", color: "white", borderBottom: "1px solid white" }}>
                            <li style={{ width: "80px", textAlign: "center" }}>Product</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Name</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Total</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Size</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Quantity</li>
                        </ul>

                        {currentPosts?.map((item) => <OrderDetailItems type={"staff-order-detail"} data={item}></OrderDetailItems>)}
                        <PaginationControl
                            page={currentPage}
                            between={3}
                            total={temp.length}
                            limit={postsPerPage}
                            changePage={(currentPage) => {
                                setCurrentPage(currentPage);
                            }}
                            last={true}
                            ellipsis={0}
                        />
                    </Col>
                </Row>
                <h3 className='p-4' style={{ color: "white" }}>Total : 140.000</h3>
                <div className='p-4'>
                    <Button style={{ marginRight: "24px" }} className='btn btn-info'>Nhận Đơn</Button>
                    <Button className='btn btn-success'>Thanh Toán</Button>
                </div>
            </div>
        </div >

    )
}

export default StaffOrderDetail