"use strict";

/*
Hacer un programa que muestre todos los numero entre  2 numero introducidos por el usuario
*/

let num1 = getValidNumber("Introduce el primer número");
let num2 = getValidNumber("Introduce el segundo número");



document.write("<h3> DE "+num1+" A "+ num2 + "</h3>")

for (let index = num1; index <= num2; index++) {
  document.write(index+"<br/>")
}



function getValidNumber(promptMessage) {
  let number = parseInt(prompt(promptMessage, 0));

  while (number <= 0 || isNaN(number)) {
    number = parseInt(prompt(promptMessage, 0));
  }

  return number;
}