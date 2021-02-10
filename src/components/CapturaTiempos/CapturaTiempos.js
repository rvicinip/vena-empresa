// Componente: CapturaTiempos.js
// Autor: Reinaldo Vicini
// Fecha: 2021/02/09
// Descripcion:
// Parametros:
//

import React, { useState, useEffect, useRef } from "react";
import { Button } from "primereact/button";
import {
  Table,
  Container,
  Row,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { PrimeIcons } from 'primereact/api';
import Select from "react-select";

import { v4 as uuidv4 } from "uuid";

// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { ServicioDiccionario } from "services/ServicioDiccionario";
// import { InputText } from "primereact/inputtext";
// import { Dialog } from "primereact/dialog";

// import PropTypes from "prop-types";
// import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

function CapturaTiempos(props) {
  const empresa = props.datos.dato1;
  const empleado = props.datos.dato2;
  const frecuencia = props.datos.dato4;
  const diccionario = props.datos.dato5;
  let reporteTiempos = props.datos.dato6;
  let formatDescripcion;

  const tablas = props.datos.dato3;

  const placeholderN1 = "Seleccione ".concat(tablas[0], "...");
  const placeholderN2 = "Seleccione ".concat(tablas[1], "...");
  const placeholderN3 = "Seleccione ".concat(tablas[2], "...");

  const [selectN1, setSelectN1] = useState(null);
  const [selectN2, setSelectN2] = useState(null);
  const [selectN3, setSelectN3] = useState(null);
  const [listaActividades, setListaActividades] = useState([]);

  const [diccN1, setDiccN1] = useState(() =>
    diccionario.filter((entrada) => entrada.idNivelPadre === "0")
  );
  const [diccN2, setDiccN2] = useState(null);
  const [diccN3, setDiccN3] = useState(null);

  const [inhabilitarDropdownN2, setInhabilitarDropdownN2] = useState(true);
  const [inhabilitarDropdownN3, setInhabilitarDropdownN3] = useState(true);

  const [descripcionDef, setDescripcionDef] = useState(null);

  function formatNivel(nivel) {
    var tempIdNivel = nivel.substring(0, 3);
    var nroNiveles = nivel.length / 3;
    var j;

    for (j = 1; j < nroNiveles; j++) {
      tempIdNivel = tempIdNivel + "-" + nivel.substr(j * 3, 3);
    }
    return tempIdNivel;
  };

  useEffect(() => {
    if (selectN1 != null) {
      setDiccN2(
        diccionario.filter(
          (entrada) => entrada.idNivelPadre === selectN1.idNivel
        )
      );
    }
  }, [selectN1]);

  useEffect(() => {
    if (selectN2 != null) {
      setDiccN3(
        diccionario.filter(
          (entrada) => entrada.idNivelPadre === selectN2.idNivel
        )
      );
    }
  }, [selectN2]);

  const onChangeN1 = (obj) => {
    setSelectN1(obj);
    setInhabilitarDropdownN2(false);
    setInhabilitarDropdownN3(true);
    setSelectN2(null);
    setSelectN3(null);
  };

  const onChangeN2 = (obj) => {
    setSelectN2(obj);
    setInhabilitarDropdownN3(false);
    setSelectN3(null);
  };

  const onChangeN3 = (obj) => {
    setSelectN3(obj);
    console.log("Display Seleccion", obj, typeof descripcionDef);
    typeof descripcionDef !== undefined
      ? setDescripcionDef(obj.descripcion.substr(0, 250))
      : setDescripcionDef(null);
  };

  const onGrabacion = () => {
    console.log("Entrooo ", selectN3);
    const nuevaListaActividades = listaActividades.concat({
      id: uuidv4(),
      idNivel: formatNivel(selectN3.idNivel),
      nombreNivel: selectN3.nombreNivel,
      descripcion: selectN3.descripcion.substr(0, 250),
    });
    setListaActividades(nuevaListaActividades);
    console.log(listaActividades);
  };

  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <h5>Selección de Actividades</h5>
            <Select
              placeholder={placeholderN1}
              value={selectN1}
              options={diccN1}
              onChange={onChangeN1}
              getOptionName={(option) => option.idNivel}
              getOptionLabel={(option) => option.nombreNivel}
            />

            <Select
              placeholder={placeholderN2}
              isDisabled={inhabilitarDropdownN2}
              value={selectN2}
              options={diccN2}
              onChange={onChangeN2}
              getOptionName={(option) => option.idNivel}
              getOptionLabel={(option) => option.nombreNivel}
            />

            <Select
              placeholder={placeholderN3}
              isDisabled={inhabilitarDropdownN3}
              value={selectN3}
              options={diccN3}
              onChange={onChangeN3}
              getOptionName={(option) => option.idNivel}
              getOptionLabel={(option) => option.nombreNivel}
            />
          </div>
          <div className="col-md-5">
            <h5 style={{ top: 20 }}>Descripción</h5>
            <p> {descripcionDef}</p>
          </div>
          <div className="col-md-1"></div>
        </Row>
        <Row>
          <div className="col-md-1"></div>
          <div className="col-md-10" text-align-center="true">
            <Button
              onClick={onGrabacion}
              variant="primary"
              size="sm"
              className="btn-wd mr-1"
            >
              Grabar
            </Button>
          </div>
          <div className="col-md-1"></div>
        </Row>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="width-10">Id.</th>
                <th className="width-30">Nombre</th>
                <th className="width-40">Descripción</th>
                <th className="width-10">Status</th>
                <th className="width-10">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {listaActividades.map((item) => (
                <tr id={item.id} key={item.id}>
                  <td>{item.idNivel}</td>
                  <td>{item.nombreNivel}</td>
                  <td>{item.descripcion}</td>
                  <td className="">
                    <span className="product-badge status-instock">INSTOCK</span>
                  </td>
                  <td>
                    <button className="p-button p-component p-button-rounded p-button-success p-mr-2 p-button-icon-only">
                      <span className="nc nc-zoom-split nc-c"></span>
                      <span className="p-button-label p-c">&nbsp;</span>
                      <span
                        className="p-ink"
                        style={{height: 33, width: 33, top: 10.5, left: 8.5}}/>
                    </button>
                    <button className="p-button p-component p-button-rounded p-button-warning p-button-icon-only">
                      <span className="pi pi-trash p-c"></span>
                      <span className="p-button-label p-c">&nbsp;</span>
                      <span className="p-ink"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default CapturaTiempos;
