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

// Apply Transform Over Each Element in Array

// var map = function(arr, fn) {
//   const transformedArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     const transformedElement = fn(arr[i], i);
//     transformedArray.push(transformedElement);
//   }

//   return transformedArray;
// };
// const arr = [1, 2, 3, 4, 5];
// const mappingFunction = (element, index) => element * 2;
// const result = map(arr, mappingFunction);
// console.log(result);

//

var filter = function (arr, fn) {
  const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }

  return filteredArr;
};

console.log(filter([1, 2, 3]));
const arr = [1, 2, 3, 4, 5, 6];
const isEven = (num) => num % 2 === 0;

const filteredArr = filterArray(arr, isEven);
console.log(filteredArr); 
