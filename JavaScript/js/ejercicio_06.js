"use strict";

/*
Que nos diga si un numero es par o impar.
*/

let num1 = getValidNumber("Introduce el primer número");


if (num1 % 2 ==0) {
  alert("Es un numero par");
}else{
  alert("El numero es impar");
}




function getValidNumber(promptMessage) {
  let number = parseInt(prompt(promptMessage, 0));

  while (number <= 0 || isNaN(number)) {
    number = parseInt(prompt(promptMessage, 0));
  }

  return number;
}