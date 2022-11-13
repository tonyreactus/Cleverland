"use strict";

// Узнать который сейчас час (именно количество часов) в Javascript можно следующим
// образом:
// let date = new Date();
// let  h= date.getHours();
// Составьте скрипт, который спрашивает имя пользователя и приветствует его
//  по-разному,  в зависимости от времени суток. (Доброе утро, бодрый день и т.д)
//  при помощи switch/case.

const date = new Date();
const hour = date.getHours();

const nameAnswer = prompt("Как Вас зовут?", "");

switch (hour) {
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    alert("Доброе утро!" + nameAnswer);
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    alert("Добрый день!" + nameAnswer);
    break;
  case 18:
  case 19:
  case 20:
  case 21:
  case 22:
  case 23:
    alert("Добрый вечер!" + nameAnswer);
    break;
  default:
    alert("Доброй ночи!" + nameAnswer);
}

//альтернативное решение, где сравнивается одинаковый тип значний, в данном случае boolean true и сравние, котороые булевое
// switch (true) {
//   case (hour) => 6 && hour <= 11:
//     alert("Доброе утро!" + nameAnswer);
//     break; // это как return, но только в циклах и switch  case
// }
