import React from 'react';
import { Navbar, Nav,} from 'react-bootstrap';


const NavbarComponent: React.FC = () => {
  return (
    <Navbar className="custom-navbar px-3" expand="lg">
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
      </Navbar.Collapse>
      <div className="navbar-center mx-auto">
        <img
          src="/public/apple.svg"
          alt="Navbar Logo"
          className='navbar-logo'
        />
      </div>
      <Nav className="ms-auto">
  <Nav.Link
    href="#"
    className="btn btn-danger text-white d-flex align-items-center px-4"
  >
    <i className="bi bi-person-fill me-2"></i>
    Accedi
  </Nav.Link>
</Nav>
    </Navbar>
  );
};

export default NavbarComponent;