import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    {/* <Navbar sticky="top" collapseOnSelect expand="lg" bg="light">
        <Container className="p-4">
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="fw-bold" href="home#services">
                Services
              </Nav.Link>
              <Nav.Link className="fw-bold " as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="fw-bold " as={Link} to="/aboutme">
                About Me
              </Nav.Link>
              <Nav.Link className="fw-bold " as={Link} to="/checkout">
                Check Out
              </Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link className="fw-bold " as={Link} to="/contactme">
                Contact Me
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
     
    </>
  );
};

export default Header;