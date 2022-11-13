"use strict";

// Создайте страницу, которая спрашивает имя у пользователя, потом выводит его и после спрашивает, правильно ли оно вывелось.

let userName = prompt("What is your name?");
alert(userName);
confirm(`Your name, ${userName}, correct?`);
