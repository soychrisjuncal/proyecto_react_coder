import React from "react";

import "../css/NavBar.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="pepe" expand="lg">
      <Container>
        <Link to="/">
          {" "}
          <Navbar.Brand id="navbar-brand">Kiwi Boards</Navbar.Brand>{" "}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="centrar" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Link to="/category/1">
                {" "}
                <NavDropdown.Item href="#action/3.1">
                  Boards
                </NavDropdown.Item>{" "}
              </Link>
              <Link to="/category/2">
                {" "}
                <NavDropdown.Item href="#action/3.2">
                  Remeras
                </NavDropdown.Item>{" "}
              </Link>
              <Link to="/category/3">
                {" "}
                <NavDropdown.Item href="#action/3.3">
                  Buzos
                </NavDropdown.Item>{" "}
              </Link>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Link to="/cart">
          <CartWidget />
        </Link>
      </Container>
    </Navbar>
  );
};

export default NavBar;
