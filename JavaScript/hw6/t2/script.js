"use strict";

// Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа,
// если меньше или равно 7 – пишет, что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8.
// Реализуйте решение с несколькими return.

function userNumber(num) {
  // case1
  if (num > 10) {
    return Math.pow(num, 2);
  } else if (num <= 7) {
    alert("Это число меньше 7");
    return;
  } else if (num === 8) {
    return 7;
  } else if (num === 9) {
    return 8;
  }
}

// case1
const result1 = userNumber(11);
