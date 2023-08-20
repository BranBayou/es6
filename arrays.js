// Slicen (does not mutate the original)

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1 ,-2));
console.log(arr.slice());

// Splice (mutate the original)

console.log(arr.splice(2));
console.log(arr.splice(1, 2));

// Reverse (mutate the original)

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Concat (does not mutate the original)

const letters = arr.concat(arr2);
console.log(letters);
// same as 
console.log([...arr, ...arr2]);

// Join

console.log(letters.join('-'));

// Looping arrays

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const [i, mov] of movements.entries()) {
  if(mov > 0){
    console.log(`Movement ${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(mov)}`);
  }
}
console.log('---forEach---');
movements.forEach(function (mov, i, arr) {
  if(mov > 0){
    console.log(`Movement ${i + 1}: you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(mov)}`);
  }
});

// forEach in map

const currencies = new Map([
  ['USD', 'United States Dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
]);
currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}` );
})

// forEach in Set

const currenciesUnique = new Set([
  'USD', 'EUR', 'EUR', 'GBP'
]);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`);
});