let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_button = document.getElementById('rock');
const paper_button = document.getElementById('paper');
const scissors_button = document.getElementById('scissors');

function upUserScore() {
  ++userScore;
  userScore_span.textContent = userScore;
}

function upComputerScore() {
  ++computerScore;
  compScore_span.textContent = computerScore;
}

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * choices.length);

  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'rs':
      result_div.innerHTML = '<p>Rock(user) covers Scissors(comp). You win!</p>';
      upUserScore();
      break;
    case 'pr':
      result_div.innerHTML = '<p>Paper(user) covers Rock(comp). You win!</p>';
      upUserScore();
      break;
    case 'sp':
      result_div.innerHTML = '<p>Scissors(user) covers Paper(comp). You win!</p>';
      upUserScore();
      break;
    case 'rp':
      result_div.innerHTML = '<p>Rock(user) loses to Paper(comp). You lose...</p>';
      upComputerScore();
      break;
    case 'ps':
      result_div.innerHTML = '<p>Paper(user) loses to Scissors(comp). You lose...</p>';
      upComputerScore();
      break;
    case 'sr':
      result_div.innerHTML = '<p>Scissors(user) loses to Rock(comp). You lose...</p>';
      upComputerScore();
      break;
    case 'rr':
      result_div.innerHTML = "<p>Rock(user) is equal to Rock(comp). It's a draw.</p>";
      break;
    case 'pp':
      result_div.innerHTML = "<p>Paper(user) is equal to Paper(comp). It's a draw.</p>";
      break;
    case 'ss':
      result_div.innerHTML = "<p>Scissors(user) is equal to Scissors(comp). It's a draw.</p>";
      break;
  }
}

function main() {
  rock_button.addEventListener('click', function(){
    game("r");
  });

  paper_button.addEventListener('click', function(){
    game("p");
  });

  scissors_button.addEventListener('click', function(){
    game("s");
  });
}

main();