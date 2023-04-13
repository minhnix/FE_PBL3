import React from "react";
import NavbarMenu from "../components/NavbarMenu";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import OrderDetailItems from "../components/OrderDetailItems";
import { useState } from "react";
import { PaginationControl } from "react-bootstrap-pagination-control";
import FormManager from "../components/FormManager";
import { useNavigate } from "react-router-dom";
import ImportFormManager from "../components/ImportFormManager";
const ImportManagePage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [showStatus, setShowStatus] = useState(false);
  const [action, setAction] = useState("");
  const [data, setData] = useState({});
  const handleSetShowStatus = (status) => {
    setShowStatus(status);
  };
  const handleGetAction = (action) => {
    setAction(action);
  };
  const handleGetData = (data) => {
    setData(data);
  };
  const temp = [
    {
      date: "01/06/2003",
      provider: "Google",
      total: "100",
      items: [
        {
          name: "Tea",
          count: 100,
          price: "100",
        },
      ],
    },
    {
      date: "01/05/2003",
      provider: "Facebook",
      total: "100",
      items: [
        {
          name: "Milk",
          count: 100,
          price: "100",
        },
      ],
    },
    {
      date: "08/08/2003",
      provider: "Instagram",
      total: "100",
      items: [
        {
          name: "Vinh",
          count: 100,
          price: "100",
        },
      ],
    },
  ];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = temp.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div style={{ display: "flex" }}>
      <NavbarMenu
        isAdmin={true}
        currentManagePage={"Import"}
        position={"vertical"}
      ></NavbarMenu>
      <div
        style={{
          backgroundColor: "#1f1f1f",
          width: "100%",
          marginLeft: "220px",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <h4
          className="p-3"
          style={{
            textAlign: "center",
            borderBottom: "1px solid #979797",
            color: "white",
          }}
        >
          Import
        </h4>
        <Row className="m-4">
          <Col lg={12}>
            <Button
              onClick={() => {
                navigate("/import-management/add");
              }}
              className="btn btn-primary"
              style={{ float: "right", minWidth: "100px" }}
            >
              +
            </Button>
          </Col>
        </Row>
        <Row className="faj-center">
          <Col lg={10}>
            <ul
              className="p-3"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "#222e3c",
                color: "white",
                borderBottom: "1px solid white",
              }}
            >
              <li style={{ width: "80px", textAlign: "center" }}>Date</li>
              <li style={{ width: "80px", textAlign: "center" }}>Provider</li>
              <li style={{ width: "80px", textAlign: "center" }}>Total</li>
              <li style={{ width: "80px", textAlign: "center" }}>Option</li>
            </ul>

            {currentPosts?.map((item) => (
              <OrderDetailItems
                handleGetData={handleGetData}
                type={"manager"}
                handleGetAction={handleGetAction}
                handleSetShowStatus={handleSetShowStatus}
                data={item}
                object={"import"}
              ></OrderDetailItems>
            ))}
            <PaginationControl
              page={currentPage}
              between={3}
              total={temp.length}
              limit={postsPerPage}
              changePage={(currentPage) => {
                setCurrentPage(currentPage);
              }}
              last={true}
              ellipsis={0}
            />
          </Col>
        </Row>
        {showStatus && (
          <ImportFormManager
            data={data}
            handleGetData={handleGetData}
            action={action}
            handleSetShowStatus={handleSetShowStatus}
          />
        )}
      </div>
    </div>
  );
};

export default ImportManagePage;

{
  /* <FormManager page={"Import"} data={data} handleGetData={handleGetData} action={action} handleSetShowStatus={handleSetShowStatus}></FormManager> */
}
