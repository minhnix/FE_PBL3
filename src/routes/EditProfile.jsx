import React from 'react'
import Footer from '../components/Footer'
import NavbarMenu from '../components/NavbarMenu'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import PagePresent from '../components/PagePresent'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
const EditProfile = () => {
    return (
        <>
            <NavbarMenu isHomePage={false}></NavbarMenu>
            <PagePresent title={"Edit Profile"}></PagePresent>
            <Container>
                <Row className="mt-4 mb-4 shadow-box" style={{ height: "60vh", borderRadius: "15px" }}>
                    <Col lg={12} className="faj-center" style={{ flexDirection: "column", rowGap: "16px", backgroundColor: "white", borderRadius: "15px" }}>
                        <div className='faj-center' style={{ flexDirection: "column", justifyContent: "space-between", width: "70%" }}>
                            <input placeholder='Fullname' type="text" style={{ width: "80%", border: "none", outline: "none", borderBottom: "1px solid #B0906F" }} />
                        </div>
                        <div className='faj-center' style={{ flexDirection: "column", justifyContent: "space-between", width: "70%" }}>
                            <input placeholder='Email' type="text" style={{ width: "80%", border: "none", outline: "none", borderBottom: "1px solid #B0906F" }} />
                        </div>
                        <div className='faj-center' style={{ flexDirection: "column", justifyContent: "space-between", width: "70%" }}>
                            <input placeholder='Address' type="text" style={{ width: "80%", border: "none", outline: "none", borderBottom: "1px solid #B0906F" }} />
                        </div>
                        <Link to="/profile"> <Button style={{ backgroundColor: "#CEB195", outline: "none", border: "0" }}>Edit Profile</Button></Link>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    )
}

export default EditProfile