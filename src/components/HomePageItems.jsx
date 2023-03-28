import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardBox from './CardBox';
const HomePageItems = (props) => {
    return (
        <Row id={props.id} style={{ padding: "48px 0", borderBottom: "2px solid black", margin: "48px 0", rowGap: "24px" }}>
            <h1 style={{ alignSelf: "center", textAlign: "center", marginBottom: "48px" }}>{props.title}</h1>
            <Col lg={4} sm={12} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
            <Col lg={4} sm={12} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
            <Col lg={4} sm={12} style={{ display: "flex", justifyContent: "center" }}><CardBox /></Col>
        </Row>
    )
}

export default HomePageItems