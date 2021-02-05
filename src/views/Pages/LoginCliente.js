
import React, { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom'

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Col,
} from "react-bootstrap";
import { isNullishCoalesce } from "typescript";

function LoginCliente() {
  const [cardClasses, setCardClasses] = React.useState("card-hidden");

  React.useEffect(() => {


    setTimeout(function () {
      setCardClasses("");
    }, 1000);
  });

  
  const goTo = () => {
      console.log("Entra a goTo", routes);
      return <Link to="/cliente/dashboard-cliente"/>;
  }; 

  return (
 
    <>
      <div
        className="full-page section-image"
        data-color="black"
        data-image={require("assets/img/full-screen-image-2.jpg").default}
      >
        <div className="content d-flex align-items-center p-0">
          <Container>
            <Col className="mx-auto" lg="4" md="8">
              <Form action="" className="form" method="">
                <Card className={"card-login " }>
                  <Card.Header>
                    <h3 className="header text-center">Amigo Cliente Bienvenido!</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Body>
                      <Form.Group>
                        <label>Su Id Usuario</label>
                        <Form.Control
                          placeholder="Su Id Usuario"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Contraseña</label>
                        <Form.Control
                          placeholder="Su contraseña"
                          type="password"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Check className="pl-0">
                        <Form.Check.Label>
                          <Form.Check.Input
                            defaultChecked
                            type="checkbox"
                          ></Form.Check.Input>
                          <span className="form-check-sign"></span>
                          Suscribase a nuestro Boletin Informativo
                        </Form.Check.Label>
                      </Form.Check>
                    </Card.Body>
                  </Card.Body>
                  <Card.Footer className="ml-auto mr-auto">
                    <Button className="btn-wd" type="submit" variant="warning" onClick={goTo}
                     >
                      Continuar
                    </Button>
                  </Card.Footer>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
        <div
          className="full-page-background"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/full-screen-image-2.jpg").default +
              ")",
          }}
        ></div>
      </div>
    </>
  );
}

export default LoginCliente;
