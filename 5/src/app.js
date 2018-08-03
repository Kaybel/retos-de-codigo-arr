/* Dada una lista de números enteros no negativos y una suma objetivo, encuentre un par de números que sumen a la suma objetivo.

Ejemplo de entrada:

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5] */

let pair = [3, 34, 4, 12, 5, 2];
let number = 9;

function findPairForSum(array, number) {

  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] + array[j] == number) {
        sum = [array[i], array[j]];
      }
    }
  }
  return sum;
}