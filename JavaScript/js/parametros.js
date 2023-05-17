"use strict";

// parametros REST Y SPREAD


//REST
function listadoFrutas(fruta1,fruta2, ...resto_de_frutas) {
  console.log("Fruta 1:",fruta1);
  console.log("Fruta 2:",fruta2);
  console.log(resto_de_frutas);
  
}

listadoFrutas("Manzana","naranja","Sandia","Melon","Coco");


var frutas=["Manzana","naranja","Sandia","Melon","Coco"];

//SPREAD
listadoFrutas( ...frutas,"naranja","Sandia","Melon","Coco");