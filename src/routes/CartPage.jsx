import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Footer from "../components/Footer";
import NavbarMenu from "../components/NavbarMenu";
import OrderDetailItems from "../components/OrderDetailItems";
import PagePresent from "../components/PagePresent";
import Button from "react-bootstrap/esm/Button";
import CardBox from "../components/CardBox";
const CartPage = () => {
    const temp = [
        {
            id: 1,
            name: "Cafe",
            quantity: 1,
            imgUrl: "/Card1.png",
        },
        {
            id: 2,
            name: "Cafe 1",
            quantity: 2,
            imgUrl: "/Card1.png",
        },
        {
            id: 3,
            name: "Cafe 2",
            quantity: 3,
            imgUrl: "/Card1.png",
        },
        {
            id: 4,
            name: "Cafe 3",
            quantity: 2,
            imgUrl: "/Card1.png",
        },
        {
            id: 5,
            name: "Cafe 4",
            quantity: 2,
            imgUrl: "/Card1.png",
        },
        {
            id: 6,
            name: "Cafe 6",
            quantity: 2,
            imgUrl: "/Card1.png",
        },
    ];
    return (
        <>
            <NavbarMenu isHomePage={false}></NavbarMenu>
            <PagePresent title={"Cart"} />
            <Container>
                <Row className="mt-3 mobile-container">
                    <Col lg={8} sm={12}>
                        <Row style={{
                            justifyContent: "start",
                        }}>
                            <Col lg={5} sm={12} style={{ padding: "0px" }}>
                                <ul
                                    className="shadow-box p-3"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                        backgroundColor: "#CEB195",
                                        color: "white",
                                        textAlign: "center"
                                    }}
                                >
                                    <li style={{ width: "50px" }}>
                                        <input type="checkbox" name="" id="" />
                                    </li>
                                    <li style={{ width: "80px" }}>Product</li>
                                    <li style={{ width: "80px" }}>Name</li>
                                    <li style={{ width: "80px" }}>Price</li>
                                </ul>
                            </Col>
                            <Col lg={5} sm={12} style={{ paddingLeft: 0 }}>
                                <ul
                                    className="shadow-box p-3"
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        backgroundColor: "#CEB195",
                                        color: "white",
                                        width: "425px",

                                    }}
                                >
                                    <li style={{ width: "80px" }}>Size</li>
                                    <li style={{ width: "102px" }}>Quantity</li>
                                    <li style={{ width: "80px" }}>Option</li>
                                </ul>
                            </Col>
                        </Row>

                        <OrderDetailItems
                            canEdit={true}
                            type={"order-detail"}
                            venue={"cart"}
                            items={temp}
                        ></OrderDetailItems>

                    </Col>
                    <Col
                        lg={4}
                        sm={12}
                        className="faj-center mt-5 mb-5 shadow-box summary-box"
                        style={{
                            flexDirection: "column",
                            rowGap: "16px",
                            backgroundColor: "white",
                            borderRadius: "15px",
                            height: "450px",

                        }}
                    >
                        <h3>Order Summary</h3>
                        <ul
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                rowGap: "12px",
                            }}
                        >
                            <ul
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    paddingLeft: 0,
                                }}
                            >
                                <li>{`Subtotal ( 3 items) : `}</li>
                                <li>12</li>
                            </ul>
                            <ul
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    paddingLeft: 0,
                                }}
                            >
                                <li>Address : </li>
                                <li>Trung Quoc</li>
                            </ul>
                            <ul
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    paddingLeft: 0,
                                }}
                            >
                                <li>Shipping Fee : </li>
                                <li>12</li>
                            </ul>
                            <ul
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    paddingLeft: 0,
                                }}
                            >
                                <li>Discount : </li>
                                <li>12</li>
                            </ul>
                            <ul
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    paddingLeft: 0,
                                }}
                            >
                                <li>Total : </li>
                                <li>12</li>
                            </ul>
                        </ul>
                        <Button
                            style={{
                                backgroundColor: "#CEB195",
                                outline: "none",
                                border: "0",
                            }}
                        >
                            Confirm
                        </Button>
                    </Col>
                </Row>
                <Col lg={12} className="mb-4">
                    <h4 className="p-3">Suggested For You</h4>
                    <Row className="mt-4" style={{ rowGap: "48px" }}>
                        <Col
                            lg={3}
                            sm={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <CardBox />
                        </Col>
                        <Col
                            lg={3}
                            sm={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <CardBox />
                        </Col>
                        <Col
                            lg={3}
                            sm={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <CardBox />
                        </Col>
                        <Col
                            lg={3}
                            sm={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <CardBox />
                        </Col>
                        <Col
                            lg={3}
                            sm={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <CardBox />
                        </Col>
                        <Col
                            lg={3}
                            sm={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <CardBox />
                        </Col>
                        <Col
                            lg={3}
                            sm={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <CardBox />
                        </Col>
                        <Col
                            lg={3}
                            sm={6}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <CardBox />
                        </Col>
                    </Row>
                </Col>
            </Container>
            <Footer />
        </>
    );
};

export default CartPage;
