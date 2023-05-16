"use strict";

var year = 2018;

while (year <= 2020) {
  console.log("Estamos en el año :" + year);
  if (year == 2020) {
    break;
  }
  year++;
}

// Do while
var years = 20;

do {
  alert("SOLO CUANDO SEA DIFERENTE A 20");
  years++;
} while (years >= 25);
