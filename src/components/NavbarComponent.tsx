import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent: React.FC = () => {
  return (
    <Navbar  variant="dark" expand="lg" className="px-3">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#">Accedi</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;