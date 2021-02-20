import {getRandom, getRandomArrayElement, makeNewRandomSubset, getRandomWithFloat} from './util.js';


//for making array of objects

//templates
const OFFER_TEMPLATE = {
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  type: ['Дворец', 'Квартира', 'Бунгало', 'Дом'],
  checkin: ['12:00', '13:00', '14:00'],
  checkout: ['12:00', '13:00', '14:00'],
  photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
};


function makeListings() {
  const listings = [];
  for (let i = 0; i < 10; i++) {
    const listing = {
      author: {
        avatar: 'img/avatars/user' + 0 + getRandom(1, 8) + '.png',
      },
      offer: {
        title: 'Your best offer in Tokyo',
        address: 'X:' + getRandom(1, 400) + ', ' + 'Y:' + getRandom(1, 400),
        price: getRandom(1, 10000),
        type: getRandomArrayElement(OFFER_TEMPLATE.type),
        rooms: getRandom(2, 4),
        guests: getRandom(2, 20),
        checkin: getRandomArrayElement(OFFER_TEMPLATE.checkin),
        checkout: getRandomArrayElement(OFFER_TEMPLATE.checkout),
        features: makeNewRandomSubset(OFFER_TEMPLATE.features),
        description: 'New spacious place, perfect for long and short stays',
        photos: makeNewRandomSubset(OFFER_TEMPLATE.photos),
      },
      location: {
        x: getRandomWithFloat(35.65000, 35.70000, getRandom(1, 5)),
        y: getRandomWithFloat(139.70000, 139.80000, getRandom(1, 5)),
      },

    }; 
    listings.push(listing);
  }
  return listings;
}


export {makeListings};