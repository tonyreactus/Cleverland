"use strict";

// Создайте три переменные - hour, minute, sec. С их помощью выведите
//  текущее время в формате 'час:минута:секунда'.

const date = new Date(); //нативный класс Date, который передаёт методы к date, слово new создаёт новый экземпляр класса
let hour = date.getHours(); //.getHours - это методы экземпляра date (метод это функция конкретного объекта) Метолд это определение дейтвий которые может делать этот объект
let minute = date.getMinutes(); //это действия, методы, которые может определять класс Date
let sec = date.getSeconds();
if (hour < 10) {
  hour = "0" + hour;
}
if (minute < 10) {
  minute = "0" + minute;
}
if (sec < 10) {
  sec = "0" + sec;
}
alert(`${hour}:${minute}:${sec}`);
