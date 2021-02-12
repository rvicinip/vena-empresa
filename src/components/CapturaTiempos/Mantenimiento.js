
export function MantenimientoListaActividades(tabla, novedad) {

  var tipoNovedad = novedad.tipoNovedad;
  const registro = novedad.registro
  const listaActividades = tabla
  console.log("Lo logramos!", tabla) 
  console.log ("Tipo de Novedad", tipoNovedad, typeof(tipoNovedad))

  var nuevaListaActividades = [[]]

  if (tipoNovedad ="A")  {
 
    //Declaraciones ejecutadas cuando la novedad es Agregar un nuevo registro
        nuevaListaActividades = listaActividades.concat(registro);
        console.log ("Nueva ",nuevaListaActividades)
   git restore
  }
  if (tipoNovedad ="B")  {

        //Declaraciones ejecutadas cuando la novedad es Borrar un registro de la lista
        listaActividades.forEach(actividad => {
          if (registro.id !== actividad.id) {
            nuevalistaActividades = nuevaListaActividades.concat(actividad);
          }
        })
    
  }

  if (tipoNovedad ="M")  {

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



return listaActividades


}






