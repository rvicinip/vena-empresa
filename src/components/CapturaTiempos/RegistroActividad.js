// Componente: CapturaTiempos.js
// Autor: Reinaldo Vicini
// Fecha: 2021/02/09
// Descripcion:
// Parametros:
//

import React, { useState, useEffect, useRef } from "react";
import { ScrollPanel } from "primereact/scrollpanel";
import MantenimientoListaActividades from "components/CapturaTiempos/MantenimientoListaActividades.js"
import Actividad from 'components/CapturaTiempos/Actividad.js'
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

import {
  Modal,
  Button,
  Table,
  Container,
  Row,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";


function RegistroActividad(props) {

  const empresa = props.datos.dato1;
  const empleado = props.datos.dato2;
  const frecuencia = props.datos.dato4;
  const diccionario = props.datos.dato5;
  let reporteTiempos = props.datos.dato6;
  let formatDescripcion;


  const tablas = props.datos.dato3;

  const ModalBorrarActividad = () => {
    return (
      <div>
        <div id="deleteEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Borrar Actividades</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    Está seguro que desea borrar estos registros de tiempos?
                  </p>
                  <p className="text-warning">
                    <small>Esta acción no podrá deshacerse.</small>
                  </p>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    value="Cancelar"
                  />
                  <input
                    type="submit"
                    className="btn btn-danger"
                    value="Borrar"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

 
  // Modal Agregar Nueva Actividad
  const [isOpenModalNuevaActividad, setIsOpenModalNuevaActividad] = useState(
    false
  );

  const manejarAperturaModalNuevaActividad = () =>
    setIsOpenModalNuevaActividad(true);
  const manejarCierreModalNuevaActividad = () =>
    setIsOpenModalNuevaActividad(false);

  const placeholderN1 = "Seleccione ".concat(tablas[0], "...");
  const placeholderN2 = "Seleccione ".concat(tablas[1], "...");
  const placeholderN3 = "Seleccione ".concat(tablas[2], "...");

  const [selectN1, setSelectN1] = useState(null);
  const [selectN2, setSelectN2] = useState(null);
  const [selectN3, setSelectN3] = useState(null);
  // const [listaActividades, setListaActividades] = useState([]);

  const [diccN1, setDiccN1] = useState(() =>
    diccionario.filter((entrada) => entrada.idNivelPadre === "0")
  );
  const [diccN2, setDiccN2] = useState(null);
  const [diccN3, setDiccN3] = useState(null);

  const [inhabilitarDropdownN2, setInhabilitarDropdownN2] = useState(true);
  const [inhabilitarDropdownN3, setInhabilitarDropdownN3] = useState(true);

  const [descripcionDef, setDescripcionDef] = useState(null);

  const [tablaImpresion,setTablaImpresion] = useState([])

  function formatNivel(nivel) {
    var tempIdNivel = nivel.substring(0, 3);
    var nroNiveles = nivel.length / 3;
    var j;

    for (j = 1; j < nroNiveles; j++) {
      tempIdNivel = tempIdNivel + "-" + nivel.substr(j * 3, 3);
    }
    return tempIdNivel;
  }

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
  // Se envia el conjunto de parametros para agregar un nuevo registro 
  // a la lista de actividades
    const novedad = {
      tipoNovedad: "A",
      registroNovedad: {
      id: uuidv4(),
      idNivel: formatNivel(selectN3.idNivel),
      nombreNivel: selectN3.nombreNivel,
      descripcion: selectN3.descripcion.substr(0, 250),
      cantTpo: 0,
      selectTpo: null,
      selectFrecTpo: null,
      }
    };
    var nuevaTablaImpresion = MantenimientoListaActividades(novedad={novedad})
    setTablaImpresion(nuevaTablaImpresion);



    manejarCierreModalNuevaActividad();
  };
  const DetalleActividades = tablaImpresion.map((actividad) => 
   <Actividad key={actividad.id} actividad={actividad} frecuencia={frecuencia}/>)

  return (
    <div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>
                    Registro  <b>Actividades</b>
                  </h2>
                </div>
                <div className="col-sm-6">

                  <Button
                    onClick={manejarAperturaModalNuevaActividad}
                    variant="success"
                    size="sm"
                    className="btn btn-success"
                  >
                    Agregar Nueva Actividad
                  </Button>

                  <Modal
                    show={isOpenModalNuevaActividad}
                    onHide={manejarCierreModalNuevaActividad}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Agregar Nueva Actividad</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                      <div>
                        <h5 style={{ top: 20 }}>Descripción</h5>
                        <ScrollPanel style={{ width: "100%", height: "120px" }}>
                          {descripcionDef}
                        </ScrollPanel>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={manejarCierreModalNuevaActividad}
                      >
                        Cerrar
                      </Button>
                      <Button variant="primary" onClick={onGrabacion}>
                        Grabar Actividad
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  {/* <Button
                    onClick={() => <ModalBorrarActividad />}
                    variant="danger"
                    size="sm"
                    className="btn btn-danger"
                  >
                    Borrar
                  </Button> */}

                  {/* <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Agregar nueva actividad</span></a>
						            <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons">&#xE15C;</i> <span>Borrar</span></a>						 */}
                </div>
              </div>
            </div>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Id.</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Status</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              {DetalleActividades}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroActividad;
