import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import "../styles/navbarMenu.css"
import { AiOutlineHome, AiOutlineUser, AiOutlineCreditCard, AiOutlineShoppingCart, AiOutlineUnorderedList } from "react-icons/ai";
import { BsBell, BsList, BsDoorOpen, BsEye } from "react-icons/bs";
const NavbarMenu = (props) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)
    const [moreClick, setMoreClick] = useState(false)
    const [userClick, setUserClick] = useState(false)
    const user = localStorage.getItem('user');
    const handleMoreClick = () => {
        document.querySelector('.more-btn').classList.toggle('active');
        setMoreClick(!moreClick);
    }
    const handleScroll = () => {
        const currentScrollPos = window.scrollY
        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else {
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }


    useEffect(() => {
        document.querySelectorAll('.v-nav-item').forEach(item => item.innerHTML.includes(props.currentManagePage) ? item.classList.add('active') : item.classList.remove('active'))
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })
    if (props.position === 'vertical') {
        return (
            <>
                <Nav fixed="top" className="flex-column" style={{ width: "250px", height: "100vh", backgroundColor: "black", position: "fixed" }}>
                    <h4 className='p-3' style={{ textAlign: "center", borderBottom: "1px solid #979797", color: "white" }}>Managerment</h4>
                    {props.isAdmin ? <>
                        <Link className='p-2 v-nav-item mt-4 active' style={{ color: "white", fontSize: "18px", marginBottom: "16px", textDecoration: "none" }} to='/' ><AiOutlineHome style={{ marginRight: "20px", fontSize: "26px" }}></AiOutlineHome>Dashboard</Link>
                        <Link className='p-2 v-nav-item mt-4' style={{ color: "white", fontSize: "18px", marginBottom: "16px", textDecoration: "none" }} to="/staff-management"><AiOutlineUser style={{ marginRight: "20px", fontSize: "26px" }}></AiOutlineUser>Staff</Link>
                        <Link className='p-2 v-nav-item mt-4' style={{ color: "white", fontSize: "18px", marginBottom: "16px", textDecoration: "none" }} to="/menu-management"><AiOutlineUnorderedList style={{ marginRight: "20px", fontSize: "26px" }}></AiOutlineUnorderedList>Menu</Link>
                        <Link className='p-2 v-nav-item mt-4' style={{ color: "white", fontSize: "18px", marginBottom: "16px", textDecoration: "none" }} to="/bill-management"><AiOutlineCreditCard style={{ marginRight: "20px", fontSize: "26px" }}></AiOutlineCreditCard>Bill</Link>
                        <Link className='p-2 v-nav-item mt-4' style={{ color: "white", fontSize: "18px", marginBottom: "16px", textDecoration: "none" }} to="/ingredient-management"><AiOutlineShoppingCart style={{ marginRight: "20px", fontSize: "26px" }}></AiOutlineShoppingCart>Ingredient</Link>
                        <Link className='p-2 v-nav-item mt-4' style={{ color: "white", fontSize: "18px", marginBottom: "16px", textDecoration: "none" }} to="/import-management"><AiOutlineShoppingCart style={{ marginRight: "20px", fontSize: "26px" }}></AiOutlineShoppingCart>Import</Link>
                    </>
                        :
                        <>
                            <Link className='p-2 v-nav-item mt-4' style={{ color: "white", fontSize: "18px", marginBottom: "16px", textDecoration: "none" }} to="/bill-management"><AiOutlineCreditCard style={{ marginRight: "20px", fontSize: "26px" }}></AiOutlineCreditCard>Order</Link>
                        </>
                    }
                    {moreClick ? <div className='p-3' style={{ position: "absolute", backgroundColor: "rgb(30 30 30)", bottom: "9%", width: "90%", borderRadius: "15px", flexDirection: "column" }}>
                        <Nav.Link className='p-2 v-nav-item p-2' style={{ color: "white", fontSize: "18px" }} href="#logout"><BsDoorOpen style={{ marginRight: "20px", fontSize: "26px" }}></BsDoorOpen>Logout</Nav.Link>
                    </div> : null}
                    <Nav.Link onClick={() => handleMoreClick()} className='p-2 v-nav-item more-btn' style={{ color: "white", fontSize: "18px", position: "absolute", bottom: "2%", width: "90%" }}><BsList style={{ marginRight: "20px", fontSize: "26px" }}></BsList>More</Nav.Link>
                </Nav>
            </>
        )
    }
    return (
        <>
            <Navbar fixed='top' className={`flex-column ${visible ? "show-nav" : "hide-nav"}`} collapseOnSelect expand="lg" style={{ color: "black!important" }}>
                <Container>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Image src="/Logo.png" rounded style={{ width: "50px", height: "50px" }}></Image>
                    </Link>
                    <Navbar.Brand href="">DUT Milk Tea</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" style={{ height: "50px" }}>
                        {props.isHomePage ? <Nav className="m-auto" defaultActiveKey>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#service">Service</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                            <Nav.Link href=""><Link to="/menu" style={{ textDecoration: "none", marginLeft: "0" }}>Menu</Link></Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav> : <Nav className="m-auto">
                        </Nav>}
                        <Nav style={{ margin: "12px 12px" }}>
                            {user ? <>
                                <span style={{ borderRadius: "50%", backgroundColor: "#FFE7C8", width: "50px", height: "50px", display: "grid", placeItems: "center", marginRight: "12px" }}>
                                    <Nav.Link className='cart-box' data-value="9+"><Link to={`/cart`} style={{ fontSize: "24px", lineHeight: "20px" }}><i className="bi bi-cart"></i></Link></Nav.Link>
                                </span>
                                <span style={{ borderRadius: "50%", backgroundColor: "#FFE7C8", width: "50px", height: "50px", display: "grid", placeItems: "center", marginRight: "12px" }}>
                                    <Nav.Link className='cart-box' data-value="3"><Link to={`/cart`} style={{ fontSize: "24px", lineHeight: "20px" }}><BsBell></BsBell ></Link></Nav.Link>
                                </span>
                                <span style={{ borderRadius: "50%", backgroundColor: "#FFE7C8", width: "50px", height: "50px", display: "grid", placeItems: "center" }}>
                                    <Nav.Link style={{ fontSize: "24px", lineHeight: "20px" }} onClick={() => setUserClick(!userClick)}><AiOutlineUser ></AiOutlineUser ></Nav.Link>
                                </span>
                            </>
                                :
                                <>
                                    <span style={{ borderRadius: "50%", backgroundColor: "#FFE7C8", width: "50px", height: "50px", display: "grid", placeItems: "center" }}>
                                        <Nav.Link ><Link to={`/cart`} style={{ fontSize: "24px", lineHeight: "20px" }}><i className="bi bi-cart"></i></Link></Nav.Link>
                                    </span>
                                    <span style={{ borderRadius: "50%", backgroundColor: "#FFE7C8", width: "50px", height: "50px", display: "grid", placeItems: "center", marginLeft: "12px" }}>
                                        <Nav.Link style={{ fontSize: "24px", lineHeight: "20px" }}><Link to={`/signin`}><AiOutlineUser ></AiOutlineUser ></Link></Nav.Link>
                                    </span>
                                </>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div className={`user-box ${userClick ? "show-userForm" : "hide-userForm"}`}>
                    <ul style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "130px", paddingLeft: "12px", marginBottom: "0" }}>
                        <Link to={"/profile"} style={{ fontSize: "24px", lineHeight: "20px", textDecoration: "none" }}><li style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><span style={{ borderRadius: "50%", backgroundColor: "#FFE7C8", width: "50px", height: "50px", display: "grid", placeItems: "center", marginRight: "12px" }}>
                            <BsEye></BsEye >
                        </span><span style={{ fontWeight: "700", fontSize: "16px" }}>View Profile</span>
                        </li></Link>

                        <Link to={`/cart`} style={{ fontSize: "24px", lineHeight: "20px", textDecoration: "none" }}><li style={{ display: "flex", flexDirection: "row", alignItems: "center" }}><span style={{ borderRadius: "50%", backgroundColor: "#FFE7C8", width: "50px", height: "50px", display: "grid", placeItems: "center", marginRight: "12px" }}>
                            <BsDoorOpen></BsDoorOpen >
                        </span><span style={{ fontWeight: "700", fontSize: "16px" }}>Logout</span>
                        </li></Link>
                    </ul>
                </div>
            </Navbar >

        </>
    )
}

export default NavbarMenu