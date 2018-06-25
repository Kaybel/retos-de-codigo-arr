/* Escriba una función llamada getNthElement.

Dado un arreglo y un entero, getNthElement devuelve el valor según el entero dado, dentro del arreglo dado.

Notas:

Si el arreglo tiene una longitud de 0, debería devolver' undefined'.
Ejemplo de entrada:

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3 */ 

const arr1 = [1, 3, 5];
const num = 1;
function getNthElement([arr1], num, arr2){
  if (num === 0){
    return undefined;
  }
  return arr1[num];
}