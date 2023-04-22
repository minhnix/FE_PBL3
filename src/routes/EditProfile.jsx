import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavbarMenu from "../components/NavbarMenu";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import PagePresent from "../components/PagePresent";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const EditProfile = () => {
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [districtsCode, setDistrictsCode] = useState("490");
  const [wardsCode, setWardsCode] = useState("20194");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [road, setRoad] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");

  const token = localStorage.getItem("token");

  const handleEditProfile = () => {
    const user = {
      firstname: firstName,
      lastname: lastName,
      phoneNumber,
      address: {
        city: "Đà Nẵng",
        district,
        ward,
        wardCode: wardsCode,
        districtCode: districtsCode,
        road,
      },
    };
    axios
      .patch("http://localhost:8080/api/v1/users/me", user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) =>
        toast.success("Sửa thông tin thành công", {
          position: "top-right",
        })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://provinces.open-api.vn/api/p/48?depth=2")
      .then((response) => {
        setDistricts(response.data.districts);
      });
    axios
      .get("http://localhost:8080/api/v1/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFirstName(res.data.firstname);
        setLastName(res.data.lastname);
        setPhoneNumber(res.data.phoneNumber);
        setEmail(res.data.email);
        setUsername(res.data.username);
        setDistrictsCode(res.data?.address?.districtCode || "490");
        setWardsCode(res.data?.address?.wardCode || "20194");
        setRoad(res.data?.address?.road);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get(`https://provinces.open-api.vn/api/d/${districtsCode}?depth=2`)
      .then((response) => {
        setWards(response.data.wards);
        setWardsCode(response.data.wards[0].code);
      });
  }, [districtsCode]);
  return (
    <>
      <NavbarMenu isHomePage={false}></NavbarMenu>
      <PagePresent title={"Edit Profile"}></PagePresent>
      <Container>
        <Row
          className="mt-4 mb-4 shadow-box"
          style={{ height: "60vh", borderRadius: "15px" }}
        >
          <Col
            lg={12}
            className="faj-center"
            style={{
              flexDirection: "column",
              rowGap: "16px",
              backgroundColor: "white",
              borderRadius: "15px",
            }}
          >
            <h1>Information</h1>
            <div className="faj-center" style={{ width: "70%" }}>
              <input
                placeholder="Username"
                type="text"
                style={{
                  width: "80%",
                  padding: "0 12px",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #B0906F",
                }}
                disabled
                value={username}
              />
            </div>
            <div className="faj-center" style={{ width: "70%" }}>
              <input
                placeholder="Email"
                type="text"
                style={{
                  width: "80%",
                  padding: "0 12px",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #B0906F",
                }}
                disabled
                value={email}
              />
            </div>
            <div className="faj-center" style={{ width: "70%" }}>
              <input
                placeholder="First name"
                type="text"
                style={{
                  width: "80%",
                  padding: "0 12px",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #B0906F",
                }}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div className="faj-center" style={{ width: "70%" }}>
              <input
                placeholder="Last name"
                type="text"
                style={{
                  width: "80%",
                  padding: "0 12px",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #B0906F",
                }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="faj-center" style={{ width: "70%" }}>
              <input
                placeholder="Phone Number"
                type="text"
                style={{
                  width: "80%",
                  padding: "0 12px",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #B0906F",
                }}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="faj-center" style={{ width: "70%" }}>
              <input
                placeholder="Road"
                type="text"
                style={{
                  width: "20%",
                  padding: "0 12px",
                  border: "none",
                  outline: "none",
                  borderBottom: "1px solid #B0906F",
                  marginRight: "6px",
                }}
                value={road}
                onChange={(e) => setRoad(e.target.value)}
              />
              <div>
                <label style={{ marginRight: "12px" }} htmlFor="">
                  Quận
                </label>
                <select
                  style={{
                    marginRight: "6px",
                    borderRadius: "5px",
                    padding: "6px",
                  }}
                  onChange={(e) => {
                    let index = e.target.selectedIndex;
                    setDistrict(e.target[index].text);
                    setDistrictsCode(e.target.value);
                  }}
                  name=""
                  id=""
                  value={districtsCode}
                >
                  {districts?.map((item) => (
                    <option value={item.code}>{item.name}</option>
                  ))}
                </select>
                <label style={{ marginRight: "12px" }} htmlFor="">
                  Phường/Xã
                </label>
                <select
                  style={{
                    minWidth: "200px",
                    borderRadius: "5px",
                    padding: "6px",
                  }}
                  onChange={(e) => {
                    let index = e.target.selectedIndex;
                    setWard(e.target[index].text);
                    setWardsCode(e.target.value);
                  }}
                  name=""
                  id=""
                  value={wardsCode}
                >
                  {wards?.map((item) => (
                    <option value={item.code}>{item.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <Button
              style={{
                backgroundColor: "#CEB195",
                outline: "none",
                border: "0",
              }}
              onClick={handleEditProfile}
            >
              Edit Profile
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default EditProfile;
