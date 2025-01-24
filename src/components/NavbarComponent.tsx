import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavbarComponent: React.FC = () => {
  return (
    <Navbar className="custom-navbar px-3" expand="lg">
      <Navbar.Toggle aria-controls="navbar-nav" className="d-lg-none">
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>

      <Navbar.Collapse id="navbar-nav">
        <Nav className="flex-column d-lg-none">
          <Nav.Link href="#" className="text-white d-flex align-items-center">
            <i className="bi bi-house-door me-2 sideBarIcons"></i> Home
          </Nav.Link>
          <Nav.Link href="#" className="text-white d-flex align-items-center">
            <i className="bi bi-stars me-2 sideBarIcons"></i> Novità
          </Nav.Link>
          <Nav.Link href="#" className="text-white d-flex align-items-center">
            <i className="bi bi-broadcast me-2 sideBarIcons"></i> Radio
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div className="navbar-center position-absolute top-50 start-50 translate-middle">
        <img src="/apple.svg" alt="Navbar Logo" className="navbar-logo" />
      </div>

      <div className="navbar-center mx-auto d-lg-none">
        <img
          src="/music.svg"
          alt="Navbar Mobile Logo"
          className="navbar-logo"
          style={{ width: "100px", height: "800px" }}
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
