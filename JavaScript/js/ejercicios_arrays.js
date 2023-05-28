'use strict';

/*



*/



var numeros = new Array(6);


for (let index = 0; index <=5; index++) {
    numeros = getValidNumber("Introduce el primer número");
}


document.write("<h1>Contenido del array</h1>")
numeros.forEach((numero,index)=>{
    document.write("<strong>"+numero+"</strong><br/>");
});



function getValidNumber(promptMessage) {
    let number = parseInt(prompt(promptMessage, 0));
  
    while (number <= 0 || isNaN(number)) {
      number = parseInt(prompt(promptMessage, 0));
    }
  
    return number;
  }
  