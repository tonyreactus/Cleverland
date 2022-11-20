"use strict";

// 1.Создайте объект salary в котором хранятся зарплаты 10 работников. (Ключами являются их фамилии а значениями-размеры зарплат)
// 2.Создайте клон этого объекта.
// 3.Вычислите среднюю  зарплату. Добавьте в объект salary свойство, содержащее информацию о средней зарплате.
// 4.Посчитайте сколько человек  получают зарплату не меньше средней.  Добавьте в объект salary свойство, содержащее эту информацию.

// 1.Создайте объект salary в котором хранятся зарплаты 10 работников. (Ключами являются их фамилии а значениями-размеры зарплат)
const salary = {
  Ivanov: 9600,
  Petrov: 5000,
  Tyshkevich: 4300,
  Bahdanovich: 900,
  Abramovich: 3000,
  Kniazev: 2900,
  Andreeva: 10000,
  Vlaskevich: 5500,
  Vishnievskaja: 8400,
  Polkina: 7800,
};

// 2.Создайте клон этого объекта.
function copy() {
  let copyObj = {};
  for (let key in salary) {
    copyObj[key] = salary[key];
  }
  return copyObj;
}

// 3.Вычислите среднюю  зарплату. Добавьте в объект salary свойство, содержащее информацию о средней зарплате.

const getMiddleSalary = () => {
  let sum = 0;
  let count = 0;
  for (let key in salary) {
    sum += salary[key];
    count += 1; //при каждом заходе в цикл счёлкается на единицу
  }
  const result = sum / count;
  return result;
};

salary.mddlesalary = getMiddleSalary(); //в свойство объекта присвается значение, которое является результатом вызова функции

// 4.Посчитайте сколько человек  получают зарплату не меньше средней.  Добавьте в объект salary свойство, содержащее эту информацию.

const getWorkersCount = () => {
  let count = 0;
  for (let key in salary) {
    if (key === "mddlesalary") continue;
    if (salary[key] >= salary.mddlesalary) {
      count++;
    }
  }
  return count;
};

salary.WorkersCount = getWorkersCount();
