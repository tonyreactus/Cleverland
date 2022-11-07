"use strict";

let oficialNameJavaScript = prompt("Каково «официальное» название JavaScript?");
// Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».
// Если посетитель вводит «ECMAScript», то выводить «Верно!», если что-то другое – выводить «Не знаете? «ECMAScript»!».

if (oficialNameJavaScript == ECMAScript) {
  alert("Да вы знаток!");
} else {
  alert("Не знаете? «ECMAScript»!"); // любое значение, кроме ECMAScript
}
