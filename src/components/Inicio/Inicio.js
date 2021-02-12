import React from "react"
import  CapturaTiempos from "components/CapturaTiempos/CapturaTiempos.js";

export default function Inicio() {
  // Cargar el diccionario de actividades
  // Cargar los datos del empleado si hay alguno
  // Cargar la tabla de frecuencias
  // Inhabilitar los botones del nivel 2 y 3

  // OJO No me acepta _id como variable, se cambia por empresa 
  const empresa = {
    empresa: "60155c7052eab65a94b04d10",
    nit: "9001234567",
    nombre: "Valores negociados",
    niveles: 3,
    estado: "A",
  };
 

const empleado = {
    id_usuario: "12345678",
    clave: "$2b$12$LbAzbm  07kLO/VXFKj732aePhMjfo9NcjFQyITQpuz0Rj8s6cHZbEe",
    nombre: "Isabel Escobar",
    salario: 3125000,
    jornada: "Diurna",
    email: "isabel@vitt.co",
    cargo: "Gerente",
    empresa: "60155c7052eab65a94b04d10",
    perfil: "consult",
    estado: "A",
    codigo: 711768,
  };


  const tablas = ["Macroproceso", "Proceso", "Actividad"];


  const frecuencia = [

    {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "hora",
      tipo: "0",
      valor: "60",
      unidad: "minuto(s)"
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "Dia",
      tipo: "0",
      valor: "480",
      unidad: "minuto(s)"
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "Semana",
      tipo: "0",
      valor: "2400",
      unidad: "minuto(s)"
    },
   {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "Dia",
      tipo: "1",
      valor: "8",
      unidad: "hora(s)"
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "Semana",
      tipo: "1",
      valor: "40",
      unidad: "hora(s)"
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "Quincena",
      tipo: "1",
      valor: "80",
      unidad: "hora(s)"
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "Mes",
      tipo: "1",
      valor: "160",
      unidad: "hora(s)"
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "Bimestre",
      tipo: "1",
      valor: "320",
      unidad: "hora(s)"
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "Trimestre",
      tipo: "1",
      valor: "480",
      unidad: "hora(s)"
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "Semestre",
      tipo: "1",
      valor: "960",
      unidad: "hora(s)"
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      nombre: "Año",
      tipo: "1",
      valor: "1920",
      unidad: "hora(s)"
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



  const diccionario = [
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001",
      idNivelPadre: "0",
      nombreNivel: "Direccionamiento estratégico",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001001",
      idNivelPadre: "001",
      nombreNivel: "Planeación estratégica",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001001001",
      idNivelPadre: "001001",
      nombreNivel: "Formulación estratégica",
      descripcion:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tortor vitae tortor viverra faucibus et ut enim. Integer scelerisque urna elit, quis egestas sapien malesuada mollis. Aenean fermentum, ligula et scelerisque sodales, mi mi tempus est, quis varius magna eros quis ante. Nam egestas commodo ex, at hendrerit dolor eleifend non. Pellentesque ultricies dapibus nunc sed efficitur. Pellentesque euismod metus sem, vitae gravida tortor tristique ac. Aenean at dictum nunc. Mauris purus neque, ultricies vel metus vel, consequat fermentum felis. Duis quis est sed est porta sagittis a id orci."',
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001001002",
      idNivelPadre: "001001",
      nombreNivel: "Control de la Estrategia",
      descripcion:
        "Suspendisse gravida malesuada molestie. Aenean imperdiet ac sem eget ultricies. Cras pharetra lectus est, et tincidunt ex faucibus ut. Nam pellentesque commodo rutrum. Aenean eget orci ac justo ornare porttitor id sit amet tortor. Sed a urna at lectus tincidunt scelerisque fringilla vitae sem. Fusce dui mauris, porta a mi sit amet, venenatis fringilla leo. Quisque placerat ipsum vestibulum, accumsan metus eu, dapibus arcu.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001001003",
      idNivelPadre: "001001",
      nombreNivel: "Implementación de acciones de mejora a la Estrategia",
      descripcion:
        "Pellentesque non massa nec mi tempor ornare ac vel ante. Sed nec metus imperdiet, luctus libero vel, suscipit orci. Aenean egestas ipsum ut sapien commodo, eu suscipit justo iaculis. Fusce non arcu faucibus, iaculis velit ut, eleifend tellus. Donec blandit diam in odio ullamcorper condimentum. Nulla nec condimentum enim. Phasellus interdum, lectus et consequat convallis, dui nunc dapibus nulla, vitae interdum nunc ex sit amet felis. Proin pretium metus at ligula maximus auctor. Suspendisse potenti.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001001004",
      idNivelPadre: "001001",
      nombreNivel: "Gestión de proyectos",
      descripcion:
        "Praesent turpis mi, malesuada eu quam sit amet, feugiat iaculis dui. Vivamus nec fringilla eros. Ut feugiat arcu dui, vitae hendrerit dolor auctor non. Mauris libero urna, lacinia quis massa non, pellentesque mollis dui. Suspendisse mattis, ex sed lacinia hendrerit, metus enim efficitur turpis, ut viverra ex mi at libero. Sed vitae dolor efficitur, pellentesque urna id, scelerisque turpis. Sed sapien nisi, congue et nisl sed, porttitor lobortis ante. Nulla malesuada molestie velit. Quisque sodales justo quis ipsum molestie tempus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001002",
      idNivelPadre: "001",
      nombreNivel: "Gobierno corporativo",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001002001",
      idNivelPadre: "001002",
      nombreNivel: "Estructura gobierno",
      descripcion:
        "Maecenas ut egestas ex, suscipit cursus orci. Nulla vehicula, ligula vitae accumsan cursus, quam nisl sollicitudin turpis, eu elementum nulla turpis id diam. Vestibulum egestas ex eu leo accumsan vestibulum. Donec facilisis sem id quam malesuada viverra id sed nibh. Sed elit magna, euismod dignissim venenatis vitae, pulvinar ut sapien. Etiam id laoreet arcu. Vestibulum vel lectus turpis. Etiam a tellus blandit, dapibus nisl quis, pharetra nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur dignissim urna dapibus erat ornare, vitae commodo urna luctus. Praesent sed lorem nulla. Praesent volutpat tellus nibh, non porta orci euismod vitae.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001002002",
      idNivelPadre: "001002",
      nombreNivel: "Control del Gobierno Corporativo",
      descripcion:
        "Donec et ultricies nisl. Fusce congue sit amet risus eu faucibus. Morbi ut iaculis nulla. Sed feugiat aliquet odio, non pellentesque elit. Praesent eget mollis massa. Maecenas nec tellus pharetra, tristique tellus id, blandit leo. Donec ac finibus augue. Aenean aliquam vehicula egestas. Nam vitae lorem rutrum, ornare sem ut, porta quam. Suspendisse potenti.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001002003",
      idNivelPadre: "001002",
      nombreNivel: "Comités Directivos y Grupos Primarios",
      descripcion:
        "Nullam aliquet semper mauris, in egestas eros auctor eu. Integer facilisis luctus neque, gravida ultrices nisi aliquet ut. Proin egestas ultrices turpis, vitae semper leo vulputate sit amet. Maecenas aliquam auctor dapibus. Aliquam eleifend, dolor a finibus pellentesque, leo ligula rhoncus tellus, eget porta magna felis sit amet justo. Sed lacinia lorem sed diam elementum, ut dictum metus ultricies. Sed ac dapibus eros, sed facilisis erat. Aliquam a efficitur diam, vel rutrum diam. Quisque vehicula eget odio eu dictum. Donec sed massa et quam semper gravida tempor eget est. Vivamus hendrerit consequat placerat. Aliquam malesuada augue in augue blandit molestie. Vivamus aliquam consectetur odio, ut rutrum massa mattis in. Mauris consectetur neque ante, nec volutpat lacus fermentum et. Pellentesque maximus ullamcorper auctor.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001003",
      idNivelPadre: "001",
      nombreNivel: "Gestión del Presupuesto",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001003001",
      idNivelPadre: "001003",
      nombreNivel: "Presupuesto de la Compañía",
      descripcion:
        "Etiam tincidunt diam at libero tincidunt ullamcorper. Etiam tincidunt leo sit amet purus gravida, ut gravida quam ornare. Sed venenatis turpis sollicitudin pulvinar semper. Nunc dapibus, mauris et bibendum suscipit, nunc velit pulvinar nisi, eget vulputate augue turpis id nulla. Nullam posuere, nibh sit amet iaculis imperdiet, purus nunc malesuada felis, vitae dapibus mi magna ut massa. Fusce pretium sem eu erat porta pellentesque. Etiam ac faucibus dolor, vel vestibulum dolor.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "001003002",
      idNivelPadre: "001003",
      nombreNivel: "Control del presupuesto",
      descripcion:
        "Nullam blandit tortor ac quam lobortis, sit amet vestibulum tellus hendrerit. Nam vitae cursus tortor. Vestibulum ac hendrerit erat. Mauris metus massa, congue eget lacus eu, consequat congue odio. Etiam mattis nec neque a interdum. Etiam egestas placerat accumsan. Vestibulum fermentum, purus vel imperdiet sodales, ligula sapien luctus dolor, vitae varius dolor lacus ut metus. Sed nulla magna, faucibus gravida justo non, tincidunt vehicula massa. Duis lobortis dignissim vehicula. Nunc elementum ipsum id lobortis euismod. Cras non molestie leo. Praesent malesuada vel sem id tempus. Nam ultrices elit sit amet magna sodales viverra.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002",
      idNivelPadre: "0",
      nombreNivel: "Sistemas integrados de gestión -Gestión Control y Calidad-",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002001",
      idNivelPadre: "002",
      nombreNivel: "Gestión del riesgo",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002001001",
      idNivelPadre: "002001",
      nombreNivel:
        "Identificación, medición, tratamiento y monitoreo de los riesgos",
      descripcion:
        "Pellentesque non lacus nec purus euismod luctus nec id lacus. Donec dignissim eleifend nisl, vitae pulvinar ipsum suscipit at. Integer varius neque quis est vulputate, eget feugiat ante fringilla. Morbi eu augue purus. Vestibulum interdum risus ut imperdiet malesuada. Aliquam laoreet, augue eu convallis placerat, est orci dignissim sapien, sed facilisis elit est eget lacus. Nullam sit amet aliquet lacus, in aliquet nunc.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002001002",
      idNivelPadre: "002001",
      nombreNivel: "Gestión del SARLAFT",
      descripcion:
        "Nulla euismod, urna a rutrum tempor, massa metus lacinia ante, ac finibus odio ante eu ligula. Suspendisse fringilla, diam id dapibus vestibulum, sem libero tempor eros, eget blandit lorem nisi eu ipsum. Nulla efficitur mi at leo auctor, hendrerit gravida tortor placerat. Nullam ornare nulla at ligula venenatis, eget tristique nunc vulputate. Suspendisse ac consequat elit. Curabitur arcu tortor, convallis nec ultricies nec, iaculis vitae turpis. Sed nulla tellus, porta eget velit eget, tincidunt efficitur ex. Curabitur sit amet augue dignissim, mollis ipsum a, aliquam neque. Cras ultricies, mauris in vehicula feugiat, odio leo varius lorem, sit amet tincidunt arcu dui eu leo. In nec sapien tincidunt, vestibulum metus consectetur, lacinia sapien. Suspendisse risus nisi, sollicitudin id nibh quis, consectetur porttitor nisi. Vestibulum ornare, magna a auctor porttitor, orci eros rhoncus libero, et vulputate mauris est eget lacus. Vivamus sodales, nulla eget malesuada laoreet, nisl leo dictum metus, quis bibendum massa arcu eget risus. Integer dui purus, mollis eget tincidunt ac, vestibulum a ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002001003",
      idNivelPadre: "002001",
      nombreNivel: "Gestión del SARM",
      descripcion:
        "Cras ac vulputate urna. Nunc at viverra urna. Morbi id sem commodo, molestie nisl sit amet, dictum est. Praesent erat diam, euismod nec aliquam et, tristique eu odio. Vestibulum et erat est. Aliquam consectetur urna non orci fringilla, sed tincidunt libero porta. Integer et neque in nibh accumsan gravida.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002001004",
      idNivelPadre: "002001",
      nombreNivel: "Gestión del SARC",
      descripcion:
        "Pellentesque congue vestibulum lectus a scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra augue dolor, vel ullamcorper odio facilisis vel. Mauris mattis massa eu risus mollis, sed gravida enim elementum. Cras id consectetur nibh. Sed est justo, faucibus vel sem at, convallis placerat magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis mi nisi, porttitor eu quam et, blandit semper velit. Cras pellentesque ante eget blandit maximus. Praesent vulputate porta nibh, eget faucibus arcu cursus vitae. Donec fringilla quam id odio varius finibus. Donec vestibulum quam nec eros venenatis commodo. Proin egestas dapibus odio, tempor semper enim rutrum at.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002001005",
      idNivelPadre: "002001",
      nombreNivel: "Gestión del SARL",
      descripcion:
        "Praesent pretium id urna sit amet iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam eleifend enim quis nunc tempor, at interdum dui vestibulum. Nam ac nisi a massa sodales imperdiet. Nulla pulvinar elementum magna, accumsan facilisis lorem lobortis quis. Nulla malesuada dictum posuere. Donec non felis consequat, rhoncus lectus sed, rhoncus velit. Cras neque risus, sodales nec ultrices nec, finibus in quam. Curabitur faucibus orci turpis, sed consectetur massa faucibus nec.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002001006",
      idNivelPadre: "002001",
      nombreNivel: "Gestión del SARO",
      descripcion:
        "Cras venenatis risus et magna rutrum, sollicitudin suscipit velit luctus. Aenean rutrum vulputate elit, sed semper lacus. Etiam ultrices nulla in tellus posuere, accumsan congue eros viverra. Ut tincidunt enim at egestas rutrum. Vivamus porttitor aliquet euismod. Duis venenatis eleifend turpis, nec tempus nisl laoreet tempor. Sed lacus felis, pharetra non tortor ac, pulvinar sagittis odio. Ut a purus blandit, euismod dolor sit amet, facilisis diam. Mauris tincidunt ipsum nibh, id bibendum dolor tincidunt sit amet. Etiam consectetur porttitor pellentesque. Vivamus libero purus, porta nec dapibus vitae, semper sit amet lacus. Nunc at tempus sem, quis aliquam lectus. Donec dapibus ullamcorper faucibus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002002",
      idNivelPadre: "002",
      nombreNivel: "Sistema de gestión de calidad",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002002001",
      idNivelPadre: "002002",
      nombreNivel: "Estructuración y documentación de procesos",
      descripcion:
        "Mauris placerat, libero eu vulputate malesuada, mauris leo molestie sapien, id tempus est magna sit amet dui. Phasellus sed est in dolor laoreet eleifend ac sit amet velit. Quisque condimentum interdum volutpat. Nulla ultrices eros in arcu iaculis facilisis. In purus risus, fringilla et viverra id, blandit sit amet eros. Praesent blandit mattis felis a mollis. Integer consequat libero et enim pretium ultricies. Aliquam egestas quam nisi, ut mollis elit dignissim et. Sed vulputate nibh sed augue feugiat, ullamcorper mollis turpis ultrices. Donec ligula urna, porta ac ante nec, elementum iaculis diam. Nullam nec lectus ac eros tempor gravida ac vitae neque. Duis sed imperdiet mauris. Duis tincidunt, enim ac posuere tristique, neque neque interdum lorem, nec placerat lacus mi ac justo. Donec gravida iaculis fermentum. Maecenas mattis mattis eros, id lacinia libero mattis sed.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002002002",
      idNivelPadre: "002002",
      nombreNivel: "Implementación de Procesos",
      descripcion:
        "Donec at nibh sed sem vehicula fermentum vitae ut diam. Suspendisse libero quam, volutpat quis pulvinar vel, vehicula ut est. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse nec ultrices mi. Suspendisse ut sem odio. Donec scelerisque sed nunc et condimentum. Nulla suscipit erat vitae nisl aliquam, quis elementum diam eleifend.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002002003",
      idNivelPadre: "002002",
      nombreNivel: "Mejora continua",
      descripcion:
        "Praesent at ipsum quam. Aliquam sit amet tortor lorem. In a semper ipsum, eu eleifend arcu. Sed condimentum, purus id sodales cursus, elit eros lobortis eros, id egestas leo sapien eget leo. Nulla vel dui eu risus dignissim luctus sed dapibus ante. Maecenas massa erat, mattis ac cursus sit amet, varius nec ante. Suspendisse in orci at risus rutrum maximus ac non nulla. Nulla facilisi. Mauris maximus, elit ornare lacinia placerat, augue dui aliquet eros, quis volutpat leo velit sit amet mauris. Morbi tincidunt iaculis vestibulum. Nullam ac bibendum tortor. Cras sed lacus tempus, semper felis eu, dignissim turpis. Nulla metus dolor, efficitur nec erat eu, convallis pellentesque tellus. Curabitur vel nunc dignissim, faucibus lacus eget, tincidunt tellus. Proin blandit pretium ipsum eget aliquam.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002003",
      idNivelPadre: "002",
      nombreNivel: "Auditoria y Control Integral",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002003001",
      idNivelPadre: "002003",
      nombreNivel: "Auditorias Internas a los Sistemas Integrados de Gestión ",
      descripcion:
        "Etiam dui tortor, congue at ipsum vulputate, consectetur euismod enim. In placerat, neque sed sollicitudin vulputate, ante sapien cursus velit, sed finibus justo quam at sapien. Vestibulum lacinia lorem nisi, vitae suscipit dui vestibulum sit amet. Morbi in orci dolor. Suspendisse venenatis, elit ut lobortis molestie, nibh mauris finibus odio, ut sagittis augue purus euismod nulla. Suspendisse potenti. Nulla facilisi. Aenean quis eros id odio pellentesque feugiat. Sed mauris est, rhoncus in sapien quis, tempus luctus mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque mollis scelerisque faucibus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "002003002",
      idNivelPadre: "002003",
      nombreNivel: "Auditorias Generales Organizacionales",
      descripcion:
        "Donec in venenatis nisl. Donec tincidunt, urna porttitor gravida elementum, ex diam ornare ante, vitae ultrices urna lorem id nunc. Nullam vitae ultricies magna. Ut sit amet lectus lectus. Sed ac quam quam. Quisque sollicitudin nulla sed consectetur imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eget nisi vitae velit sodales aliquet eu at dui.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "003",
      idNivelPadre: "0",
      nombreNivel: "Gestión Comercial",
      descripcion: " "
      
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "003001",
      idNivelPadre: "003",
      nombreNivel: "Gestión del Asociado",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "003001001",
      idNivelPadre: "003001",
      nombreNivel: "Asesoría en ingreso",
      descripcion:
        "Aenean fermentum tellus vitae urna congue, sit amet tincidunt ipsum scelerisque. Etiam feugiat, justo et commodo hendrerit, ex diam finibus massa, quis condimentum nisl justo at mi. Sed lectus lorem, maximus vitae aliquam et, faucibus nec nisi. Nulla non gravida nisi, quis imperdiet ligula. Integer euismod lectus sit amet erat scelerisque tristique. Nunc molestie dapibus purus, nec porttitor nisi laoreet in. Integer erat nulla, consequat in urna sed, maximus dictum velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut porttitor mattis tristique. Nullam sed erat semper, placerat metus in, vestibulum quam. Aliquam semper, sem at pulvinar lacinia, lacus nisi accumsan ligula, ac blandit quam velit at neque. Integer ultrices sollicitudin eleifend. Pellentesque volutpat vehicula dolor non placerat. Sed aliquam ac tellus at mattis. Nulla mattis tortor sit amet mollis semper. Quisque viverra consequat eros, eget tempor mauris tempus vel.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "003001002",
      idNivelPadre: "003001",
      nombreNivel: "Ingreso de Asociados",
      descripcion:
        "Suspendisse et efficitur felis. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed semper arcu ex, mollis aliquam sem rutrum non. Phasellus porttitor eget nisl a blandit. Phasellus consequat, ligula a tincidunt gravida, dui dolor facilisis augue, ut interdum ligula dolor nec libero. Praesent sagittis sed turpis rhoncus porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "003001003",
      idNivelPadre: "003001",
      nombreNivel: "Actualización de Datos",
      descripcion:
        "Duis sed ornare ipsum. Phasellus in vestibulum enim, vel pellentesque lectus. Quisque congue leo eu augue maximus tristique. Maecenas vel metus gravida, efficitur elit vel, laoreet dolor. Praesent iaculis, augue vitae ultricies pellentesque, odio nibh pellentesque arcu, id tristique ante urna nec sapien. Suspendisse at faucibus nibh, ac blandit quam. Vestibulum maximus tincidunt mattis. Aenean gravida sapien sit amet justo malesuada luctus. In vel sem sem. Pellentesque quis erat rhoncus, aliquam lectus ut, venenatis tellus. Donec et leo accumsan, pulvinar metus at, elementum nisi. Maecenas posuere odio massa, a posuere ex interdum et. Praesent nulla sapien, tincidunt sed purus ac, placerat fermentum sapien. In hendrerit efficitur rutrum. Ut bibendum et tellus vel ultricies. Etiam sed nunc maximus, laoreet ex eu, bibendum urna.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "003001004",
      idNivelPadre: "003001",
      nombreNivel: "Permanencia",
      descripcion:
        "Ut in commodo nulla. Quisque eget lacinia metus. Cras luctus eros vel iaculis pellentesque. Mauris vel risus a urna commodo pharetra. Morbi egestas nunc a quam porta, eu rhoncus justo malesuada. Mauris vitae ex malesuada lorem convallis pharetra. In hac habitasse platea dictumst. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in posuere felis. Cras dictum, sapien sit amet suscipit euismod, leo nulla maximus nulla, vitae finibus lectus nulla non ante. Maecenas id erat at massa interdum eleifend. Suspendisse condimentum libero id elementum vehicula. Cras malesuada lacus tristique dolor accumsan facilisis. Nulla sed lorem feugiat, feugiat metus sit amet, blandit turpis. Mauris accumsan pharetra porttitor. Ut ac erat augue.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "003001005",
      idNivelPadre: "003001",
      nombreNivel: "Reingreso de asociados ",
      descripcion:
        "Morbi rutrum a elit et placerat. Nunc tempus aliquam tellus ut consectetur. Maecenas placerat pretium metus et porta. Nunc at dolor velit. Vivamus pretium massa eu erat faucibus, vitae viverra risus dictum. Morbi sollicitudin, massa quis eleifend auctor, ex nibh rhoncus magna, ac venenatis nunc purus ut dui. Integer suscipit ligula at diam iaculis, at sollicitudin sapien finibus. Fusce vel arcu varius, placerat arcu eget, dapibus elit. Fusce blandit lacinia ullamcorper.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "003001006",
      idNivelPadre: "003001",
      nombreNivel: "Retiro de asociados ",
      descripcion:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus augue libero, congue ac blandit eget, congue sed felis. Integer ligula massa, fringilla id elementum eget, volutpat ut sem. Vestibulum vulputate urna sed odio fermentum tempus. Sed iaculis dignissim lectus ultrices sodales. Nullam pellentesque ipsum id justo fermentum, quis pharetra augue convallis. Quisque ut nisl lacinia nulla laoreet interdum at eu ex. Integer molestie lacus non nisl pr&#10;tium, ac scelerisque odio porttitor. Aenean pellentesque quam id dolor blandit bibendum. Proin semper quis lorem et condimentum. Nam et sem sit amet nunc faucibus tempus eget ac orci. Nullam varius leo sit amet erat mollis fermentum. Fusce in porta tellus, et venenatis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla egestas efficitur blandit. Morbi aliquam congue rhoncus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004",
      idNivelPadre: "0",
      nombreNivel: "Gestión de Operaciones",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004001",
      idNivelPadre: "004",
      nombreNivel: "Gestionar Ahorro",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004001001",
      idNivelPadre: "004001",
      nombreNivel: "Asesoría de Ahorro",
      descripcion:
        "Sed euismod sodales augue id commodo. Nam sed ligula quis nibh elementum suscipit vel eu lorem. Duis vulputate risus et lectus pharetra, at volutpat risus tristique. Vivamus tincidunt varius nulla, cursus sodales risus dictum ut. Sed quis diam accumsan, ultrices ipsum volutpat, volutpat elit. In iaculis ante vitae euismod rhoncus. Sed at feugiat massa. Phasellus viverra erat iaculis urna imperdiet, sed varius diam condimentum. Donec feugiat varius mauris vel cursus. Praesent vehicula risus rhoncus mi hendrerit, interdum pretium tellus aliquam. Nullam pulvinar dolor elit, sed feugiat erat gravida quis.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004001002",
      idNivelPadre: "004001",
      nombreNivel: "Operaciones de ahorro",
      descripcion:
        "Nam venenatis hendrerit porta. Nullam vel euismod enim. Donec magna turpis, mattis consectetur metus nec, faucibus congue metus. Sed et est sed elit luctus interdum eget id tortor. Vestibulum dictum egestas nunc, eget ultricies ligula. Proin faucibus tortor quis sodales feugiat. Curabitur magna lacus, condimentum ut lacus non, suscipit cursus arcu.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004002",
      idNivelPadre: "004",
      nombreNivel: "Gestionar Crédito",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004002001",
      idNivelPadre: "004002",
      nombreNivel: "Asesoría de Crédito",
      descripcion:
        "Maecenas non mollis sapien. Praesent pulvinar justo quis facilisis ultricies. Donec quis orci viverra, convallis risus in, fringilla velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec metus aliquam, finibus erat vitae, lacinia leo. Nunc non semper velit. Duis velit arcu, aliquet at elit vel, auctor auctor tellus. Donec et ex consectetur, maximus tortor ac, tincidunt nibh. Nullam maximus egestas ligula non pellentesque. In sagittis mi id enim pharetra volutpat. Phasellus varius gravida magna vitae convallis.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004002002",
      idNivelPadre: "004002",
      nombreNivel: "Operaciones de crédito",
      descripcion:
        "Sed auctor lacus in vehicula varius. Ut nec nulla nisi. Nullam in justo eu nisl auctor hendrerit vitae id lacus. Nulla mattis mauris in orci gravida laoreet. Morbi nisl velit, iaculis ac elit in, aliquam iaculis nunc. Proin ac viverra lorem. Maecenas id purus fringilla, hendrerit justo sit amet, placerat libero. Etiam et tellus laoreet, malesuada lacus sed, elementum odio. Vestibulum viverra quis lacus in consectetur. Maecenas gravida est in magna finibus, at dictum erat rutrum. Sed quis nisi quis leo placerat ultrices et quis urna. Nam vitae lacus metus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004003",
      idNivelPadre: "004",
      nombreNivel: "Seguros",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004003001",
      idNivelPadre: "004003",
      nombreNivel: "Asesoría de Seguros",
      descripcion:
        "Mauris ac pretium metus. Sed at sem ut augue commodo ornare sed vitae velit. Proin venenatis, est non varius pretium, sem tortor cursus magna, non elementum augue est a nisl. Duis in metus a nulla cursus porttitor. Etiam lacinia tristique mauris, vitae tincidunt lorem euismod et. Vivamus a sapien imperdiet, imperdiet lectus eget, ultrices nisl. Maecenas posuere sagittis mauris. Nullam gravida ipsum in aliquet rutrum. In vel nibh id sapien malesuada volutpat. Ut ultrices commodo malesuada.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004003002",
      idNivelPadre: "004003",
      nombreNivel: "Operaciones de Seguros ",
      descripcion:
        "Proin risus risus, bibendum non interdum ut, sodales vel tortor. Ut eu tristique augue, sed interdum erat. Nullam aliquet porta aliquam. Donec consequat luctus justo accumsan rhoncus. Fusce non sem a sem malesuada tincidunt id a massa. Praesent et volutpat odio. Pellentesque mollis metus eu quam congue, nec molestie felis congue. Fusce vitae nulla eget odio malesuada pharetra. Phasellus sit amet dui vestibulum ipsum consequat consequat eu non felis. Proin tincidunt pretium magna, interdum feugiat ligula maximus vitae. Duis gravida suscipit erat eu luctus. Aenean lacinia urna et turpis faucibus egestas. Suspendisse potenti. Donec eu viverra lorem. Maecenas porta nunc ac malesuada porta. Praesent tincidunt, massa non lobortis convallis, enim enim bibendum magna, fermentum euismod risus tortor id ipsum.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004003003",
      idNivelPadre: "004003",
      nombreNivel: "Creación de Seguros",
      descripcion:
        "Pellentesque magna neque, efficitur in posuere eu, lobortis sed enim. Ut non justo vitae elit dignissim finibus. Phasellus tempus magna sapien, sed bibendum dui varius eget. Duis varius sapien non ipsum vulputate bibendum. Sed scelerisque tincidunt ante, sit amet auctor ante egestas eu. In rutrum enim at elit imperdiet, consequat cursus sapien cursus. Etiam pharetra gravida nunc, ut tempus nibh aliquet id. Donec ac diam hendrerit, varius tellus eu, ornare nunc. Integer at lacus sit amet est blandit ultrices.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004003004",
      idNivelPadre: "004003",
      nombreNivel: "Renovación de Seguros",
      descripcion:
        "Fusce nec tincidunt odio, ac euismod nisl. Vivamus tincidunt, enim sed bibendum aliquam, lectus quam suscipit nulla, in eleifend est lacus quis nibh. Sed suscipit felis vel bibendum semper. Nam vitae semper magna. Donec feugiat placerat suscipit. In eget velit nec dolor egestas vulputate non eu velit. Vestibulum molestie tellus mauris, a fringilla sapien faucibus ullamcorper. Sed vel lacinia lorem. Suspendisse at eros augue. Etiam vulputate erat id orci malesuada, interdum rutrum risus ornare. Nunc tincidunt nisl in dolor bibendum, a volutpat arcu iaculis. In porttitor sodales leo. Donec eu enim porta, ultrices ipsum in, auctor tellus. Morbi eu semper libero, quis facilisis metus. Cras eu purus consectetur, aliquet neque eu, varius massa.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004004",
      idNivelPadre: "004",
      nombreNivel: "Cartera",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004004001",
      idNivelPadre: "004004",
      nombreNivel: "Recaudos.",
      descripcion:
        "Donec dolor elit, tristique vitae aliquet quis, lacinia vitae augue. Aenean quis dui aliquet, tincidunt mi ac, vestibulum elit. Sed id purus pellentesque, aliquam tortor id, sagittis purus. Duis dui ante, efficitur semper semper vitae, bibendum non velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean non condimentum massa. Aenean tortor nisi, elementum non porttitor id, ullamcorper sit amet lectus. Mauris placerat augue eu mattis commodo. Ut aliquet at nunc eu vehicula.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004004002",
      idNivelPadre: "004004",
      nombreNivel: "Cobranza.",
      descripcion:
        "Phasellus dolor magna, placerat facilisis vestibulum a, condimentum mollis mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque neque leo, finibus ut ornare at, hendrerit ut justo. Mauris commodo est et massa luctus semper. Etiam faucibus ante id metus feugiat, non fringilla est ultrices. Nunc eget ligula suscipit, mollis elit vitae, fermentum mi. Phasellus turpis dui, gravida vel euismod eu, pellentesque vehicula sem. Sed malesuada placerat lacus mattis pharetra. Integer condimentum orci quam, vestibulum pretium magna luctus sed. Donec pretium, nulla at ornare aliquet, nisi ex pellentesque tellus, a ullamcorper elit mauris sed leo. Donec euismod quam id urna maximus semper. Ut posuere diam id magna suscipit, in condimentum lacus iaculis. Nunc quis auctor odio. Aliquam nibh felis, iaculis id sagittis quis, varius sit amet mi.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004004003",
      idNivelPadre: "004004",
      nombreNivel: "Generación de informes a centrales de riesgo",
      descripcion:
        "Suspendisse sed justo in purus malesuada sollicitudin vel ut nunc. Curabitur vulputate molestie arcu ut pharetra. Nunc vel ipsum bibendum, commodo leo eget, fringilla risus. Ut dictum augue et neque interdum, sed commodo metus vehicula. Vivamus vitae leo ac nulla pretium auctor sed ac nisi. Phasellus a sem lectus. Fusce rutrum, libero in fermentum posuere, lacus tortor consequat diam, ac facilisis quam orci aliquam justo. Nunc dapibus enim nec erat ornare consequat. Morbi elementum eget lacus eu elementum. Sed quis orci sit amet nibh mattis consequat. Fusce eleifend elit at blandit gravida. In quis ipsum sagittis ipsum auctor sollicitudin. Aliquam eget nisi erat. Proin nec rutrum sapien. Donec dolor massa, rutrum sed dui id, luctus volutpat dui.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004004004",
      idNivelPadre: "004004",
      nombreNivel: "Solicitudes e Informes de Cartera",
      descripcion:
        "Suspendisse euismod lacinia magna vel tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus pulvinar mi quis justo ornare commodo. Nulla consequat leo in luctus auctor. Ut arcu velit, suscipit non aliquet non, porttitor id elit. Nunc luctus accumsan hendrerit. Curabitur sollicitudin dolor nulla, quis pharetra nisl feugiat vel. Aenean porta, tellus sit amet sollicitudin tempor, ipsum metus congue velit, mattis elementum elit mauris in turpis. Maecenas congue nibh nec orci pharetra, sed ullamcorper enim laoreet. Praesent ac ipsum felis. Aliquam quis ligula et mauris tincidunt vehicula. Etiam sit amet laoreet arcu. Sed sollicitudin, erat sit amet interdum imperdiet, tellus mi accumsan sapien, a aliquam elit lorem dignissim ante. Sed vel lobortis purus, sed lacinia quam. Quisque non dolor sapien. Donec mi nisi, laoreet non iaculis et, feugiat nec lectus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004004005",
      idNivelPadre: "004004",
      nombreNivel: "Evaluación de cartera de asociados",
      descripcion:
        "Mauris commodo urna eros. Pellentesque ultricies iaculis porta. Morbi tristique semper libero eget vulputate. Phasellus fermentum libero blandit purus semper rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin quam purus, hendrerit accumsan tortor vitae, laoreet vulputate sapien. Cras vel viverra erat. Nam id ipsum id risus placerat viverra. Phasellus ac velit mollis, pretium enim eu, lacinia dolor. Integer at ex eu quam ornare viverra. Nulla risus ex, lobortis iaculis turpis non, pellentesque molestie odio. Integer nec aliquam velit. Nunc dolor turpis, fringilla quis consequat a, tristique nec risus. Fusce cursus quam id bibendum pulvinar. Suspendisse id accumsan massa. Suspendisse vitae pellentesque sem.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004004006",
      idNivelPadre: "004004",
      nombreNivel: "Provisiones de cartera",
      descripcion:
        "Aenean magna ante, eleifend sed nulla vel, varius sodales est. Etiam id ex ipsum. Donec imperdiet fermentum quam, in vulputate dui aliquet eu. Sed consectetur, metus ac aliquet sollicitudin, diam tellus consequat augue, id convallis neque quam consequat nibh. Pellentesque ut neque non lorem posuere euismod. Sed egestas mi ac ante mattis efficitur. Maecenas vitae viverra elit. Ut eget tellus nunc. Phasellus lobortis est et nisi condimentum mollis. Morbi ornare vel nunc et pulvinar. Integer at augue massa. Phasellus mollis, enim vitae pharetra luctus, lacus sapien venenatis nisl, in placerat lectus ante ac purus. Sed ac lectus in arcu rhoncus tempor. Curabitur volutpat tellus ac erat bibendum, eu venenatis ante ultricies. In suscipit venenatis erat, auctor tincidunt ante pulvinar a.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004004007",
      idNivelPadre: "004004",
      nombreNivel: "Reliquidaciones de cartera",
      descripcion:
        "Aenean vel tempus tellus. Quisque ultricies nunc at tincidunt interdum. In hac habitasse platea dictumst. Ut pharetra ex sit amet euismod elementum. Proin dictum ullamcorper accumsan. Suspendisse potenti. Phasellus ultrices mauris mauris, at congue sapien eleifend in.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004004008",
      idNivelPadre: "004004",
      nombreNivel: "Castigos de Cartera",
      descripcion:
        "Cras non dui ut sapien pulvinar feugiat. In hac habitasse platea dictumst. Nulla id justo nec massa congue ultricies vel vel ligula. Donec ultricies mi lorem, nec lacinia ex iaculis sed. Donec nec pellentesque erat. Vivamus eget mollis nibh. Praesent consectetur lacus lacus, sit amet mattis mi fringilla non. Duis eu ex pellentesque, volutpat eros ut, ultricies nisi. Etiam sed tristique ex, in facilisis massa. Nullam quis tortor rutrum, egestas felis at, pretium urna.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004004009",
      idNivelPadre: "004004",
      nombreNivel: "Liquidaciones finales.",
      descripcion:
        "Quisque eu purus enim. Pellentesque aliquet tincidunt dolor, id interdum sapien. Nam fringilla, quam fringilla iaculis vulputate, tortor nisl lobortis dolor, sit amet vestibulum nulla diam ut arcu. Etiam nisl dolor, rutrum ac mi id, gravida blandit magna. Nullam sagittis condimentum aliquet. Morbi eget metus a ex semper convallis. Pellentesque pharetra rhoncus lectus, in dignissim libero. Sed tincidunt vitae libero sit amet commodo. Vestibulum feugiat eros nisl. Maecenas volutpat eu ex efficitur pretium. Aliquam vitae arcu convallis, ultricies tellus vel, vehicula eros. Nunc magna nisi, varius sed mauris ut, scelerisque malesuada odio. Aenean a viverra ipsum.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004005",
      idNivelPadre: "004",
      nombreNivel: "Gestionar Garantías",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004005001",
      idNivelPadre: "004005",
      nombreNivel:
        "Procedimiento de Garantías: Constitución, control y seguimiento a hipotecas, pagarés y prendas",
      descripcion:
        "Aliquam erat volutpat. Duis ut sodales tortor. Nullam mi leo, ullamcorper vitae tellus ac, venenatis dignissim augue. Sed vel velit id odio gravida rutrum. Aenean ultrices, nisl et semper cursus, magna tellus efficitur eros, sit amet imperdiet purus odio nec ex. Nulla finibus rhoncus rutrum. In elementum ac est sit amet rhoncus. Suspendisse eu sollicitudin ipsum. Fusce blandit dignissim tortor quis faucibus. Nulla vestibulum sem quam. Nunc nibh eros, gravida vel dignissim in, lacinia ac velit. Suspendisse vitae odio quis felis feugiat aliquam eu a tellus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "004005002",
      idNivelPadre: "004005",
      nombreNivel: "Fondo Nacional de Garantías",
      descripcion:
        "In accumsan, quam sit amet volutpat gravida, metus est tincidunt elit, non ornare libero augue in eros. Aenean feugiat vulputate nisl, vel porttitor lacus suscipit id. Integer fringilla nibh at sapien eleifend, vitae vehicula odio ornare. Aliquam interdum, velit vel consequat tempus, nibh mi convallis neque, eget efficitur sem felis ut lorem. Aliquam erat volutpat. Nullam metus purus, sagittis ullamcorper leo nec, consectetur condimentum lectus. Nam eu facilisis quam. Nullam auctor laoreet nibh nec luctus. Donec dapibus posuere neque sed elementum. In hac habitasse platea dictumst.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005",
      idNivelPadre: "0",
      nombreNivel: "Transferencia Solidaria",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005001",
      idNivelPadre: "005",
      nombreNivel: "Gestión Social ",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005001001",
      idNivelPadre: "005001",
      nombreNivel: "Planeación de la gestión social ",
      descripcion:
        "Phasellus ultricies id quam non ullamcorper. Aenean tempus tempor urna a porttitor. Sed ultrices, justo nec auctor aliquet, dui erat dapibus lorem, ut aliquet quam ex id odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat ex in sapien iaculis fringilla nec et metus. Sed elementum luctus neque in posuere. Nunc lacinia sodales arcu, id accumsan orci sodales laoreet. Curabitur pharetra sodales ligula. Phasellus eu ultrices est, a dapibus ex. Quisque vestibulum dui vitae elit semper, non condimentum nunc tempus. Etiam vel odio nisi. Etiam a sem sodales, congue magna in, lobortis eros.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005001002",
      idNivelPadre: "005001",
      nombreNivel: "Desarrollo de Actividades de Gestión Social ",
      descripcion:
        "Sed in nulla sem. Praesent sed elit est. Etiam vehicula neque at tincidunt aliquet. Phasellus feugiat fringilla tristique. Morbi laoreet ligula non vehicula tincidunt. Cras ac condimentum felis, non eleifend arcu. Aliquam scelerisque ac tellus ut tempor. Pellentesque lectus ante, maximus efficitur ultricies a, commodo ut nulla.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005001003",
      idNivelPadre: "005001",
      nombreNivel: "Seguimiento y Monitoreo a los Programas de Gestión Social ",
      descripcion:
        "Duis nibh ex, mattis vitae felis vel, mollis pellentesque nisl. Aenean aliquam libero sodales sem pulvinar molestie. Sed in justo sodales, placerat augue eget, sollicitudin erat. Aliquam et ornare velit. Sed molestie metus eget mattis mattis. Donec congue facilisis urna in gravida. Cras imperdiet felis eget efficitur consequat. Cras id auctor augue, nec ultrices risus. Quisque venenatis ullamcorper enim vitae imperdiet. Nulla facilisi. Cras luctus vulputate augue at consequat. Fusce et eros in nisl commodo mattis sit amet eget lorem. Phasellus tempor accumsan leo ut dictum.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005001004",
      idNivelPadre: "005001",
      nombreNivel: "Programa Juntos",
      descripcion:
        "Vivamus vel urna elit. Maecenas luctus eu lacus gravida cursus. Nullam aliquam scelerisque nisi. Phasellus vehicula iaculis volutpat. Praesent sit amet dolor quis diam condimentum pellentesque. Curabitur ut risus eu nisl vulputate tempor a non odio. Etiam dignissim luctus nunc eget molestie. Vivamus maximus diam ac odio blandit, ac eleifend erat congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vitae arcu nulla. Nunc et augue eu turpis interdum porttitor. Maecenas venenatis nunc eu interdum congue. Duis elementum ligula non mauris feugiat, eu gravida nibh scelerisque. Aenean quis scelerisque velit. Mauris in tempor ex.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005001005",
      idNivelPadre: "005001",
      nombreNivel: "Fondo Social",
      descripcion:
        "Ut nisi erat, consectetur maximus placerat at, blandit vel tortor. Donec eu ex maximus, interdum nibh at, aliquet nibh. Donec ultricies, sapien eu fringilla gravida, quam massa porttitor ante, sed suscipit sem libero et ex. Curabitur nec mattis eros. Maecenas viverra laoreet quam a cursus. Maecenas in velit leo. Vivamus a tellus metus. Donec dapibus nec tortor at volutpat. Vestibulum ac metus tortor.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005002",
      idNivelPadre: "005",
      nombreNivel: "Gestionar Educación",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005002001",
      idNivelPadre: "005002",
      nombreNivel: "Cultura solidaria",
      descripcion:
        "Vivamus egestas ornare enim, eget lacinia nibh placerat non. Nulla aliquam tortor at neque ornare sodales. Phasellus finibus turpis augue, quis lacinia mi vehicula in. Phasellus facilisis metus ac purus volutpat hendrerit. Nulla semper consectetur dapibus. Curabitur cursus accumsan dui, ut eleifend elit ullamcorper id. Nunc et felis mauris. In tortor felis, placerat ut lacus et, rhoncus congue sem.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005002002",
      idNivelPadre: "005002",
      nombreNivel: "Gestión administrativa",
      descripcion:
        "Duis non vulputate neque. Etiam vel dui vitae velit mollis dapibus a ut tellus. Nunc at vulputate risus. Aenean pharetra convallis eros at dapibus. Curabitur eu dolor varius, convallis libero posuere, efficitur ipsum. Maecenas ut massa est. Sed elit lectus, interdum a dignissim vel, scelerisque et nulla. Vestibulum consequat urna massa. Morbi facilisis arcu ut neque ornare tempor. Nunc sed hendrerit diam. Morbi non ultricies urna.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005002003",
      idNivelPadre: "005002",
      nombreNivel: "Cultura económica",
      descripcion:
        "Cras mollis rhoncus nunc. Vivamus ac imperdiet magna. Donec lorem nisl, tincidunt in purus non, condimentum laoreet nunc. Duis commodo suscipit elit, vel dictum libero faucibus vel. Phasellus aliquam neque at sodales dictum. Curabitur nec egestas enim, ac pretium lacus. Aenean viverra diam vitae nunc lacinia feugiat. Nam eu ligula nec lectus vehicula convallis vel eget augue. Donec a libero porttitor, ultrices urna nec, elementum nulla. Donec egestas ut ex sed volutpat.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005002004",
      idNivelPadre: "005002",
      nombreNivel: "Formación de formadores ",
      descripcion:
        "Donec egestas rhoncus euismod. Mauris mauris dui, dapibus ut sodales id, pellentesque in lectus. N&#10;lla euismod tellus eu diam molestie scelerisque. Ut rutrum est non dolor rutrum lobortis. Curabitur sed porttitor purus. Suspendisse facilisis sed velit at suscipit. Ut vitae sagittis enim. Phasellus vel nisl sagittis sapien commodo laoreet sed dictum urna. Pellentesque porttitor neque nec vestibulum iaculis. Duis posuere eleifend nunc id blandit. Aliquam malesuada ac quam vitae vestibulum. Pellentesque mollis at sapien id vehicula.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005002005",
      idNivelPadre: "005002",
      nombreNivel: "Formación para la Familia",
      descripcion:
        "Ut eu commodo metus. Vivamus vitae risus dolor. Aliquam nunc elit, aliquam nec nulla non, sodales bibendum ligula. Ut tincidunt aliquam felis pretium tincidunt. Maecenas sed interdum augue. Nam enim purus, condimentum a est placerat, ultricies ornare nunc. Quisque in congue urna. Vestibulum rhoncus, erat eget pulvinar pellentesque, urna purus facilisis dolor, vel sagittis tellus diam eu sem. Vestibulum felis magna, tristique vel laoreet non, ornare sit amet felis. Aliquam molestie fermentum mauris, vel suscipit orci hendrerit sit amet. Maecenas feugiat quam a aliquet sagittis. Suspendisse mattis est nulla, quis laoreet velit varius id. Maecenas quis finibus ante, sit amet ultricies odio. Praesent vehicula, turpis quis dictum pharetra, ligula diam luctus nulla, quis ultrices dolor libero eget eros. Duis vel aliquet libero.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005003",
      idNivelPadre: "005",
      nombreNivel: "Gestionar emprendimiento",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005003001",
      idNivelPadre: "005003",
      nombreNivel: "Sensibilización.",
      descripcion:
        "Morbi enim elit, aliquet nec nisi non, finibus cursus elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum iaculis ipsum a enim ullamcorper volutpat. Aenean vitae accumsan quam. Maecenas luctus est id aliquet ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque id bibendum velit. Maecenas faucibus tortor nibh, id tempus erat lacinia eu. Nulla nec facilisis arcu. Curabitur ullamcorper urna sit amet posuere faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dolor rhoncus, scelerisque eros malesuada, tempus ipsum. In dignissim mattis faucibus. Ut eleifend lacinia vehicula. Proin sed condimentum nisi. Aliquam in tortor mollis, posuere purus iaculis, suscipit lorem.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005003002",
      idNivelPadre: "005003",
      nombreNivel: "Puesta en marcha.",
      descripcion:
        "Aliquam pharetra ornare nunc condimentum porta. Phasellus varius lacus et mi suscipit pulvinar mattis eget odio. Ut lobortis arcu dolor, in sagittis diam porta et. Nullam ac lacinia ligula. Etiam facilisis enim non dolor accumsan condimentum. Nunc sed elementum neque. Cras dapibus, ante sit amet vulputate egestas, ex lectus congue urna, eu dictum velit erat in metus. Mauris sodales, quam in sodales ornare, nulla nisl tincidunt velit, vitae iaculis orci enim eget tellus. In eget lobortis orci. Suspendisse rhoncus quis sapien pretium euismod. Nulla quis mi non neque vulputate lobortis nec ut velit. Nunc rutrum placerat semper. In ac ullamcorper leo. Nullam eu hendrerit sem.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005003003",
      idNivelPadre: "005003",
      nombreNivel: "Consolidación.",
      descripcion:
        "Pellentesque porttitor fermentum leo, vel dapibus lectus sollicitudin non. Maecenas ac tellus dui. Sed nec porta diam. Aliquam id metus nunc. Duis at massa mauris. Suspendisse nec lacus eget dui laoreet cursus. Morbi sed justo id nulla malesuada consequat eu non nunc. Vestibulum ante ipsum, porta ut cursus nec, lacinia vitae dui. Vestibulum dolor dolor, fermentum et nibh quis, tincidunt sollicitudin neque. Fusce laoreet odio velit. Mauris eu lorem lobortis, feugiat elit et, tincidunt ante.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005003004",
      idNivelPadre: "005003",
      nombreNivel: "Seguimiento y Control a los proyectos de emprendimiento",
      descripcion:
        "Nulla in lorem vulputate, vulputate massa non, maximus mauris. Integer non lectus auctor, vulputate sem vitae, hendrerit lorem. Ut eleifend quis nunc eget fringilla. Nullam a mauris a libero sollicitudin ornare. Sed lorem dolor, euismod vitae semper a, condimentum quis quam. Sed a vestibulum turpis. Sed tincidunt sodales libero, efficitur volutpat ante porta eget. Pellentesque ut felis porta, faucibus erat ac, consequat sem. Proin vitae turpis et nunc sollicitudin egestas nec id enim. Vestibulum efficitur condimentum mauris, et posuere orci suscipit vitae. Duis eleifend, velit faucibus finibus auctor, sem augue ullamcorper ante, dictum ullamcorper lectus nisl ut dui. Mauris viverra accumsan sagittis. Mauris at faucibus felis. Vestibulum ut arcu sed tellus bibendum sagittis ac sed arcu. Vivamus id facilisis lorem, quis pulvinar mi. Nunc bibendum quam vel tortor finibus laoreet.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005003005",
      idNivelPadre: "005003",
      nombreNivel: "Proyectos Productivos.",
      descripcion:
        "Nullam id porta sem. Praesent ligula turpis, suscipit scelerisque fermentum eu, faucibus non ex. Sed volutpat quis felis id tristique. Donec varius, sapien nec dictum pretium, velit ligula efficitur massa, sit amet gravida leo felis quis metus. Nam suscipit vel libero ornare scelerisque. Proin dignissim egestas lacinia. Quisque ultrices blandit tempor.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005003006",
      idNivelPadre: "005003",
      nombreNivel: "Comercialización Gestión de Emprendimiento",
      descripcion:
        "Phasellus vel dui a velit laoreet laoreet vel ac urna. Maecenas a mollis purus, ac faucibus lacus. Sed sagittis enim id turpis fringilla porttitor. Aliquam erat volutpat. Ut vitae quam vitae justo posuere commodo quis ut nibh. Nullam vel volutpat neque. Sed vitae ante at lacus aliquam volutpat sit amet ac felis. Donec vel nunc at risus euismod tempor. Integer mollis, nunc quis mattis volutpat, ex velit finibus ipsum, a pretium nunc turpis ut lectus. Fusce faucibus quam at metus tincidunt, quis eleifend est dapibus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005004",
      idNivelPadre: "005",
      nombreNivel: "Gestionar Beneficios",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005004001",
      idNivelPadre: "005004",
      nombreNivel: "Solidaridad Interna y Externa",
      descripcion:
        "Quisque placerat sagittis neque, ac fringilla tellus aliquam at. Duis vitae justo lobortis, tempus tortor id, tempus odio. Sed suscipit purus lorem, sit amet blandit urna dictum vitae. Morbi posuere porttitor purus at pulvinar. Sed fermentum in mi quis convallis. Vestibulum malesuada tempor magna et volutpat. Donec et molestie odio, ut feugiat dolor. Ut eu vehicula purus, id hendrerit eros. Nunc hendrerit orci sit amet finibus sodales. Cras cursus odio eu mauris consequat, eget porta sem tincidunt. Nam vestibulum malesuada tristique. Vestibulum sodales sodales ex nec pellentesque. Nullam molestie, orci id posuere porttitor, metus orci auctor nulla, sed placerat ligula est a risus. Ut vehicula dignissim magna, ac mattis turpis pellentesque eget. Nunc pulvinar sapien non scelerisque dignissim.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "005004002",
      idNivelPadre: "005004",
      nombreNivel: "RFCD (Recreación, formación, cultura y deporte)",
      descripcion:
        "Donec bibendum, dolor eu euismod luctus, arcu libero vehicula ante, a vestibulum velit tortor at risus. Nunc iaculis nunc in dui egestas vulputate. Pellentesque pellentesque lorem fringilla lacus imperdiet fringilla. Nulla in dui tortor. Integer id congue dolor. Donec ullamcorper nisi in augue ultricies, nec mattis sapien fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend diam vitae mi ullamcorper, ac pulvinar nunc porta. Phasellus laoreet, erat sagittis iaculis laoreet, lacus ex iaculis risus, eu consectetur est risus eget ipsum. Cras tincidunt quam vel orci auctor feugiat.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006",
      idNivelPadre: "0",
      nombreNivel: "Desarrollo Humano y Organizacional",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006001",
      idNivelPadre: "006",
      nombreNivel: "Arquitectura organizacional",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006001001",
      idNivelPadre: "006001",
      nombreNivel: "Definición de la estructura organizacional",
      descripcion:
        "Donec pharetra erat enim, ut placerat eros efficitur id. Donec malesuada tristique luctus. Vivamus bibendum elit eget massa bibendum facilisis. Nullam egestas eget lacus ut blandit. Morbi a turpis accumsan, pretium libero eget, pretium arcu. Praesent in nibh at ante faucibus lacinia. Proin sit amet maximus enim. Suspendisse potenti.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006001002",
      idNivelPadre: "006001",
      nombreNivel: "Definición de Perfiles y Cargos",
      descripcion:
        "Suspendisse posuere dictum lectus, sit amet sollicitudin ex auctor sed. Mauris ut tempor augue. Mauris cursus sed odio vitae fringilla. Nullam aliquam cursus justo eu egestas. Fusce in nisl vel ex euismod fermentum a vitae urna. Sed tincidunt velit dui. Sed dui ante, aliquet nec augue in, maximus pharetra nunc. Nullam vel turpis at tellus semper pharetra. Aliquam erat volutpat. Aliquam dictum nibh eget mauris elementum, non accumsan massa maximus. Proin nec enim interdum, venenatis velit non, elementum odio. In nunc ligula, aliquet quis finibus id, malesuada viverra erat. Nam sed mattis nisl.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006002",
      idNivelPadre: "006",
      nombreNivel: "Atracción del talento",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006002001",
      idNivelPadre: "006002",
      nombreNivel: "Selección del talento humano",
      descripcion:
        "Proin pulvinar cursus velit pulvinar consequat. Sed ac magna a enim interdum laoreet non elementum turpis. Cras cursus ultricies tincidunt. Pellentesque sollicitudin congue elementum. Nulla aliquet condimentum turpis vehicula iaculis. Nam mollis libero in rhoncus maximus. Aliquam vitae metus ullamcorper, tempor sapien in, eleifend turpis. Nullam massa augue, bibendum eget egestas id, tempor sit amet lectus. Fusce et fermentum enim, in varius neque. Mauris at scelerisque metus. Donec eu lectus non nisi ullamcorper vulputate nec vel urna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut dictum vel leo nec rhoncus. Sed magna orci, venenatis vel pulvinar sed, faucibus eu ligula. Nam quis suscipit leo, eu accumsan lorem.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006002002",
      idNivelPadre: "006002",
      nombreNivel: "Inducción, Capacitación y Entrenamiento",
      descripcion:
        "Sed vel luctus nisi. Donec fermentum lacus ut velit bibendum posuere sed sit amet nunc. Vestibulum consectetur consectetur magna, et aliquam nulla sagittis id. Aenean quis aliquam nisl, et luctus enim. Aenean a eleifend risus. Quisque nunc sem, laoreet vel nisi vitae, pulvinar molestie augue. Aliquam posuere auctor sem, ut fringilla urna dictum id. Ut aliquam lacinia magna, eget sodales nisl. Nam facilisis scelerisque ipsum quis tempor.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006003",
      idNivelPadre: "006",
      nombreNivel: "Bienestar laboral",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006003001",
      idNivelPadre: "006003",
      nombreNivel: "Seguridad y Salud en el Trabajo",
      descripcion:
        "Aliquam at libero sit amet nibh faucibus posuere. Morbi condimentum turpis a orci ornare feugiat. Proin vulputate, mi a venenatis ornare, velit augue posuere mauris, ac malesuada enim enim nec nunc. In purus odio, pulvinar at leo non, accumsan hendrerit ipsum. Etiam eget suscipit mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec consectetur nec erat ut semper. Aliquam magna arcu, dictum in nisl et, mattis finibus risus. Donec consequat eleifend tempus. In euismod, erat vel faucibus accumsan, libero leo bibendum sapien, a sodales urna felis ac est. Maecenas molestie elit eros, condimentum tristique lectus lobortis ut. Fusce nec sollicitudin magna. Integer blandit felis et tortor condimentum, eget laoreet nunc porta.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006003002",
      idNivelPadre: "006003",
      nombreNivel: "Beneficios y Programas de Bienestar",
      descripcion:
        "Vivamus feugiat vulputate ipsum ut lacinia. Nulla sit amet erat cursus, facilisis dolor vel, convallis ligula. Mauris lectus ante, volutpat eget metus at, posuere euismod orci. Etiam porttitor sapien vitae dui auctor, eu dignissim ipsum posuere. Praesent at condimentum mi, et pulvinar neque. Curabitur dignissim semper cursus. Donec porttitor sagittis eros, vel laoreet erat ultricies ac. Praesent ac urna euismod est commodo dictum. Curabitur hendrerit, leo non ullamcorper vulputate, neque turpis laoreet justo, vitae rutrum ipsum ipsum sed mauris. In ut hendrerit elit. Ut egestas, turpis ut placerat pretium, diam ligula rhoncus nibh, sit amet sodales odio diam sed elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc pretium pulvinar odio quis sodales. Praesent vehicula molestie eros non aliquam.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006004",
      idNivelPadre: "006",
      nombreNivel: "Desarrollo Humano",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006004001",
      idNivelPadre: "006004",
      nombreNivel: "Formación del Talento Humano",
      descripcion:
        "Cras in magna nec risus sagittis eleifend a in ipsum. Integer in nisl quis justo condimentum fermentum. Proin volutpat purus nibh, eu pretium nulla sollicitudin eu. Nulla tincidunt mauris sit amet commodo finibus. Sed nec erat sit amet nibh rhoncus ullamcorper ut eget lacus. Nunc posuere nunc sed nulla ornare blandit. Proin a tincidunt tellus. Curabitur vel leo vel augue eleifend consequat auctor eget lacus. Vestibulum quis urna et risus aliquet finibus nec non quam. Duis nec mi nec nunc egestas malesuada a et ex. Nam gravida enim in magna ultricies, et faucibus leo consequat. Vivamus sit amet lacinia ligula. Quisque congue lobortis nunc, et tincidunt ligula lobortis sit amet. Ut purus quam, lacinia eu neque sed, vestibulum vehicula elit.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006004002",
      idNivelPadre: "006004",
      nombreNivel: "Gestión del Desempeño",
      descripcion:
        "Ut ultrices ultricies mi, vitae vestibulum mi elementum non. Duis at sapien vel massa euismod malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean dictum ipsum odio, quis aliquet eros posuere in. Aenean venenatis dapibus molestie. Suspendisse nec est leo. Maecenas ullamcorper lectus ac ultricies aliquet. In laoreet nibh sed viverra mattis.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006004003",
      idNivelPadre: "006004",
      nombreNivel: "Planes de Carrera y Sucesión",
      descripcion:
        "Suspendisse dictum ex sit amet accumsan ullamcorper. Aenean leo odio, blandit vel augue vitae, luctus dapibus lorem. Maecenas eget neque neque. Donec tristique tortor nisl, nec gravida nibh sagittis eu. Suspendisse eleifend tincidunt lectus dapibus ullamcorper. Nunc sed ultrices enim. Aliquam at ornare risus. Sed dignissim mattis tortor sed vehicula. Aliquam facilisis lorem faucibus fermentum scelerisque. Cras eu sodales odio, non efficitur mi. In et dui efficitur magna tincidunt suscipit. Vestibulum efficitur nulla risus, et tempus odio blandit nec.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006005",
      idNivelPadre: "006",
      nombreNivel: "Relaciones laborales",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006005001",
      idNivelPadre: "006005",
      nombreNivel: "Afiliación Seguridad Social",
      descripcion:
        "Cras fringilla vitae tortor pellentesque hendrerit. Vivamus ipsum sem, luctus et diam eget, mattis aliquet metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis imperdiet odio at vulputate porta. Donec posuere, libero sit amet scelerisque sodales, dolor felis sagittis erat, et vehicula augue nunc sit amet ipsum. Integer convallis convallis placerat. Phasellus vitae feugiat ligula. Nulla ut mollis sem. Donec ut egestas leo, eget tempus massa. Phasellus non sem ultrices, blandit eros feugiat, euismod tortor. Nam egestas congue magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius dolor vitae finibus egestas. Cras eu pretium risus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006005002",
      idNivelPadre: "006005",
      nombreNivel: "Procesos Disciplinarios",
      descripcion:
        "Pellentesque pretium tempus elit, at elementum purus viverra at. Nam justo massa, rutrum ac ipsum non, hendrerit cursus sapien. Aliquam lacinia dapibus lobortis. Nullam finibus neque sit amet elit lobortis volutpat in ac eros. Donec in blandit nibh. Nunc et lectus eget dui malesuada euismod. Proin bibendum ex ligula, sit amet feugiat purus vehicula sit amet. Sed efficitur gravida dapibus. Vivamus interdum, odio vel congue hendrerit, sem eros interdum dolor, non sollicitudin sem dui a dui. Duis et orci eget quam ultrices viverra. Suspendisse ipsum lectus, lobortis vel mauris id, elementum aliquam eros.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006005003",
      idNivelPadre: "006005",
      nombreNivel: "Contratación y Desvinculación",
      descripcion:
        "Curabitur venenatis tortor nulla, at pulvinar metus sagittis sit amet. Aliquam ut vehicula lacus. Morbi congue sodales pellentesque. Proin semper laoreet ipsum, id vestibulum sapien ultricies id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque turpis justo, fringilla at risus blandit, elementum laoreet sem. Phasellus vel consectetur ante. Aenean fermentum ac justo id volutpat. Aenean non turpis nibh. Donec id sem molestie, ullamcorper mauris nec, venenatis diam. Aenean pulvinar gravida nibh id pretium. Suspendisse nunc arcu, lobortis in fringilla interdum, condimentum a velit. Vestibulum at interdum magna.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006006",
      idNivelPadre: "006",
      nombreNivel: "Compensación ",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006006001",
      idNivelPadre: "006006",
      nombreNivel: "Estructuración Salarial",
      descripcion:
        "Aenean tempus tortor vel justo venenatis, id pretium eros iaculis. Quisque ligula leo, mollis id ornare ut, imperdiet vel odio. Nullam id ligula commodo, porta magna a, ultrices mauris. Sed in tincidunt lectus, eget pellentesque augue. Vestibulum feugiat eu risus at sodales. Quisque et orci lacinia, venenatis orci at, ultricies tellus. Morbi libero leo, sodales eu iaculis id, fermentum vel urna. Curabitur euismod finibus dolor, ac ultricies lorem accumsan vel. Integer mattis posuere mollis. Suspendisse gravida nunc nec justo bibendum, et molestie dui pellentesque.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "006006002",
      idNivelPadre: "006006",
      nombreNivel: "Pago de Nómina y Seguridad Social",
      descripcion:
        "Duis fermentum eget dui malesuada maximus. Sed congue ante a efficitur dictum. Proin ac dolor eget quam molestie commodo sit amet nec felis. Vivamus interdum vestibulum venenatis. Sed tincidunt posuere tincidunt. Integer tincidunt, neque a placerat accumsan, nulla nisi porttitor dolor, eget suscipit sapien velit eget sapien. Ut posuere consequat hendrerit. Fusce pretium suscipit convallis.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007",
      idNivelPadre: "0",
      nombreNivel: "Gestión Administrativa",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007001",
      idNivelPadre: "007",
      nombreNivel: "Gestión de compras",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007001001",
      idNivelPadre: "007001",
      nombreNivel: "Solicitudes de mayor y menor cuantía",
      descripcion:
        "Morbi ut erat ac tortor porttitor convallis non ut eros. Sed ac nibh sagittis, placerat est sed, fermentum dui. Etiam eu urna at dui semper feugiat a ut odio. Donec malesuada urna dolor, in efficitur nisl congue eget. Donec a bibendum sapien, id finibus metus. Proin a nulla ultrices, elementum sem a, gravida dui. Praesent fringilla, neque eu auctor elementum, orci massa tincidunt mi, non varius lacus sapien quis velit. Donec nunc ligula, sollicitudin congue nulla eu, facilisis accumsan est. Nulla semper lacus nec rutrum aliquet. Aenean quis purus et mi viverra dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vitae pulvinar augue, id iaculis odio. Sed id dignissim elit.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007001002",
      idNivelPadre: "007001",
      nombreNivel: "Gestión de Proveedores",
      descripcion:
        "Maecenas diam neque, euismod eget interdum nec, iaculis nec lorem. Sed quis lacus metus. Ut at magna sed justo pulvinar efficitur. Fusce quis cursus justo. Ut semper arcu id dapibus consequat. Sed rhoncus ultricies feugiat. Nulla condimentum erat elit, vitae fringilla metus placerat ut. Integer finibus turpis tellus, vel convallis libero placerat eu. Maecenas vel congue urna, in maximus arcu. Nunc congue interdum massa, id fermentum nunc ultricies vel. Aliquam erat volutpat. Nullam erat enim, ultrices quis cursus malesuada, rutrum quis mi.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007001003",
      idNivelPadre: "007001",
      nombreNivel: "Compras o Contrataciones de Bienes y Servicios ",
      descripcion:
        "Quisque est tellus, imperdiet id eleifend viverra, bibendum a orci. Suspendisse eget nibh at est porttitor varius eu vitae magna. Q&#10;isque sed congue leo. Duis ac mauris tincidunt, suscipit lorem non, tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ornare sapien quis consectetur consequat. Phasellus sed nibh non nisl pulvinar porta. Suspendisse dui lectus, lacinia ac est ut, consequat gravida lectus. Suspendisse eu quam non ex commodo eleifend non at magna. Duis ultrices pharetra nulla ut molestie. Proin in lectus eros. Duis porta fermentum scelerisque. Sed eu fermentum ante. Nullam et est mattis, suscipit metus in, tristique neque. Aenean a accumsan nulla, quis congue risus. Proin ut malesuada sem.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007001004",
      idNivelPadre: "007001",
      nombreNivel: "Caja menor",
      descripcion:
        "Donec non lacinia risus, sit amet lobortis eros. Nulla massa orci, semper quis consectetur nec, pharetra vel nisi. Donec interdum bibendum felis, vel elementum risus consectetur eget. Maecenas ligula metus, convallis a mauris eget, scelerisque tincidunt sem. Etiam a erat sit amet odio venenatis eleifend in id tellus. Aliquam vel ligula rutrum, pulvinar elit nec, tempor neque. Proin interdum ligula vel ante volutpat blandit. Cras sagittis, lorem non blandit faucibus, dolor ex pretium ipsum, non aliquet ante eros eget lacus. Sed vitae leo nec purus rhoncus efficitur ultricies et quam. Quisque magna mauris, hendrerit id nisi quis, hendrerit suscipit lectus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007002",
      idNivelPadre: "007",
      nombreNivel: "Gestión documental",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007002001",
      idNivelPadre: "007002",
      nombreNivel: "Distanciamiento de Mensajería",
      descripcion:
        "Vivamus gravida eros sem, a vestibulum leo ullamcorper nec. Quisque non sagittis tellus, sollicitudin sollicitudin odio. Duis dictum cursus enim, a dignissim tortor mattis ut. Nam iaculis lorem nec mi accumsan, sed dictum diam ultrices. Suspendisse euismod interdum luctus. Etiam lacinia diam nisl, quis viverra libero pharetra non. Sed dictum vestibulum risus ac finibus. Donec semper ex neque, in vulputate nulla pulvinar eu. Sed vulputate ex eros, euismod venenatis nisi malesuada eu. Etiam rhoncus nunc et interdum egestas.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007002002",
      idNivelPadre: "007002",
      nombreNivel: "Manejo de Correspondencia ",
      descripcion:
        "Aliquam vel malesuada augue, ultricies euismod ligula. Ut a odio lacus. Donec justo nibh, blandit ac pretium in, lobortis id neque. Mauris aliquet pulvinar leo eget consectetur. Praesent egestas, libero suscipit rhoncus auctor, nisi magna rhoncus sapien, et auctor ante nunc quis nisl. Curabitur varius odio ac egestas iaculis. Integer dignissim sagittis semper. Etiam ante nisl, commodo quis interdum id, facilisis eget metus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007002003",
      idNivelPadre: "007002",
      nombreNivel: "Planeación de la Gestión Documental",
      descripcion:
        "Praesent libero sem, facilisis sit amet tincidunt sit amet, suscipit aliquam risus. Quisque sed mattis orci. Cras et dolor nec tortor pretium convallis sed nec lorem. In hac habitasse platea dictumst. Vivamus sit amet nisl eu tellus porta consequat at sit amet turpis. Donec condimentum purus vitae pellentesque iaculis. Quisque hendrerit mattis eros sit amet posuere. Praesent ultricies, diam convallis tincidunt consectetur, ex magna tempus velit, eu accumsan diam lorem sit amet ligula. Morbi hendrerit hendrerit enim consequat euismod. Vivamus quis enim sed lectus hendrerit sagittis a eu nulla. Cras et orci faucibus, dignissim neque vitae, sollicitudin mi. Pellentesque quis commodo velit. Vestibulum pharetra eleifend diam, vitae blandit metus dapibus quis. Donec a sapien magna.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007002004",
      idNivelPadre: "007002",
      nombreNivel: "Control Documental",
      descripcion:
        "Donec non felis vitae augue euismod tristique non quis libero. In hac habitasse platea dictumst. Nam sem orci, facilisis non bibendum non, elementum ut felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus scelerisque orci in efficitur suscipit. Proin eleifend tincidunt elementum. In et vehicula neque. Ut at semper ante. Maecenas efficitur ligula ut neque luctus, hendrerit feugiat sapien pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce et laoreet neque.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007003",
      idNivelPadre: "007",
      nombreNivel: "Logística Interna",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007003001",
      idNivelPadre: "007003",
      nombreNivel: "Logística de Transportes",
      descripcion:
        "Duis lobortis est neque, et efficitur felis pharetra ac. Cras commodo id leo a bibendum. Maecenas in lobortis erat, et lacinia nisl. Donec porta scelerisque lorem, vitae rhoncus lorem posuere quis. Integer commodo quis dui vel viverra. Duis lacinia erat nec felis suscipit dignissim. Nam at posuere diam, et viverra mauris. Morbi pellentesque tellus est, sed tincidunt urna egestas vel.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007003002",
      idNivelPadre: "007003",
      nombreNivel: "Ingreso de Personal Externo",
      descripcion:
        "Sed a varius turpis, eget ultrices mauris. Morbi lacinia iaculis pellentesque. Curabitur faucibus commodo nisl, ut consequat nisi varius id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non tortor rutrum, finibus magna eget, sollicitudin eros. Phasellus vitae nulla varius metus tristique blandit vel luctus tellus. Nulla rutrum libero luctus efficitur fringilla.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007004",
      idNivelPadre: "007",
      nombreNivel: "Mantenimiento de Activos e Infraestructura",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007004001",
      idNivelPadre: "007004",
      nombreNivel: "Control de Activos y Elemento de Menor Cuantía",
      descripcion:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In nibh nisl, feugiat at libero ac, euismod dignissim velit. Mauris tristique ut purus nec aliquam. Aliquam sit amet mi massa. Proin odio urna, pretium nec consectetur ac, commodo vel ligula. Pellentesque accumsan porttitor sapien, sed volutpat orci rutrum in. Quisque at ex lacinia arcu mollis euismod. Nullam sit amet dolor egestas, hendrerit felis id, tristique nibh. Aliquam auctor nulla eget varius porta.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007004002",
      idNivelPadre: "007004",
      nombreNivel: "Mantenimiento de Locaciones ",
      descripcion:
        "Quisque sed consectetur justo. Donec tincidunt in metus id aliquet. Aliquam sed justo id ante facilisis tincidunt at sed dolor. Nulla mollis et ligula a vulputate. Donec vitae hendrerit augue, vel tincidunt ante. Donec hendrerit dictum urna ut euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ornare metus quis enim egestas porta. Duis vitae turpis tellus. Sed sit amet vestibulum elit, vitae accumsan urna. Donec fringilla efficitur velit fringilla accumsan.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007005",
      idNivelPadre: "007",
      nombreNivel: "Funciones Generales",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007005001",
      idNivelPadre: "007005",
      nombreNivel: "Responder Correo Electrónico",
      descripcion:
        "Aliquam dolor ante, tincidunt a rhoncus eu, facilisis eu erat. Phasellus a mi et sapien finibus tincidunt. Nunc iaculis diam luctus venenatis ultricies. Duis facilisis ipsum vitae lorem aliquam tristique. Vivamus tincidunt et justo vel dignissim. Morbi efficitur odio sem. Praesent eu velit sit amet dui mollis pellentesque. Etiam rutrum interdum lorem, a cursus felis posuere at.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007005002",
      idNivelPadre: "007005",
      nombreNivel: "Atender la Recepción",
      descripcion:
        "Mauris ac lacus a metus pulvinar scelerisque. Mauris sed fermentum justo. Proin commodo diam a sodales pellentesque. Sed interdum accumsan elit quis pellentesque. Proin nec nisl quis tortor ullamcorper malesuada. Nunc vel nulla eget turpis condimentum ornare. Nam commodo nunc eget neque tristique euismod. Morbi eu augue vel lectus ullamcorper rutrum nec vel magna. Nulla congue vitae neque commodo accumsan. Praesent quam ligula, rutrum sed consectetur a, aliquet sollicitudin felis. Ut scelerisque placerat diam eu blandit. Morbi porttitor, lacus eget finibus lobortis, felis velit congue quam, id mattis nisi ipsum et mi.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007005003",
      idNivelPadre: "007005",
      nombreNivel: "Manejo de la Agenda ",
      descripcion:
        "Aenean vel ante et risus elementum sagittis. Aenean mattis, tortor quis finibus tristique, risus nunc rutrum ipsum, ac venenatis urna nisi eget enim. Vivamus tristique blandit elementum. Nullam volutpat ligula turpis, ut suscipit ligula dapibus posuere. Morbi vehicula lacinia ipsum, pretium volutpat nisl. Fusce tempor, risus vel congue vehicula, arcu ligula tincidunt purus, quis porttitor elit eros blandit dui. Nunc dapibus luctus ex, in euismod lacus interdum sed.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007005004",
      idNivelPadre: "007005",
      nombreNivel: "Responder Chat",
      descripcion:
        "Sed pretium ex id turpis sagittis laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris egestas nisi quis metus finibus molestie. Aliquam sed hendrerit sapien. Pellentesque tincidunt malesuada facilisis. In hac habitasse platea dictumst. Maecenas eu sem erat. Quisque justo augue, lobortis eget vulputate non, semper vitae ex. Donec tristique, purus sit amet auctor vehicula, velit dolor scelerisque quam, eget convallis mi eros sed sem. Duis suscipit hendrerit ex, at vestibulum nisl vulputate a. Suspendisse auctor dolor tempus nulla hendrerit, in luctus nisi iaculis. Proin egestas leo tortor, ac facilisis ex scelerisque id. Nulla facilisi.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007005005",
      idNivelPadre: "007005",
      nombreNivel: "Responder llamadas telefónicas",
      descripcion:
        "Donec scelerisque efficitur varius. Phasellus nec aliquam purus. Sed eleifend ipsum non congue egestas. Pellentesque iaculis diam nulla, vel viverra arcu ullamcorper in. Sed vitae nisl at turpis malesuada gravida id nec lorem. Morbi cursus ante sed posuere fringilla. Praesent aliquam porttitor dapibus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007005006",
      idNivelPadre: "007005",
      nombreNivel: "Novedades administrativas",
      descripcion:
        "Vivamus eleifend ligula in sapien blandit, nec maximus turpis pretium. Morbi vitae fermentum ipsum. Nulla facilisi. Aenean aliquet viverra risus sed feugiat. Nam porta quam eros, rhoncus gravida ipsum tempus vel. Vestibulum tincidunt ipsum in sapien ultricies, feugiat gravida velit dictum. Quisque vitae ligula euismod, posuere leo vitae, vehicula sem.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "007005007",
      idNivelPadre: "007005",
      nombreNivel: "Informes y Actas",
      descripcion:
        "Integer rhoncus erat eu eros consectetur lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sit amet ipsum sit amet urna iaculis hendrerit id in mauris. Donec euismod vel arcu tempus sollicitudin. Aliquam nec tellus leo. Maecenas pulvinar nibh dui, et rutrum leo sagittis eu. Etiam quis risus neque. Ut a mi dapibus, blandit lacus vitae, pretium tortor.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008",
      idNivelPadre: "0",
      nombreNivel: "Gestión Jurídica",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008001",
      idNivelPadre: "008",
      nombreNivel: "Requerimientos Jurídicos",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008001001",
      idNivelPadre: "008001",
      nombreNivel: "Implementación del Marco Normativo",
      descripcion:
        "Fusce bibendum lectus in aliquet molestie. Nunc viverra, eros ac mollis efficitur, sapien sapien finibus augue, et imperdiet massa libero in sem. Aenean eu erat quis purus dignissim pretium nec sed sapien. Etiam dictum est eu sapien faucibus posuere. Curabitur et ante ex. Phasellus aliquet quam vel justo suscipit semper. Suspendisse hendrerit, libero eu lacinia aliquam, tortor turpis lacinia elit, vel mattis tellus arcu quis felis. Donec nisl urna, sagittis eu dapibus at, cursus et leo. Nunc pulvinar nec dolor eu malesuada.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008001002",
      idNivelPadre: "008001",
      nombreNivel: "Requerimientos internos y externos",
      descripcion:
        "Pellentesque lorem arcu, consectetur non imperdiet sagittis, lacinia in ligula. Cras facilisis auctor erat tincidunt blandit. Nunc eget vehicula quam. Proin accumsan, velit ut finibus accumsan, dolor elit varius dui, in accumsan mi risus eget urna. Nullam mattis sem sapien. Donec semper feugiat dapibus. Cras vel nisl nec ante tincidunt commodo vel vitae augue. Curabitur a urna aliquet, egestas arcu nec, tincidunt lectus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008001003",
      idNivelPadre: "008001",
      nombreNivel: "Requerimiento junta directiva",
      descripcion:
        "Maecenas feugiat dictum velit et molestie. Praesent tristique porta lectus non elementum. Cras vitae tincidunt ante. Aenean dictum gravida nisi, id dapibus tortor cursus id. Sed a nulla luctus leo convallis tempus. Donec justo magna, mollis posuere mattis quis, fermentum eget risus. Integer a mi ac arcu tristique lobortis vitae vel dolor. Aliquam leo est, varius at massa et, accumsan facilisis eros. Morbi et nisl est. In dictum vestibulum libero, porta efficitur enim tincidunt sit amet. Vestibulum aliquet mollis mi ac posuere. Donec commodo dui sit amet urna tempus, et accumsan mauris molestie.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008001004",
      idNivelPadre: "008001",
      nombreNivel: "Exclusión Asociados",
      descripcion:
        "Suspendisse vitae auctor nisi, vel efficitur dui. Ut at lacus dignissim, fringilla purus eget, convallis sem. Vestibulum convallis sapien eu dui euismod ullamcorper. Praesent imperdiet lectus ut volutpat ultrices. Phasellus nulla magna, consectetur quis felis at, sollicitudin consectetur ex. Duis cursus lectus at leo molestie vehicula. Maecenas tristique pellentesque mauris, nec sagittis sem rhoncus sed. Nullam at feugiat risus, ac eleifend nulla. Donec fermentum diam est, in fringilla felis suscipit sed. Phasellus tincidunt tristique porta.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008002",
      idNivelPadre: "008",
      nombreNivel: "Gestión Jurídica Externa ",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008002001",
      idNivelPadre: "008002",
      nombreNivel: "Administración y seguimiento asesores externos",
      descripcion:
        "Nulla suscipit lacus sed ultricies dictum. Sed non pulvinar neque, vitae sagittis est. Proin laoreet, tellus vitae sollicitudin luctus, eros lectus dignissim massa, non ornare mauris quam porttitor eros. Phasellus eleifend urna eget felis faucibus eleifend. In id orci a enim ultrices semper eu sit amet libero. Vivamus semper arcu at placerat dapibus. Praesent porttitor commodo est, vel fermentum nisl cursus in. Vestibulum quis dapibus justo, luctus pharetra nunc. Nam ut maximus erat, at hendrerit nulla. Sed et nisi pharetra, commodo ipsum et, laoreet massa. Nullam odio nunc, sollicitudin et justo et, fringilla egestas urna. Phasellus rutrum at urna vitae tempor. Nulla volutpat arcu in mi venenatis, nec consequat odio consequat.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008002002",
      idNivelPadre: "008002",
      nombreNivel: "Atención y solicitudes entidades externas",
      descripcion:
        "Ut vulputate volutpat pretium. Suspendisse ultricies tristique odio, nec cursus orci sagittis et. Nunc scelerisque mi eget magna consequat, ut tristique mauris mattis. Vivamus eu nibh finibus nulla tempus venenatis. Aenean gravida at ipsum quis tincidunt. Aenean a tellus in tellus cursus dictum sed quis dolor. Duis luctus faucibus nunc, a tempus mauris posuere eu. Integer molestie nibh sed tellus pellentesque ullamcorper.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008003",
      idNivelPadre: "008",
      nombreNivel: "Procesos Democráticos ",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008003001",
      idNivelPadre: "008003",
      nombreNivel: "Elección de delegados",
      descripcion:
        "Vestibulum id molestie sapien, in euismod lacus. Suspendisse nisl augue, luctus ac lorem ut, tempor vestibulum nulla. Sed facilisis est nibh, vitae eleifend sapien luctus in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque id vehicula nulla, ut semper ligula. Quisque commodo nulla quis mauris tincidunt, et finibus ex convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis mi arcu, auctor a velit ac, dictum dictum justo. Sed vel pharetra elit. Maecenas nec efficitur nisi, vitae eleifend dui. Nullam fermentum et dolor ornare pretium. Proin ultrices lacus eget mauris iaculis, eu finibus enim blandit.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008003002",
      idNivelPadre: "008003",
      nombreNivel: "Desarrollo de asamblea",
      descripcion:
        "Praesent facilisis tortor eget tellus aliquam, euismod imperdiet diam tempus. Nulla sed ullamcorper odio, ac egestas nunc. Aenean condimentum, lorem eget blandit pretium, lacus velit imperdiet sapien, nec vulputate enim justo ut erat. Nullam aliquam libero ac lacus aliquam, eu congue tellus efficitur. Nulla ornare vitae risus a facilisis. Proin fermentum congue ligula vitae tincidunt. Morbi vehicula orci eget nisi aliquet, semper congue urna sodales. Mauris consectetur ultricies ex quis vulputate. Sed sit amet imperdiet erat. Vestibulum pellentesque lorem ex, sed sagittis mi malesuada et.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "008003003",
      idNivelPadre: "008003",
      nombreNivel: "Elección de comités",
      descripcion:
        "Duis venenatis accumsan purus. Sed hendrerit nunc et mi lacinia, vitae tincidunt nulla lacinia. Phasellus quis molestie lectus. Nunc vitae rutrum nisl, eu pharetra sem. Proin maximus tortor est, ut laoreet tellus rhoncus sed. Vivamus ullamcorper ipsum id nisl hendrerit ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac massa molestie, rhoncus neque vitae, volutpat velit. Nam metus nisl, dignissim vitae bibendum id, interdum in nisl. Vivamus rutrum ligula non neque ornare, vel rutrum libero pellentesque. Cras purus neque, interdum id consectetur id, semper et mi. Sed tincidunt metus eget ornare blandit. Integer dapibus est neque, quis vestibulum nulla fringilla eget.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009",
      idNivelPadre: "0",
      nombreNivel: "Gestión financiera Tributaria y Contable",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009001",
      idNivelPadre: "009",
      nombreNivel: "Contabilidad",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009001001",
      idNivelPadre: "009001",
      nombreNivel: "Causaciones.",
      descripcion:
        "Nunc ullamcorper quam in porttitor venenatis. Duis ac tincidunt dolor, ut egestas purus. Sed sit amet faucibus eros, quis elementum tortor. Fusce bibendum viverra aliquam. Morbi rutrum nunc fringilla, tempus sem eu, porttitor nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla placerat venenatis nibh sed accumsan. Praesent imperdiet maximus orci, ut consequat sapien. Donec cursus ut felis et sodales. Integer sem neque, luctus sit amet dolor in, faucibus vehicula velit.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009001002",
      idNivelPadre: "009001",
      nombreNivel: "Conciliaciones.",
      descripcion:
        "Aenean congue dui sit amet commodo tempus. Duis pharetra odio tincidunt justo consectetur gravida. Sed id purus cursus, sagittis tortor eget, vehicula mi. Ut euismod varius gravida. Vivamus sollicitudin tortor varius mi blandit fringilla. Ut ultrices odio orci, sit amet ornare risus lobortis at. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009001003",
      idNivelPadre: "009001",
      nombreNivel: "Ajustes cierre de mes",
      descripcion:
        "Sed mollis in mauris nec feugiat. Fusce vel neque eget eros scelerisque viverra eget non elit. Phasellus venenatis mauris non laoreet rhoncus. Donec id volutpat ante. Sed pretium orci nunc, a consectetur ipsum auctor vitae. Phasellus vehicula quam eu pellentesque ultricies. Sed vulputate accumsan nunc bibendum fermentum. Nullam felis nibh, tincidunt sit amet lorem ac, semper condimentum lorem. Nunc tortor sapien, bibendum at tincidunt suscipit, bibendum non eros.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009001004",
      idNivelPadre: "009001",
      nombreNivel: "Provisiones",
      descripcion:
        "Etiam sed est sodales, eleifend augue a, consequat ipsum. Aliquam tristique, leo ac imperdiet vulputate, ligula velit vestibulum ante, et laoreet tellus sapien vel lacus. Maecenas pellentesque ultrices neque, ut pellentesque neque interdum sollicitudin. Etiam accumsan arcu ac quam volutpat, porta facilisis tellus cursus. Sed ornare ante felis, et maximus arcu volutpat vitae. Aenean sagittis finibus quam, vitae convallis massa mattis eget. Phasellus in ante a diam volutpat fermentum eget et felis. In sed placerat mauris. Cras vitae felis ac urna tincidunt tempus. Suspendisse ullamcorper ante nec rhoncus luctus. Nulla consequat elit sit amet felis pretium vulputate. In aliquam auctor ligula ut lobortis. Curabitur semper arcu non ex maximus elementum. Nunc mattis mauris a neque ultricies pulvinar.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009001005",
      idNivelPadre: "009001",
      nombreNivel: "Facturación",
      descripcion:
        "Maecenas condimentum a massa sed dignissim. Vivamus pretium erat et interdum tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque accumsan euismod aliquam. Nunc velit enim, sagittis ac placerat ut, euismod et tellus. Nunc cursus quam vel magna scel&#10;risque lobortis. Duis lobortis, magna a auctor porttitor, erat ligula finibus quam, eu imperdiet leo quam ut eros. Nullam tincidunt ante at libero imperdiet, nec eleifend ipsum commodo. Vivamus molestie mattis purus, quis egestas mi vulputate eu. Nullam lobortis condimentum tempus. Donec eget dapibus dui. Sed elit tortor, dictum a tellus eleifend, condimentum semper ipsum.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009001006",
      idNivelPadre: "009001",
      nombreNivel: "Controles y reportes.",
      descripcion:
        "Vivamus vitae nisl leo. Maecenas dapibus justo in orci commodo aliquam. Duis et molestie lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean aliquam libero quis risus fringilla, eu ornare erat malesuada. Suspendisse iaculis magna eu felis fringilla luctus. Sed luctus magna lorem, ac finibus felis rhoncus ut. Mauris eget augue in orci molestie aliquam. Integer gravida lacinia ultricies. Nulla vitae tortor magna. Vestibulum pretium suscipit est, a luctus enim lacinia eget. Suspendisse potenti. Mauris in nunc nisl. Etiam cursus tincidunt enim tincidunt dictum. Sed ut tempus ante.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009001007",
      idNivelPadre: "009001",
      nombreNivel: "Rendimientos de liquidación de Ahorros",
      descripcion:
        "Ut faucibus mi nec ligula venenatis, non suscipit dui sagittis. Pellentesque lacinia semper eros sed aliquet. Nam urna lacus, cursus eleifend pharetra nec, dapibus vitae lacus. Integer scelerisque auctor imperdiet. Phasellus nunc ante, posuere a ligula vel, luctus consequat magna. Etiam vestibulum quam eget enim dapibus consectetur. Donec in varius justo, sed finibus dui. Nunc sed velit vel ligula mollis ullamcorper eu ac nisi.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009001008",
      idNivelPadre: "009001",
      nombreNivel: "Re valorización de aportes",
      descripcion:
        "Sed erat sem, bibendum porta dui luctus, rutrum elementum est. Praesent vel fringilla risus. Etiam cursus iaculis libero, ac accumsan orci euismod quis. Proin dapibus diam dui, ut pellentesque lorem dictum in. Integer id lectus dictum dui suscipit pulvinar eu et odio. Etiam ante arcu, volutpat ac augue eu, pretium tincidunt tellus. Donec eu nibh purus. Quisque vehicula enim et mollis porta.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009001009",
      idNivelPadre: "009001",
      nombreNivel: "Informes Financieros",
      descripcion:
        "Sed luctus ornare ante consectetur tempor. Nulla a dui at diam efficitur semper ut id risus. Maecenas posuere nisi dignissim, dignissim diam et, ultricies mi. Etiam at bibendum purus, vitae eleifend purus. Donec facilisis arcu arcu, at elementum enim convallis a. Phasellus erat nisi, finibus sit amet urna sit amet, rhoncus laoreet mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pretium, metus eget consectetur cursus, tellus erat malesuada urna, eget condimentum sem nisi sed purus. Donec a ligula arcu. Maecenas ut lorem tristique, convallis tellus a, fringilla turpis.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009002",
      idNivelPadre: "009",
      nombreNivel: "Gestión Tributaria",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009002001",
      idNivelPadre: "009002",
      nombreNivel: "Planeación Tributaria",
      descripcion:
        "Duis tempor, enim ac tincidunt aliquam, diam erat tempor tellus, sit amet luctus velit tellus vel sapien. Fusce auctor pulvinar urna in cursus. Aliquam vel ligula quis dui dictum suscipit ut placerat tellus. Maecenas non elementum velit, eget feugiat magna. Curabitur efficitur iaculis orci, a pulvinar massa feugiat a. In congue quam eu viverra porta. Donec vehicula risus in tellus molestie vehicula. In convallis vehicula mauris at placerat.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009002002",
      idNivelPadre: "009002",
      nombreNivel: "Liquidación de impuestos",
      descripcion:
        "Donec porta tortor vitae lacus aliquet gravida. Donec vel ullamcorper mauris. Nullam non ullamcorper massa. Morbi sed turpis eget augue eleifend faucibus in sit amet lectus. In leo ipsum, blandit vitae scelerisque sed, bibendum nec libero. Nullam vulputate sed magna vitae vestibulum. Vivamus egestas nisi non efficitur pretium. Vivamus vitae pellentesque leo. Nunc sed leo nec mauris fringilla commodo ut nec mauris. Duis nec fringilla justo. Maecenas eu gravida lorem. Nunc gravida quam non dolor euismod maximus. Vestibulum orci mi, sollicitudin pharetra mollis in, dapibus et lectus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009002003",
      idNivelPadre: "009002",
      nombreNivel: "Presentación de Impuestos",
      descripcion:
        "Pellentesque a diam et lectus gravida tempus ut non leo. Donec eget ante in tellus faucibus molestie eu at nulla. Suspendisse ultrices libero id lobortis lacinia. Proin non tortor ex. Mauris elit ipsum, dignissim eget nibh a, ullamcorper finibus tellus. Suspendisse laoreet ligula justo, sed mattis nisl lobortis nec. Praesent commodo lectus leo. Phasellus sem risus, aliquam sit amet ex id, porttitor malesuada nisl. Vivamus vitae finibus tortor. In euismod ipsum tempor dictum mattis. Etiam hendrerit, nulla vitae dignissim aliquam, elit mauris iaculis justo, non auctor nibh arcu ac tellus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009002004",
      idNivelPadre: "009002",
      nombreNivel: "Pago de Impuestos ",
      descripcion:
        "Duis blandit dapibus velit, eget egestas leo pulvinar et. Curabitur vel porttitor nulla. Nulla facilisi. Vivamus vulputate suscipit purus, id suscipit nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur laoreet, lectus eu ultricies porttitor, urna eros eleifend sapien, vel rhoncus risus leo fringilla mi. Cras sed dolor erat.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009002005",
      idNivelPadre: "009002",
      nombreNivel: "Devolución de Impuestos",
      descripcion:
        "Donec cursus, orci eget sodales sollicitudin, purus sem lacinia urna, id efficitur lectus lacus ac neque. Nam iaculis interdum ipsum ut fermentum. Maecenas vel leo vehicula, posuere erat non, tincidunt purus. Curabitur accumsan sollicitudin est, ut laoreet erat malesuada eget. Aliquam massa orci, hendrerit vitae est at, efficitur vehicula lorem. Suspendisse eu vestibulum arcu. Donec vestibulum ex nisi, quis porttitor ante hendrerit nec.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009003",
      idNivelPadre: "009",
      nombreNivel: "Financiera",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009003001",
      idNivelPadre: "009003",
      nombreNivel: "Proyecciones Financieras",
      descripcion:
        "Sed tincidunt tristique dolor, non gravida lorem consectetur quis. Sed massa tortor, molestie at consectetur a, ultricies id dui. Nulla facilisi. Integer pulvinar odio eget arcu varius condimentum. Proin pharetra, orci quis pretium pharetra, urna tortor euismod nisi, ullamcorper luctus velit velit quis erat. Phasellus nibh neque, fermentum in dictum sit amet, luctus ac nisl. Praesent sed ultricies orci. Aenean sed dignissim sem. Sed venenatis venenatis ligula nec porttitor. Nunc nec lorem a lectus maximus lobortis nec sed arcu. In accumsan finibus erat. Etiam at quam sit amet est rhoncus venenatis a in felis. Duis tortor tellus, sodales sollicitudin commodo at, vehicula sed risus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009003002",
      idNivelPadre: "009003",
      nombreNivel: "Análisis de reciprocidad con instituciones financieras",
      descripcion:
        "Ut egestas tortor eget tortor feugiat facilisis. Integer vulputate euismod tellus semper blandit. Fusce tincidunt ornare auctor. Nam non enim diam. Morbi gravida interdum nisi in rutrum. Praesent ac efficitur velit, vel feugiat nisi. Duis ut metus faucibus sem laoreet sollicitudin in vel nibh. Maecenas pulvinar, odio vitae ultrices tincidunt, erat erat mattis nisl, ut ullamcorper ligula diam vel est. Etiam dapibus eros eu malesuada dapibus. Ut eget arcu id nibh vulputate tincidunt non vel metus. Sed sed leo bibendum ipsum suscipit aliquam. Fusce velit dui, gravida et ornare vitae, consectetur id erat.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009003003",
      idNivelPadre: "009003",
      nombreNivel: "Análisis financiero",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque arcu, iaculis id tortor eu, rutrum pretium urna. Quisque semper risus ut quam tempor, a lobortis ligula pulvinar. Sed aliquam odio dapibus, dapibus diam a, elementum augue. Ut ipsum odio, semper in elit id, congue mollis odio. Praesent eget eleifend tellus. Morbi mollis diam vel lacus condimentum consequat. Integer faucibus malesuada elit at vehicula. Morbi velit sapien, lobortis ut viverra elementum, eleifend vitae leo. Sed vitae condimentum libero. Cras scelerisque lobortis quam in ultricies. Fusce eu pulvinar dui.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004",
      idNivelPadre: "009",
      nombreNivel: "Tesorería",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004001",
      idNivelPadre: "009004",
      nombreNivel: "Pagos.",
      descripcion:
        "Vestibulum diam nisl, rhoncus sed semper et, iaculis a leo. Suspendisse tempor, ipsum nec malesuada vulputate, arcu justo semper lectus, at tincidunt risus arcu et arcu. Donec lobortis turpis maximus est scelerisque vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam massa quam, tincidunt quis justo nec, efficitur maximus mauris. Proin bibendum porta tellus, id scelerisque dolor ultricies sit amet. Nullam laoreet felis a hendrerit condimentum. Maecenas sagittis ante sed purus ornare tincidunt sed nec enim. Pellentesque hendrerit, nisi ut suscipit finibus, orci justo aliquet eros, scelerisque blandit leo tortor at nunc. Morbi eros arcu, luctus non metus in, mattis varius neque. Cras luctus, justo in maximus aliquam, enim turpis egestas velit, vitae mattis nulla dolor in eros. Nunc auctor diam non metus vehicula, vel eleifend ligula iaculis. In elementum, erat sit amet aliquet viverra, nunc metus pulvinar purus, vitae feugiat sapien ante at justo. Fusce eu molestie tellus. Fusce ullamcorper, nisl non congue lacinia, nunc nulla imperdiet elit, eget pharetra lectus lectus eget nisi.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004002",
      idNivelPadre: "009004",
      nombreNivel: "Manejo de Bancos",
      descripcion:
        "Duis tincidunt posuere nisl nec laoreet. Nullam bibendum placerat lorem, non maximus tortor ullamcorper ac. Donec at enim viverra, congue neque eget, lacinia ante. Donec elit diam, aliquam fringilla dapibus a, vehicula quis enim. Nulla vitae enim vitae massa suscipit placerat quis at mauris. Sed tincidunt purus vitae ipsum condimentum, quis tristique nulla finibus. Quisque sed hendrerit enim. Sed turpis ante, luctus non pellentesque ut, ornare ut magna. Pellentesque semper dui eu lectus hendrerit pellentesque. Sed nec justo venenatis, imperdiet augue ac, faucibus felis.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004003",
      idNivelPadre: "009004",
      nombreNivel: "Inversiones.",
      descripcion:
        "Duis porttitor ultricies tortor, ac imperdiet risus vestibulum eu. Curabitur quis lectus quis turpis suscipit commodo sed sed erat. Ut et justo non nibh ornare euismod commodo eget nibh. Duis imperdiet egestas maximus. Maecenas quis ex ut arcu commodo laoreet. Sed sagittis iaculis sollicitudin. Maecenas id porta sem, eu eleifend purus. Sed porta ullamcorper turpis, eu pellentesque tortor feugiat ut. In convallis, lectus in vulputate accumsan, mauris quam dictum risus, fermentum ultrices ante ex ut turpis. Fusce nec nisi rutrum, consectetur ipsum non, interdum ante.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004004",
      idNivelPadre: "009004",
      nombreNivel: "Asignación y arqueo de Cheques",
      descripcion:
        "Mauris placerat est justo, quis pharetra neque semper vitae. Quisque vehicula pretium interdum. Proin pharetra mauris eu erat pretium, eget pharetra magna varius. Suspendisse lacinia enim eu urna pharetra egestas. Vestibulum pellentesque molestie tellus. Vivamus massa magna, molestie sed tellus eu, ultricies suscipit libero. Nulla vestibulum at ligula non imperdiet. Donec purus metus, aliquam eget posuere ut, dapibus non leo. Donec efficitur sit amet justo vel sollicitudin. Integer ut interdum libero. Etiam tristique ac diam eu fermentum. Integer ac dui lorem. Praesent pulvinar luctus sem, venenatis tempor diam auctor tincidunt. Curabitur nec felis viverra tortor aliquam congue. Cras eget lorem ante.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004005",
      idNivelPadre: "009004",
      nombreNivel: "Instrucciones de seguridad",
      descripcion:
        "Proin finibus quis enim in laoreet. Mauris non feugiat purus. Morbi tincidunt nibh sit amet massa rhoncus sagittis. Nulla pretium, nunc a sodales imperdiet, elit ligula pharetra eros, vitae lacinia quam libero vel urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi nec lorem in nulla consectetur consequat. Ut ut magna elementum, vulputate lorem quis, pulvinar leo. Curabitur enim metus, tempus sed sem tincidunt, faucibus accumsan ex.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004006",
      idNivelPadre: "009004",
      nombreNivel: "Obligaciones financieras.",
      descripcion:
        "Vestibulum quis leo sit amet tellus sollicitudin gravida sit amet eget sem. Mauris ut ex ornare purus aliquam iaculis nec ut nunc. Aliquam felis orci, placerat finibus fringilla non, efficitur vitae lorem. Donec eget lacus sapien. Donec malesuada consequat sodales. Curabitur volutpat massa et justo ornare, a viverra risus efficitur. Curabitur ut massa fringilla, tempor magna in, faucibus mauris.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004007",
      idNivelPadre: "009004",
      nombreNivel: "Cierre de Tesorería",
      descripcion:
        "Aliquam at nisl sodales, suscipit dolor at, pulvinar massa. Donec egestas urna sit amet nibh ullamcorper ultricies. Suspendisse potenti. Nunc nec pulvinar nisl, et fermentum metus. Ut tincidunt aliquam suscipit. Curabitur sed elit lorem. Phasellus id finibus urna, nec gravida mi. Aenean ut mauris nibh. Vestibulum nec ante vehicula, ultrices mauris et, congue nibh. Nunc id feugiat ex. Aliquam semper tincidunt augue, scelerisque rhoncus ex commodo ut. Morbi ut massa ut quam egestas venenatis. Etiam luctus massa quis purus ullamcorper tempus. Quisque tincidunt consectetur dolor posuere sodales.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004008",
      idNivelPadre: "009004",
      nombreNivel: "Gestión de Liquidez (Fuentes de fondeo externas)",
      descripcion:
        "Aenean vulputate est sit amet pellentesque cursus. Sed congue tempor dui eget fringilla. Praesent id iaculis tellus, sed posuere ligula. Suspendisse dui urna, dictum a leo id, dapibus malesuada mi. Vestibulum vehicula at nunc id pretium. Vivamus consectetur massa eget fermentum vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae nibh et est facilisis sagittis vitae ac nisi. Nulla arcu tellus, auctor ac nibh vel, faucibus bibendum odio. Vivamus ultrices magna nibh, semper fermentum ipsum sagittis ut. Ut vitae augue dui. Integer gravida imperdiet malesuada. Cras sed erat est. Donec nisi sem, maximus a ullamcorper at, tincidunt vitae nunc.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004009",
      idNivelPadre: "009004",
      nombreNivel: "Parametrización de Tasas de Interés Variables IPC y DTF",
      descripcion:
        "Mauris euismod viverra iaculis. Aenean id velit ligula. Quisque porttitor orci arcu, sit amet consectetur sapien accumsan eu. Nullam congue sed orci a finibus. Donec aliquet pellentesque justo eget auctor. Nulla velit dolor, eleifend sit amet odio ut, tincidunt volutpat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas faucibus massa sed ex rhoncus, nec aliquam urna porttitor. Pellentesque faucibus vitae magna id imperdiet. Maecenas vehicula dolor at velit pellentesque, et bibendum massa vulputate. Ut tincidunt est vitae euismod rhoncus. Suspendisse suscipit metus at enim aliquet tempus. Vestibulum cursus mollis eros et tincidunt. Nam aliquet mauris diam, et congue diam ultricies at. Nullam magna dolor, efficitur vitae sollicitudin quis, commodo non massa.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "009004010",
      idNivelPadre: "009004",
      nombreNivel: "Informes de Tesorería",
      descripcion:
        "Ut ultrices, orci sed elementum bibendum, ex odio rhoncus purus, quis convallis purus justo at tellus. Vivamus imperdiet accumsan dignissim. Maecenas ut nisl varius, viverra ex ac, iaculis elit. Aliquam gravida blandit posuere. In et nunc turpis. Nunc consequat cursus vulputate. Fusce viverra in felis ac consequat. Praesent vulputate ex a justo placerat bibendum. Quisque placerat magna vel malesuada facilisis. Ut ut metus finibus, sagittis erat sed, tincidunt leo.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010",
      idNivelPadre: "0",
      nombreNivel: "Gestión de mercadeo",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010001",
      idNivelPadre: "010",
      nombreNivel: "Gestionar mercadeo",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010001001",
      idNivelPadre: "010001",
      nombreNivel: "Investigación de mercados",
      descripcion:
        "Phasellus ut malesuada libero. Quisque sed tellus eget eros iaculis imperdiet tempor id magna. Duis nec ultrices libero, ut sagittis orci. Duis congue pretium faucibus. Aenean dapibus ipsum nec enim mattis convallis. Mauris eget nunc sapien. Nam non erat nec turpis auctor facilisis. Curabitur tellus tellus, ullamcorper vel elit eget, consequat fermentum lorem. Integer sed lobortis augue. Etiam consequat turpis sapien, eu pellentesque leo imperdiet id. Pellentesque at volutpat risus, id dignissim quam. Maecenas fringilla venenatis malesuada. Phasellus dignissim sagittis purus, eget facilisis metus tristique quis. Aliquam elit sem, ornare quis malesuada sed, pretium a quam. Nulla ac tristique lorem.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010001002",
      idNivelPadre: "010001",
      nombreNivel: "Inteligencia de Negocio BI",
      descripcion:
        "Integer venenatis neque in efficitur tincidunt. Ut pharetra mauris nec nisl bibendum, sed finibus dui porta. Pellentesque semper sem nec ultrices imperdiet. Aliquam non semper odio. Donec lobortis tellus id ex consectetur, ut rutrum eros imperdiet. Nam vel lacus sit amet ex sodales mattis. Sed a leo in sem pellentesque interdum. Nunc tincidunt quam sit amet quam suscipit consectetur. Donec aliquet egestas enim a tempus. Cras varius libero fringilla arcu malesuada, in vulputate nibh maximus. Donec vel fringilla elit, ac maximus magna. Pellentesque eget eleifend sem.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010001003",
      idNivelPadre: "010001",
      nombreNivel: "Plan de mercadeo.",
      descripcion:
        "Mauris a orci eleifend, pellentesque nisl a, dictum mi. Pellentesque maximus augue turpis, tincidunt dictum erat pellentesque a. Sed ac est nec mi aliquet interdum. Curabitur bibendum mi ut quam malesuada, non rutrum purus pharetra. Morbi at odio eu urna dapibus gravida eget nec mauris. Donec porttitor blandit ligula dignissim viverra. Aenean sit amet neque quis nulla pulvinar posuere nec et ligula. Quisque hendrerit enim vitae sem cursus condimentum. Sed cursus pulvinar orci. Vivamus velit nisi, tempus id lorem ut, consectetur accumsan odio. Fusce ullamcorper fermentum tempor. Sed accumsan sapien arcu.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010001004",
      idNivelPadre: "010001",
      nombreNivel:
        "Desarrollo, seguimiento y evaluación a productos, servicios y beneficios",
      descripcion:
        "Nullam porttitor ante eget risus placerat, a luctus lorem hendrerit. Praesent bibendum ipsum justo, sit amet eleifend mauris interdum eget. Praesent orci turpis, euismod id mi quis, rutrum ultricies justo. Vestibulum porttitor sem neque, imperdiet elementum orci faucibus vel. Pellentesque nisi velit, vulputate eu leo a, volutpat finibus tellus. Donec ut mi in quam pulvinar aliquam. Nam tincidunt nulla tincidunt, eleifend ligula et, finibus purus. Donec sed tortor ut ex commodo tincidunt. Integer feugiat lectus at nisl maximus, ut tristique odio rutrum. Vivamus ligula nunc, tristique nec erat sed, tristique efficitur lorem. Suspendisse semper leo id velit dignissim dictum. Donec sapien lectus, finibus et finibus eu, commodo vitae neque. Praesent tristique volutpat sapien eu mollis. Morbi a augue ut enim tincidunt semper. Nulla id auctor lectus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010001005",
      idNivelPadre: "010001",
      nombreNivel: "Convenios comerciales",
      descripcion:
        "Vivamus lacinia eget felis vitae imperdiet. Integer cursus euismod enim in tempus. Maecenas rutrum consectetur condimentum. Maecenas ac sem at leo porta faucibus. Phasellus ac sem id augue consectetur eleifend. Sed rutrum metus quis rutrum facilisis. Suspendisse sollicitudin, turpis non porttitor maximus, lectus orci sodales nisl, at condiment&#10;m elit sem ut velit.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010001006",
      idNivelPadre: "010001",
      nombreNivel: "Sostenibilidad",
      descripcion:
        "Aenean vitae convallis tortor. Aenean mauris neque, aliquet ut est id, aliquam ullamcorper neque. Sed massa ante, imperdiet vitae magna vel, egestas consectetur nunc. Proin quis mi ornare, elementum justo at, cursus lorem. Nunc eget imperdiet arcu, eget mattis mi. Aenean arcu urna, luctus vel nibh eget, malesuada iaculis sem. Aliquam arcu ante, commodo eu mi semper, mollis pellentesque massa. Aenean vestibulum metus vitae nisl facilisis vulputate. Suspendisse at eleifend turpis. Vestibulum nec massa augue.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010002",
      idNivelPadre: "010",
      nombreNivel: "Gestionar base de datos",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010002001",
      idNivelPadre: "010002",
      nombreNivel:
        "Administración, actualización y control de la base de datos.",
      descripcion:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Phasellus sed suscipit nibh, vel tempus nisl. Nunc erat magna, vulputate id finibus sed, lacinia non urna. Nunc varius, sapien vel lobortis faucibus, risus lorem lacinia urna, a eleifend sapien ante sit amet mauris. Phasellus venenatis nibh a metus aliquam commodo.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010002002",
      idNivelPadre: "010002",
      nombreNivel: "Habeas Data",
      descripcion:
        "Pellentesque cursus elit eget eros varius facilisis. Praesent pretium porttitor hendrerit. Suspendisse faucibus egestas augue vitae pretium. Vivamus molestie gravida mauris sed cursus. Nunc at dictum felis. Cras consectetur ante lectus, sit amet porttitor neque varius ac. Nunc convallis scelerisque nunc, eu dapibus diam blandit in. Aenean tincidunt neque eu consequat eleifend. Morbi vel lobortis dolor, nec congue ligula. Quisque non auctor lectus, eget suscipit purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eu blandit enim. Curabitur placerat, nisl quis auctor laoreet, leo erat accumsan justo, ut aliquam risus diam ac nunc. In dictum elit ante, sit amet condimentum augue interdum ut. Ut at neque at justo consequat suscipit quis sed lectus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010003",
      idNivelPadre: "010",
      nombreNivel: "Gestionar comunicaciones",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010003001",
      idNivelPadre: "010003",
      nombreNivel: "Plan de Comunicaciones ",
      descripcion:
        "Cras ac orci eleifend, congue risus sed, dictum velit. Nam rhoncus consequat elit quis varius. Cras condimentum eu turpis nec porttitor. Quisque eu erat sit amet massa tempor gravida. Integer interdum metus leo, id dictum libero molestie id. Integer sed libero condimentum, mattis quam quis, dictum orci. In mollis eros lectus, ac fermentum augue porttitor a. Sed at finibus orci, ac hendrerit urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010003002",
      idNivelPadre: "010003",
      nombreNivel: "Diseño y desarrollo de las piezas de comunicación",
      descripcion: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc at lacus a nisl hendrerit euismod nec vitae orci. Quisque sodales tincidunt purus rutrum lacinia. Phasellus augue sem, bibendum sed nulla nec, hendrerit congue dolor. Sed facilisis justo at semper tempus. Duis vel dapibus neque. Praesent efficitur laoreet neque nec fermentum. Fusce vehicula elementum leo ac vehicula. Maecenas aliquam dolor ac nulla tincidunt, at pellentesque lorem vehicula. Aenean feugiat eros est."
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010003003",
      idNivelPadre: "010003",
      nombreNivel: "Administración de las comunicaciones corporativas",
      descripcion:
        "Praesent elementum dui non neque ornare aliquet. Sed a diam interdum, tincidunt purus ut, eleifend enim. Pellentesque elementum elementum tristique. Maecenas a leo sed lacus facilisis tristique. Integer sodales, dui et accumsan condimentum, lacus justo porttitor lorem, at tempus neque lacus rhoncus mauris. Duis at efficitur sapien, et vestibulum massa. Etiam facilisis augue at erat pharetra luctus. Phasellus vitae risus tempor, placerat eros et, feugiat elit. Pellentesque faucibus velit vitae mollis imperdiet. Sed sed enim consequat, porttitor mi at, interdum velit. Suspendisse pharetra bibendum vulputate.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010003004",
      idNivelPadre: "010003",
      nombreNivel: "Definición estrategias para la atención del Asociado",
      descripcion:
        "Duis nisl enim, euismod in justo aliquet, rhoncus iaculis est. Nunc tempor augue sed tellus eleifend, vel molestie ex volutpat. Curabitur molestie sollicitudin sodales. Donec quis justo pharetra, tempor magna id, egestas urna. Maecenas venenatis lobortis augue pharetra mollis. Vivamus rhoncus congue leo quis ullamcorper. Morbi dictum enim nec turpis dictum ornare. Phasellus sodales ante vel maximus luctus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010003005",
      idNivelPadre: "010003",
      nombreNivel: "Participación en Ferias y Eventos",
      descripcion:
        "Sed hendrerit, purus vitae ultricies iaculis, lorem felis tincidunt sapien, in ultricies libero quam a orci. Curabitur a felis eu est convallis iaculis congue vitae magna. Ut lobortis auctor enim, elementum rutrum metus iaculis quis. Aliquam fringilla vehicula iaculis. Nunc urna metus, semper in ante sed, dignissim sodales dui. Proin semper ligula nunc, nec maximus enim euismod in. Suspendisse ornare aliquam tortor sit amet commodo. Etiam tincidunt nunc non ligula scelerisque dapibus. Suspendisse porttitor lacus sit amet eros condimentum, in cursus arcu ullamcorper. Phasellus ac metus velit. Aenean eget diam sodales, rhoncus lorem vitae, posuere dui. Quisque tempor eleifend nisi, at semper quam porta ut.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "010003006",
      idNivelPadre: "010003",
      nombreNivel: "Estrategias Digitales",
      descripcion:
        "Phasellus nulla tellus, interdum in mi a, feugiat scelerisque eros. Duis urna nibh, interdum dictum velit id, luctus suscipit ante. Sed sollicitudin ipsum vel auctor porttitor. Sed in orci ante. Sed luctus, ligula in dictum molestie, nunc quam rhoncus erat, a malesuada eros ante et massa. Vivamus ut leo condimentum, posuere urna vitae, blandit purus. Nulla aliquet consequat pellentesque.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011",
      idNivelPadre: "0",
      nombreNivel: "Gestión de TI",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011001",
      idNivelPadre: "011",
      nombreNivel: "PETI (Planeación Estratégica de TI)",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011001001",
      idNivelPadre: "011001",
      nombreNivel: "Requerimiento de TI",
      descripcion:
        "Sed placerat ex lorem, in rutrum metus venenatis id. Suspendisse eget condimentum tellus. Nam sit amet finibus arcu. Donec gravida felis vel mauris consequat vestibulum. Sed interdum at augue vitae tempor. Morbi aliquam scelerisque magna, vitae ultricies nunc vestibulum vitae. Phasellus tempus ipsum id ullamcorper elementum. Praesent vel euismod felis, in elementum urna. Suspendisse ultricies, tortor non feugiat posuere, enim turpis dignissim quam, a fermentum mauris velit id eros. Phasellus accumsan a arcu fringilla condimentum. Praesent nisi magna, eleifend in malesuada eget, maximus vel dui. Donec nec erat viverra, consequat arcu non, sollicitudin erat. Curabitur non orci diam. Aenean consectetur ante tortor, eu gravida ligula consectetur ac. Nunc non sodales nunc. Donec nec sapien est.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011001002",
      idNivelPadre: "011001",
      nombreNivel: "Presupuesto de TI",
      descripcion:
        "Donec vitae hendrerit leo, a dapibus nibh. Nam venenatis tincidunt odio vel convallis. Aenean nec orci enim. In hac habitasse platea dictumst. Donec sed massa nibh. Curabitur nulla lorem, rhoncus sit amet mollis in, feugiat quis enim. Aliquam augue nulla, vehicula in aliquam non, suscipit quis massa. Nunc ac justo magna. Nam ornare sem a est tempor, non rhoncus leo posuere. Sed laoreet hendrerit felis. Aenean eget efficitur purus.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011001003",
      idNivelPadre: "011001",
      nombreNivel: "Adquisición de recursos de TI",
      descripcion:
        "Fusce eget vulputate nibh, et porta libero. Suspendisse rhoncus lorem vel tincidunt tristique. Curabitur vel leo sit amet est auctor cursus ut quis est. Aliquam eget nibh sed metus vehicula congue. In feugiat ligula lorem, at convallis tellus dapibus at. Suspendisse potenti. Duis consectetur dolor quam, vel bibendum sapien blandit vitae. Curabitur accumsan leo in est luctus commodo. Curabitur vel dignissim ante, eu tincidunt dolor. Praesent accumsan porttitor est, in mattis magna cursus in. Cras consectetur eu diam sed finibus. Cras facilisis massa in imperdiet interdum. Aliquam sed eleifend libero. Proin non tincidunt nunc. Pellentesque quis tellus congue, porttitor orci a, scelerisque nisl.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011002",
      idNivelPadre: "011",
      nombreNivel: "Administración y Gestión de TI",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011002001",
      idNivelPadre: "011002",
      nombreNivel: "Administrar los recursos tecnológicos",
      descripcion:
        "Proin vel placerat eros. Donec nisi libero, auctor quis diam non, viverra convallis elit. Integer consectetur hendrerit dolor vel rhoncus. Nulla euismod lacus lectus, nec scelerisque ligula porta id. Suspendisse non suscipit urna, at tempus enim. Sed sed odio aliquet, ultricies metus luctus, congue mauris. Quisque quis augue ac tellus malesuada vulputate. Phasellus sagittis sodales mi, sed gravida arcu pharetra at.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011002002",
      idNivelPadre: "011002",
      nombreNivel: "Gestión monitoreo y soporte de los S.I",
      descripcion:
        "Maecenas ut egestas ex, suscipit cursus orci. Nulla vehicula, ligula vitae accumsan cursus, quam nisl sollicitudin turpis, eu elementum nulla turpis id diam. Vestibulum egestas ex eu leo accumsan vestibulum. Donec facilisis sem id quam malesuada viverra id sed nibh. Sed elit magna, euismod dignissim venenatis vitae, pulvinar ut sapien. Etiam id laoreet arcu. Vestibulum vel lectus turpis. Etiam a tellus blandit, dapibus nisl quis, pharetra nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur dignissim urna dapibus erat ornare, vitae commodo urna luctus. Praesent sed lorem nulla. Praesent volutpat tellus nibh, non porta orci euismod vitae.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011002003",
      idNivelPadre: "011002",
      nombreNivel: "Gestionar innovación Tecnológica.",
      descripcion:
        "Donec et ultricies nisl. Fusce congue sit amet risus eu faucibus. Morbi ut iaculis nulla. Sed feugiat aliquet odio, non pellentesque elit. Praesent eget mollis massa. Maecenas nec tellus pharetra, tristique tellus id, blandit leo. Donec ac finibus augue. Aenean aliquam vehicula egestas. Nam vitae lorem rutrum, ornare sem ut, porta quam. Suspendisse potenti.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011002004",
      idNivelPadre: "011002",
      nombreNivel: "Administrar usuarios y perfiles.",
      descripcion:
        "Nullam aliquet semper mauris, in egestas eros auctor eu. Integer facilisis luctus neque, gravida ultrices nisi aliquet ut. Proin egestas ultrices turpis, vitae semper leo vulputate sit amet. Maecenas aliquam auctor dapibus. Aliquam eleifend, dolor a finibus pellentesque, leo ligula rhoncus tellus, eget porta magna felis sit amet justo. Sed lacinia lorem sed diam elementum, ut dictum metus ultricies. Sed ac dapibus eros, sed facilisis erat. Aliquam a efficitur diam, vel rutrum diam. Quisque vehicula eget odio eu dictum. Donec sed massa et quam semper gravida tempor eget est. Vivamus hendrerit consequat placerat. Aliquam malesuada augue in augue blandit molestie. Vivamus aliquam consectetur odio, ut rutrum massa mattis in. Mauris consectetur neque ante, nec volutpat lacus fermentum et. Pellentesque maximus ullamcorper auctor.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011003",
      idNivelPadre: "011",
      nombreNivel: "Control y Garantía de TI",
      descripcion: " "
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011003001",
      idNivelPadre: "011003",
      nombreNivel: "Gestionar continuidad de los recursos T.I.",
      descripcion:
        "Etiam tincidunt diam at libero tincidunt ullamcorper. Etiam tincidunt leo sit amet purus gravida, ut gravida quam ornare. Sed venenatis turpis sollicitudin pulvinar semper. Nunc dapibus, mauris et bibendum suscipit, nunc velit pulvinar nisi, eget vulputate augue turpis id nulla. Nullam posuere, nibh sit amet iaculis imperdiet, purus nunc malesuada felis, vitae dapibus mi magna ut massa. Fusce pretium sem eu erat porta pellentesque. Etiam ac faucibus dolor, vel vestibulum dolor.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011003002",
      idNivelPadre: "011003",
      nombreNivel: 
        "Mantenimiento Preventivo y Correctivo de Elementos Tecnológicos",
      descripcion:
        "Nullam blandit tortor ac quam lobortis, sit amet vestibulum tellus hendrerit. Nam vitae cursus tortor. Vestibulum ac hendrerit erat. Mauris metus massa, congue eget lacus eu, consequat congue odio. Etiam mattis nec neque a interdum. Etiam egestas placerat accumsan. Vestibulum fermentum, purus vel imperdiet sodales, ligula sapien luctus dolor, vitae varius dolor lacus ut metus. Sed nulla magna, faucibus gravida justo non, tincidunt vehicula massa. Duis lobortis dignissim vehicula. Nunc elementum ipsum id lobortis euismod. Cras non molestie leo. Praesent malesuada vel sem id tempus. Nam ultrices elit sit amet magna sodales viverra.",
    },
    {
      empresa: "60155c7052eab65a94b04d10",
      idNivel: "011003003",
      idNivelPadre: "011003",
      nombreNivel: "Asegurar las tecnologías de información.",
      descripcion:
        "Pellentesque non lacus nec purus euismod luctus nec id lacus. Donec dignissim eleifend nisl, vitae pulvinar ipsum suscipit at. Integer varius neque quis est vulputate, eget feugiat ante fringilla. Morbi eu augue purus. Vestibulum interdum risus ut imperdiet malesuada. Aliquam laoreet, augue eu convallis placerat, est orci dignissim sapien, sed facilisis elit est eget lacus. Nullam sit amet aliquet lacus, in aliquet nunc.",
    },
  ]; 
 
  const reporteTiempos = ["tiempo", "ejemplo"];

  const datos = {dato1: empresa,
    dato2: empleado,
    dato3: tablas,
    dato4: frecuencia,
    dato5: diccionario,
    dato6: reporteTiempos
    }


  // Debe enviarme la table de frecuencias de la empresa para lo cual no aparece en la BD en el mismo objeto
  // Debe enviarme los movimientos de la Captura e Tiempos del usuario
  // Debo enviarle informacion hacia arriba de ñp que ud necesita para actualizar la tabla de Captura de Tiempos de todos los empleados
      // tablas={tablas}
        // frecuencia={frecuencia}
        // diccionario={diccionario}
        // reporteTiempos={reporteTiempos}

  return (
    <div>
      <CapturaTiempos
        datos={datos}/>
    </div>
  );
}
