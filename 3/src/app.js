/* Escribe una función llamada convertDoubleSpaceToSingle.

Dada una cadena, convertDoubleSpaceToSingle devuelve la cadena pasada en cadena con todos los espacios dobles convertidos a espacios simples.

Ejemplo de entrada:

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

Notas:

Para hacer este problema, debes estar familiarizado con String.split, y Array.join. */



/*
                 SPLIT 

function dividirCadena(cadenaADividir,separador) {
   var arrayDeCadenas = cadenaADividir.split(separador);
   document.write('<p>La cadena original es: "' + cadenaADividir + '"');
   document.write('<br>El separador es: "' + separador + '"');
   document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");

   for (var i=0; i < arrayDeCadenas.length; i++) {
      document.write(arrayDeCadenas[i] + " / ");
   }
} */


//   JOIN     
// var miVar4 = a.join('');    asigna 'VientoLluviaFuego' a miVar4

let output = ["string  with  double  spaces"];
let outNoSpaces = output.join("");
let spaces = " "
function convertDoubleSpaceToSingle(outNoSpaces, spaces) {
  outNoSpaces.split(spaces);
} 
