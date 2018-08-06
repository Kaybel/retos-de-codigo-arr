/*
Escribe una función llamada "computeSumBetween".

Dado 2 enteros, "computeSumBetween" devuelve la suma entre los dos enteros dados, comenzando en num1 y excluyendo num2.

Notas:

La suma entre 1 y 4 es 1 + 2 + 3 = 6.
Si num2 no es mayor que num1, debe devolver 0.
var output = computeSumBetween (2, 5);
console.log (salida); // -> 9
*/

function computeSumBetween (num1, num2){
  let sum = 0;
  for (let i = num1; i < num2; i++){
    sum += i;
  }
}