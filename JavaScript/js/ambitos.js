"use strict";


var texto ="Hola mundo soy una variable global";
var numero =12;

function holaMundo(texto) {
    var hola_mundo="Texto dentro de fucnion";
    
    console.log(texto);
    console.log(numero.toString());
    console.log(hola_mundo);
}

holaMundo(texto);

