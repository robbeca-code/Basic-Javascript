let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_button = document.getElementById('r');
const paper_button = document.getElementById('p');
const scissors_button = document.getElementById('s');


function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * choices.length);

  return choices[randomNumber];
}

function getItem(item) {
  if(item === 'r') return 'Rock';
  else if(item === 'p') return 'Paper';
  return 'Scissors';
}

function win(userChoice, compChoice) {
  ++userScore;
  userScore_span.textContent = userScore;

  result_p.innerHTML = `${getItem(userChoice)}(user) covers ${getItem(compChoice)}(comp). You win!`;

  const userChoice_button = document.getElementById(userChoice);
  userChoice_button.classList.add('green-glow');
  setTimeout(() => userChoice_button.classList.remove('green-glow'), 400);
}

function lose(userChoice, compChoice) {
  ++computerScore;
  compScore_span.textContent = computerScore;

  result_p.innerHTML = `${getItem(userChoice)}(user) lose to ${getItem(compChoice)}(comp). You lose...`;

  const userChoice_button = document.getElementById(userChoice);
  userChoice_button.classList.add('red-glow');
  setTimeout(() => userChoice_button.classList.remove('red-glow'), 400);
}

function draw(userChoice, compChoice) {
  result_p.innerHTML = `${getItem(userChoice)}(user) is equal to ${getItem(compChoice)}(comp). It's a draw.`;

  const userChoice_button = document.getElementById(userChoice);
  userChoice_button.classList.add('gray-glow');
  setTimeout(() => userChoice_button.classList.remove('gray-glow'), 400);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
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