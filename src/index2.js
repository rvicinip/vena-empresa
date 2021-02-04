import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/light-bootstrap-dashboard-pro-react.scss?v=2.0.0";
import "assets/css/demo.css";
import Inicio from "components/Inicio.js"


import LoginPage from "views/Pages/LoginCliente.js"
  
/*ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);*/

import { CapturaTiempos } from "components/CapturaTiempos"
import { components } from "react-select";

// ReactDOM.render(
//   <BrowserRouter>
//     <Inicio />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <div>
    <LoginPage />
  </div>,
  document.getElementById("root")
);


