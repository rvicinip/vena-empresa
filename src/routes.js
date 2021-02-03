// Nombre: routes


import Dashboard from "views/Dashboard.js";
import LoginCliente from "views/Pages/LoginCliente.js";
import LoginEmpresa from "views/Pages/LoginEmpresa.js";
import LoginGerencia from "views/Pages/LoginGerencia.js";
import CambioClave from "views/Pages/CambioClave.js";
import Personal from "components/Personal.js";
import Inicio from "components/Inicio.js"
import Registro from "views/Pages/Registro.js"
import CapturaTiempos from "components/CapturaTiempos.js";

var routes = [ 
  {
    path: "/login-gerencia",
    layout: "/admin",
    name: "Login Gerencia",
    icon: "nc-icon nc-chart-pie-35",
    component: LoginGerencia,
  },
  {
    path: "/cambio-contrasena",
    layout: "/admin",
    name: "Cambio Contraseña",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
  },
  {
    path: "/dashboard-gerencia",
    layout: "/admin",
    name: "TableroGerencia",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
  },
  {
    path: "/empresas-gerencia",
    layout: "/admin",
    name: "Empresas",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
  },
  {
    path: "/consultores-vena",
    layout: "/admin",
    name: "TableroGerencia",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
  },
  {
    path: "/login-cliente",
    layout: "/cliente",
    name: "Login Cliente",
    icon: "nc-icon nc-circle-09",
    component: LoginCliente,
  },
  {
    path: "/cambio-contrasena-cliente",
    layout: "/cliente",
    name: "Cambio Contraseña",
    icon: "nc-icon nc-lock-circle-open",
    component: CambioClave,
  },
  {
    path: "/dashboard-cliente",
    layout: "/cliente",
    name: "Menu Actividades",
    icon: "pi pi-fw pi-home",
    component: Dashboard,
  },  
  {
    path: "/seleccion-actividades",
    layout: "/cliente",
    name: "Seleccion Actividades",
    icon: "nc-icon nc-bullet-list-67",
    component: Dashboard,
  },  
  {
    path: "/captura-frecuencias",
    layout: "/cliente",
    name: "Captura Frecuencias",
    icon: "nc-icon nc-watch-time",
    component: Inicio,
  },  
  {
    path: "/cierre-encuesta",
    layout: "/cliente",
    name: "Cierre Proceso",
    icon: "nc-icon nc-cloud-upload-94",
    component: Dashboard,
  },  
  {
    path: "/login-empresa",
    layout: "/consultor",
    name: "Login Empresa",
    icon: "nc-icon nc-chart-pie-35",
    component: LoginEmpresa,
  },
  {
    path: "/cambio-clave",
    layout: "/consultor",
    name: "Cambio Contraseñas",
    icon: "nc-icon nc-chart-pie-35",
    component: CambioClave,
  },
  {
    path: "/registro-consultor",
    layout: "/consultor",
    name: "Registro Consultor",
    icon: "nc-icon nc-chart-pie-35",
    component: Registro ,
  },  

  {
    path: "/tabla-personal",
    layout: "/consultor",
    name: "Personal",
    icon: "nc-icon nc-chart-pie-35",
    component: Personal,
  },
  {
    path: "/info-empresa",
    layout: "/consultor",
    name: "Info Empresa",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
  },
  {
    path: "/cierre-empresa",
    layout: "/consultor",
    name: "Cierre Empresa",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
  }
];
export default routes;
