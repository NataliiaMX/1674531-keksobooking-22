// import {makeListings} from './data.js';
export {createArticle};

const articleTemplate = document.querySelector('#card').content.querySelector('.popup');

function createArticle (listing){
  const article = articleTemplate.cloneNode(true);
  article.querySelector('.popup__title').textContent = listing.offer.title;
  article.querySelector('.popup__text--address').textContent = listing.offer.address;
  article.querySelector('.popup__text--price').textContent = listing.offer.price + ' ₽/ночь';
  article.querySelector('.popup__type').textContent = mapOfferType(listing.offer.type);
  article.querySelector('.popup__text--capacity').textContent = makeCapacityText(listing.offer.rooms, listing.offer.guests);
  article.querySelector('.popup__text--time').textContent = 'Заезд после ' + listing.offer.checkin + ',' + ' выезд до ' + listing.offer.checkout;
  pushFeature(listing.offer.features, article);
  article.querySelector('.popup__description').textContent = listing.offer.description;
  pushPhotos(article, listing.offer.photos);
  article.querySelector('.popup__avatar').setAttribute('src', listing.author.avatar);
  return article;
}

function pushPhotos(article, photos){
  const photosContainer = article.querySelector('.popup__photos');
  photosContainer.querySelector('.popup__photo').remove();
  photos.forEach(function (photoURL) {
    const img = articleTemplate.querySelector('.popup__photo').cloneNode();
    img.setAttribute('src', photoURL);
    photosContainer.appendChild(img);
  });
}

function mapOfferType(type) {
  switch (type) {
    case 'flat':
      type = 'Квартира';
      break;
    case 'bungalow':
      type = 'Бунгало';
      break;
    case 'house':
      type = 'Дом';
      break;
    case 'palace':
      type = 'Дворец';
      break;
  }
  return type;
}

function makeCapacityText (rooms, guests) {
  let roomsText;
  let guestsText;
  let roomsLastDigit = rooms % 10;
  let guestsLastDigit = guests % 10;
  if (roomsLastDigit === 1) {
    roomsText = 'комната';
  }
  else if (roomsLastDigit >= 2 && roomsLastDigit < 4) {
    roomsText = 'комнаты';
  }
  else {
    roomsText = 'комнат';
  }

  if (guestsLastDigit === 1) {
    guestsText = 'гостя';
  }
  else {
    guestsText = 'гостей';
  }
  return rooms + ' ' + roomsText + ' для ' + guests + ' ' + guestsText;
}

function pushFeature (featuresArray, article) {
  const featuresContainer = article.querySelector('.popup__features');
  const featuresAll = article.querySelectorAll('.popup__feature');
  featuresAll.forEach(feature => featuresContainer.removeChild(feature));
  featuresArray.forEach(function (value) {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature');
    feature.classList.add('popup__feature--' + value);
    featuresContainer.appendChild(feature);
  })
}


