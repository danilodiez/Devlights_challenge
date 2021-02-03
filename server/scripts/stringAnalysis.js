

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

  
  
  function isValid(stringObject){
    let firstKey=Object.keys(stringObject)[0];
    let comparisonQuantity = stringObject[firstKey]
    let sum;
    let objectLen = Object.keys(stringObject).length

   console.log(comparisonQuantity)
    /*for(let i=0; i < objectLen;i++){
      
      
      if(dif!==Object.keys(stringObject)[i]){
        return "Mal"
      }
      return "Bien"
  
    }
    */
  }
  
  let mensaje = "abbcc"
  let resultado = getStringChars(mensaje)
  console.log(resultado)
 
  isValid(resultado)