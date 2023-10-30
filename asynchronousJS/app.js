const button = document.querySelector('.button');

function trackUser() {
  function user() {
    console.log('Being tracked');
  }
  console.log('Tracked one');
  user();
}

button.addEventListener('click', trackUser);