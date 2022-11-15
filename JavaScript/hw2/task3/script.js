"use strict";

// Создайте 9 переменных. Присвойте им следующие значения:
// 12.5
// 245
// "Hello"
// undefined
// null
// true
// [1,5,7,12,3,"значение"]
// {'Вася':'Имя'};
// function() {}
// При помощи оператора typeof выведите типы данных этих переменных

const number = 12.5;
const num = 245;
const text = "Hello";
const undefinedValue = undefined;
const nullValue = null;
const booleanValue = true;
const array = [1, 5, 7, 12, 3, "значение"];
const person = { Вася: "Имя" };
const func = function () {};

//typeof возвращает мне тип данных в виде строки
alert(typeof number); // "number"
alert(typeof num); // "number"
alert(typeof text); // "string"
alert(typeof undefinedValue); // "undefined"
alert(typeof nullValue); // "object"
alert(typeof booleanValue); // "boolean"
alert(typeof array); // "object"
alert(typeof person); // "object"
alert(typeof func); // "function"
