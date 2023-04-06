import React from 'react'
import NavbarMenu from '../components/NavbarMenu'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import OrderDetailItems from '../components/OrderDetailItems'
import { useState } from 'react'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import FormManager from '../components/FormManager'
import IngredientFormManager from '../components/IngredientFormManager'

const IngredientManagePage = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [showStatus, setShowStatus] = useState(false)
    const [action, setAction] = useState("")
    const [data, setData] = useState({})
    const [ingredientDetails, setIngredientDetails] = useState({})
    const handleSetShowStatus = (status) => {
        setShowStatus(status)
    }
    const handleGetAction = (action) => {
        setAction(action)
    }
    const handleGetData = (data) => {
        setData(data)
    }
    const handleGetIngredientDetail = () => {

        let ingredientData = []
        document.querySelectorAll(".ingredient").forEach(item => {
            let temp = []
            item.childNodes.forEach(item => temp.push(item.value))
            ingredientData.push({ ...temp })
        })
        setIngredientDetails(ingredientData)
    }
    const temp = [
        {
            name: 'Tea',
            price: "9999",
            unit: "Bag"
        },
        {
            name: 'Milk',
            price: "9999",
            unit: "Gram"
        },
        {
            name: 'Cafe',
            price: "9999",
            unit: "Nhoc"
        },
    ]
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = temp.slice(indexOfFirstPost, indexOfLastPost)
    return (

        <div style={{ display: "flex" }} >
            <NavbarMenu isAdmin={true} currentManagePage={"Ingredient"} position={"vertical"}></NavbarMenu>
            <div style={{ backgroundColor: "#1f1f1f", width: "100%", marginLeft: "220px", overflow: "hidden", minHeight: "100vh" }}>
                <h4 className='p-3' style={{ textAlign: "center", borderBottom: "1px solid #979797", color: "white" }}>Ingredient</h4>
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
                            <li style={{ width: "80px", textAlign: "center" }}>Product</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Name</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Price</li>
                            <li style={{ width: "80px", textAlign: "center" }}>Option</li>
                        </ul>
                        {currentPosts?.map((item) => <OrderDetailItems data={item} handleGetData={handleGetData} containImg={true} handleGetAction={handleGetAction} handleSetShowStatus={handleSetShowStatus} type={'manager'} object={"menu"}></OrderDetailItems>)}
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
                {showStatus && <IngredientFormManager ingredientDetails={ingredientDetails} handleGetData={handleGetData} handleGetIngredientDetail={handleGetIngredientDetail} data={data} action={action} handleSetShowStatus={handleSetShowStatus} />}
            </div>
        </div >

    )
}

export default IngredientManagePage

{/* <FormManager ingredientDetails={ingredientDetails} handleGetData={handleGetData} handleGetIngredientDetail={handleGetIngredientDetail} page={"Ingredient"} data={data} action={action} handleSetShowStatus={handleSetShowStatus}></FormManager> */ }