import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Select from "react-select";

// Edicion Registro de tiempo desde el boton

function Actividad(props) {
  console.log("Props", props);
  // Modal Agregar Registro Tiempos
  const [isOpenModalRegistroTiempos, setIsOpenModalRegistroTiempos] = useState(
    false
  );
  const actividad = props.actividad;
  const frecuencia = props.frecuencia;
  let listaActividades = props.listaActividades;

  console.log("Componente Actividad");
  console.log("Actividad", actividad);
  console.log("Frecuencia, frecuencia");
  console.log("Lista Actividades", listaActividades);

  const manejarAperturaModalRegistroTiempos = () =>
    setIsOpenModalRegistroTiempos(true);

  const manejarCierreModalRegistroTiempos = () =>
    setIsOpenModalRegistroTiempos(false);

  const placeholderCantTpo = "Tiempo Estimado";
  const placeholderUnTpo = "Seleccione Unidad Tiempo";
  const placeholderFrecTpo = "Seleccione Frecuencia Actividad";

  const opcionesUnTpo = [
    { unidad: "minuto(s)", tipo: "0" },
    { unidad: "hora(s)", tipo: "1" },
    { unidad: "dia(s)", tipo: "2" },
  ];
  const [diccUnTpo, setDiccUnTpo] = useState([
    "minuto(s)",
    "hora(s)",
    "dia(s)",
  ]);
  const [diccFrecTpo, setDiccFrecTpo] = useState(null);

  const [cantTpo, setCantTpo] = useState(0);
  const [selectUnTpo, setSelectUnTpo] = useState(null);
  const [selectFrecTpo, setSelectFrecTpo] = useState(null);

  const [inhabilitarDropdownFrecTpo, setInhabilitarDropdownFrecTpo] = useState(
    true
  );

  useEffect(() => {
    if (selectUnTpo != null) {
      setDiccFrecTpo(
        frecuencia.filter((entrada) => entrada.tipo === selectUnTpo.tipo)
      );
    }
  }, [selectUnTpo]);

  const onChangeUnTpo = (obj) => {
    setSelectUnTpo(obj);
    setInhabilitarDropdownFrecTpo(false);
    setSelectFrecTpo(null);
  };

  const onChangeFrecTpo = (obj) => {
    setSelectFrecTpo(obj);
  };

  const onGrabacionRegistroTiempos = () => {

   // Se envia el conjunto de parametros para agregar un nuevo registro 
  // a la lista de actividades
    const novedad = {
      tipoNovedad: "M",
      registroNovedad: {
      id: actividad.id,
      idNivel: actividad.idNivel,
      nombreNivel: actividad.NombreNivel,
      descripcion: actividad.Descripcion,
      cantTpo: tcantTpo,
      selectTpo: selectTpo,
      selectFrecTpo: selectFrecTpo,
      }
    };
    setTablaImpresion(MantenimientoListaActividades(novedad={novedad}));  
    setCantTpo(tcantTpo);
    manejarCierreModalRegistroTiempos();
  };

  return (
    <tbody>
      <tr>
        <td id={actividad.id}>{actividad.idNivel}</td>
        <td>{actividad.nombreNivel}</td>
        <td>{actividad.descripcion}</td>
        <td>
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              onClick={manejarAperturaModalRegistroTiempos}
              variant="info"
              size="sm"
              className="text-info btn-link like"
            >
              <i className="fa fa-edit" />
            </Button>
            <Modal
              show={isOpenModalRegistroTiempos}
              onHide={manejarCierreModalRegistroTiempos}
            >
              <Modal.Header closeButton>
                <Modal.Title>Nuevo Registro de Tiempos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form-group">
                  <label>Cantidad</label>
                  <input
                    type="text"
                    name="tcantTpo"
                    id="tcantTpo"
                    placeholder="Tiempo Estimado"
                    className="form-control"
                    required
                  />
                </div>

                <Select
                  placeholder={placeholderUnTpo}
                  value={selectUnTpo}
                  options={opcionesUnTpo}
                  onChange={onChangeUnTpo}
                  getOptionName={(option) => option.unidad}
                  getOptionLabel={(option) => option.unidad}
                />

                <Select
                  placeholder={placeholderFrecTpo}
                  isDisabled={inhabilitarDropdownFrecTpo}
                  value={selectFrecTpo}
                  options={diccFrecTpo}
                  onChange={onChangeFrecTpo}
                  getOptionName={(option) => option.nombre}
                  getOptionLabel={(option) => option.nombre}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={manejarCierreModalRegistroTiempos}
                >
                  Cerrar
                </Button>
                <Button variant="primary" onClick={onGrabacionRegistroTiempos}>
                  Grabar Actividad
                </Button>
              </Modal.Footer>
            </Modal>
            {/* use this button to add a edit kind of action */}
            {/* use this button to remove the data row */}

            
            {/* <Button
              onClick={() => {
                var newData = data;
                newData.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    newData.splice(i, 1);
                    return true;
                  }
                  return false;
                });
                setData([...newData]);
              }}
              variant="danger"
              size="sm"
              className="btn-link remove text-danger"
            >
              <i className="fa fa-times" />
            </Button>{" "} */}
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default Actividad;
