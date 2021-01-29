// Componente: CambioClave.js
// Autor: Reinaldo Vicini
// Fecha: 2021/01/29
// Descripcion: Módulo que cambia la clave. Digita la nueva y si coinciden envia la petición al servidor para su cambio 
// Parametros:  
//
 

import React from "react";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Col,
} from "react-bootstrap";

function CambioClave() {
  const [cardClasses, setCardClasses] = React.useState("card-hidden");
  React.useEffect(() => {
    setTimeout(function () {
      setCardClasses("");
    }, 1000);
  });
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
                <Card className={"card-login " + cardClasses}>
                  <Card.Header>
                    <h3 className="header text-center">Cambio Contraseña</h3>
                  </Card.Header>
                  <Card.Body>
                      <Form.Group>
                        <label>Nueva Contraseña</label>
                        <Form.Control
                          placeholder="Su nueva contraseña"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                      <Form.Group>
                        <label>Confirme nueva contraseña</label>
                        <Form.Control
                          placeholder="Su nueva contraseña"
                          type="password"
                        ></Form.Control>
                      </Form.Group>
                  </Card.Body>
                  <Card.Footer className="ml-auto mr-auto">
                    <Button className="btn-wd" type="submit" variant="warning">
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
              require("assets/img/Arbol.jpg").default +
              ")",
          }}
        ></div>
      </div>
    </>
  );
}

export default CambioClave;
