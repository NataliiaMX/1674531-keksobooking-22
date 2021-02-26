/* eslint-disable no-undef */

import {makePageActive} from './inactive.js';
import {makeListings} from './data.js';
import {createArticle} from './popup.js';

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
addressField.setAttribute('value', latLngStart.lat.toFixed(5) + ', ' + latLngStart.lng.toFixed(5))

mainPinMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  addressField.setAttribute('value', latLng.lat.toFixed(5) + ', ' + latLng.lng.toFixed(5));
})

//добавление на карту меток объявлений
const listings = makeListings();

listings.forEach((listing) => {
  const {location:{x, y}} = listing;
  
  const article = createArticle(listing);

  const articlePinIcon = L.icon ({
    iconUrl: '../img/pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
      
  const marker = L.marker(
    {
      lat: x,
      lng: y,
    },
    {
      articlePinIcon,
    },
  );
  marker.addTo(map).
    bindPopup(article);

});
