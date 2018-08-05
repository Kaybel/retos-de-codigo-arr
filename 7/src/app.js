/* Escriba una función llamada "findShortestWordAmongMixedElements".

Dado un array, "findShortestWordAmongMixedElements" devuelve la cadena más corta dentro del array dado.

Notas:

Si hay vínculos, debería devolver el primer elemento que aparezca en el array dado.
Espere que el array tenga otros valores además de las cuerdas.
Si el array dado está vacío, debería devolver una cadena vacía.
Si el array dado no contiene cadenas, debería devolver una cadena vacía.
Ejemplo:

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
 */

const arr = [4, 'two', 2, 'three'];

const arrVacio = [];

function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0 || typeof (arr.length) != 'string') {
    return "";
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'string') {
      arrVacio.push(arr[i]);
    }
  }
}