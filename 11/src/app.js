/*
Escriba una función llamada computeSumOfAllElements.

Dado un array de números, computeSumOfAllElements devuelve la suma de todos los elementos del array dado.

Ejemplo:

var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6
*/

function computeSumOfAllElements (array){
  for(let i = 0; i < array.length; i++){
    let suma = 0;
    suma += array[i];
  }
  return suma;
}