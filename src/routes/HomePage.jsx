import React, { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import NavbarMenu from "../components/NavbarMenu";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";
import HomePageItems from "../components/HomePageItems";
import "../styles/homePage.css";
import Footer from "../components/Footer";

const HomePage = () => {
  const [text, setText] = useState("");
  const services = [
    {
      image: "./sv1.jpg",
      title: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h5 style={{ margin: "16px 8px" }}>
            Space creates privacy, comfort for everyone
          </h5>
        </div>
      ),
    },
    {
      image: "./sv4.png",
      title: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h5 style={{ margin: "16px 8px" }}>Fast delivery, friendly staff</h5>
        </div>
      ),
    },
    {
      image: "./sv2.jpg",
      title: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h5 style={{ margin: "16px 8px" }}>
            Enthusiastic staff, dedicated to work
          </h5>
        </div>
      ),
    },
  ];
  const teams = [
    {
      image: "./t1.jpg",
      title: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ margin: "4px 8px" }}>BARTENDER</h3>
          <h5 style={{ margin: "16px 8px" }}>
            Creating delicious food is our mission
          </h5>
        </div>
      ),
    },
    {
      image: "./t2.jpg",
      title: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ margin: "4px 8px" }}>STAFF</h3>
          <h5 style={{ margin: "16px 8px" }}>
            Success is when guests feel comfortable when enjoying the food here
          </h5>
        </div>
      ),
    },
    {
      image: "./t3.png",
      title: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h3 style={{ margin: "4px 8px" }}>Shipper</h3>{" "}
          <h5 style={{ margin: "16px 8px" }}>
            Enthusiastic staff, dedicated to work
          </h5>
        </div>
      ),
    },
  ];
  const contacts = [
    {
      image: "./phone.png",
      title: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ margin: "8px 8px" }}>0989 8659 785 </p>
          <p style={{ margin: "8px 8px" }}>0236 3842 308</p>
          <p style={{ margin: "8px 8px" }}>0236 3842 308</p>
        </div>
      ),
    },
    {
      image: "./clock.png",
      title: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h5 style={{ margin: "8px 8px" }}>7h - 12h</h5>
          <h5 style={{ margin: "8px 8px" }}>12h - 18h</h5>
          <h5 style={{ margin: "8px 8px" }}>18h - 24h</h5>
        </div>
      ),
    },
    {
      image: "./map.png",
      title: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ margin: "8px 8px" }}>54 Nguyễn Lương Bằng </p>
          <p style={{ margin: "8px 8px" }}>Hòa Khánh Bắc</p>
          <p style={{ margin: "8px 8px" }}>Liên Chiểu</p>
        </div>
      ),
    },
  ];
  return (
    <>
      <NavbarMenu isHomePage={true}></NavbarMenu>
      <ImageSlider></ImageSlider>
      <Container>
        <Row
          id="about"
          style={{ padding: "48px 0", borderBottom: "2px solid #A4907C" }}
        >
          <h1 style={{ alignSelf: "center", textAlign: "center" }}>About Us</h1>
          <Col
            lg={6}
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Image src="/img.png" width={"460px"} height="400px"></Image>
          </Col>
          <Col
            lg={6}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: "24px 0",
            }}
          >
            <h1>Our Drinks Are All About Authenticity And Quality.</h1>
            <h3>It Has Always Been And It Always Will Be.</h3>
            <p style={{ fontWeight: "500" }}>
              We are passionate about sourcing the finest ingredients, blending
              them perfectly and soaking them carefully before brewing and
              serving them with a smile, We are passionate about sourcing the
              finest ingredients, blending them perfectly and soaking them
              carefully before brewing and serving them with a smile. We are
              passionate about sourcing the finest ingredients, blending them
              perfectly and soaking them carefully before brewing and serving
              them with a smile. We are passionate about sourcing the finest
              ingredients, blending them perfectly and soaking them carefully
              before brewing and serving them with a smile.
            </p>
          </Col>
        </Row>
        <HomePageItems
          id={"service"}
          title={"Our Service"}
          contents={services}
        ></HomePageItems>
        <HomePageItems
          id={"team"}
          title={"Our Team"}
          contents={teams}
        ></HomePageItems>
        <HomePageItems
          id={"contact"}
          title={"Contact Us"}
          contents={contacts}
        ></HomePageItems>
      </Container>
      <Footer isHomePage={true}></Footer>
    </>
  );
};

export default HomePage;
