"use strict";

const date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
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
