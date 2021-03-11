/* eslint-disable no-undef */

import {makePageActive} from './inactive.js';
import {createArticle} from './popup.js';
import {fetchListings} from './fetch.js';
import {showAlert} from './util.js';

const map = L.map('map-canvas')
  .setView({
    lat: 35.6762,
    lng: 139.6503,
  }, 10);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

map.on('load', makePageActive());

const mainPinMarker = L.marker(
  {
    lat: 35.6762,
    lng: 139.6503,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const addressField = document.querySelector('#address');
const latLngStart = mainPinMarker.getLatLng();
addressField.setAttribute('value', latLngStart.lat.toFixed(5) + ', ' + latLngStart.lng.toFixed(5));
addressField.setAttribute('readonly', 'readonly');

mainPinMarker.on('move', (evt) => {
  const latLng = evt.target.getLatLng();
  addressField.setAttribute('value', latLng.lat.toFixed(5) + ', ' + latLng.lng.toFixed(5));
})

//добавление на карту меток объявлений

fetchListings()
  .then(makePins)
  .catch(() => showAlert('Извините, данные не загрузились. Повторите запрос позже'))

function makePins(listings) {
  listings.forEach((listing) => {
    const {location:{lat, lng}} = listing;

    const article = createArticle(listing);

    const articlePinIcon = L.icon ({
      iconUrl: '../img/pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });
      
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        articlePinIcon,
      },
    );
    marker.addTo(map).
      bindPopup(article);
  });
}

//reset main pin coordinates when submitting and reseting

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () => placePinBack());

const submitButton = document.querySelector('.ad-form__submit');
submitButton.addEventListener('click', () => placePinBack());

function placePinBack () {
  mainPinMarker.setLatLng({lat: 35.67620, lng: 139.65030});
}