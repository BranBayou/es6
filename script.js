
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