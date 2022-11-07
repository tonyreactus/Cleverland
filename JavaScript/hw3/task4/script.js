"use strict";

const width = 1024;
const margin = 5;
const imageMarginCount = 2;

const getImageWidth = () => {
  const imgCount = 4;

  const imgWidth = (width - margin * imgCount * imageMarginCount) / imgCount;

  return imgWidth; // завершение инструкции или результат выпулнения функции
};

const getUserImageData = (imgCount, imgWidth) => {
  const imgWidthWithMargin = imgWidth + margin * imageMarginCount;
  const rowImgCount = width / imgWidthWithMargin;
  const fullRowsCount = Math.floor(imgCount / rowImgCount);
  const lastRowCount = imgCount - fullRowsCount * rowImgCount;

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
