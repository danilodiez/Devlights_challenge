function getStringChars(string) {
  let msg = string;
  let stringObject = {};

  for (var i = 0; i < msg.length; i++){
    if(stringObject[msg.charAt(i)]){
      stringObject[msg.charAt(i)] += 1;
    }
    else{

        stringObject[msg.charAt(i)] =1;
    
    }
  }
  return stringObject;
}

  
  
function equalChars(stringObject) {
    let firstKey=Object.keys(stringObject)[0];
    let letterInObject;
    let objectLen = Object.keys(stringObject).length;



    for(let i=0; i < objectLen;i++){
      letterInObject=Object.keys(stringObject)[i];
      //Analizamos el objeto que armamos y vemos si tenemos algun caracter que no posea la misma cantidad, en caso contrario retornamos verdadero
      if(stringObject[letterInObject] !=stringObject[firstKey]){
        return false;
      }
    }
    return true;
    
  }
  




  function isValid(text){
    let stringObject = getStringChars(text);
    let equalCharsFlag = equalChars(stringObject);


    let unequalCount = 0;
    let unequalLetters = [];

    let firstKey=Object.keys(stringObject)[0];
    let letterInObject;
    let objectLen = Object.keys(stringObject).length;


    if(equalCharsFlag === true){
      //Tenemos el caso de un string valido por cantidad igual de caracteres
      return "YES";
    }
    else{
      //Analizamos cuantos desiguales tenemos para ver si aun tenemos posibilidad de validez
      for(let i=0; i < objectLen;i++){
        letterInObject=Object.keys(stringObject)[i];
        //Analizamos el objeto que armamos y vemos si tenemos algun caracter que no posea la misma cantidad, en caso contrario retornamos verdadero
        if(stringObject[letterInObject] !=stringObject[firstKey]){
          unequalCount+=1;
          unequalLetters.push(letterInObject)

        }
      }
      //Una vez que recorrimos el objeto, vemos cuantas desigualdades tenemos y pasamos a informar el error

      if(unequalCount>1 || stringObject[unequalLetters[0]] - stringObject[firstKey]>1){

        return "NO"; 
      }else{
        //Es valido retirando una letra
        return "YES";
      }
    }

  }


//  let mensaje = "aaaabbbccczzzrrr"
 
//isValid(mensaje)

module.exports= {isValid};
