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

const LISTINGS = [];
 
for (let i = 0; i < 10; i++){
  let listing = {
    author: {
      avatar: 'img/avatars/user' + 0 + getRandom(1, 8) +'.png',
    },
    offer: {
      title: 'Your best offer in Tokyo',
      address: 'X:'+ getRandom(1, 400)+ ', ' + 'y:' + getRandom(1, 400),
      price: getRandom(1, 10000),
      type: getRandomArrayElement(offerTemplate.type),
      rooms: getRandom(1, 15),
      guests: getRandom(1, 20),
      checkin: getRandomArrayElement(offerTemplate.checkin),
      checkout: getRandomArrayElement(offerTemplate.checkout),
      features: makeNewRandomSubset(offerTemplate.features),
      description: 'New spacious place, perfect for long and short stays',
      photos: makeNewRandomSubset(offerTemplate.photos),
    },
    location: {
      x: getRandomWithFloat(35.65000, 35.70000, getRandom(1, 5)),
      y: getRandomWithFloat(139.70000, 139.80000, getRandom(1, 5)),
    }, 
  }
  LISTINGS.push(listing);
}


//functions that I need

//for getting random number
function getRandom(min, max) {
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

//for getting random array element
function getRandomArrayElement(elements){
  return elements[getRandom(0, elements.length - 1)];
}

//for offer.features
function makeNewRandomSubset (array){
  let length = getRandom(1, array.length)
  let newArray = [];
  while(newArray.length < length) {
    let newIndex = getRandom(0, array.length - 1);   
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
