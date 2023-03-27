import React from 'react'
import ImageSlider from './ImageSlider';
import NavbarMenu from './NavbarMenu';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import HomePageItems from './HomePageItems';
import "../styles/homePage.css"

const HomePage = () => {
    return (
        <>
            <NavbarMenu></NavbarMenu>
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

export default HomePage