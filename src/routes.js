// Nombre: routes


import Dashboard from "views/Dashboard.js";
import LoginCliente from "views/Pages/LoginCliente.js";
import LoginEmpresa from "views/Pages/LoginEmpresa.js";
import LoginGerencia from "views/Pages/LoginGerencia.js";
import CambioClave from "views/Pages/CambioClave.js";
import {Personal} from "components/Personal.js";
import Inicio from "components/Inicio.js";
import Registro from "views/Pages/Registro.js";
import CapturaTiempos from "components/CapturaTiempos.js";

var routes = [ 
  {
    path: "/login-gerencia",
    layout: "/gerencia",
    name: "Login Gerencia",
    icon: "nc-icon nc-cicle-09",
    component: LoginGerencia,
  },
  {
    path: "/cambio-contrasena",
    layout: "/gerencia",
    name: "Cambio Contraseña",
    icon: "nc-icon nc-lock-circle-open",
    component: Dashboard,
  },
  {
    path: "/dashboard-gerencia",
    layout: "/gerencia",
    name: "TableroGerencia",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
  },
  {
    path: "/empresas-gerencia",
    layout: "/gerencia",
    name: "Empresas",
    icon: "pi pi-fw pi-sitemap",
    component: Dashboard,
  },
  {
    path: "/consultores-vena",
    layout: "/gerencia",
    name: "TableroGerencia",
    icon: "pi pi-fw pi-users",
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
    icon: "nc-icon nc-circle-09",
    component: LoginEmpresa,
  },
  {
    path: "/cambio-clave",
    layout: "/consultor",
    name: "Cambio Contraseñas",
    icon: "nc-icon nc-lock-circle-open",
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
    icon: "pi pi-fw pi-users",
    component: Personal,
  },
  {
    path: "/info-empresa",
    layout: "/consultor",
    name: "Info Empresa",
    icon: "pi pi-fw pi-sitemap",
    component: Dashboard,
  },
  {
    path: "/cierre-empresa",
    layout: "/consultor",
    name: "Cierre Empresa",
    icon: "pi pi-fw pi-check-circle",
    component: Dashboard,
  }
];
export default routes;
