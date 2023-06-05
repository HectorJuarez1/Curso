"use strict";

// BOM broser object Model



function getBom(){
console.log(screen.width);
console.log(screen.height);
console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(window.location.href);
}


function redirect(url){
    window.location.href =url;
}


function abrirVentana (url){
    window.open();
}

getBom();