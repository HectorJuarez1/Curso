"use strict";

/*
Tabla de multiplicar de un numero introducido por pantalla
*/

let num1 = getValidNumber("De que numero quieres la tabla ?");

document.write("<h3> TABLA DEL " + num1 + "</h3>");
for (let index = 1; index <= 10; index++) {
  document.write(index + " * " + num1 + " = " + index * num1 + "<br/>");
}

document.write("<h3> TODAS LAS TABLAS</h3>");

for (let index = 1; index <= 10; index++) {
  document.write(index + " * " + num1 + " = " + index * num1 + "<br/>");
 
  for (let i = 1; i <= 10; i++) {
    document.write(i + " * " + num1 + " = " + i * index + "<br/>");
  }
}

function getValidNumber(promptMessage) {
  let number = parseInt(prompt(promptMessage, 0));

  while (number <= 0 || isNaN(number)) {
    number = parseInt(prompt(promptMessage, 0));
  }

  return number;
}
