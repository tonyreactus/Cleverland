"use strict";

// Создайте функцию, которая получает два параметра – число и степень числа.
// Возведите число в степень и выведите с помощью alert

function raiseNumberToPower(yourNumber, exponentNumber) {
  const result = Math.pow(yourNumber, exponentNumber);
  alert(`Число ${yourNumber} в степени ${exponentNumber} = ${result}`);
}

const yourNumber = +prompt("Введите число");
const exponentNumber = +prompt("Введите степень числа");

raiseNumberToPower(yourNumber, exponentNumber); //аналогия getsum(a, b)

//Альтернативное решение
// function degreeNumeric(yourNumber, exponentNumber) {
//   let result = 1;
//   for (let i = 0; i < exponentNumber; i++) {
//     result *= yourNumber;
//   }

//   alert(`Число ${yourNumber} в степени ${exponentNumber} = ${result}`);
// }

// degreeNumeric(yourNumber, exponentNumber);
