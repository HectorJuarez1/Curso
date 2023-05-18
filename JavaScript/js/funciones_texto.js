"use strict";

// trasformacion de textos

var numero = 44;
var texto1 = "   Bienvenido al curso de curso javaScript    ";
var texto2 = "es muy buen curso";

// // convertir el numero a un string 
// var dato = numero.toString();
//     // convertir a mayusculas 
//     dato = texto1.toLocaleUpperCase();
//     // convertir en minusculas
//     dato = texto2.toLocaleLowerCase();

// // console.log(dato);


// // calcular la longitud de un texto

// var nombre = "Hector coyotl";

// // console.log(nombre.length);

// // concatenar 

// // var textoTotal = texto1 +" "+ texto2;

// var textoTotal = texto1.concat(" "+ texto2);
// console.log(textoTotal);


// var busqueda = texto1.indexOf("curso");
// var busqueda2 = texto1.lastIndexOf("curso");
// var busqueda3 = texto1.search("curso");

// console.log(busqueda);
// console.log(busqueda2);
// console.log(busqueda3);

//  var busqueda2 = texto1.match(/curso/g);
//  var busqueda2 = texto1.substr(14,3);

// busca las palabras con las que inicia en string 
//  var busqueda2 = texto1.startsWith("Bi");

// cuando termina el string regresa un booleano
// var busqueda2 = texto1.endsWith("javaScript");

// busca la palabra
// var busqueda2 = texto1.includes("javaScript");
// console.log(busqueda2);


//  Funciones de reemplazo

// var busqueda = texto1.replace("javaScript","Angular");

// para cortar un string
// var busqueda = texto1.slice(14,22);

// para quitar espacios
var busqueda = texto1.trim();
console.log(busqueda);