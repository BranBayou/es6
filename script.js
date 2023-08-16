
let keyword = document.querySelector('.keyword');
window.addEventListener('load', event => {
  let paragraph = document.createElement('p')
  let div = document.createElement('div');
  let scButton = document.createElement('button');
  scButton.classList.add("scope");

  paragraph.innerHTML = 'Let and Const';
  div.innerHTML = `let x = 1;<br>
                  &nbsp if(x === 1) {<br>
                    &nbsp &nbsp let x = 2;<br>
                    &nbsp &nbsp console.log(x); //output 2<br>
  }<br>
  console.log(x); //output 1`;
  scButton.innerHTML = 'Show scope';

  keyword.append(paragraph);
  keyword.append(div);
  keyword.append(scButton);
});
document.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('scope')) {
    let x = 1;
    if (x === 1) {
      let x = 2;
      console.log(x); //output 2
    }
    console.log(x); //output 1
  }
});

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

const scoreTeam1 = calcAverage(25,26,30);
const scoreTeam2 = calcAverage(51,54,60);

console.log(scoreTeam1, scoreTeam2);

function checkWinner(AvgScoreTeam1, avgScoreTeam2) {
  if(scoreTeam1 >= 2 * scoreTeam2) {
      console.log('team1 wins!');
  }
  else if(scoreTeam2 >= 2 * scoreTeam1) {
      console.log('team2 wins!');
  }
  else {
      console.log('No team wins!');
  }
}

checkWinner(scoreTeam1, scoreTeam2);

function calcTip(bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}  

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}
console.log(bills, tips, totals);
console.log(tip);


const bookings = [];

const createBooking = function (flightNum, numOfPassengers = 80, price = 190) {
    const booking = {
        flightNum,
        numOfPassengers,
        price
    }
    bookings.push(booking);
    console.log(booking);
}

createBooking(111);
createBooking(112, 60, 210)

//this keyword

const jonas = {
  firstName: 'Bran',
  year: 1991,
  calcAge: function() {
    console.log(this);
    console.log(2037 -this.year);
  },
  greet: function() {
    console(this);
    console.log(`Hey ${this.firstName}`);
  },
}
jonas.greet();

const gameScore = [97, 80, 60];
console.log(gameScore);

const [Bran, Gech, Tade] = gameScore;
console.log(Bran, Gech, Tade);

const restaurant = {
    name:'Clacico Etaliano',
    location: 'Liva angilo, Tavanti23, Tavanty, Italy',
    categories: ['Italian', 'Pizzarian', 'Vegeterian', 'Organic'],
    startMenu: ['focaccia', 'buruschicca', 'garlic', 'bread', 'salad'],
    mainMenu: ['pizza', 'pasta', 'resitto'],
    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}
const [first, second] = restaurant.categories;
console.log(first, second);

restaurant.order(3, 1);

const [starter, mainCourse] = restaurant.order(3, 1);
console.log(starter, mainCourse);

const nestedArray = [2, 4, [6, 8]];
console.log(nestedArray);
const [i, , j] = nestedArray;
console.log(i, j);

const [x, y,[z, q]] = nestedArray;
console.log(x, y, z, q);

//Sperad operator

//Rest operator

function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum = sum += numbers[i];
  }
  console.log('The sum is ', sum);    
}
add(2, 3);
add(3, 6, 8);
add(3, 6, 9, 12);

const arrX = [15, 24, 33, 42];
add(...arrX);
