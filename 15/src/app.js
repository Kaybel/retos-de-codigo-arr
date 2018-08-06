/*
Escribe una función llamada calculateBillTotal.

Dado el pre impuesto y la cantidad antes de propina de una comida, calculateBillTotal devuelve la cantidad total debida después de impuestos y propina.

Notas:

Suponga que el impuesto de ventas es 9.5% y la propina es 15%.
NO incline el impuesto sobre las ventas, solo sobre la cantidad de propina.
var output = calculateBillTotal(20);
console.log(output); // -> 24,9
*/


// a venta le saco la propina que es 15 % y a eso sumado le saco el impuesto que es 9.5%

// 0.15 y 0.095 para sumarlo sin sacar %


function calculateBillTotal (venta) {
  let impuestoyYPropina = venta + ( 0.15 * venta) + (0.095 * venta);

return impuestoyYPropina;
}

