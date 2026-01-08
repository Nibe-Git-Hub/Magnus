import React from 'react';
import logoData from '../data.js';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'; 

function Header() {
  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      collapseOnSelect 
      className="border-bottom border-light"
    >
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img 
            src={logoData.logo[0].image} 
            alt="Logo" 
            width="30" 
            height="30" 
            className="d-inline-block align-text-top me-2 rounded-circle" 
          />
          Magnus Technologies Inc.
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> 
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>

            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;