// Default parameter

const bookings = [];
const createBooking = function(flightNum, numPassengers = 15, price = 1000) {
  //Es5
  // numPassengers = numPassengers || 15;
  // price = price || 1000;
  const booking = {
    flightNum,
    numPassengers,
    price
  };
  console.log(booking);
  bookings.push(booking);
} 
createBooking('B102', 12, 2350);
createBooking('B103');

//Passing arguments into a functions

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999',
  passenger.name = 'Mr.' + passenger.name;

  if(passenger.passport === 24739479284) {
    console.log('Checked in successfully');
  } else {
    console.log('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
}
newPassport(jonas);
checkIn(flight, jonas);

//Higher order function
//Function accepting call back functions
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return[first.toUpperCase(), ...others].join(' ');
};
const transformer = function(str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//Functions returing functions

const greet = function(greeting) {
  return function(name){
    console.log(`${greeting} ${name}`);
  }
}
greet('Hello')('Bran');

const greetArrowFunction = greeting => name => console.log(`${greeting} ${name}`);
greet('Hi')('Bran');

// The call and apply method

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
    this.bookings.push({flight: `${this.iataCode} ${flightNum}`, name});
  }
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah Willians');
console.log(eurowings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SX',
  bookings: []
};
book.call(swiss, 5833, 'Mary Cooper');
console.log(swiss);

//Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSX = book.bind(swiss);

bookEW(237, 'Steven Williams');
console.log(eurowings);

// With Event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

// document.querySelector('.buy').addEventListener('click', lufthansa.planes);