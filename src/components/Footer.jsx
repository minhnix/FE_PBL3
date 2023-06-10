import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/esm/Image";
const Footer = (props) => {
  return (
    <footer style={{ backgroundColor: "#B0906F" }}>
      <Row style={{ textAlign: "center", justifyContent: "space-around" }}>
        <Col lg={4} sm={12} className="p-5">
          <Image src="/FooterIcon.png"></Image>
          <h1>MILK TEA POINT</h1>
          <p>
            Our Business Is Always The Way You Like. <br></br> We Don't Make
            Your Milk Tea.<br></br> We Make Your Day. <br></br>We’re Not Just A
            Business.<br></br> We’re A Lifestyle.
          </p>
        </Col>
        {props.isHomePage && (
          <Col lg={4} sm={12} className="p-5">
            <h1>Quick Links</h1>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                justifyItems: "center",
                padding: 0,
              }}
            >
              <li
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <a href="/#home">Home</a>
              </li>
              <li
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <a href="/#about">About Us</a>
              </li>
              <li
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <a href="/#service">Our Service</a>
              </li>
              <li
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <a href="/#team">Our Team</a>
              </li>
              <li
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                <a href="/#contact">Contact Us</a>
              </li>
            </ul>
          </Col>
        )}
        <Col lg={4} sm={12} className="p-5">
          <h1>Contact Infomation</h1>
          <ul style={{ listStyle: "none" }}>
            <li>
              <i class="bi bi-telephone"></i>0989 8659 785
            </li>
            <li>
              <i class="bi bi-telephone"></i> 0236 3842 308
            </li>
            <li>
              <i class="bi bi-telephone"></i> 0236 3842 308
            </li>
            <li>
              <i class="bi bi-map"></i>54 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng
            </li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
