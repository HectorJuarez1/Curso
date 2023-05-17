"use strict";

/*
Calculadora que pida 2 numero por pantalla 
*/

let num1 = getValidNumber("Introduce el primer número");
let num2 = getValidNumber("Introduce el segundo número");



var resultado = "La suma es:" + (num1 + num2) + "<br/>" +
  "La resta es:" + (num1 - num2) + "<br/>" +
  "La multiplicacion es:" + (num1 * num2) + "<br/>" +
  "La division es:" + (num1 / num2) + "<br/>";

var resultadoCMD = "La suma es:" + (num1 + num2) + "\n" +
  "La resta es:" + (num1 - num2) + "\n" +
  "La multiplicacion es:" + (num1 * num2) + "\n" +
  "La division es:" + (num1 / num2) + "\n";



document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);

function getValidNumber(promptMessage) {
  let number = parseInt(prompt(promptMessage, 0));

  while (number <= 0 || isNaN(number)) {
    number = parseInt(prompt(promptMessage, 0));
  }

  return number;
}