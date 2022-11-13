"use strict";

// На странице шириной 1024px  расположена фотогалерея. Фотографии в галерее
// располагаются в рядах. Когда ряд заполняется до конца (по ширине страницы),
// начинается следующий ряд.
// Для каждого изображения задан внешний отступ с каждой стороны(margin) 5px.
// Создайте скрипт, который:
// - вычисляет и выводит в модальном окне, какую нужно установить ширину для каждого
// изображения, чтобы в каждом ряду умещалось 4 изображения на всю ширину страницы.
// - спрашивает, сколько  изображений в галерее, и какова ширина каждого изображения.
// Затем вычисляет  и выводит  в модальном окне количество изображений в каждом ряду,
// количество полных рядов в галерее и количество изображений в последнем ряду.

const width = 1024;
const margin = 5;
const imageMarginCount = 2;

const getImageWidth = () => {
  const imgCount = 4;

  const imgWidth = (width - margin * imgCount * imageMarginCount) / imgCount;

  return imgWidth; // завершение инструкции или результат выполнения функции
};

const getUserImageData = (imgCount, imgWidth) => {
  const imgWidthWithMargin = imgWidth + margin * imageMarginCount;
  const rowImgCount = width / imgWidthWithMargin;
  const fullRowsCount = Math.floor(imgCount / rowImgCount);
  const lastRowCount = imgCount - fullRowsCount * rowImgCount || rowImgCount;
  return {
    rowImgCount,
    fullRowsCount,
    lastRowCount,
  };
};

const imgWidth1 = getImageWidth(); // Происходит вызов функции
alert(`Максимальная ширина фото, для 4 фото в ряду: ${imgWidth1}px`);

const imgCount = prompt("Сколько изображений у вас в галерее?");
const imgWidth2 = prompt("Какая ширина 1 изображения?");
const userImgData = getUserImageData(+imgCount, +imgWidth2);
alert(`Количество изображений в каждом ряду: ${userImgData.rowImgCount}`);
alert(`Количество полных рядов: ${userImgData.fullRowsCount}`);
alert(`Количество изображений в последнем ряду: ${userImgData.lastRowCount}`);
