export {fetchListings};


function fetchListings () {   
  return  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
}
