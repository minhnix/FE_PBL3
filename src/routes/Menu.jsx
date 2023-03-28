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
const Menu = () => {
    const [type, setType] = useState("All")
    console.log(type)
    useEffect(() => {
        let items = document.querySelectorAll(".category-item")
        items.forEach(item => item.classList.contains(type) ? "" : item.classList.remove("active"))
        document.getElementById("meal " + type)?.parentElement.classList.add("active")
    }, [type])
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
                            <Col lg={4} sm={6} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
                            <Col lg={4} sm={6} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
                            <Col lg={4} sm={6} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
                            <Col lg={4} sm={6} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
                            <Col lg={4} sm={6} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
                        </Row>
                    </Col>
                </Row>
                <HomePageItems id={"contact"} title={"Contact Us"}></HomePageItems>
            </Container>
            <footer style={{ backgroundColor: "#B0906F" }}>
                <Row style={{ textAlign: "center" }}>
                    <Col lg={4} sm={12} className="p-5">

                        <Image src="FooterIcon.png"></Image>
                        <h1>MILK TEA POINT</h1>
                        <p>Our Business Is Always The Way You Like. We Don't Make Your Milk Tea. We Make Your Day. We’re Not Just A Business. We’re A Lifestyle.</p>
                    </Col>
                    <Col lg={4} sm={12} className="p-5">
                        <h1>Quick Links</h1>
                        <ul style={{ listStyle: "none" }}>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#about'>About Us</a></li>
                            <li><a href='#service'>Our Service</a></li>
                            <li><a href='#team'>Our Team</a></li>
                            <li><a href='#contact'>Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col lg={4} sm={12} className="p-5">
                        <h1>Contact Info</h1>
                        <ul style={{ listStyle: "none" }}>
                            <li><i class="bi bi-telephone"></i>+999 999 999</li>
                            <li><i class="bi bi-telephone"></i>+999 999 999</li>
                            <li><i class="bi bi-map"></i>54 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng</li>

                        </ul>
                    </Col>
                </Row>

            </footer>
        </>
    )
}

export default Menu