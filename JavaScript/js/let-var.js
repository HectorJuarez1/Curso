'use strict'

// LET Y VAR

//let actuliza el valor a nivel del bloque

var numero =40;
console.log(numero);  // su valor es de 40

if (true) {
    var numero =50;   
    console.log(numero); // su valor es de 50
}
console.log(numero);




// Prueba con let 
var texto ="Curso JS";
console.log(texto);

if (true) {
    let texto ="Curso laravel 5";
    console.log(texto);
}

console.log(texto);