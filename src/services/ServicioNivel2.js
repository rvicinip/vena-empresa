//import axios from 'axios';

export class ServicioNivel2 {

    getNivel2() {
        return fetch('assets/databases/Nivel2.json'
        ,{headers : {'Content-Type': 'application/json', 'Accept': 'application/json'} }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            return(myJson);
          });
    }

}
