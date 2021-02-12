// Componente: RegristroTiempos.js
// Autor: Reinaldo Vicini
// Fecha: 2021/02/11
// Descripcion: Nosp ermite capturar el registro de tiempos de la actividad
// Parametros:
//

import React,{useState, useEffect} from "react";



function RegistroTiempos() {


  // Modal Agregar Registro Tiempos
  const [isOpenModalRegistroTiempos, setIsOpenModalRegistroTiempos] = useState(
    false
  );

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

  const [selectUnTpo, setSelectUnTpo] = useState(null);
  const [selectFrecTpo, setSelectFrecTpo] = useState(null);

  const [inhabilitarDropdownFrecTpo, setInhabilitarDropdownFrecTpo] = useState(
    true
  );

  useEffect(() => {
    if (selectUnTpo != null) {
      console.log("SelectUnTipo", selectUnTpo, "Frecuencias:", frecuencia);
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
    // const nuevaListaActividades = listaActividades.concat({
    //   id: uuidv4(),
    //   idNivel: formatNivel(selectN3.idNivel),
    //   nombreNivel: selectN3.nombreNivel,
    //   descripcion: selectN3.descripcion.substr(0, 250),
    // });
    // setListaActividades(nuevaListaActividades);
    // console.log(listaActividades);

    manejarCierreModalRegistroTiempos();
  };


  return (
    <div>
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
            <input type="text" className="form-control" required />
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
    </div>
  );
}

export default RegistroTiempos;
