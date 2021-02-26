const adForm = document.querySelector('.ad-form ');
const formElements = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
makePageInactive();

function makePageInactive () {
  adForm.classList.add('ad-form--disabled');
  formElements.forEach(function (value){
    value.setAttribute('disabled', 'disabled');
  })
  mapFilters.classList.add('map__filters--disabled');
  mapFilters.setAttribute('disabled', 'disabled');
}

function makePageActive () {
  adForm.classList.remove('ad-form--disabled');
  formElements.forEach(function (value){
    value.removeAttribute('disabled');
  })
  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.removeAttribute('disabled');
}

export {makePageActive};