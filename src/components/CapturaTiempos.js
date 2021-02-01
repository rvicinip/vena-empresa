import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ServicioNivel1 } from "services/ServicioNivel1";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Container, Row, DropdownButton, Dropdown } from "react-bootstrap";

export const CapturaTiempos = () => {
  let [nivel1, setNivel1] = useState(null);
  let [nivel2, setNivel2] = useState(null);
  let [nivel3, setNivel3] = useState(null);

  let [itemNivel1, itemNivel2, itemNivel3] = []

//   let [itemNivel1, setItemNivel1] = useState([])
//   let [itemNivel2, setItemNivel2] = useState([])
//   let [itemNivel3, setItemNivel3] = useState([])

  const [globalFilterNivel1, setGlobalFilterNivel1] = useState("");
  const [loadingNivel1, setLoadingNivel1] = useState(true);

  //   useEffect(() => {
  //     const servicioNivel1 = new ServicioNivel1();
  //     servicioNivel1.getNivel1().then((data) => {
  //       setNivel1(data);
  //       setLoadingNivel1(false);
  //     });
  //   }, []);

  let seleccionNivel1 = (e) => {
    setNivel1(e)
    console.log("Nivel 1 capturado", nivel1)
  }

  let seleccionNivel2= (e) => {
    setNivel2(e)
    console.log("Nivel 2 capturado", nivel2)
  }

  let seleccionNivel3= (e) => {
    setNivel3(e)
    console.log("Nivel 3 capturado", nivel3)
  }


  itemNivel1 = require("../assets/databases/Nivel1.json");
  itemNivel2 = require("../assets/databases/Nivel2.json");
  itemNivel3 = require("../assets/databases/Nivel3.json");
  console.log("Arreglo Nivel1", itemNivel1); 
  console.log("Arreglo Nivel2", itemNivel2); 
  console.log("Arreglo Nivel3", itemNivel3); 

  //  TABLA DE PERSONAL

  return (
    <div>
      <Container>
        <Row>
          <div col-4>
            <h1>Selección de Actividades</h1>
            <DropdownButton title="Nivel 1" key="1" id="dropdown-nivel1" onSelect={seleccionNivel1}>
              {itemNivel1.map((item1) => (
                <Dropdown.Item eventKey={item1.idNivel1}>
                  {item1.nombreNivel1}
                </Dropdown.Item>
              ))}
              selNivel1=eventKey
            </DropdownButton>
            <DropdownButton title="Nivel 2" key="2" id="dropdown-nivel2" onSelect={seleccionNivel2} >
              {itemNivel2.map((item2) => (
                <Dropdown.Item eventKey={item2.idNivel2}>
                  {item2.nombreNivel2}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <DropdownButton title="Nivel 3" key="3" id="dropdown-nivel3" onSelect={seleccionNivel3}>
              {itemNivel3.map((item3) => (
                <Dropdown.Item eventKey={item3.idNivel3}>
                  {item3.nombreNivel3}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <h3>Seleccionamos Nivel 1 {nivel1}</h3>
            <h3>Seleccionamos Nivel 2 {nivel2}</h3>
            <h3>Seleccionamos Nivel 3 {nivel3}</h3>
          </div>
          <div col-8></div>
        </Row>
      </Container>
    </div>
  );
};
