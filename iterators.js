const it = ['a', 'b', 'c', 'd', 'e'];
for(let val of it) {
  console.log(`Iterator value ${val}`);
}

const newIt = [...it, 'f', 'g', 'h', 'i'];

for(let val of newIt) {
  console.log(`New value ${val}`);
}

for(let [index, value] of newIt.entries()) {
  console.log(`[${index}] ${value}`);
}

newIt.forEach(function(value) {
  console.log(`Value of it ${value}`);
});

const itObj = {
  id: 12,
  name: 'foo',
  sex: 'm'
}

const doSomething = function() {
  console.log('done this ');
}

const greeting = 'Hello world';
console.log(...greeting);
console.log(greeting);

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

const buttonNames = new Map();
buttonNames.set(btn1, 'button #1');
buttonNames.set(btn2, 'button #2');

for(let [btn, btnName] of buttonNames) {
  btn.addEventListener('click', function onClick(){
    console.log(`${btnName} Clicked`);
  });
}