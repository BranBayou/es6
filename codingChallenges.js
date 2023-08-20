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
console.log(tips);


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
    console.log(this);
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

// Set

const orderSet = new Set(['Pizza', 'Pasta', 'Ressoto', 'Pizza', 'Pasta']);
console.log(orderSet);
console.log(orderSet.add('bread'));
console.log(orderSet.has('bread'));
console.log(orderSet.has('Chess'));

for(const order of orderSet)
    console.log(order);

const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef'];
const stafUnique = new Set(staff);
console.log(stafUnique);

const stafUniqueArray = [...new Set(staff)];
console.log(stafUniqueArray);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussis Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ]
  ],
  score:'4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5
  },
};
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Tiango', 'Coutinho', 'Periscic'];
console.log(players1Final);

const {odds: {team1, x:draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function(...players) {
  console.log(`${players.length} goals were scored`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win!');

//Coding Challenge Two

for(const [i, player] of game.scored.entries()) 
  console.log(`Goal ${i+1}: ${player}`);

let avg = 0;
for(const odd of Object.values(game.odds))
avg += odd;
avg /= Object.values(game.odds).length
console.log(avg);

for(const [team, odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//Coding Challenge Three

const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'Goal'],
  [80, 'Goal'],
  [92, 'Yellow card']
]);
console.log(gameEvents.values());
const events = new Set(gameEvents.values());
console.log(events);
const eventsArray = [...new Set(gameEvents.values())];
console.log(eventsArray);

gameEvents.delete(64);

console.log(`An event happened, on average, dvery ${90/gameEvents.size} minutes`);

for(const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND'; 
  console.log(`[${half}HALF] ${min} ${event}`);
}

