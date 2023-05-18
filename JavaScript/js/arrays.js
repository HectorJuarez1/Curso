'use strict';

//Arrays

var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

var lenguajes = new Array("php", "JS", "Go", "Java","c","c++","c#");


// console.log(nombres.length);
// console.log(nombres[2]);
// console.log(lenguajes[3]);


// var elemento = parseInt(prompt("Que elemento del array requiere ?", 0));
// if (elemento >= nombres.length) {
//     alert("Introduce el numero menor que  : " + nombres.length);
// } else {
//     alert(nombres[elemento]);
// }


document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

// for (var i = 0; i < lenguajes.length; i++) {
//    document.write("<li>"+ lenguajes[i] +"</li>");
// }

lenguajes.forEach((elemento,index) => {
    document.write("<li>"+index +'-'+ elemento +"</li>");
});


document.write("</ul>");