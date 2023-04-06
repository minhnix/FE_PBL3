import React from 'react'
import NavbarMenu from '../components/NavbarMenu'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import OrderDetailItems from '../components/OrderDetailItems'
import { useState } from 'react'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import StaffFormManager from '../components/StaffFormManager'
const StaffManagePage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [showStatus, setShowStatus] = useState(false)
    const [action, setAction] = useState("")
    const [data, setData] = useState({})
    const handleSetShowStatus = (status) => {
        setShowStatus(status)
    }
    const handleGetAction = (action) => {
        setAction(action)
    }
    const handleGetData = (data) => {
        setData(data)
    }
    const temp = [
        {
            name: 'Thuong',
            email: "hackerVip@14sk.net",
            shift: "Day",
            phone: "+999999999",
            address: "12 Ngo Si Lien"
        },
        {
            name: 'Vinh',
            email: "hackerVip@14sk.net",
            shift: "Day",
            phone: "+999999999",
            address: "12 Ngo Si Lien"
        },
        {
            name: 'Minh',
            email: "hackerVip@14sk.net",
            shift: "Day",
            phone: "+999999999",
            address: "12 Ngo Si Lien"
        },
        {
            name: 'Linh',
            email: "hackerVip@14sk.net",
            shift: "Day",
            phone: "+999999999",
            address: "12 Ngo Si Lien"
        },

    ]
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = temp.slice(indexOfFirstPost, indexOfLastPost)
    return (

        <div style={{ display: "flex" }} >
            <NavbarMenu isAdmin={true} currentManagePage={"Staff"} position={"vertical"}></NavbarMenu>
            <div className={`${showStatus ? "screen-blur" : ""}`} style={{ backgroundColor: "#1f1f1f", width: "100%", marginLeft: "250px", overflow: "hidden", minHeight: "100vh" }}>
                <h4 className='p-3' style={{ textAlign: "center", borderBottom: "1px solid #979797", color: "white" }}>Staff</h4>
                <Row className='m-4'>
                    <Col lg={12}>
                        <Button onClick={() => {
                            setAction("Add")
                            setShowStatus(true)
                        }} className='btn btn-primary' style={{ float: "right", minWidth: "100px" }}>+</Button>
                    </Col>
                </Row>
                <Row className='faj-center'>
                    <Col lg={10} >
                        <ul className='p-3' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "#222e3c", color: "white", borderBottom: "1px solid white" }}>
                            <li style={{ width: "80px", textAlign: "center" }}>Image</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Name</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Shift</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Option</li>
                        </ul>

                        {currentPosts?.map((item) => <OrderDetailItems handleGetData={handleGetData} containImg={true} type={'manager'} handleGetAction={handleGetAction} handleSetShowStatus={handleSetShowStatus} data={item} object={"staff"}></OrderDetailItems>)}
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
            {showStatus && <StaffFormManager data={data} handleGetData={handleGetData} action={action} handleSetShowStatus={handleSetShowStatus} />}
        </div >

    )
}

export default StaffManagePage

{/* <FormManager page={"Staff"} data={data} handleGetData={handleGetData} action={action} handleSetShowStatus={handleSetShowStatus}></FormManager> */ }