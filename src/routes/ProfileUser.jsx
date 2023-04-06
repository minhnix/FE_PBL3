import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Image1 from '../components/Image1'
import NavbarMenu from '../components/NavbarMenu'
import PagePresent from '../components/PagePresent'
import { PaginationControl } from 'react-bootstrap-pagination-control';
import 'bootstrap/dist/css/bootstrap.min.css';
const ProfileUser = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)
    //Solve 1
    // useEffect(() => {
    //     window.location.href.split("?")[1].split(" ")[0].split("=")[1] ? setCurrentPage(window.location.href.split("?")[1].split(" ")[0].split("=")[1]) : setCurrentPage(1)
    // })

    //Solve 2
    // useEffect(() => {
    //     localStorage.getItem("currentPage") ? setCurrentPage(localStorage.getItem("currentPage")) : setCurrentPage(1)
    // })

    useEffect(() => {


        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
            res => res.json().then(data => {
                setImages(data);

            })
        )
        setLoading(false)
    }, [])

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = images.slice(indexOfFirstPost, indexOfLastPost)


    return (
        <>
            <NavbarMenu></NavbarMenu>
            <PagePresent title={"Profile"}></PagePresent>
            <Container className='mt-4 mb-4'>
                <Row>
                    <Col lg={4} sm={12} className="shadow-box faj-center p-4 mb-4" style={{ flexDirection: "column", backgroundColor: "white", borderRadius: "15px" }}>
                        <div className='faj-center mb-4' style={{ width: "250px", height: "250px", backgroundColor: "#1f1f1f", borderRadius: "50%" }}>
                            <i class="bi bi-person" style={{ color: "white", fontSize: "200px", marginBottom: "80px" }}></i>
                        </div>
                        <div className='mt-4 shadow-box' style={{ borderRadius: "15px" }}>
                            <Link to="/edit-profile"> <Button style={{ backgroundColor: "#CEB195", outline: "none", border: "0" }}>Edit Profile</Button></Link>
                        </div>
                    </Col>
                    <Col lg={8} sm={12} style={{ display: "flex", flexDirection: "column", rowGap: "16px" }}>
                        <div className='shadow-box faj-center' style={{ backgroundColor: "white", borderRadius: "15px", flexDirection: "column", height: "50%" }}>
                            <h3>Shipping Infomation</h3>
                            <div style={{ alignSelf: "self-start" }}>
                                <ul style={{ display: "flex", flexDirection: "column", rowGap: "16px" }}>
                                    <li>Fullname :</li>
                                    <li>Email :</li>
                                    <li>Phone Number :</li>
                                    <li>Address :</li>
                                </ul>
                            </div>
                        </div>
                        <div className='shadow-box faj-center' style={{ backgroundColor: "white", borderRadius: "15px", flexDirection: "column", height: "auto", }}>
                            <h3>Order Infomation</h3>
                            <div className='shadow-box' style={{ width: "100%", flexDirection: "column", borderRadius: "15px" }}>
                                <Image1 images={currentPosts} loading={loading} />
                                {/* <Pagination postsPerPage={postsPerPage} totalPosts={images.length} paginate={paginate}></Pagination> */}
                                <div className='faj-center pb-4'>
                                    <PaginationControl
                                        page={currentPage}
                                        between={2}
                                        total={images.length}
                                        limit={postsPerPage}
                                        changePage={(currentPage) => {
                                            setCurrentPage(currentPage);
                                            //localStorage.setItem('currentPage', currentPage);
                                            //window.history.pushState('page2', 'Title', `/profile/?page=${currentPage}`);
                                        }}
                                        last={true}
                                        ellipsis={0}
                                    />
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </>
    )
}

export default ProfileUser