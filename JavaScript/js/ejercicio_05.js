"use strict";

/*
Muestre todos los numeros divisores de un numero introducido
*/

let num1 = getValidNumber("Introduce el primer número");


for (var index = 1; index < num1; index++) {
    if (num1 % index == 0) {
    console.log("Divisor : " + index);  
    }
}


function getValidNumber(promptMessage) {
  let number = parseInt(prompt(promptMessage, 0));

  while (number <= 0 || isNaN(number)) {
    number = parseInt(prompt(promptMessage, 0));
  }

  return number;
}