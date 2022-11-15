"use strict";

// Используя конструкцию if..else, напишите код, который будет
// спрашивать: «Каково «официальное» название JavaScript?».
// Если посетитель вводит «ECMAScript», то выводить «Верно!»,
// если что-то другое – выводить «Не знаете? «ECMAScript»!».

const oficialJavaScriptName = prompt(
  "Каково «официальное» название JavaScript?"
); //Присваиваем переменной значение из промпта

if (oficialJavaScriptName === "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? «ECMAScript»!"); // любое значение, кроме ECMAScript
}
