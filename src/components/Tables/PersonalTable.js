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
  "_id": {
    "$oid": "601c3c0487f4a01b6ad64727"
  },
  "id_usuario": 71788316,
  "clave": "$2b$12$hgWJLgwtR6Q2H9aN.bF5pusyZWDrT4BihqkqqdyxrR.pvGW0hyMVq",
  "nombre": "Alvaro Velasquez",
  "salario": 2500000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "avelasquez@venaycia.com",
  "cargo": "CEO",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},
{
  "_id": {
    "$oid": "601575771a74ac9e08ff723f"
  },
  "id_usuario": "12345678",
  "clave": "$2b$12$dxmV4Dmt.3Yy.Li7tnx0QOPPBQ4.tkrbkECO1ClzOlIV8vzwTWbCa",
  "nombre": "Isabel Escobar",
  "salario": 3125000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "isabel@vitt.co",
  "cargo": "Consultora Senior",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "consult",
  "estado": "A",
  "codigo": 0
},
{
  "_id": {
    "$oid": "601c3c0787f4a01b6ad6472a"
  },
  "id_usuario": 32256494,
  "clave": "$2b$12$WBYWWw7rnqDJhhEm6rL15./y0/h1eP.Z8Ag/HPuy5X85imJT4iF9q",
  "nombre": "Isabel Naranjo",
  "salario": 1500000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "inaranjo@venaycia.com",
  "cargo": "Administrativa",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601c3c0987f4a01b6ad6472d"
  },
  "id_usuario": 43221806,
  "clave": "$2b$12$nIFqxcUg19sZ8LAXCAoc1ODVhBeDdsvf1p2Z5a/wvDnRV4.rIjju2",
  "nombre": "Natalia Ramirez",
  "salario": 2000000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "nramirez@venaycia.com",
  "cargo": "Consultora Senior",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601c3c0b87f4a01b6ad64730"
  },
  "id_usuario": 1017136558,
  "clave": "$2b$12$KvWVPOs4HgDgrUnBKRLGBuixqOuGiWUyu6xvpg1tP/HEprjihQE8u",
  "nombre": "Manuela Rodriguez",
  "salario": 1800000,
  "jornada": "Diurna",
  "centrocostos": 4,
  "email": "rodriguez@venaycia.com",
  "cargo": "Consultora Junior",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601c3c0d87f4a01b6ad64733"
  },
  "id_usuario": 8358473,
  "clave": "$2b$12$k0lTXTKEv0JDK/kDtlX1Lu6.FSKStxu2SXrh9NQ1rERNsgg2XGBo2",
  "nombre": "Juan Chavarriaga",
  "salario": 1500000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "jchavarriaga@venaycia.com",
  "cargo": "Consultora Junior",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601c3c1087f4a01b6ad64736"
  },
  "id_usuario": 43874999,
  "clave": "$2b$12$dXyXjFja2moTivZxJBDLLeQO03WalidggM2Pk64JeaX0xgB8M6ZDu",
  "nombre": "Catalina Rave",
  "salario": 2000000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "crave@venaycia.com",
  "cargo": "Consultora Senior",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601c3c1287f4a01b6ad64739"
  },
  "id_usuario": 1017175942,
  "clave": "$2b$12$piGSgJ09DUeD3qPjxylY2.ncaHrcdHbokVnEkY1vVGicD570z59ei",
  "nombre": "Luisa Hoyos",
  "salario": 1500000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "lhoyos@venaycia.com",
  "cargo": "Consultora Junior",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d417afd1a472d9e062724"
  },
  "id_usuario": 37100,
  "clave": "$2b$12$JSGnwehF9eBO.2dYOqxEf.Ez8SIcRZIAWNuizL/zQc2iewrN4Fzmm",
  "nombre": "Abraham Ballesteros Botello",
  "salario": 4180000,
  "jornada": "Nocturna",
  "centrocostos": 1,
  "email": "AbrahamBallesteros.Botello@hotmail.com",
  "cargo": "Consultor 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d417cfd1a472d9e062727"
  },
  "id_usuario": 37176,
  "clave": "$2b$12$RVnjY9Nkl/752pahjyei6.bu/sWHJxvo9TtgEc38RLPjdTFSjl48.",
  "nombre": "Myriam Orozco",
  "salario": 3980000,
  "jornada": "Diurna",
  "centrocostos": 4,
  "email": "myriamOrozco@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d417efd1a472d9e06272a"
  },
  "id_usuario": 38036,
  "clave": "$2b$12$I1pobdCy.0iNneKj2aKCGOnYXq7C3wktkOstGA9F4UBxMxWy62JlO",
  "nombre": "Dionisio Ortega Rubio",
  "salario": 4180000,
  "jornada": "Nocturna",
  "centrocostos": 1,
  "email": "DionisioOrtega.Rubio@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d4181fd1a472d9e06272d"
  },
  "id_usuario": 60331,
  "clave": "$2b$12$fjwehELx.9hmX97/sAXjEOarD0K54XDL8X3630Of06kfSiRafesey",
  "nombre": "Paola Acuña",
  "salario": 4180000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "PaolaAcuña@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d4183fd1a472d9e062730"
  },
  "id_usuario": 93958,
  "clave": "$2b$12$21aVpJYk1EZk1W3K4/PevO0S5xf9K0crZyCSqF9YXTLAR4jmvulJC",
  "nombre": "Melia Adarme",
  "salario": 4180000,
  "jornada": "Nocturna",
  "centrocostos": 1,
  "email": "MeliaAdarme@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d4185fd1a472d9e062733"
  },
  "id_usuario": 96444,
  "clave": "$2b$12$3V0KJH9RCLM8BEqE/uddmef00ElLh1TBRwdGz4XNSRmW3uLV.v.zW",
  "nombre": "Nataly Orozco",
  "salario": 4180000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "NatalyOrozco@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d4188fd1a472d9e062736"
  },
  "id_usuario": 359176,
  "clave": "$2b$12$0udufEKjtguah9yVTiCln.Fhq29R4GEBxd9IncspREqvhh0NusXt.",
  "nombre": "Camen Alicia Figueroa N",
  "salario": 4180000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "Camen.AliciaFigueroa.N@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d418afd1a472d9e062739"
  },
  "id_usuario": 361700,
  "clave": "$2b$12$N/V98WucZEYCfmrsMRw9iOWHKjaXZIxUnJj404jGQcOaN5YmP2qA6",
  "nombre": "Diogenes Arguelles Suarez",
  "salario": 4180000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "DiogenesArguelles.Suarez@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d418cfd1a472d9e06273c"
  },
  "id_usuario": 361775,
  "clave": "$2b$12$RZlMLIAcpmuDcHnzqCqh.uYTAoTLYDyMpuUTEwxip5Goal.JZVS8W",
  "nombre": "Paola Orozco",
  "salario": 4180000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "PaolaOrozco@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d418ffd1a472d9e06273f"
  },
  "id_usuario": 362636,
  "clave": "$2b$12$SyAnxki88Y1mtuZgAFGa/eacAgu7fNVDVlcWfn6G1Fuuht.MCELUO",
  "nombre": "Abel  Bautista",
  "salario": 4180000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "Abel.Bautista@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d4191fd1a472d9e062742"
  },
  "id_usuario": 382235,
  "clave": "$2b$12$UB.f3LDyPXyUn/Sce.Oe2Ow8cYxjM5MAZdZG3O932p04fmPkRrrzu",
  "nombre": "Martha Adarmes",
  "salario": 4180000,
  "jornada": "Diurna",
  "centrocostos": 4,
  "email": "marthaAdarmes@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d4193fd1a472d9e062745"
  },
  "id_usuario": 413764,
  "clave": "$2b$12$0/TyoqXLtYQvejVWiuhGJ.wLgi4GFxnallOy7XNEwHWg1451nI6tO",
  "nombre": "Adelia Afanador",
  "salario": 4180000,
  "jornada": "Nocturna",
  "centrocostos": 1,
  "email": "AdeliaAfanador@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d4195fd1a472d9e062748"
  },
  "id_usuario": 417300,
  "clave": "$2b$12$I4zNg5oinDDpvrdzygXMz.a3/UXggAdeNrqjgtVcP/R9OM./ZY64C",
  "nombre": "Abraham Sierra",
  "salario": 4180000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "AbrahamSierra@hotmail.com",
  "cargo": "Consultor Asociado",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d4198fd1a472d9e06274b"
  },
  "id_usuario": 417327,
  "clave": "$2b$12$/zJo33g6Af.Gv.Hvq4wNTeb21CBX7jo6a9F8RZEjygJBFEhN7XQzC",
  "nombre": "Tatiana Orozco",
  "salario": 2900000,
  "jornada": "Nocturna",
  "centrocostos": 1,
  "email": "TatianaOrozco@hotmail.com",
  "cargo": "Asistente Administrativo 2",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d419afd1a472d9e06274e"
  },
  "id_usuario": 418236,
  "clave": "$2b$12$sVMAkXebRgpkC33sMZFefu4SR.HFnEoLrU4ehqNGnYZE/OGI8Fh1S",
  "nombre": "Abel  Villamizar",
  "salario": 3980000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "Abel.Villamizar@hotmail.com",
  "cargo": "Asistente Administrativo 2",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d419dfd1a472d9e062751"
  },
  "id_usuario": 443782,
  "clave": "$2b$12$.FIRXz/5f.L3bCEbTrxyKOvqSViVZ8T8ASMqPpetqGZnK2Y4Z2CbK",
  "nombre": "Sandra Orozco ",
  "salario": 3980000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "SandraOrozco@hotmail.com",
  "cargo": "Asistente Administrativo 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d419ffd1a472d9e062754"
  },
  "id_usuario": 481958,
  "clave": "$2b$12$EcmZNnLjI5i6RMjCnQ65W.8X9AnCGOKPh8YvB7YG0NLgoRsxKzQaC",
  "nombre": "Teresa Jaimes",
  "salario": 1350000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "TeresaJaimes@hotmail.com",
  "cargo": "Asistente Junior",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41a1fd1a472d9e062757"
  },
  "id_usuario": 518817,
  "clave": "$2b$12$lIvxV.KwbJ5JN1NxEoXWdOmiyVBxNiEtevKfL9llnF5c7K/qUSzdm",
  "nombre": "Margarita Orozco Caceres",
  "salario": 3980000,
  "jornada": "Diurna",
  "centrocostos": 4,
  "email": "margaritaOrozco.Caceres@hotmail.com",
  "cargo": "Operario 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41a3fd1a472d9e06275a"
  },
  "id_usuario": 564961,
  "clave": "$2b$12$HYFDfVOj.gEcDLDFNaPIIOYmbo3YWs9bFDbWo6Gi3/tF39DLnUNVu",
  "nombre": "Olga Lucia Fitzgerald",
  "salario": 1900000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "Olga.LuciaFitzgerald@hotmail.com",
  "cargo": "Vendedor",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41a6fd1a472d9e06275d"
  },
  "id_usuario": 572042,
  "clave": "$2b$12$myPYFJKyWxBxBGhn1wf8wOIN8q0F3HJSl9Ye9cdb/LObQDdLP8j9m",
  "nombre": "Maria Helena  Flechas",
  "salario": 1900000,
  "jornada": "Diurna",
  "centrocostos": 4,
  "email": "Maria.Helena.Flechas@hotmail.com",
  "cargo": "Vendedor",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41a8fd1a472d9e062760"
  },
  "id_usuario": 573651,
  "clave": "$2b$12$rV6/302dkXtWi3EUOoNHYuI6cUuoEMVqVojZN8ffbO7OYvZTq73T.",
  "nombre": "Alirio Afanador",
  "salario": 2500000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "AlirioAfanador@hotmail.com",
  "cargo": "Asistente Administrativo 2",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41aafd1a472d9e062763"
  },
  "id_usuario": 594709,
  "clave": "$2b$12$fUyuoWTiqzzblh6g2myux.OBPmCrkEGUvXWjePCmwXX5UEwylXmQy",
  "nombre": "Ana Isabel Ortega",
  "salario": 2350000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "Ana.IsabelOrtega@hotmail.com",
  "cargo": "Operario 3",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41adfd1a472d9e062766"
  },
  "id_usuario": 606081,
  "clave": "$2b$12$GZu8QJgWuMAMRY1Fw3GE0OYBYnYGFqZXWv7VPCEYp47d8BzvbGdcO",
  "nombre": "Yolanda Jaimes",
  "salario": 1350000,
  "jornada": "Diurna",
  "centrocostos": 5,
  "email": "YolandaJaimes@hotmail.com",
  "cargo": "Asistente Junior",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41b0fd1a472d9e06276a"
  },
  "id_usuario": 623204,
  "clave": "$2b$12$zZYanaJq39NFaG/W1uCTkOlHLplYaWENsou4Ygw8Ruba3Y96lWBTq",
  "nombre": "Maria Alejandra Afanador",
  "salario": 1450000,
  "jornada": "Nocturna",
  "centrocostos": 1,
  "email": "Maria.AlejandraAfanador@hotmail.com",
  "cargo": "Operario Aprendiz",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41b3fd1a472d9e06276d"
  },
  "id_usuario": 693004,
  "clave": "$2b$12$5ysYrHmhiqhC5HmNel/6ue.UjPbfh54h110WpSRlBJFxghfjswK/W",
  "nombre": "Silvia Afanador",
  "salario": 1450000,
  "jornada": "Nocturna",
  "centrocostos": 1,
  "email": "SilviaAfanador@hotmail.com",
  "cargo": "Operario Aprendiz",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41b5fd1a472d9e062770"
  },
  "id_usuario": 717383,
  "clave": "$2b$12$KKygJQtXNHxTRtXedq3gEORIE68JB9JNLNrIlVPqNVDEw0i1O8LxS",
  "nombre": "Andrea Carina Ortega",
  "salario": 2350000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "Andrea.CarinaOrtega@hotmail.com",
  "cargo": "Operario 3",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41b7fd1a472d9e062773"
  },
  "id_usuario": 762242,
  "clave": "$2b$12$rdxSNpQODax66ajbg2fqIOYbTGNx1AeWgKy0bfiOQ3ndn8GGasbSm",
  "nombre": "Carmen Ortega",
  "salario": 2350000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "CarmenOrtega@hotmail.com",
  "cargo": "Operario 3",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41b9fd1a472d9e062776"
  },
  "id_usuario": 768700,
  "clave": "$2b$12$WxrIImyPb4zxNFkQgznjwuOAKGoN6srC7X3CkgFjuVhEB81IXDmDe",
  "nombre": "Osman Correa Rincon",
  "salario": 1450000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "OsmanCorrea.Rincon@hotmail.com",
  "cargo": "Operario Aprendiz",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41bcfd1a472d9e062779"
  },
  "id_usuario": 768734,
  "clave": "$2b$12$TApBKbDvwQPoNRquj2XzUOti5O6R7voF4ZvKEJRSmwBuaAlOBokMu",
  "nombre": "Deyanira Ortega",
  "salario": 2700000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "DeyaniraOrtega@hotmail.com",
  "cargo": "Operario 2",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41befd1a472d9e06277c"
  },
  "id_usuario": 769636,
  "clave": "$2b$12$Zl87f5YzfKK/0wC75Dox7.wECZS5GbLc4gEMkDct.OFr9CxXMpvKm",
  "nombre": "Abel  Ojeda",
  "salario": 3980000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "Abel.Ojeda@hotmail.com",
  "cargo": "Operario 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41c0fd1a472d9e06277f"
  },
  "id_usuario": 770572,
  "clave": "$2b$12$yN.OAi8wEOS0PIKmWkqPLO1zBJtQUGfXc0RBXAILzt6Mys2.q8JMC",
  "nombre": "Osman Palma Parra",
  "salario": 3980000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "OsmanPalma.Parra@hotmail.com",
  "cargo": "Operario 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41c3fd1a472d9e062782"
  },
  "id_usuario": 842235,
  "clave": "$2b$12$nj1oUsye8FqbrwYUMSf1JOx1181qcG/kwb6ifExDXGTgZVuRPPgee",
  "nombre": "Deysi Liliana  Ortega",
  "salario": 3980000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "Deysi.Liliana.Ortega@hotmail.com",
  "cargo": "Operario 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41c5fd1a472d9e062785"
  },
  "id_usuario": 857806,
  "clave": "$2b$12$XCvu9bXG//n2E9oC4y/sz.ZTDleJ0zikV7k1SKXAcaDtsnZIVpBii",
  "nombre": "Andrea Afanador Bautista",
  "salario": 2500000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "AndreaAfanador.Bautista@hotmail.com",
  "cargo": "Asistente Administrativo 2",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41c7fd1a472d9e062788"
  },
  "id_usuario": 969996,
  "clave": "$2b$12$yCcJq1./a7miJ0hT1XcakOICkwFOew1.XAYJ5R6JWVhmH.e8V4jaq",
  "nombre": "Yojana Flechas",
  "salario": 2300000,
  "jornada": "Diurna",
  "centrocostos": 5,
  "email": "YojanaFlechas@hotmail.com",
  "cargo": "Supervisor",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41cafd1a472d9e06278b"
  },
  "id_usuario": 1387524,
  "clave": "$2b$12$DEz7d1za8nf2PGFeOV60XOlXQsG7nR6ZEMtxitADPJob0Qs7e89tK",
  "nombre": "Claudia Africano",
  "salario": 1800000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "ClaudiaAfricano@hotmail.com",
  "cargo": "Asistente Administrativo 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41ccfd1a472d9e06278e"
  },
  "id_usuario": 1447800,
  "clave": "$2b$12$gN2fA0mszHWlOYh/shd4ZO0b6pSc0VBqMzPDwZXOVAeBp2kiWzWhi",
  "nombre": "Abelardo Moreno",
  "salario": 1450000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "AbelardoMoreno@hotmail.com",
  "cargo": "Operario Aprendiz",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41cefd1a472d9e062791"
  },
  "id_usuario": 1447881,
  "clave": "$2b$12$6VU9i7GdeHj6rlgr1DscdeAaNbhYgxCj6QLBEJHek9gOs/i2lWHOy",
  "nombre": "Diana Ortega",
  "salario": 2700000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "DianaOrtega@hotmail.com",
  "cargo": "Operario 2",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41d1fd1a472d9e062794"
  },
  "id_usuario": 1448736,
  "clave": "$2b$12$pySW7oJj3sJZkmWNTlRYmOpv2MA.7yTtcygdTBeXtPaRgJ18LmCa6",
  "nombre": "Abdel Quintero",
  "salario": 3980000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "AbdelQuintero@hotmail.com",
  "cargo": "Operario 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"},
  {
  "_id": {
    "$oid": "601d41d3fd1a472d9e062797"
  },
  "id_usuario": 1449672,
  "clave": "$2b$12$gEn47kUPchnqzl5s6k5EpuEZWfbgGsnFZtL4b3SqmK0D7RZLYBvC6",
  "nombre": "Abdon Pinzon",
  "salario": 3980000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "AbdonPinzon@hotmail.com",
  "cargo": "Operario 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41d5fd1a472d9e06279a"
  },
  "id_usuario": 1508156,
  "clave": "$2b$12$ZWtEldvBuJGERKOdt4mdr.Tv4esKLQY/QWpH.QneBz/Kc1ly7WVxS",
  "nombre": "Yurevsoledad Flochas B.",
  "salario": 2300000,
  "jornada": "Diurna",
  "centrocostos": 5,
  "email": "YurevsoledadFlochas.B@hotmail.com",
  "cargo": "Supervisor",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41d8fd1a472d9e06279d"
  },
  "id_usuario": 1565382,
  "clave": "$2b$12$xCf6eZumMA5.lMrzqUdY2uJ4kEWgNAfOrJkSmkyCcQA4.d.SSTzSy",
  "nombre": "Ana Rosa Flor",
  "salario": 2300000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "Ana.RosaFlor@hotmail.com",
  "cargo": "Supervisor",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41e0fd1a472d9e0627a0"
  },
  "id_usuario": 1583277,
  "clave": "$2b$12$cE2ChhiGD41hKBfPehyZQuUnz/ZtDetYgHPLIORz90xNM.VZUvzhS",
  "nombre": "Ana Isabel Agro",
  "salario": 1450000,
  "jornada": "Nocturna",
  "centrocostos": 1,
  "email": "Ana.IsabelAgro@hotmail.com",
  "cargo": "Operario Aprendiz",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41e2fd1a472d9e0627a3"
  },
  "id_usuario": 1634905,
  "clave": "$2b$12$ahkv4hsRT8.lQHz045Pw5edABJVVmJ/okz86JzNt6BMw2sRfr9WP.",
  "nombre": "Beatriz Agudelo",
  "salario": 1450000,
  "jornada": "Nocturna",
  "centrocostos": 1,
  "email": "BeatrizAgudelo@hotmail.com",
  "cargo": "Operario Aprendiz",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41e4fd1a472d9e0627a6"
  },
  "id_usuario": 1994932,
  "clave": "$2b$12$oXFLdWc9tCSgxSYpEexqUOLCJMUoRZ6oacexfKw2yy1Ag/uU1ejsS",
  "nombre": "Daissy Agudelo",
  "salario": 1250000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "DaissyAgudelo@hotmail.com",
  "cargo": "Asistente Junior",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41e7fd1a472d9e0627a9"
  },
  "id_usuario": 2061345,
  "clave": "$2b$12$vy4UWrFDP07j7EJx.Hive.XTYeciJ0c..qjbk2LPuAJDboHhCwdHm",
  "nombre": "Claudia Flores",
  "salario": 2300000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "ClaudiaFlores@hotmail.com",
  "cargo": "Supervisor",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41e9fd1a472d9e0627ac"
  },
  "id_usuario": 2220285,
  "clave": "$2b$12$wcQi5IH/AM990.Ym0cE/TeW6KLwL3CB4ix6RyvPDOfsDTh7SURzgS",
  "nombre": "Eliana Ortega",
  "salario": 3980000,
  "jornada": "Diurna",
  "centrocostos": 3,
  "email": "ElianaOrtega@hotmail.com",
  "cargo": "Operario 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41ebfd1a472d9e0627af"
  },
  "id_usuario": 2300315,
  "clave": "$2b$12$QvcAdpZkcuk2S6f.Injv8OJiKAI2uB30oiMjKQRYQZ7ayZlXkkci.",
  "nombre": "Erika Agudelo",
  "salario": 1350000,
  "jornada": "Diurna",
  "centrocostos": 3,
  "email": "ErikaAgudelo@hotmail.com",
  "cargo": "Asistente Junior",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41eefd1a472d9e0627b2"
  },
  "id_usuario": 2345258,
  "clave": "$2b$12$P3xjkJsZ3tS.nXLG.D/3ae8hHSQbsJA0TWF0ioobc1cyGNTPw0NX6",
  "nombre": "Elba Flores",
  "salario": 1900000,
  "jornada": "Diurna",
  "centrocostos": 3,
  "email": "ElbaFlores@hotmail.com",
  "cargo": "Vendedor",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41f0fd1a472d9e0627b5"
  },
  "id_usuario": 2704162,
  "clave": "$2b$12$32liY4DM6ivtBqjvJCrlIuLskvcfIvJlP2PAkcmv8KOlGOYsf0eRu",
  "nombre": "Maria Ofir Molano",
  "salario": 2850000,
  "jornada": "Diurna",
  "centrocostos": 4,
  "email": "Maria.OfirMolano@hotmail.com",
  "cargo": "Operario Técnico",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41f2fd1a472d9e0627b8"
  },
  "id_usuario": 2776028,
  "clave": "$2b$12$fJZhUhqWsHYSfe3POvPileMZUUsPndsKN20FBt0UAZm0mglJ8q666",
  "nombre": "Oscar Flores",
  "salario": 2300000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "OscarFlores@hotmail.com",
  "cargo": "Supervisor",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41f5fd1a472d9e0627bb"
  },
  "id_usuario": 2838690,
  "clave": "$2b$12$YCZJpL2Oh93wI/IJxovKq.neSvWg4nXm/PmXkNTzCJio9A.aI.uTu",
  "nombre": "Tatiana Flores",
  "salario": 1900000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "TatianaFlores@hotmail.com",
  "cargo": "Vendedor",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"
},{
  "_id": {
    "$oid": "601d41f7fd1a472d9e0627be"
  },
  "id_usuario": 2911346,
  "clave": "$2b$12$gnOQ97YNNM1W00Y7fQ0wuOMPirGyw2Qs6TXNIM5u2Pyw4qNOzj1Zi",
  "nombre": "Heidi Agudelo",
  "salario": 1800000,
  "jornada": "Diurna",
  "centrocostos": 2,
  "email": "HeidiAgudelo@hotmail.com",
  "cargo": "Asistente Administrativo 1",
  "empresa": "60155c7052eab65a94b04d10",
  "perfil": "client",
  "estado": "A"

}]

// var objetoTabla = JSON.parse(JSONtabla)

  let arreglo=[]
  let i=0
  for (i=0; i < JSONTabla.length; i++) {
    if (JSONTabla[i].estado ===  "A") {
      arreglo.push([JSONTabla[i].id_usuario,JSONTabla[i].nombre,JSONTabla[i].cargo,JSONTabla[i].jornada,JSONTabla[i].centrocostos,JSONTabla[i].email,JSONTabla[i].salario,JSONTabla[i].perfil])
    }
  }
  return arreglo  
}

const dataTable = crearDataTabla()

function PersonalTable() 
{
  const [data, setData] = React.useState(
    dataTable.map((prop, key) => {
      return {
        id: key,
        id_usuario: prop[0],
        nombre: prop[1],
        cargo: prop[2],
        jornada: prop[3],
        centrocostos: prop[4],
        email: prop[5],
        salario: prop[6],
        perfil: prop[7],
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
        <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bullet-list-67 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Capturas de Tiempo</p>
                      <Card.Title as="h4">60</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-simple-remove text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Sin Iniciar</p>
                      <Card.Title as="h4">30</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-circle text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">En Proceso</p>
                      <Card.Title as="h4">20</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-check-2 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Cerradas</p>
                      <Card.Title as="h4">10</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
             </Card>
          </Col>

        </Row>  
        <Row>  
          <Col md="12">
            <h4 className="title">Seguimiento Proceso</h4>
            <p className="category">
              Los consultores tienen disponible la información de los empleados y en que estado se encuentra el trámite del proceso de captura de tiempos.
            </p>
            <Card>
              <Card.Body>
                <ReactTable
                  data={data}
                  columns={[
                    {
                      Header: "Id.",
                      accessor: "id_usuario",
                    },
                    {
                      Header: "Nombre",
                      accessor: "nombre",
                    },
                    {
                      Header: "Cargo",
                      accessor: "cargo",
                    },
                    {
                      Header: "CCostos",
                      accessor: "centrocostos",
                      sortable: false,
                      filterable: false
                    },
                    {
                      Header: "Jornada",
                      accessor: "jornada",
                    },
                    {
                      Header: "email",
                      accessor: "email",
                      sortable: false,
                      filterable: false
                    },
                    {
                      Header: "salario",
                      accessor: "salario",
                      sortable: false,
                      filterable: false
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

export default PersonalTable;
