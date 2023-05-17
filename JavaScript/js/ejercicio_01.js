"use strict";

/*
Programa que pida dos numeros y que diga cual es el mayor, el menor y si son iguales
*/

var num1 = parseInt(prompt("Introduce el primer numero", 0));
var num2 = parseInt(prompt("Introduce el segundo numero", 0));


while(num1 <=0 || num2 <=0 || isNaN(num1) || isNaN(num2) ) {
  num1 = parseInt(prompt("Introduce el primer numero", 0));
  num2 = parseInt(prompt("Introduce el segundo numero", 0));
}


if (num1 == num2) {
  alert("Los numeros son iguales.");
} else if (num1 > num2) {
  alert("El numero mayor es :" + num1);
  alert("El numero menor es :" + num2);
}else if (num2 > num1){
    alert("El numero mayor es :" + num2);
    alert("El numero menor es :" + num1);
}else{
    alert("Introduce numero correctos");
}
