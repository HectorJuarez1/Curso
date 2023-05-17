"use strict";

// let num1 = getValidNumber("Introduce el primer número");
// let num2 = getValidNumber("Introduce el segundo número");






function porConsola(numero1,numero2){
  console.log("Suma:  " + (numero1 + numero2));
  console.log("resta:  " + (numero1 - numero2));
  console.log("multiplicacion:  " + (numero1 * numero2));
  console.log("division:  " + (numero1 / numero2));
  console.log("********************************************");

}

function porPantalla(numero1,numero2){
  document.write("Suma:  " + (numero1 + numero2)+"<br/>");
  document.write("resta:  " + (numero1 - numero2)+"<br/>");
  document.write("multiplicacion:  " + (numero1 * numero2)+"<br/>");
  document.write("division:  " + (numero1 / numero2)+"<br/>");
  document.write("********************************************"+"<br/>");
}








function Calculadora(numero1 , numero2,mostrar = false) {

  if (mostrar == false) {
   porConsola(numero1,numero2);
  }else{
   porPantalla(numero1,numero2);
  }
 

}


Calculadora(1,4);

Calculadora(2,5,true);

// for (let index = 1; index <=10; index++) {
//   Calculadora(index,8);  
// }


function getValidNumber(promptMessage) {
  let number = parseInt(prompt(promptMessage, 0));

  while (number <= 0 || isNaN(number)) {
    number = parseInt(prompt(promptMessage, 0));
  }

  return number;
}
