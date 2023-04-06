import React from 'react'
import NavbarMenu from '../components/NavbarMenu'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import OrderDetailItems from '../components/OrderDetailItems'
import { useState } from 'react'
import { PaginationControl } from 'react-bootstrap-pagination-control'
const BillManagePage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const temp = [
        {
            id: "1",
            name: 'Thuong',
            date: "01/06/2003",
            total: "9999",
        },
        {
            id: "2",
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            id: "3",
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            id: "10",
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Vinh',
            date: "08/08/2003",
            total: "9999",
        },
        {
            name: 'Minh',
            date: "01/05/2003",
            total: "9999",
        }
    ]
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = temp.slice(indexOfFirstPost, indexOfLastPost)
    return (

        <div style={{ display: "flex" }} >
            <NavbarMenu isAdmin={true} currentManagePage={"Bill"} position={"vertical"}></NavbarMenu>
            <div style={{ backgroundColor: "#1f1f1f", width: "100%", marginLeft: "220px", overflow: "hidden", minHeight: "100vh" }}>
                <h4 className='p-3' style={{ textAlign: "center", borderBottom: "1px solid #979797", color: "white" }}>Bill</h4>

                <Row className='faj-center' style={{ marginTop: "76px" }}>
                    <Col lg={10} >
                        <ul className='p-3' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "#222e3c", color: "white", borderBottom: "1px solid white" }}>
                            <li style={{ width: "80px", textAlign: "center" }}>Name</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Date</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Total</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Option</li>
                        </ul>

                        {currentPosts?.map((item) => <OrderDetailItems type={'manager'} data={item}></OrderDetailItems>)}
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
            </div>
        </div >

    )
}

export default BillManagePage