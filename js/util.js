
//for getting random number
function getRandom(min, max) {
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

//for getting random array element
function getRandomArrayElement(elements) {
  return elements[getRandom(0, elements.length - 1)];
}

//for offer.features etc
function makeNewRandomSubset(array) {
  let length = getRandom(1, array.length)
  let newArray = [];
  while (newArray.length < length) {
    let newIndex = getRandom(0, array.length - 1);
    let currentElement = array[newIndex];
    if (!newArray.includes(currentElement)) {
      newArray.push(currentElement);
    }
  }
  return newArray;
}

//for getting random number with floating point
function getRandomWithFloat(min, max, point) {
  if (min < max) {
    let randomNumber = (Math.random() * (max - min + 1)) + min;
    return randomNumber.toFixed(point);
  }
}

export {getRandom, getRandomArrayElement, makeNewRandomSubset, getRandomWithFloat};