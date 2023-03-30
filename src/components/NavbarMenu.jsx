import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import "../styles/navbarMenu.css"
const NavbarMenu = (props) => {
    const user = localStorage.getItem("a")
    console.log(user)
    return (
        <Navbar sticky='top' className='autohide' collapseOnSelect expand="lg" style={{ color: "black!important" }}>
            <Container>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Image src="/Logo.png" rounded style={{ width: "50px", height: "50px" }}></Image>
                </Link>
                <Navbar.Brand href="">DUT Milk Tea</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={props.isHomePage === true ? null : { justifyContent: "flex-end" }}>
                    {props.isHomePage ? <Nav className="m-auto" defaultActiveKey>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#team">Team</Nav.Link>
                        <Nav.Link href=""><Link to="/menu" style={{ textDecoration: "none" }}>Menu</Link></Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav> : null}
                    <Nav >
                        {user ? <>
                            <Nav.Link href="#"><Link to="/profile" style={{ textDecoration: "none" }}><i className="bi bi-person"></i>Hi Userlame</Link></Nav.Link>
                            <Nav.Link className='cart-box' data-value="10+"><Link to={`/cart`}><i className="bi bi-cart"></i></Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: "none" }}><i class="bi bi-door-open"></i>Logout</Link></Nav.Link>
                        </>
                            :
                            <>
                                <Nav.Link href="#"><Link to="/signin" ><i className="bi bi-person"></i></Link></Nav.Link>
                                <Nav.Link><Link to={`/signin`}><i className="bi bi-cart"></i></Link></Nav.Link>
                            </>}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu