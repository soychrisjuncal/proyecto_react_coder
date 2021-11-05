import React from "react";

import '../css/NavBar.css';
import { Container,Navbar,Nav, NavDropdown } from "react-bootstrap";
import CartWidget from './CartWidget';






const NavBar = () => {
  return (
    <Navbar className="pepe"  expand="lg">
    <Container>
      <Navbar.Brand id="navbar-brand" href="#home">Kiwi Boards</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="centrar" id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Boards</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Gorras</NavDropdown.Item>
            
          </NavDropdown>
          <Nav.Link href="#link">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget/>
    </Container>
  </Navbar>
  );
}

export default NavBar;
