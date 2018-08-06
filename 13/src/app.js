/*
Escribe una función llamada getLongestOfThreeWords.

Dado 3 palabras, getLongestOfThreeWords devuelve la más larga de tres palabras.

Notas:

Si hay un empate, debe devolver la primera palabra en el empate.
var output = getLongestOfThreeWords('estos', 'tres', 'palabras');
console.log(salida); // -> 'estos'
*/
function getLongestOfThreeWords( w1, w2, w3) {
  
  let long = w1;

  if (long.length < w2.length) {
    long = w2;
  }
  if (long.length < w3.length) {
    long = w3;
  }
  return long;
}