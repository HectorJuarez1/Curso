"use strict";

/*
Tabla de multiplicar de un numero introducido por pantalla
*/

var num1 = getValidNumber("De que numero quieres la tabla ?");

document.write("<h3> TABLA DEL " + num1 + "</h3>");
for (var ind = 1; ind <= 10; ind++) {
  document.write(ind + " * " + num1 + " = " + (ind * num1) + "<br/>");
}



for (var index = 1; index <= 10; index++) {
 
  document.write("<h3>TABLA DEL "+index+"</h3>");
  for (var i = 1; i <= 10; i++) {
    document.write(index + " * " + i + " = " + (i * index) + "<br/>");
  }

}

function getValidNumber(promptMessage) {
  let number = parseInt(prompt(promptMessage, 1));

  while (number <= 0 || isNaN(number)) {
    number = parseInt(prompt(promptMessage, 1));
  }

  return number;
}
