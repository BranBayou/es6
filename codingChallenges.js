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