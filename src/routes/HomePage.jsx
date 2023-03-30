import React, { useState } from 'react'
import ImageSlider from '../components/ImageSlider';
import NavbarMenu from '../components/NavbarMenu';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import HomePageItems from '../components/HomePageItems';
import "../styles/homePage.css"
import Footer from '../components/Footer';

const HomePage = () => {
    const [text, setText] = useState("")


    return (
        <>
            <NavbarMenu isHomePage={true}></NavbarMenu>
            <ImageSlider></ImageSlider>
            <Container >
                <Row id="about" style={{ padding: "48px 0", borderBottom: "2px solid black" }}>
                    <h1 style={{ alignSelf: "center", textAlign: "center" }}>About Us</h1>
                    <Col lg={6} sm={12} style={{ display: "flex", justifyContent: "center" }}>
                        <Image src="/img.png" width={"460px"} height="400px">
                        </Image>
                    </Col>
                    <Col lg={6} sm={12} style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "24px 0" }}>
                        <h1>Milk tea The Way It Was Meant To Be.</h1>
                        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                        <p>
                            Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s,Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s,Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s,Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s,
                        </p>
                    </Col>
                </Row>
                <HomePageItems id={"service"} title={"Our Service"} ></HomePageItems>
                <HomePageItems id={"team"} title={"Our Team"}></HomePageItems>
                <HomePageItems id={"contact"} title={"Contact Us"}></HomePageItems>
            </Container>
            <Footer isHomePage={true}></Footer>
        </>
    )
}

export default HomePage