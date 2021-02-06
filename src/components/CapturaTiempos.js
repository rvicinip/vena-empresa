import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ServicioDiccionario } from "services/ServicioDiccionario";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Container, Row, DropdownButton, Dropdown } from "react-bootstrap";
import Select from "react-select";
import PropTypes from "prop-types";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import CapturaTiemposTable from "components/Tables/CapturaTiemposTable.js"

function CapturaTiempos(props) {

  
  const empresa = props.datos.dato1;
  const empleado = props.datos.dato2;
  const tablas = props.datos.dato3;
  const frecuencia = props.datos.dato4;
  const diccionario = props.datos.dato5;
  let reporteTiempos = props.datos.dato6;
  const placeholderN1 = "Seleccione ".concat(tablas[0],"...")
  const placeholderN2 = "Seleccione ".concat(tablas[1],"...")
  const placeholderN3 = "Seleccione ".concat(tablas[2],"...")

  const [selectN1, setSelectN1] = useState(null);
  const [selectN2, setSelectN2] = useState(null);
  const [selectN3, setSelectN3] = useState(null);

  const [diccN1, setDiccN1] = useState(() => diccionario.filter(entrada => entrada.idNivelPadre==="0"));
  const [diccN2, setDiccN2] = useState(null);
  const [diccN3, setDiccN3] = useState(null);

  const [inhabilitarDropdownN2, setInhabilitarDropdownN2] = useState(true);
  const [inhabilitarDropdownN3, setInhabilitarDropdownN3] = useState(true);

  const [descripcionDef, setDescripcionDef] = useState(null)


  
  useEffect(() => {
    console.log("INICIALIZACION DE DICCIONARIO");
    console.log("Valor Inicial de Diccionario N1:", diccN1);


},[ ]) 

useEffect(() => {
    if (selectN1 != null) {
      setDiccN2(diccionario.filter(entrada => entrada.idNivelPadre===selectN1.idNivel))
      console.log(selectN1.idNivel, "DiccN2", diccN2)
    } 
    
    
},[selectN1])
  
useEffect(() => {
  console.log("Cambió N2", selectN2);
  console.log("INICIALIZACION DE DICCIONARIO NIVEL 3");
  console.log("selectN1",selectN1)
  console.log("selectN2",selectN2)
  if (selectN2 != null) {
    setDiccN3(diccionario.filter(entrada => entrada.idNivelPadre===selectN2.idNivel))
    console.log(selectN2.idNivel, "DiccN3", diccN3)
  } 
  
  
},[selectN2])
 


  const onChangeN1  = obj => {
    setSelectN1(obj)  
    setInhabilitarDropdownN2(false) 
    setInhabilitarDropdownN3(false)     
    setSelectN2(null)
    setSelectN3(null)       
  };

  const onChangeN2  = obj => {
    setSelectN2(obj)  
    setInhabilitarDropdownN3(false)     
    setSelectN3(null)   
  };

  const onChangeN3  = obj => {
    setSelectN3(obj)  
    setDescripcionDef(obj.descripcion)
    
  };


  return (
    <div>
      <Container>
        <Row>
          <div className="col-md-3">
          </div>
          <div className = "col-md-6">
            <h3>Selección de Actividades</h3>
            <Select 
            placeholder = {placeholderN1}
            value = {selectN1}
            options={diccN1}
            onChange={onChangeN1}
            getOptionName={option => option.idNivel}
            getOptionLabel={option => option.nombreNivel}/>



            <Select 
            placeholder = {placeholderN2}
            isDisabled = {inhabilitarDropdownN2}
            value = {selectN2}
            options={ diccN2 }
            onChange={onChangeN2}
            getOptionName={option => option.idNivel}
            getOptionLabel={option => option.nombreNivel}/>



            <Select 
            placeholder = {placeholderN3}
            isDisabled = {inhabilitarDropdownN3}
            value = {selectN3}
            options={ diccN3 }
            onChange={onChangeN3}
            getOptionName={option => option.idNivel}
            getOptionLabel={option => option.nombreNivel}/>


          </div>
          <div className="col-md-3">
          </div>
        </Row>
        <Row>
          <CapturaTiemposTable/>
        </Row>
      </Container>
    </div>
  );
}

export default CapturaTiempos;

