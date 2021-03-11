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
