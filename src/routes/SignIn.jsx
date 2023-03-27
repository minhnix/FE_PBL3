import React from 'react'
import "../styles/signIn.css"
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
const SignIn = () => {
    return (
        <>

            <div className="container">
                <div className='form-box'>
                    <Row style={{ color: "red" }}>
                        <Col lg={7} sm={12} className="p-4">
                            <h1 style={{ textAlign: "center" }}>Login</h1>
                            <form action="">
                                <div className="form-input-box">
                                    <div>
                                        <label htmlFor="username"><i class="bi bi-person-circle"></i>Username</label>
                                        <input type="text" name="" id="username" />
                                    </div>
                                    <div>
                                        <label htmlFor="username"><i class="bi bi-person-circle"></i>Username</label>
                                        <input type="text" name="" id="username" />
                                    </div>
                                </div>
                            </form>
                        </Col>
                        <Col lg={5} sm={0}><Image src='img1.png' style={{ maxWidth: "100%", height: "auto" }}></Image>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    )
}

export default SignIn