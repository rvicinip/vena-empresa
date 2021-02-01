//import axios from 'axios';

export class ServicioEmpresas {

    getEmpresas() {
        return fetch('assets/databases/Empresas.json'
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
