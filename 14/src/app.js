/*
Escribe una función llamada findShortestOfThreeWords.

Dado 3 cadenas, findShortestOfThreeWords devuelve el más corto de las cadenas dadas.

Notas:

Si hay empate, debe devolver la primera palabra en la lista de parámetros.
var output = findShortestOfThreeWords('a', 'dos', 'tres');
console.log(salida); // -> 'a'
*/

function findShortestOfThreeWords (w1, w2, w3) {
  let short = w1;

  if (short.length > w2.length) {
    short = w2;
  }
  if (short.length > w3.length) {
    short = w3;
  }
  return short;
}