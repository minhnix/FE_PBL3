import React from 'react'
import "../styles/signIn.css"
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import { Link } from 'react-router-dom'
const SignUp = () => {
    return (
        <>
            <div className="container1">
                <div className='form-box'>
                    <Row style={{ color: "white" }}>
                        <Col lg={7} sm={12} className="p-4">
                            <h1 style={{ textAlign: "center", color: "white" }}>Sign Up</h1>
                            <form action="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <div className="form-input-box">
                                    <div style={{ position: "relative" }}>
                                        <label style={{ position: "absolute" }} htmlFor="Username"><i style={{ marginRight: "12px" }} class="bi bi-person-circle"></i>Username</label>
                                        <input type="text" name="" style={{ width: "100%", marginTop: "24px", padding: "0px 12px" }} placeholder="Enter your username" id="Username" />
                                    </div>
                                    <div style={{ position: "relative" }}>
                                        <label style={{ position: "absolute" }} htmlFor="Email"><i style={{ marginRight: "12px" }} class="bi bi-person-circle"></i>Email</label>
                                        <input type="text" name="" style={{ width: "100%", marginTop: "24px", padding: "0px 12px" }} placeholder="Enter your email" id="Email" />
                                    </div>
                                    <div style={{ position: "relative" }}>
                                        <label style={{ position: "absolute" }} htmlFor="Password"><i style={{ marginRight: "12px" }} class="bi bi-lock"></i>Password</label>
                                        <input type="text" name="" style={{ width: "100%", marginTop: "24px", padding: "0px 12px" }} placeholder="Enter your password" id="Password" />
                                    </div>
                                </div>
                                <button><i class="bi bi-arrow-right"></i></button>
                                <div style={{ marginTop: "24px" }}>
                                    <p>Already have any account ? <Link style={{ textDecoration: "none", color: "#80BBFF" }} to="/signin">Sign In Now !</Link></p>
                                </div>
                            </form>

                        </Col>
                        <Col lg={5} sm={0}><Image src='img1.png' style={{ maxWidth: "100%", height: "100%" }}></Image>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default SignUp