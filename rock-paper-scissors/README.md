# Rock-Paper-Scissors Game

### * JS
1. 변수명이나 조건문 등을 효율적으로 사용하였습니다.
```js
/* 1. 무슨 역할을 하고, 어떤 태그를 가져왔는지 변수명으로 명확하게 보여줍니다. */
let userScore = 0;
let computerScore = 0;

// 변수명_태그명
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_button = document.getElementById('r');
const paper_button = document.getElementById('p');
const scissors_button = document.getElementById('s');


/* 2. switch문으로 if문의 중첩 조건문의 복잡함을 해결합니다. */
// 가위바위보 중 어느 것을 눌렀는지 if문으로 하면 가독성이 좋지 않다고 느껴 switch문을 사용하였습니다.

// User가 주먹을 냈을 때 (if문)
if(userChoice === 'r') {
  if(computerChoice === 'r') {
    console.log('It's a draw.');
  } else if(computerChoice === 'p') {
    console.log('You lose...');
  } else {
    console.log('You win!');
  }
}

// User가 주먹을 냈을 때 (switch문)
switch(userChoice + computerChoice) {
  case 'rr': console.log('It's a draw.'); break;
  case 'rp': console.log('You lose...'); break;
  case 'rs': console.log('You win!); break;
}
```
<br/>

2. User가 가위바위보를 고르는 함수와 Computer가 가위바위보를 고르는 함수를 만듭니다.
```js
/* 1. User가 가위바위보를 고르는 함수 */
// 코드에서는 main함수로 사용하였습니다.
function getUserChoice() {
  rock_button.addEventListener('click', function(){
    return 'r';
  });
  
  paper_button.addEventListener('click', function(){
    return 'p';
  });

  scissors_button.addEventListener('click', function(){
    return 's';
  });
}

/* 2. Computer가 가위바위보를 고르는 함수 */
function getComputerChoice() {
  // 무작위로 선택되어야하기 때문에 Math.random()과 소수점은 버려주는 Math.floor() 함수를 사용했습니다.
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * choices.length);

  return choices[randomNumber];
}
```
<br/>

3. 승자가 누군지, 누구의 점수가 올라가는지를 정의한 함수를 만듭니다. (지거나 비기는 다른 함수들도 동일한 구조라서 생략합니다.)
```js
/* User가 승리했을 때 */
function win(userChoice, compChoice) {
  ++userScore;
  userScore_span.textContent = userScore;

  result_p.innerHTML = `${getItem(userChoice)}(user) covers ${getItem(compChoice)}(comp). You win!`;

  // 사용자가 이겼을 때 선택한 요소 테두리에 효과를 주는 코드입니다.
  const userChoice_button = document.getElementById(userChoice);
  userChoice_button.classList.add('green-glow');
  
  //setTimeOut(이벤트, 이벤트가 작동할 시간); 0.4초 후에 이벤트가 작동하는 코드입니다.
  setTimeout(() => userChoice_button.classList.remove('green-glow'), 400);
}
```
