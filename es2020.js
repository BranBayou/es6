//JavaScript String matchAll()
const text = 'this is a test string and this is another test string';
const iterator = text.matchAll(/string/g);

const pTag = document.querySelector('.matchAll');
const button = document.querySelector('.show-match');

const pTag2 = document.querySelector('.nullish');
const checkNulishBtn = document.querySelector('.show-nullish');

const pTag3 = document.querySelector('.optional-chaining');
const checkOptionalChainingBtn = document.querySelector('.show-optional-chaining');

button.addEventListener('click', matchAll);
checkNulishBtn.addEventListener('click', showNullish);
checkOptionalChainingBtn.addEventListener('click', checkOptionalChaining);

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

// JavaScript Optional Chaining Operator (?.)
const user = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    }
};

function checkOptionalChaining() {
    console.log('Triggered Optional Chaining Operator (?.)');
    pTag3.innerHTML = user?.address?.postal ?? 'Street not found';
}
// JavaScript The &&= Operator
const ampersand = document.querySelector('.ampersand');
// function updateConfig(config) {
//     config.timeout &&= 5000;
//     return config;
// }
  
// const config1 = { timeout: 1000 };
// updateConfig(config1);
// console.log(config1.timeout);

// const config2 = { };
// updateConfig(config2);
// console.log(config2.timeout);
let x = 100;
x &&= 500;
ampersand.innerHTML = x;

// JavaScript The ||= Operator
const or = document.querySelector('.or');
let y = undefined;
y ||= 5;
or.innerHTML = y;



