import React from "react";
import { Link, useLocation } from "react-router-dom";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Col,
} from "react-bootstrap";

function AuthNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const location = useLocation();
  return (
    <>
      <Navbar
        className="position-absolute w-100"
        expand="lg"
        variant={collapseOpen ? "white" : "transparent"}
      >
        <Container>
          <div className="navbar-wrapper">
            <Navbar.Brand href="#pablo" onClick={(e) => e.preventDefault()}>
              <span className="d-none d-md-block">Bienvenido al Registro de Tiempos</span>
              <span className="d-block d-md-none">Registro de Tiempos</span>
            </Navbar.Brand>
          </div>
          <button
            className="navbar-toggler navbar-toggler-right border-0"
            type="button"
            onClick={() => setCollapseOpen(!collapseOpen)}
          >
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </button>
          <Navbar.Collapse className="justify-content-end" in={collapseOpen}>
            <Nav navbar>
              <Nav.Item
                className={
                  location.pathname === "/auth/login-cliente"
                    ? "active mr-1"
                    : "mr-1"
                }
              >
                <Nav.Link to="/auth/login-cliente" as={Link}>
                  <i className="nc-icon nc-badge"></i>
                  Bienvenido!
                </Nav.Link>
              </Nav.Item>
              <Nav.Item
                className={
                  location.pathname === "/auth/cambio-clave"
                    ? "active mr-1"
                    : "mr-1"
                }
              >
                <Nav.Link to="/auth/cambio-clave" as={Link}>
                  <i className="nc-icon nc-key-25"></i>
                  Cambio Contraseña
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AuthNavbar;
