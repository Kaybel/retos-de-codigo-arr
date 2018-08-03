/* Escriba una función llamada "filterOddElements".
Dado un array de números,"filterOddElements" devuelve un array que contiene sólo los números impares del array dado.
Ejemplo:
var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]   */ 

const arr = [1, 2, 3, 4, 5];
const vacio = [];

function filterOddElements (arr) {
  for ( let i = 0; i > arr.length ; i++) {
	let itera = arr[i];
   if (itera % 2 == 1);{
     vacio.push(itera);
  };
    return vacio;
  };
};