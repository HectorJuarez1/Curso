"use strict";

function cambiarColor(color) {
  caja.style.background = color;
}

// conseguir elementos con un id concreto

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "Texto en la caja desde js";
caja.style.background = "red";
caja.style.padding = "20px";
caja.className = "Hola";

// conseguir elementos por su etiqueta

// var todoLosDivs = document.getElementsByTagName('div');

/*
var contenidoTexto=todoLosDivs[2];
contenidoTexto.innerHTML="otro Texto";*/

//todoLosDivs.forEach((valor, indice) => {

// var seccion = document.querySelector("#miseccion");
// var hr = document.createElement("hr");

//     var valor;

// for (valor  in todoLosDivs) {

//     if (typeof todoLosDivs[valor].textContent == 'string') {
//         var parrafo = document.createElement("p");
//         var texto = document.createTextNode(todoLosDivs[valor].textContent);
//         parrafo.append(texto);
//         seccion.append(parrafo);
//     }

// }
// seccion.append(hr);
//});

//console.log(contenidoTexto);

// conseguirelementos por su clase

//console.log(caja);


var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');


divsAmarillos[0].style.background = "yellow";

for (var div in divsRojos){
if (divsRojos[div].className == "rojo") {
    divsRojos[div].style.background= "red";
}


}

