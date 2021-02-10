import React from "react";

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
import ReactTable from "components/ReactTable/ReactTable.js";

function crearDataTabla () {
const JSONTabla = [
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Minuto",
    tipo: "1",
    valor: "0.016667",
    unidad: "hora"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Hora",
    tipo: "1",
    valor: "1",
    unidad: "hora"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Dia",
    tipo: "1",
    valor: "8",
    unidad: "hora"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Semana",
    tipo: "1",
    valor: "40",
    unidad: "hora"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Quincena",
    tipo: "1",
    valor: "80",
    unidad: "hora"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Mes",
    tipo: "1",
    valor: "160",
    unidad: "hora"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Bimestre",
    tipo: "1",
    valor: "320",
    unidad: "hora"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Trimestre",
    tipo: "1",
    valor: "480",
    unidad: "hora"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Semestre",
    tipo: "1",
    valor: "960",
    unidad: "hora"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Año",
    tipo: "1",
    valor: "1920",
    unidad: "hora"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Dia",
    tipo: "2",
    valor: "1",
    unidad: "día"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Semana",
    tipo: "2",
    valor: "5",
    unidad: "día"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Quincena",
    tipo: "2",
    valor: "10",
    unidad: "día"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Mes",
    tipo: "2",
    valor: "20",
    unidad: "día"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Bimestre",
    tipo: "2",
    valor: "40",
    unidad: "día"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Trimestre",
    tipo: "2",
    valor: "60",
    unidad: "día"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Semestre",
    tipo: "2",
    valor: "120",
    unidad: "día"
  },
  {
    empresa: "60155c7052eab65a94b04d10",
    nombre: "Año",
    tipo: "2",
    valor: "240",
    unidad: "día"
  },
];


// var objetoTabla = JSON.parse(JSONtabla)

  let arreglo=[]
  let i=0
  for (i=0; i < JSONTabla.length; i++) {
      arreglo.push([JSONTabla[i].nombre,JSONTabla[i].tipo,JSONTabla[i].valor,JSONTabla[i].unidad])
  }
  return arreglo  
}

const dataTable = crearDataTabla()

function FrecuenciasTable() 
{
  const [data, setData] = React.useState(
    dataTable.map((prop, key) => {

      console.log ("prop Frecuencias", prop)
      return {
        id: key,
        nombre: prop[0],
        tipo: prop[1],
        valor: prop[2],
        unidad: prop[3],

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
    })
  );
  return (
    <>
      <Container fluid>
        <Row>  
          <Col md="12">
            <h4 className="title">Tabla de Frecuencias</h4>
            <p className="category">
              Existe una tabla de frecuencias particular para cada empresa la cual los consultores tienen para su revisión
            </p>
            <Card>
              <Card.Body>
                <ReactTable
                  data={data}
       
                  columns={[
                    {
                      Header: "Nombre",
                      accessor: "nombre",
                    },
                    {
                      Header: "Tipo",
                      accessor: "tipo",
                    },
                    {
                      Header: "Valor",
                      accessor: "valor",
                    },
                    {
                      Header: "Unidad",
                      accessor: "unidad",
                      sortable: false,
                      filterable: false
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

export default FrecuenciasTable;
