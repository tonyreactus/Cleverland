"use strict";

const weatherData = [
  {
    //объект первой итерации
    date: "31.08",
    img: "assets/weather-sun.jpg",
    temperature: "+20",
  },
  {
    date: "01.09",
    img: "assets/weather-blizzard.jpg",
    temperature: "-3",
  },
  {
    date: "02.09",
    img: "assets/weather-snow.jpg",
    temperature: "-10",
  },
  {
    date: "03.09",
    img: "assets/weather-sun.jpg",
    temperature: "+2",
  },
  {
    date: "04.09",
    img: "assets/weather-blizzard.jpg",
    temperature: "-13",
  },
  {
    date: "05.09",
    img: "assets/weather-snow.jpg",
    temperature: "+5",
  },
];

const body = document.getElementById("body"); //шаг 1. используя данный метод .getElementById получил в JS тег (элемент) <body> из HTML. ("body") - это сигнатура, название ID, который мы указали в файле HTML. Это делаем, чтобы с ним работаь.

const mainContainer = document.createElement("div"); // метод для создания элемента HTML в JS, то есть в среде JS создаём структуру из элементов, как в HTML, а здесь это div
mainContainer.setAttribute("class", "mainContainer"); // метод позволяет в среде ДжС задать атрибуты, по аналогии с тегами в HTML. 1-й параметр: название атрибута, 2-й значение атрибута.

for (const day of weatherData) {
  // это цикл с помощью конструкции for of, которая позволяет заканчивать цикл, когда закончатся данные. Используется для итерируемых объектоы, а массив всегда итерируемый.
  const dayElement = document.createElement("div"); //создаём контейнер для одного дня, по аналогии с HTML
  dayElement.setAttribute("class", "dayContainer");

  const dateElement = document.createElement("div"); //создаём контейнер dateElement для даты, по аналогии с HTML это мы создали подтег очерний, после чего нужно создать .appendChild
  dateElement.innerHTML = day.date; //заполняем данными контейнер(элемент) dateElement для даты из weatherData, который состоит из day. Еще раз. где day.date означает, что мы берем day (элемент из weatherData - это спісок элементов) innerHTML - это свойство как у HTML-элементов и именно туда добавляются данные.
  dateElement.setAttribute("class", "dateContainer");

  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", day.img); // получаем для картинок данные из элемента day. "src" выступает атрибутом, такое же было в HTML, только внутри тега

  const temperatureElement = document.createElement("div");
  temperatureElement.innerHTML = day.temperature;

  dayElement.appendChild(dateElement);
  dayElement.appendChild(imgElement);
  dayElement.appendChild(temperatureElement);
  mainContainer.appendChild(dayElement);
}

body.appendChild(mainContainer); //последний шаг. Этот метод добавляет дочерний элемент в родительский элемент, который здесь является body, по аналогии с вёрсткой в виде тегов

//Общий смысл:
// Зачем такой вид? Для того, чтобы не дублировать HTML-код всё делатся в виде шаблона в JS для типовых элементов.
//Логика такая: 1. Создаётся структура (теги) в виде JS по аналогии с HTML 2. Определяется, создаётся иераргия с помощью  .appendChild 3. Элементам добавля.тся атрибуты с помощью .setAttribute, в том числе стили (пример:   dayElement.setAttribute("class", "dayContainer");) 4. Наполняются наполняется данными с помощью .innerHTML. 5. Уже в файле стилей наполняется дизайн.
