
function crearlistaActividadesTabla () {

    const lista = [
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
        "Nullam aliquet semper mauris, in egestas eros auctor eu. Integer facilisis luctus neque, gravida ultrices nisi aliquet ut. Proin egestas ultrices turpis, vitae semper leo vulputate sit amet. Maecenas aliquam auctor dapibus. Aliquam eleifend, dolor a finibus pellentesque, leo ligula rhoncus tellus, eget porta magna felis sit amet justo. Sed lacinia lorem sed diam elementum, ut dictum metus ultricies. Sed ac dapibus eros, sed facilisis erat. Aliquam a efficitur diam, vel rutrum diam. Quisque vehicula eget odio eu dictum. Donec sed massa et quam semper gravida tempor eget est. Vivamus hendrerit consequat placerat. Aliquam malesuada augue in augue blandit molestie. Vivamus aliquam consectetur odio, ut rutrum massa mattis in. Mauris consectetur neque ante, nec volutpat lacus fermentum et. Pellentesque maximus ullamcorper auctor."
    }
   ]
  
  
    
    function formatNivel(nivel) {
  
      var tempIdNivel = nivel.substring(0,3);
      var nroNiveles=nivel.length/3;
  
      for (j=1; j<nroNiveles; j++) {
        tempIdNivel = tempIdNivel+("-")+nivel.substr(j*3,3);
       }
      return tempIdNivel
    }
  
    let arreglo=[];
    let nivel="";
    let i,j=0;
    console.log (lista, lista.length);
    for (i=0; i < lista.length; i++) {
          if (lista[i].descripcion === undefined) {
          arreglo.push([formatNivel(lista[i].idNivel), lista[i].nombreNivel," "])
         } else {
          arreglo.push([formatNivel(lista[i].idNivel), lista[i].nombreNivel,lista[i].descripcion.substr(0,50)])
  }}
    return arreglo  
  }