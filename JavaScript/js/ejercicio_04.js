"use strict";

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

let num1 = getValidNumber("Introduce el primer número");
let num2 = getValidNumber("Introduce el segundo número");


while (num1 < num2) {
  num1++;
  if (num1%num2 !=0) {
      console.log("El " + num1 +" es impar");
  }
}

function getValidNumber(promptMessage) {
  let number = parseInt(prompt(promptMessage, 0));

  while (number <= 0 || isNaN(number)) {
    number = parseInt(prompt(promptMessage, 0));
  }

  return number;
}