
//for getting random number
function getRandom(min, max) {
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

//for getting random array element
function getRandomArrayElement(elements) {
  return elements[getRandom(0, elements.length - 1)];
}

//for offer.features etc
function makeNewRandomSubset(array) {
  let length = getRandom(1, array.length)
  let newArray = [];
  while (newArray.length < length) {
    let newIndex = getRandom(0, array.length - 1);
    let currentElement = array[newIndex];
    if (!newArray.includes(currentElement)) {
      newArray.push(currentElement);
    }
  }
  return newArray;
}

//for getting random number with floating point
function getRandomWithFloat(min, max, point) {
  if (min < max) {
    let randomNumber = (Math.random() * (max - min + 1)) + min;
    return randomNumber.toFixed(point);
  }
}

//for showing and removing alert message success/error

const main = document.querySelector('main');

function showSuccessAlert () {
  const successAlertTemplate = document.querySelector('#success').content.querySelector('.success');
  const successAlert = successAlertTemplate.cloneNode(true);
  main.appendChild(successAlert);
  removeAlert(successAlert);
}

function showErrorAlert() {
  const errorAlertTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorAlert = errorAlertTemplate.cloneNode(true);
  main.appendchild(errorAlert);
  removeAlert(errorAlert);
}

function removeAlert(alert) {
  main.addEventListener ('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      main.removeChild(alert); 
    }
  })

  main.addEventListener('click', () => {
    main.removeChild(alert);
  })
}

//for showing alert message for popups
function showAlert (message) {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'blue';
  alertContainer.style.color = 'white';
  
  alertContainer.textContent = message;
    
  document.body.append(alertContainer);
  
  setTimeout(() => {
    alertContainer.remove();
  }, 6000);
}


export {getRandom, getRandomArrayElement, makeNewRandomSubset, getRandomWithFloat, showAlert, showSuccessAlert, showErrorAlert};