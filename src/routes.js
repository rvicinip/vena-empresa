// Nombre: routes


import Dashboard from "views/Dashboard.js";
import LoginCliente from "views/Pages/LoginCliente.js";
import LoginEmpresa from "views/Pages/LoginEmpresa.js";
import LoginGerencia from "views/Pages/LoginGerencia.js";
import CambioClave from "views/Pages/CambioClave.js";
import Personal from "components/Personal.js";
import { CapturaTiempos } from "components/CapturaTiempos.js";

var routes = [
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
  },
  {
    path: "/login-cliente",
    layout: "/auth",
    name: "Login Cliente",
    icon: "nc-icon nc-chart-pie-35",
    component: LoginCliente,
  },
  {
    path: "/login-gerencia",
    layout: "/auth",
    name: "Login Gerencia",
    icon: "nc-icon nc-chart-pie-35",
    component: LoginGerencia,
  },
  {
    path: "/login-empresa",
    layout: "/auth",
    name: "Login Empresa",
    icon: "nc-icon nc-chart-pie-35",
    component: LoginEmpresa,
  },
  {
    path: "/cambio-clave",
    layout: "/auth",
    name: "Cambio Contraseñas",
    icon: "nc-icon nc-chart-pie-35",
    component: CambioClave,
  },
  {
    path: "/tabla-personal",
    layout: "/admin",
    name: "Tabla Personal",
    icon: "nc-icon nc-chart-pie-35",
    component: CambioClave,
  },
  {
    path: "/captura-tiempos",
    layout: "/admin",
    name: "Registro de Tiempos",
    icon: "nc-icon nc-chart-pie-35",
    component: CapturaTiempos,
  },
];
export default routes;
