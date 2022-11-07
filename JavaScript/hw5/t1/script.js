"use strict";

// Первый способ
let i = 1;

while (i < 10) {
  console.log(Math.pow(i++, 2));
}

// Второй способ
let o = 0;
while (o < 9) {
  o++;
  console.log(o * o);
}
