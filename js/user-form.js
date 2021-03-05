import {showSuccessAlert} from './util.js';

const userForm = document.querySelector('.ad-form');

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  
  fetch ('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  },
  ).then(() => showSuccessAlert('Форма успешно отправлена'))
    .then(clearForm)
})

//sucsessful form complation or  resetting

const resetButton = document.querySelector('.ad-form__reset');
resetButton.addEventListener('click', () =>
  clearForm(resetButton))

function clearForm () {
  userForm.reset();
  return false;
}
