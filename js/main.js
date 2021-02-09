// Будем использовать Function Declaration во время написания проекта



alert(getRandom(4,8));
alert(getRandomWithFloat(4,8,3));

//Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandom(min, max) {
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  else {
    alert('Введите два разных числа в порядке возрастания');
  }
}
//Подсмотрено тут https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random и немного изменено


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function getRandomWithFloat (min, max, point) {
  if (min < max) {
    let randomNumber = (Math.random() * (max - min + 1)) + min;
    return randomNumber.toFixed(point);
  }
  else {
    alert('Введите два разных числа в порядке возрастания');
  }
}
