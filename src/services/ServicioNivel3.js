//import axios from 'axios';

export class ServicioNivel3 {

    getNivel3() {
        return fetch('assets/databases/Nivel3.json'
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
