"use strict";

// Используя конструкцию if..else, напишите код, который получает значение prompt,
// а затем выводит, является число положительным, отрицательным или равным 0

const randomNumber = prompt("Введите любое число");

if (+randomNumber > 0) {
  alert("Ваше число положительное!");
} else if (+randomNumber < 0) {
  alert("Ваше число отрицательное!");
} else if (+randomNumber === 0) {
  alert("Ваше число равно нулю!");
}
