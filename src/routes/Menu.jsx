import React, { useEffect, useState } from "react";
import ImageSlider from "../components/ImageSlider";
import NavbarMenu from "../components/NavbarMenu";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePageItems from "../components/HomePageItems";
import "../styles/homePage.css";
import "../styles/menu.css";
import CardBox from "../components/CardBox";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Footer from "../components/Footer";
import { axios } from "../api/config";
import useDebounce from "../hooks/useDebounce";
const Menu = () => {
  const [type, setType] = useState("All");
  const [menu, setMenu] = useState([]);
  const [search, setSearch] = useState("");

  const getCid = {
    Food: 1,
    Drink: 2,
    All: "",
  };
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
  const debounce = useDebounce(search, 500);

  useEffect(() => {
    let items = document.querySelectorAll(".category-item");
    items.forEach((item) =>
      item.classList.contains(type) ? "" : item.classList.remove("active")
    );
    document
      .getElementById("meal " + type)
      ?.parentElement.classList.add("active");
    let cid = getCid[type];
    axios
      .get(`/menu?keyword=${debounce}&cid=${cid}&size=50`)
      .then((res) => {
        setMenu(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [debounce, type]);

  return (
    <>
      <NavbarMenu isHomePage={false}></NavbarMenu>
      <ImageSlider></ImageSlider>
      <Container style={{ marginTop: "48px" }}>
        <Row
          className="p-3"
          style={{
            backgroundColor: "white",
            boxShadow: "7px 4px 4px 0 rgba(0,0,0,0.25)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col lg={6} sm={6}>
            <span style={{ fontWeight: "bold" }}>All Products</span>
          </Col>
          <Col
            style={{ display: "flex", justifyContent: "flex-end" }}
            lg={6}
            sm={6}
          >
            <InputGroup>
              <Button variant="outline-secondary" id="button-addon1">
                <i class="bi bi-search"></i>
              </Button>
              <Form.Control
                className="shadow-none"
                style={{ outline: "none" }}
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row
          style={{ borderBottom: "2px solid #A4907C", paddingBottom: "48px" }}
        >
          <h1 style={{ textAlign: "center", margin: "48px 0" }}>
            Our Products
          </h1>
          {/* <h3 style={{ textAlign: "center", marginBottom: "24px" }}>{type}</h3> */}
          <Col
            lg={3}
            sm={12}
            className="mt-4 p-3 shadow-box"
            style={{
              backgroundColor: "white",
              maxHeight: "300px",
              borderRadius: "15px",
            }}
          >
            <h2 style={{ textAlign: "center" }}>Category</h2>
            <div>
              <div
                onClick={() => setType("All")}
                className="category-item active"
              >
                <div id="meal All">All</div>
              </div>
              <div onClick={() => setType("Drink")} className="category-item">
                <div id="meal Drink">Drink</div>
              </div>
              <div onClick={() => setType("Food")} className="category-item">
                <div id="meal Food">Food</div>
              </div>
            </div>
          </Col>

          <Col xl={9} sm={12}>
            <Row className="mt-4" style={{ rowGap: "48px" }}>
              {menu?.map((menu) => (
                <Col
                  key={menu.id}
                  lg={4}
                  sm={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <CardBox menu={menu} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <HomePageItems
          id={"contact"}
          title={"Contact Us"}
          contents={contacts}
        ></HomePageItems>
      </Container>
      <Footer isHomePage={false}></Footer>
    </>
  );
};

export default Menu;
