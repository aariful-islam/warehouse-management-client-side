import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="light">
        <Container className="p-4">
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link className="fw-bold ">Blogs</Nav.Link>
              <Nav.Link className="fw-bold ">About Me</Nav.Link>
              <Nav.Link className="fw-bold ">Check Out</Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <div className="d-flex">
                  <Nav.Link className="fw-bold " as={Link} to="/additem">ADD Items</Nav.Link>
                  <Nav.Link className="fw-bold " as={Link} to="/myitem" >My items</Nav.Link>
                  <button
                    className="btn btn-link text-decoration-none fw-bold"
                    onClick={handleSignOut}
                  >
                    sign out
                  </button>
                </div>
              ) : (
                <Nav.Link as={Link} to="/login" className="fw-bold">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
