import React from "react";
import { Switch, Route } from "react-router-dom";
// react-bootstrap components
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Pagination,
  Container,
  Row,
  Col,
} from "react-bootstrap";

// core components
import Sidebar from "components/Sidebar/Sidebar.js";
import EmpresaNavbar from "components/Navbars/EmpresaNavbar.js";
import EmpresaFooter from "components/Footers/EmpresaFooter.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

// dinamically create dashboard routes
import routes from "routes.js";

import image1 from "assets/img/full-screen-image-1.jpg";
import image2 from "assets/img/full-screen-image-2.jpg";
import image3 from "assets/img/full-screen-image-3.jpg";
import image4 from "assets/img/full-screen-image-4.jpg";

function Empresa() {
  const [sidebarImage, setSidebarImage] = React.useState(image3);
  const [sidebarBackground, setSidebarBackground] = React.useState("red");

  
  const getRoutes = (routes) => {
    console.log("Entro?");
    let arreglo = []
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/empresa") {
        arreglo.push(prop)
        console.log("Este es el arreglo: ",arreglo,prop)
        return (
          <Route
            path={prop.layout + prop.path}
            key={key}
            component={prop.component}
          />
        );
      } else {
        return null;
      }
    });
  };

  function filtradoRutas (routes) {
    let arreglo = []
    routes.map((prop, key) => {
      if (prop.layout === "/empresa") {
        arreglo.push(prop)
      } 
    });
    return arreglo
  }; 
  const rutasFiltradas = filtradoRutas(routes)

  return (
    <>
      <div className="wrapper">
        <Sidebar
          routes={rutasFiltradas}
          image={sidebarImage}
          background={sidebarBackground}
        />
        <div className="main-panel">
          <EmpresaNavbar />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <EmpresaFooter />
          <div
            className="close-layer"
            onClick={() =>
              document.documentElement.classList.toggle("nav-open")
            }
          />
        </div>
      </div>
      <FixedPlugin
        setSidebarImageParent={(value) => setSidebarImage(value)}
        sidebarDefaultImage={sidebarImage}
        sidebarImages={[image1, image2, image3, image4]}
        backgroundColors={[
          "black",
          "azure",
          "green",
          "orange", 
          "red",
          "purple",
        ]}
        backgroundColor={sidebarBackground}
        setSidebarBackgroundParent={(value) => setSidebarBackground(value)}
      />
    </>
  );
}

export default Empresa;
