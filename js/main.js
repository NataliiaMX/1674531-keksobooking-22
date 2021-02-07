// Будем использовать Function Declaration во время написания проекта

//templates
const offerTemplate = {
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  type: ['palace', 'flat', 'house', 'bungalow'],
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',                                           
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
};

/*global _*/

const LISTINGS = [];
 
for (let i = 0; i < 10; i++){
  let listing = {
    author: {
      avatar: 'img/avatars/user' + 0 + _.random(1, 8) +'.png',
    },
    offer: {
      title: 'Your best offer in Tokyo',
      adress: 'X:'+ _.random(1, 400)+ ', ' + 'y:' + _.random(1, 400),
      price: _.random(1, 10000),
      tyte: getRandomArrayElement(offerTemplate.type),
      rooms: _.random(1, 15),
      guests: _.random(1, 20),
      checkin: getRandomArrayElement(offerTemplate.checkin),
      checkout: getRandomArrayElement(offerTemplate.checkout),
      features: makeNewRandomSubset(offerTemplate.features),
      description: 'New spacious place, perfect for long and short stays',
      photos: makeNewRandomSubset(offerTemplate.photos),
    },
    location: {
      x: getRandomWithFloat(35.65000, 35.70000, _.random(1, 5)),
      y: getRandomWithFloat(139.70000, 139.80000, _.random(1, 5)),
    }, 
  }
  LISTINGS.push(listing);
}


//functions that I need

//for getting ramdom array element
function getRandomArrayElement(elements){
  return elements[_.random(0, elements.length - 1)];
}

//for offer.features
function makeNewRandomSubset (array){
  let length = _.random(1, array.length)
  let newArray = [];
  while(newArray.length < length) {
    let newIndex = _.random(0, array.length - 1);   
    let currentElement = array[newIndex];
    if (!newArray.includes(currentElement)){
      newArray.push(currentElement);
    }
  }
  return newArray;
}

//for getting random number with floating point
function getRandomWithFloat (min, max, point) {
  if (min < max) {  
    let randomNumber = (Math.random() * (max - min + 1)) + min;
    return randomNumber.toFixed(point);
  }
}
