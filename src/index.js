// index.js
// Redirecciona a uno de los tres perfiles
// /cliente Quien tramita las encuentas
// /consultor El responsable del manejo de la empresa
// /gerencia El Gerente de VENA


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/light-bootstrap-dashboard-pro-react.scss?v=2.0.0";
import "assets/css/demo.css";

import ClienteLayout from "layouts/Cliente.js";
import ConsultorLayout from "layouts/Empresa.js";
import GerenciaLayout from "layouts/Gerencia.js";
import LoginCliente from "views/Pages/LoginCliente.js"
import LoginEmpresa from "views/Pages/LoginEmpresa.js"
import Empresa from "layouts/Empresa.js"
import Gerencia from "layouts/Gerencia.js"
import Cliente from "layouts/Cliente.js"
import LoginGerencia from "views/Pages/LoginGerencia.js"
 

/* <Route path="/cliente" render={(props) => <ClienteLayout {...props} />} />
<Route path="/consultor" render={(props) => <ConsultorLayout {...props} />} />
<Route path="/gerencia" render={(props) => <GerenciaLayout {...props} />} />
<Redirect from="/" to="/cliente/login-cliente" />  

      <Route path="/cliente" render={(props) => <LoginCliente />} />
      <Route path="/consultor" render={(props) => <LoginEmpresa />} />
      <Route path="/gerencia" render={(props) => <LoginGerencia/>} />



*/

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cliente"  render={(props) => <Cliente />} />
      <Route path="/empresa"  render={(props) => <Empresa />} />
      <Route path="/gerencia" render={(props) => <Gerencia/>} />
      <Redirect from="/" exact to="/cliente/login-cliente" /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
