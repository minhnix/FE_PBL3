import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBox from "./CardBox";
const HomePageItems = (props) => {
  console.log(
    "🚀 ~ file: HomePageItems.jsx:6 ~ HomePageItems ~ props:",
    props.services
  );
  return (
    <Row
      id={props.id}
      style={{
        padding: "48px 0",
        borderBottom: "2px solid #A4907C",
        margin: "48px 0",
        rowGap: "24px",
      }}
    >
      <h1
        style={{
          alignSelf: "center",
          textAlign: "center",
          marginBottom: "48px",
        }}
      >
        {props.title}
      </h1>
      <>
        {props.contents.map((tmp) => (
          <Col
            lg={4}
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <CardBox type={"info"} items={tmp} />
          </Col>
        ))}
      </>
      {/* <Col lg={4} sm={12} style={{ display: "flex", justifyContent: "center" }}>
        <CardBox type={"info"} />
      </Col>
      <Col lg={4} sm={12} style={{ display: "flex", justifyContent: "center" }}>
        <CardBox type={"info"} />
      </Col> */}
    </Row>
  );
};

export default HomePageItems;
