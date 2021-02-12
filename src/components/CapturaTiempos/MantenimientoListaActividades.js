import React, {useState} from 'react'

function MantenimientoListaActividades({novedad}) {
  const [listaActividades, setListaActividades] = useState([]);
  const tipoNovedad = novedad.tipoNovedad;
  const registro = novedad.registro
  console.log("Lo logramos!")  
  console.log ("Modulo mantenimientoListaActividad")
  console.log ("tipoNovedad",tipoNovedad)
  console.log ("Registro",registro)
  var nuevaListaActividades = [[]]

  switch (tipoNovedad) {
    case "A":
      //Declaraciones ejecutadas cuando la novedad es Agregar un nuevo registro
      nuevaListaActividades = listaActividades.concat(registro);
    case "B":
      //Declaraciones ejecutadas cuando la novedad es Borrar un registro de la lista
      listaActividades.forEach(actividad => {
        if (registro.id !== actividad.id) {
          nuevalistaActividades = nuevaListaActividades.concat(actividad);
        }
      })
    case "M":
      //Declaraciones ejecutadas cuando la novedad es Modificar (Agregar Registro Tiempo)
      listaActividades.forEach(actividad => {
        if (registro.id === actividad.id) {
          nuevaListaActividades = nuevalistaActividades.concat(registro);
        }
        else {
          nuevalistaActividades = nuevaListaActividades.concat(actividad);
        }
      })
  }


  console.log("NUEVA ListaActividades",nuevaListaActividades)
  setListaActividades(nuevaListaActividades);


  return ListaActividades


}

export default MantenimientoListaActividades




