const button = document.querySelector('.button');

function trackUser() {
  function user() {
    console.log('Being tracked');
  }
  console.log('Tracked one');
  user();
}

button.addEventListener('click', trackUser);

// synchronous

// const p = document.querySelector('.synch');
// p.textContent = 'My name Bran!';
// alert('Text set');
// p.style.color = 'red';

// asynchronous

//  const p = document.querySelector('.synch');
//  setTimeout(() => {
//   p.textContent = 'My name Bran!';
//  }, 5000);
 
//  p.style.color = 'red';

