//import axios from 'axios';
import nivel1 from "assets/databases/diccionario.json"

export class ServicioDiccionario {
 
  getNivel1() {
    return fetch('./diccionario.json'
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
