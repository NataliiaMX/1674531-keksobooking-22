import {makeListings} from './data.js';

const articleTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const listings = makeListings();

const articles = [];

listings.forEach(createArticle);

function createArticle(listing){
  const article = articleTemplate.cloneNode(true);
  article.querySelector('.popup__title').textContent = listing.offer.title;
  article.querySelector('.popup__text--address').textContent = listing.offer.address;
  article.querySelector('.popup__text--price').textContent = listing.offer.price + ' ₽/ночь';
  article.querySelector('.popup__type').textContent = listing.offer.type;
  article.querySelector('.popup__text--capacity').textContent = listing.offer.rooms + ' комнаты для ' + listing.offer.guests + ' гостей.';
  article.querySelector('.popup__text--time').textContent = 'Заезд после ' + listing.offer.checkin + ',' + ' выезд до ' + listing.offer.checkout;
  article.querySelector('.popup__features').textContent = listing.offer.features;
  article.querySelector('.popup__features').textContent = listing.offer.description;
  pushPhotos(article, listing.offer.photos);
  article.querySelector('.popup__avatar').setAttribute('src', listing.author.avatar);
  articles.push(article);
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

mapCanvas.appendChild(articles[0]);