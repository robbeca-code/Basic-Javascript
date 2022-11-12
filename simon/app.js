let intervalId;
let on = false;
let good = true;
let win;
let compTurn = false;
let turn = 0;
let strict = false;
let flash = 0;
let order = [];
let playOrder = [];
const powerOn = document.querySelector('#power');
const strictOn = document.querySelector('#strict');
const startButton = document.querySelector('#start');
const counter = document.querySelector('.count');
const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomLeft = document.querySelector('.bottom-left');
const bottomRight = document.querySelector('.bottom-right');


// Controls
powerOn.addEventListener('click', (e) => {
  if(e.target.checked == true) {
    on = true;
    counter.classList.add('show');
  } else {
    on = false;
    counter.classList.remove('show');
    counter.textContent = '--';
    clearColor();
  }
});

strictOn.addEventListener('click', (e) => {
  if(e.target.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});

startButton.addEventListener('click', () => {
  if(on) {
    play();
  } else {
    alert('Click the POWER switch');
  }
});


// Play Game
function play() {
  order = [];
  playOrder = [];
  win = false;
  flash = 0;
  turn = 1;
  intervalId = 0;
  compTurn = true;
  good = true;

  counter.textContent = turn;
  for(let i=0; i<20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {

  if(flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
  }

  if(compTurn) {
    clearColor();
    setTimeout(() => {
      if(order[flash] == 1) one();
      if(order[flash] == 2) two();
      if(order[flash] == 3) three();
      if(order[flash] == 4) four();
      flash++;
    }, 200);
  }
}


// Click the circle
topLeft.addEventListener('click', () => {
  if(on) {
    playOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

topRight.addEventListener('click', () => {
  if(on) {
    playOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

bottomLeft.addEventListener('click', () => {
  if(on) {
    playOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

bottomRight.addEventListener('click', () => {
  if(on) {
    playOrder.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});


function clearColor() {
  topLeft.style.backgroundColor = 'darkgreen';
  topRight.style.backgroundColor = 'darkred';
  bottomLeft.style.backgroundColor = 'goldenrod';
  bottomRight.style.backgroundColor = 'darkblue';
}

function flashColor() {
  topLeft.style.backgroundColor = 'lightgreen';
  topRight.style.backgroundColor = 'red';
  bottomLeft.style.backgroundColor = 'yellow';
  bottomRight.style.backgroundColor = 'skyblue';
}

function one() {
  topLeft.style.backgroundColor = 'lightgreen';
}

function two() {
  topRight.style.backgroundColor = 'red';
}

function three() {
  bottomLeft.style.backgroundColor = 'yellow';
}

function four() {
  bottomRight.style.backgroundColor = 'skyblue';
}

function check() {
  if(playOrder[playOrder.length - 1] !== order[playOrder.length - 1]) {
    good = false;
  }

  if(playOrder.length == 6 && good) {
    winGame();
  }

  if(good === false) {
    counter.textContent = 'NO!';
    setTimeout(() => {
      counter.textContent = turn;
      clearColor();

      if(strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);
  }

  if(turn == playOrder.length && good && !win) {
    turn++;
    playOrder = [];
    compTurn = true;
    flash = 0;
    counter.textContent = turn;
    intervalId = setInterval(gameTurn, 800);
  }
}

function winGame() {
  counter.textContent = 'WIN!';
  flashColor();
  on = false;
  win = true;
}