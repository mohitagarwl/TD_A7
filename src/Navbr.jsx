import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbr.css'; // Import the CSS file

function Navbr() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" className="custom-navbar">
                <Container>
                    <Nav className="me-auto custom-nav">
                        <Nav.Link as={Link} to="/" className="item">Home</Nav.Link>
                        <Nav.Link as={Link} to="/About" className="item">AboutUs</Nav.Link>
                        <Nav.Link as={Link} to="/form" className="item">Form</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbr;
