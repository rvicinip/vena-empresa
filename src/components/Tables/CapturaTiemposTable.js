import React, { useState, useEffect } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

// core components
import ReactTable from "components/ReactTable/CapturaTiemposReactTable.js";


//   let arreglo=[];
//   let nivel="";
//   let i,j=0;
//   console.log (lista, lista.length);
//   for (i=0; i < lista.length; i++) {
//         if (lista[i].descripcion === undefined) {
//         arreglo.push([formatNivel(lista[i].idNivel), lista[i].nombreNivel," "])
//        } else {
//         arreglo.push([formatNivel(lista[i].idNivel), lista[i].nombreNivel,lista[i].descripcion.substr(0,50)])
// }}
//   return arreglo
// }

function CapturaTiemposTable(props) {
  function formatNivel(nivel) {
    var tempIdNivel = nivel.substring(0, 3);
    var nroNiveles = nivel.length / 3;
    var j;

    for (j = 1; j < nroNiveles; j++) {
      tempIdNivel = tempIdNivel + "-" + nivel.substr(j * 3, 3);
    }
    return tempIdNivel;
  }

  props.listaActividades.map((dato, index) =>
    console.log("Registro:", dato[0], dato[1], dato[2])
  );
  const dataTable = props.listaActividades;

  dataTable.map((prop, index) => {
    return {
      id: prop[0],
      idNivel: prop[1],
      nombreNivel: prop[2],
      descripcion: prop[3],
      actions: (
        // we've added some custom button actions
        <div className="actions-right">
          {/* use this button to add a like kind of action */}
          <Button
            onClick={() => {
              let obj = data.find((o) => o.id === key);
              alert(
                "You've clicked LIKE button on \n{ \nName: " +
                  obj.name +
                  ", \nposition: " +
                  obj.position +
                  ", \noffice: " +
                  obj.office +
                  ", \nage: " +
                  obj.age +
                  "\n}."
              );
            }}
            variant="info"
            size="sm"
            className="text-info btn-link like"
          >
            <i className="fa fa-heart" />
          </Button>{" "}
          {/* use this button to add a edit kind of action */}
          <Button
            onClick={() => {
              let obj = data.find((o) => o.id === key);
              alert(
                "You've clicked EDIT button on \n{ \nName: " +
                  obj.name +
                  ", \nposition: " +
                  obj.position +
                  ", \noffice: " +
                  obj.office +
                  ", \nage: " +
                  obj.age +
                  "\n}."
              );
            }}
            variant="warning"
            size="sm"
            className="text-warning btn-link edit"
          >
            <i className="fa fa-edit" />
          </Button>{" "}
          {/* use this button to remove the data row */}
          <Button
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
          </Button>{" "}
        </div>
      ),
    };
  });

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Body>
                <ReactTable
                  data={data}
                  columns={[
                    {
                      Header: "Id.",
                      accessor: "idNivel",
                      totalWidth: 20,
                    },
                    {
                      Header: "Nombre Nivel",
                      accessor: "nombreNivel",
                      MaxWidth: 30,
                    },
                    {
                      Header: "Descripción",
                      accessor: "descripcion",
                      width: 50,
                      sortable: false,
                      filterable: false,
                    },

                    {
                      Header: "Acciones",
                      accessor: "actions",
                      sortable: false,
                      filterable: false,
                    },
                  ]}
                  /*
                    You can choose between primary-pagination, info-pagination, success-pagination, warning-pagination, danger-pagination or none - which will make the pagination buttons gray
                  */
                  className="-striped -highlight primary-pagination"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CapturaTiemposTable;
