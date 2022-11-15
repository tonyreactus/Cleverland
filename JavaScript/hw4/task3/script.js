"use strict";

// Дан номер месяца (1 – январь, 2 – февраль, ...). Вывести название
// соответствующего времени года («зима», «весна» и т. д.).

const getSeason = (monthNumber) => {
  //в переменную getSeason присвоено значение (в данном случае это функция), которое является функцией. Функция лежит в переменной GetSeason. И уже функция getSeason принимает аргумент (это происходит благодаря скобкам, слово принимает про скобки) monthNumber
  //в переменную getSeason присваивается функция, которая уже принимает аргумент в скобках monthNumber

  if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    return "зима"; //делает возврат значение и завершает исполнение инструкции, функции
    //если выполнится это условие, то следуюшие шаги функции не выполнятся, проигнорируются.
  }

  if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    return "весна";
  }

  if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    return "лето";
  }

  if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
    return "осень";
  }

  throw new Error("Месяц не найден");
};

console.log(getSeason(12)); // мы ожидаем, что здесь бдует отображено "зима"
console.log(getSeason(3)); // мы ожидаем, что здесь бдует отображено "весна"
console.log(getSeason(6)); // мы ожидаем, что здесь бдует отображено "лето"
console.log(getSeason(9)); // мы ожидаем, что здесь бдует отображено "осень"
console.log(getSeason(13)); // мы ожидаем, что здесь бдует отображено "Месяц не найден"

//Второе решение
// const monthNumber = +prompt("Введите число месяца");

// if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
//   alert("зима");
// } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
//   alert("весна");
// } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
//   alert("лето");
// } else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
//   alert("осень");
// }
