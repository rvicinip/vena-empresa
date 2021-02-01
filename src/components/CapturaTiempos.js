import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ServicioNivel1 } from "services/ServicioNivel1";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Container, Row, DropdownButton, Dropdown } from "react-bootstrap";
import  Select from "react-select"




export const CapturaTiempos = () => {

// La primera 


  //  TABLA DE PERSONAL

  return (
    <div>
      <Container>
        <Row>
          <div col-4>
            <h1>Selección de Actividades</h1>
            <Select />
            <DropdownButton title="Nivel 1" key="1" id="dropdown-nivel1" onSelect={seleccionNivel1}>
              {itemNivel1.map((item1) => (
                <Dropdown.Item eventKey={item1.idNivel1}>
                  {item1.nombreNivel1}
                </Dropdown.Item>
              ))}

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


// <div>
// {/* specifies the tag for render the country DropDownList component */}
// <DropDownListComponent id="country-ddl" ref={(scope) => { this.countryObj = scope; }} 
// fields={this.countryField} dataSource={this.countryData} placeholder='Select a country' 
// change={this.onCountryChange = this.onCountryChange.bind(this)} />
// <br />

//  {/* specifies the tag for render the state DropDownList component */}
//  <DropDownListComponent id="state-ddl" ref={(scope) => { this.stateObj = scope; }} 
//  enabled={false} fields={this.stateField} dataSource={this.stateData} placeholder='Select a state' 
//  change={this.onStateChange = this.onStateChange.bind(this)} />
// <br />

//  {/* specifies the tag for render the city DropDownList component */}
// <DropDownListComponent id="city-ddl" ref={(scope) => { this.cityObj = scope; }} 
// enabled={false} fields={this.cityField} dataSource={this.cityData} placeholder='Select a city' />
// </div>
// );