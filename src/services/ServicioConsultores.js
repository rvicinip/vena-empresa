//import axios from 'axios';

export class ServicioConsultores {

    getConsultores() {
        return fetch('assets/databases/Consultores.json'
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
