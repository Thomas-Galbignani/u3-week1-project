import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsSearch, BsBellFill, BsPersonCircle } from 'react-icons/bs';


const MyNavbar = () => {
    return (
        <Navbar
            expand="lg"
            variant="dark"
            bg="black"
        >
            <Container fluid>
                <Navbar.Brand href="#" className=" m-0" style={{ width: "100px" }}>
                    <img src="src/assets/logo.png" alt="Netflix Logo" className="img-fluid " />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="mb-2 mb-lg-0">
                        <Nav.Link href="#" className="fw-bold active">
                            Home
                        </Nav.Link>
                        <Nav.Link href="#" className="fw-bold">
                            TV Shows
                        </Nav.Link>
                        <Nav.Link href="#" className="fw-bold">
                            Movies
                        </Nav.Link>
                        <Nav.Link href="#" className="fw-bold">
                            Recently Added
                        </Nav.Link>
                        <Nav.Link href="#" className="fw-bold">
                            My List
                        </Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center ms-auto">
                        <BsSearch className="text-light me-3" />
                        <div id="kids" className="fw-bold text-light me-3">
                            KIDS
                        </div>
                        <BsBellFill className="text-light me-3" />
                        <BsPersonCircle className="text-light" />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;