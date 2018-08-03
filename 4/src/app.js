/* Escribe una función llamada areValidCredentials.

Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.

Ejemplo de entrada:

var output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output); // --> true
*/

function areValidCredentials(name, password) {
  if (name.length > 3) {
    return true;
  }
  else if (name.length < 3) {
    return false;
  }
  else if (password.length > 8) {
    return true;
  }
  else if (password.length < 8) {
    return false;
  }
};