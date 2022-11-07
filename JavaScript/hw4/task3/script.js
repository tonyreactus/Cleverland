"use strict";

// Дан номер месяца (1 – январь, 2 – февраль, ...). Вывести название соответствующего времени года («зима», «весна» и т. д.).

const getSeason = (monthNumber) => {
  if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    return "зима";
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

// ! сделать еще через алерты
