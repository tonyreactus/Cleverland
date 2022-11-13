"use strict";
// Напишите функцию hello(), которая при вызове будет принимать переменную name (например, «Василий»)
// и выводить строку (в нашем случае «Привет, Василий»).
// В случае отсутствующего аргумента выводить «Привет, гость»

function hello(name) {
  if (name) {
    // Напоминаю, что работает по приницию буллевого значения,  которые всегда после if
    //Если есть хоть какое то имя, то будет имя, если нет данных, не передан аргумент, то привет гость
    alert(`Привет, ${name}`);
    return;
  } else {
    alert("Привет, гость");
    return;
  }
}

hello("Василий");
