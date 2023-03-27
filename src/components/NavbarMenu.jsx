import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import "../styles/navbarMenu.css"
const NavbarMenu = () => {
    return (
        <Navbar sticky='top' className='autohide' collapseOnSelect expand="lg" style={{ color: "black!important" }}>
            <Container>
                <Image src="/Logo.png" rounded style={{ width: "50px", height: "50px" }}></Image>
                <Navbar.Brand href="#home">DUT Milk Tea</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto" defaultActiveKey>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#team">Team</Nav.Link>
                        <Nav.Link href="#service">Menu</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav  >
                        <Nav.Link href="#"><Link to="/signin" ><i className="bi bi-person"></i></Link></Nav.Link>
                        <Nav.Link href="#features"><i className="bi bi-cart"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarMenu