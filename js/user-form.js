import {showSuccessAlert} from './util.js';
import {showErrorAlert} from './util.js';

const userForm = document.querySelector('.ad-form');

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        showSuccessAlert();
        clearForm();
      } else {
        showErrorAlert();
      }
    })
})

//sucsessful form complation or  resetting

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () =>
  clearForm(resetButton))

function clearForm () {
  userForm.reset();
}

//changing minimun price for listing type

const type = document.querySelector('#type');
const price = document.querySelector('#price');

type.addEventListener ('change', (evt) => {
  if (evt.target.selectedOptions[0].textContent === 'Бунгало') {
    price.setAttribute('min', 0);
  }
  else if (evt.target.selectedOptions[0].textContent === 'Квартира') {
    price.setAttribute('min', 1000);
  }
  else if (evt.target.selectedOptions[0].textContent === 'Дом') {
    price.setAttribute('min', 5000);
  }
  else if (evt.target.selectedOptions[0].textContent === 'Дворец') {
    price.setAttribute('min', 10000);
  }
})

//sync timein and timeout

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeChange(timeIn, timeOut);
timeChange(timeOut, timeIn);


function timeChange (timeOne, timeTwo) {
  timeOne.addEventListener('change', (evt) => {
    if (evt.target.selectedOptions[0].value === '12:00') {
      timeTwo.options[0].setAttribute('selected', 'selected');
    }
    else if (evt.target.selectedOptions[0].value === '13:00') {
      timeTwo.options[1].setAttribute('selected', 'selected');
    }
    else if (evt.target.selectedOptions[0].value === '14:00') {
      timeTwo.options[2].setAttribute('selected', 'selected');
    }
  })
}
