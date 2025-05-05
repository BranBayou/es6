//JavaScript String matchAll()

const text = 'this is a test string and this is another test string';
const iterator = text.matchAll(/string/g);

const pTag = document.querySelector('.matchAll');
const button = document.querySelector('.show-match');

const pTag2 = document.querySelector('.nullish');
const checkNulishBtn = document.querySelector('.show-nullish');

button.addEventListener('click', matchAll);
checkNulishBtn.addEventListener('click', showNullish);

function matchAll () {
    console.log('Triggered matchAll()');
  pTag.innerHTML = Array.from(iterator);
}

//JavaScript Nullish Coalescing Operator (??)
let name = null;
let text1 = "missing";
let result = name ?? text1;

function showNullish() {
    console.log('Triggered Nullish Coalescing Operator (??)');
    pTag2.innerHTML = result;
}
