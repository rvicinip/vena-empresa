import React from "react";

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

function AuthFooter() {
  return (
    <>
      <footer className="footer position-absolute fixed-bottom">
        <Container>
          <nav>
            <ul className="footer-menu d-flex justify-content-center">
              <li>
                <a className="m-0" href="https://venaycia.com" onClick={(e) => e.preventDefault()}>
                  VENA Y CIA.
                </a>
              </li>
              <li>
                <a className="m-0" href="https://venaycia.com/vena-y-cia---quienes-somos.html" onClick={(e) => e.preventDefault()}>
                  Quienes somos
                </a>
              </li>
              <li>
                <a className="m-0" href="https://venaycia.com/vena-y-cia---servicios.html" onClick={(e) => e.preventDefault()}>
                  Servicios
                </a>
              </li>
              <li>
                <a className="m-0" href="https://venaycia.com/vena-y-cia---experiencia.html" onClick={(e) => e.preventDefault()}>
                  Experiencia
                </a>
              </li>  
              <li>
                <a className="m-0" href="https://venaycia.com/vena-y-cia---contacto.html" onClick={(e) => e.preventDefault()}>
                  Contacto
                </a>
              </li>
            </ul>
            <p className="copyright text-center m-0">
              © {new Date().getFullYear()}{" "}
              <a href="http://vitt.co">VITT s.a.s</a>
            </p>
          </nav>
        </Container>
      </footer>
    </>
  );
}

export default AuthFooter;
