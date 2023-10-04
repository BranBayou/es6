// Create HelloWorld Function

// var createHelloWorld = function() {
//   return function() {
//       return "Hello World";
//   }
// };
// console.log(createHelloWorld()());

// Counter

// var createCounter = function(n) {
//   return function() {
//       return n++;
//   };
// };
// console.log(createCounter(5)());

// Tobe or Not To Be

// Counter Two

var createCounter = function (init) {
  let currentValue = init;

  return {
    increment: function () {
      currentValue++;
      return currentValue;
    },
    decrement: function () {
      currentValue--;
      return currentValue;
    },
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
