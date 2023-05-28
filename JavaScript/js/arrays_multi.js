'use strict';

//Arrays multidimencionales

var categorias = ["Accion", "Terror", "comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];


// orden alfabetivo 
peliculas.sort();

// voltear el array
peliculas.reverse();

console.log(peliculas);

// console.log(cine[0][1]);
// console.log(cine[1][2]);

// peliculas.push = ("Batman");

// var elementos ="";

// do {
//     elementos = prompt("Introduce tu pelicula favorita: ");
//     peliculas.push(elementos);

// } while (elementos != "ACABAR");

// peliculas.pop();
// peliculas[0]= undefined;


// var indice = peliculas.indexOf('La vida es bella');

// if (indice > -1) {
//     peliculas.splice(indice, 1);
// }


// var peliString=peliculas.join();

// convierte un array a string 
// console.log(peliString);


// convierte un string a un array
// var cadena ="Texto1,Texto2.Texto3";

// var cadena_Array = cadena.split(", ");

// console.log(cadena_Array);

// console.log(indice);
// console.log(peliculas);