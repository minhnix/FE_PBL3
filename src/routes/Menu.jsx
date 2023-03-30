import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider';
import NavbarMenu from '../components/NavbarMenu';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import HomePageItems from '../components/HomePageItems';
import "../styles/homePage.css"
import "../styles/menu.css"
import CardBox from '../components/CardBox';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer from '../components/Footer';
const Menu = () => {
    const [type, setType] = useState("All")
    console.log(type)
    useEffect(() => {
        let items = document.querySelectorAll(".category-item")
        items.forEach(item => item.classList.contains(type) ? "" : item.classList.remove("active"))
        document.getElementById("meal " + type)?.parentElement.classList.add("active")
    }, [type])
    const temp = [
        {
            id: 1,
            name: "cc",
            type: "Drinks"
        },
        {
            id: 2,
            name: "cc2",
            type: "Foods"
        },
        {
            id: 3,
            name: "cc3",
            type: "Drinks"
        }
    ]
    return (
        <>
            <NavbarMenu isHomePage={false}></NavbarMenu>
            <ImageSlider></ImageSlider>
            <Container style={{ marginTop: "48px" }}>
                <Row className='p-3' style={{ backgroundColor: "white", boxShadow: "7px 4px 4px 0 rgba(0,0,0,0.25)", justifyContent: "center", alignItems: "center" }}>
                    <Col lg={6} sm={6}><span style={{ fontWeight: "bold" }}>All Products</span></Col>
                    <Col style={{ display: "flex", justifyContent: "flex-end" }} lg={6} sm={6}>
                        <InputGroup >
                            <Button variant="outline-secondary" id="button-addon1">
                                <i class="bi bi-search"></i>
                            </Button>
                            <Form.Control className='shadow-none' style={{ outline: "none" }}
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <h1 style={{ textAlign: "center", margin: "48px 0" }} >Our Products</h1>
                    <h3 style={{ textAlign: "center", marginBottom: "24px" }}>{type}</h3>
                    <Col lg={3} sm={12}>
                        <h2>Category</h2>
                        <div>
                            <div onClick={() => setType("All")} className='category-item active'>
                                <div id="meal All" >All</div>
                                <div>16</div>
                            </div>
                            <div onClick={() => setType("Drinks")} className='category-item'>
                                <div id="meal Drinks">Drinks</div>
                                <div>16</div>
                            </div>
                            <div onClick={() => setType("Foods")} className='category-item'>
                                <div id="meal Foods">Foods</div>
                                <div>16</div>
                            </div>
                        </div>

                    </Col>

                    <Col xl={9} sm={12}>
                        <Row className='mt-4' style={{ rowGap: "48px" }}>
                            {/* <Col lg={4} sm={6} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
                            <Col lg={4} sm={6} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
                            <Col lg={4} sm={6} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
                            <Col lg={4} sm={6} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
                            <Col lg={4} sm={6} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col> */}
                            {temp.map(item => type === "All" ? item.name : item.type === type ? item.name : null)
                            }
                        </Row>
                    </Col>
                </Row>
                <HomePageItems id={"contact"} title={"Contact Us"}></HomePageItems>
            </Container>
            <Footer isHomePage={false}></Footer>
        </>
    )
}

export default Menu