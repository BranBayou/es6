// Create HelloWorld Function

// var createHelloWorld = function() {
//   return function() {
//       return "Hello World";
//   }
// };
// console.log(createHelloWorld()());

// Counter

// var expect = function(val) {
//   return {
//   toBe: function (otherVal) {
//     if (val === otherVal) {
//       return true;
//     } else {
//       throw new Error("Not Equal");
//     }
//   },
//   notToBe: function (otherVal) {
//     if (val !== otherVal) {
//       return true;
//     } else {
//       throw new Error("Equal");
//     }
//   },
// };
// };


//  console.log(expect(5).toBe(5));
//  console.log(expect(5).notToBe(5)); 

// var createCounter = function(n) {
//   return function() {
//       return n++;
//   };
// };
// console.log(createCounter(5)());

// Tobe or Not To Be

// Counter Two

// var createCounter = function (init) {
//   let currentValue = init;

//   return {
//     increment() {
//       currentValue++;
//       return currentValue;
//     },
//     decrement() {
//       currentValue--;
//       return currentValue;
//     },
//     reset() {
//       currentValue = init;
//       return currentValue;
//     },
//   };
// };

// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());
