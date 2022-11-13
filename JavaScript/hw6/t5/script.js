"use strict";

// Напишите функцию multiply(n,m), которая принимает два аргумента и возвращает
// произведение этих аргументов.
// Проверьте ее работу.

function multiply(n, m) {
  const result = n * m;
  alert(`Произведение чисел ${n} и ${m} = ${result}`);
}

const fistNum = +prompt("Введите число");
const secondNum = +prompt("Введите еще одно число");

multiply(fistNum, secondNum);

//параметры вверху не должны совпадать внизу, главное, чтобы был заполнен шаблон, в который подсьавляются реальные параметры, как х и у

//Альтернативное решение
// let n = +prompt("Введите первое число", "");
// let m = +prompt("Введите второе число", "");
// function multiply(n, m) {
//   let result = n * m;
//   return alert(`Произведение чисел=${result}`);
// }
// multiply(n, m);
