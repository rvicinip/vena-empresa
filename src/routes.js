// Nombre: routes


import Dashboard from  "views/Dashboard.js";
import EmpresaDashboard from  "components/dashboards/EmpresaDashboard.js";
import LoginCliente from "views/Pages/LoginCliente.js";
import LoginEmpresa from "views/Pages/LoginEmpresa.js";
import LoginGerencia from "views/Pages/LoginGerencia.js";
import CambioClave from "views/Pages/CambioClave.js";
import Inicio from "components/Inicio.js";
import Registro from "views/Pages/Registro.js";
import CapturaTiempos from "components/CapturaTiempos.js";
import PaginaUsuarioEmpresa from "views/Pages/PaginaUsuarioEmpresa.js";
import PersonalTable from "components/Tables/PersonalTable.js"
import DiccionarioTable from "components/Tables/DiccionarioTable.js"

import Cliente from "layouts/Cliente.js"

var routes = [ 
  {
    path: "/login-cliente",
    layout: "/cliente",
    name: "Login Cliente",
    icon: "nc-icon nc-circle-09",
    tablero: false,
    component: LoginCliente,
  },
  {
    path: "/cambio-contrasena-cliente",
    layout: "/cliente",
    name: "Cambio Contraseña",
    icon: "nc-icon nc-lock-circle-open",
    tablero: false,    
    component: CambioClave,
  },
  {
    path: "/dashboard-cliente",
    layout: "/cliente",
    name: "Menu Actividades",
    icon: "pi pi-fw pi-home",
    tablero: true,
    component: Cliente,
  },  
  {
    path: "/seleccion-actividades",
    layout: "/cliente",
    name: "Seleccion Actividades",
    icon: "nc-icon nc-bullet-list-67",
    tablero: true,
    component: Dashboard,
  },  
  {
    path: "/captura-frecuencias",
    layout: "/cliente",
    name: "Captura Frecuencias",
    icon: "nc-icon nc-watch-time",
    tablero: true,
    component: Inicio,
  },  
  {
    path: "/cierre-encuesta",
    layout: "/cliente",
    name: "Cierre Proceso",
    icon: "nc-icon nc-cloud-upload-94",
    tablero: true,
    component: Dashboard,
  },
  {
    path: "/login-gerencia",
    layout: "/gerencia",
    name: "Login Gerencia",
    icon: "nc-icon nc-cicle-09",
    tablero: false,
    component: LoginGerencia,
  },
  {
    path: "/cambio-contrasena",
    layout: "/gerencia",
    name: "Cambio Contraseña",
    icon: "nc-icon nc-lock-circle-open",
    tablero: false,
    component: Dashboard,
  },
  {
    path: "/dashboard-gerencia",
    layout: "/gerencia",
    name: "Tablero Gerencia",
    icon: "nc-icon nc-chart-pie-35",
    tablero: true,
    component: Dashboard,
  },
  {
    path: "/empresas-gerencia",
    layout: "/gerencia",
    name: "Empresas",
    icon: "pi pi-fw pi-sitemap",
    tablero: true,
    component: Dashboard,
  },
  {
    path: "/consultores-vena",
    layout: "/gerencia",
    name: "TableroGerencia",
    icon: "pi pi-fw pi-users",
    tablero: true,
    component: Dashboard,
  },
  {
    path: "/login-empresa",
    layout: "/empresa",
    name: "Login Consultor",
    icon: "nc-icon nc-circle-09",
    tablero: false,
    component: LoginEmpresa,
  },
    {
    path: "/cambio-clave",
    layout: "/empresa",
    name: "Cambio Contraseña",
    icon: "nc-icon nc-lock-circle-open",
    tablero: false,
    component: CambioClave,
  },
  {
    path: "/registro-empresa",
    layout: "/empresa",
    name: "Registro empresa",
    icon: "nc-icon nc-single-02",
    tablero: false,
    component: Registro ,
  },
  {
    path: "/datos-consultor",
    layout: "/empresa",
    name: "Página Usuario",
    icon: "nc-icon nc-button-power",
    tablero: false,
    component: PaginaUsuarioEmpresa,

  },
  {
    path: "/info-empresa",
    layout: "/empresa",
    name: "Tablero Control",
    icon: "nc-icon nc-chart-bar-32",
    tablero: false,
    component: EmpresaDashboard,
  },
  {
    path: "/tabla-personal",
    layout: "/empresa",
    name: "Seguimiento Proceso",
    icon: "nc-icon nc-single-02",
    mini: "B",
    tablero: true,
    component: PersonalTable,
  },
  {
    collapse: true,
    layout: "/empresa",
    name: "Referencias",
    state: "openComponents",
    tablero: true,
    icon: "nc-icon nc-app",
    views: 
    [
      {
        path: "/diccionario",
        layout: "/empresa",
        name: "Diccionario",
        mini: "AC",
        tablero: true,
        component: DiccionarioTable,
      },
      {
        path: "/frecuencias",
        layout: "/empresa",
        name: "Tabla Frecuencias",
        mini: "FR",
        tablero: true,
        component: Dashboard,
      }
    ]
  },  

  {
    path: "/cierre-empresa",
    layout: "/empresa",
    name: "Cierre Empresa",
    icon: "nc-icon nc-cloud-upload-94",
    tablero: true,
    component: Dashboard,
  },
  {
    path: "/logoff",
    layout: "/empresa",
    name: "Terminar Sesión",
    icon: "nc-icon nc-button-power",
    tablero: true,
    component: Dashboard,

  }
  ];
export default routes;
