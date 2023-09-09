function greeting(msg) {
  return function who(name) {
    console.log(`${msg}, ${name}`);
  }
}
const hello = greeting("Hello");
const howdy = greeting("Howdy");

hello("Kyle");
hello("Sarah");
howdy("Grant");

function counter(step = 1) {
  let count = 0;
  return function increaseCount() {
    count = count + step;
    return count;
  }
}

const incBy1 = counter(1);
const incBy3 = counter(3);

console.log(incBy1());
console.log(incBy1());
console.log(incBy1());

console.log(incBy3());
console.log(incBy3());
console.log(incBy3());