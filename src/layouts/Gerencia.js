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
import GerenciaNavbar from "components/Navbars/GerenciaNavbar.js";
import GerenciaFooter from "components/Footers/GerenciaFooter.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";

// dinamically create dashboard routes
import routes from "routes.js";

import image1 from "assets/img/full-screen-image-1.jpg";
import image2 from "assets/img/full-screen-image-2.jpg";
import image3 from "assets/img/full-screen-image-3.jpg";
import image4 from "assets/img/full-screen-image-4.jpg";

function Gerencia() {
  const [sidebarImage, setSidebarImage] = React.useState(image3);
  const [sidebarBackground, setSidebarBackground] = React.useState("black");
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/gerencia") {
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
  return (
    <>
      <div className="wrapper">
        <Sidebar
          routes={routes}
          image={sidebarImage}
          background={sidebarBackground}
        />
        <div className="main-panel">
          <GerenciaNavbar />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <GerenciaFooter />
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

export default Gerencia;
