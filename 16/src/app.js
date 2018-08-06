/* 
Escribe una función llamada convertScoreToGrade.

Dada una puntuación, convertScoreToGrade devuelve una cadena que representa el grado de letra correspondiente a la puntuación dada.

Notas:

(100 - 90) -> 'A'
(89 - 80) ->' B '
(79 - 70) -> 'C'
(69 - 60) -> 'D'
(59 - 0) -> 'F'
Si la puntuación dada es mayor que 100 o menor que 0, debe devolver 'PUNTUACION INVALIDA'.
var output = convertScoreToGrade(91);
console.log(output); // -> 'A'
*/

function convertScoreToGrade(score) {
  if (score > 100 || score < 0) {
    console.log('PUNTUACION INVALIDA');
  } else if (score >= 90 || score <= 100) {
    console.log('A');
  } else if (score >= 80 || score <= 89) {
    console.log('B');
  } else if (score >= 70 || score <= 79) {
    console.log('C');
  } else if (score >= 60 || score <= 69) {
    console.log('D');
  } else (score >= 0 || score <= 59) {
    console.log('F');
  }
}