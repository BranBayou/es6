//JavaScript String matchAll()

const text = 'this is a test string and this is another test string';
const iterator = text.matchAll(/string/g);

const pTag = document.querySelector('.matchAll');
const button = document.querySelector('.show-match');

button.addEventListener('click', matchAll);

function matchAll () {
    console.log('Triggered matchAll()');
  pTag.innerHTML = Array.from(iterator);
}
