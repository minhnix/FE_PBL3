import React, { useEffect } from 'react'
import NavbarMenu from '../components/NavbarMenu'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import OrderDetailItems from '../components/OrderDetailItems'
import { useState } from 'react'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import { useNavigate } from 'react-router-dom'
import ImportAddFormManager from '../components/ImportAddFormManager'
import { AiOutlineArrowLeft } from 'react-icons/ai'
const ImportAddManagePage = () => {
    const navigate = useNavigate()
    const [provider, setProviderName] = useState("")
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

    const providerList = [
        {
            name: "Facebook"
        },
        {
            name: "Google"
        },
        {
            name: "Porn hub"
        },
    ]

    const temp = [
        {
            name: "Tea",
            count: "100",
            total: "100",
        },
        {
            name: "Milk",
            count: "500",
            total: "100",
        },
        {
            name: "Nhóc",
            count: "3",
            total: "Free",
        },


    ]
    useEffect(() => {

    }, [])
    const handleDeleteItem = () => {
        console.log("Deleted ")
    }


    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = temp.slice(indexOfFirstPost, indexOfLastPost)
    return (

        <div style={{ display: "flex" }} >
            <NavbarMenu isAdmin={true} currentManagePage={"Import"} position={"vertical"}></NavbarMenu>
            <div style={{ backgroundColor: "#1f1f1f", width: "100%", marginLeft: "220px", overflow: "hidden", minHeight: "100vh" }}>
                <h4 className='p-3' style={{ textAlign: "center", borderBottom: "1px solid #979797", color: "white" }}>Import</h4>
                <Row className='m-4'>
                    <Col lg={12} style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className='faj-center'>
                            <Button onClick={() => {
                                navigate("/import-management")
                            }} className='btn btn-primary' style={{ float: "left", minWidth: "100px", marginRight: "24px" }}><AiOutlineArrowLeft></AiOutlineArrowLeft></Button>
                            <Button onClick={() => {
                                navigate("/import-management/add")
                            }} className='btn btn-primary' style={{ float: "left", minWidth: "100px", marginRight: "24px" }}>Provider Name</Button>
                            <select name="" id="" onChange={e => setProviderName(e.target.value)}>
                                {providerList?.map(item => <option value={item.name}>{item.name}</option>)}
                            </select>
                        </div>
                        <Button onClick={() => {
                            setAction("Add")
                            setShowStatus(true)
                        }} className='btn btn-primary' style={{ float: "right", minWidth: "100px" }}>+</Button>
                    </Col>
                </Row>
                <Row className='faj-center'>
                    <Col lg={10} >
                        <ul className='p-3' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "#222e3c", color: "white", borderBottom: "1px solid white" }}>
                            <li style={{ width: "80px", textAlign: "center" }}>Name</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Count</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Price</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Option</li>
                        </ul>

                        {currentPosts?.map((item) => <OrderDetailItems handleDeleteItem={handleDeleteItem} handleGetData={handleGetData} type={'manager'} handleGetAction={handleGetAction} handleSetShowStatus={handleSetShowStatus} data={item} object={"import"} extend={"add"}></OrderDetailItems>)}
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
                <Row className='m-4 faj-center'>
                    <Col lg={12} className='m-4 faj-center'>
                        <Button onClick={() => {

                        }} className='btn btn-primary' style={{ minWidth: "100px" }}>Confirm</Button>
                    </Col>

                </Row>
                {showStatus && <ImportAddFormManager data={data} handleGetData={handleGetData} action={action} handleSetShowStatus={handleSetShowStatus} />}
            </div>
        </div >

    )
}

export default ImportAddManagePage

{/* <FormManager page={"Import-add"} data={data} handleGetData={handleGetData} action={action} handleSetShowStatus={handleSetShowStatus}></FormManager> */ }