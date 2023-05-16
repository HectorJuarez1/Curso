'use strict'
// Condicional IF

var edad = 19;
var nombre = "Hector coyotl";


/* operadores relacionales 

Mayor : >
Menor : <
Mayor o igual : >=
Menor o igual : <=
Igual : == 
Distinto : !=
 
*/


// // si pasa esto 
// if (edad1 > edad2) {
//     //ejecuta esto

//     console.log("Edad uno es mayor que edad 2 ");
// }else{
//     console.log("La edad uno es inferior");
// }

if (edad >=18 ) {
    console.log(nombre + " tiene " + edad + " años , es mayor de edad.")
    if (edad == 33) {
        console.log("Todavia eres millenial");   
    }else if (edad >=70){
        console.log("Eres anciano");   
    }else{
        console.log("Ya no eres millenial");
    }
}else{
    console.log(nombre + " tiene " + edad + " años , es menor de edad.")
}



/* operadores logicos
AND  (Y): &&
OR (O): ||
Negacion: !

*/

var year = 2018;
// Negacion

if (year !=2016) {
    console.log("El año no es 2016");
}

// and
if (year >= 2000 && year <=2020 && year != 2018) {
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}


//or
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado")
}


