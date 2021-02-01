//import axios from 'axios';

export class ServicioPersonal {

    getPersonal() {
        return fetch('assets/databases/Personal.json'
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
