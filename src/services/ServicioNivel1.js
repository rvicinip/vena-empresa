//import axios from 'axios';
import nivel1 from "assets/databases/Nivel1.json"

export class ServicioNivel1 {

  getNivel1() {
    return fetch('./Nivel1.json'
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
