document.addEventListener('DOMContentLoaded', () => {
  let barsCount = 5;
  let bars = [];
  let playerLeftSpace = 0;
  let startPosition = 300;
  let isGameOver = false;
  let score = 0;
  let playerBottomSpace = startPosition;
  let isJumping = true;
  let upTimerId;
  let downTimerId;
  let isGoingRight = false;
  let isGoingLeft = false;
  let leftTimerId;
  let rightTimerId;
  const container = document.querySelector('.container');
  const player = document.createElement('div');

  // Create player
  function createPlayer() {
    player.classList.add('player');
    container.appendChild(player);
  
    player.style.left = playerLeftSpace + 'px';
    player.style.bottom = playerBottomSpace + 'px';
  }
  


  //Create bars
  const bar = document.createElement('div');

  class Bar {
    constructor(newBarBottom) {
      this.left = Math.random() * 270;
      this.bottom = newBarBottom;
      this.visual = document.createElement('div');

      const visual = this.visual;
      visual.classList.add('bar');
      visual.style.left = this.left + 'px';
      visual.style.bottom = this.bottom + 'px';
      container.appendChild(visual);
    }
  }

  function createBars() {
    for(let i=0; i<barsCount; i++) {
      let barGap = 550 / barsCount;
      let newBarBottom = 100 + i * barGap;
      let newBar = new Bar(newBarBottom);
      bars.push(newBar);
    }
  }

  function moveBars() {
    if(playerBottomSpace>200) {
      bars.forEach(bar => {
        
        bar.bottom -= 4;
        let visual = bar.visual;
        visual.style.bottom = bar.bottom + 'px';
        console.log(bar);

        if(bar.bottom < 10) {
          let firstBar = bars[0].visual;
          firstBar.classList.remove('bar');
          bars.shift();
          console.log(bars);
          score++;
          let newBar = new Bar(600);
          bars.push(newBar);
        }
      });
    }
  }

  function fall() {
    isJumping = false;
    clearInterval(upTimerId);
    downTimerId = setInterval(() => {
      playerBottomSpace -= 5;
      player.style.bottom = playerBottomSpace + 'px';
      if(playerBottomSpace <= 0) {
        gameOver();
      }

      bars.forEach(bar => {
        if(
          (playerBottomSpace >= bar.bottom) &&
          (playerBottomSpace <= (bar.bottom + 10)) &&
          ((playerLeftSpace + 50) >= bar.left) &&
          (playerLeftSpace <= (bar.left + 80)) &&
          !isJumping
        ) {
          console.log('tick');
          startPosition = playerBottomSpace;
          jump();
          console.log('start', startPosition);
          isJumping = true;
        }
      });
    }, 20);
  }

  function jump() {
    clearInterval(downTimerId);
    isJumping = true;
    upTimerId = setInterval(() => {
      console.log(startPosition);
      console.log('1', playerBottomSpace);
      playerBottomSpace += 20;
      player.style.bottom = playerBottomSpace + 'px';
      console.log('2', playerBottomSpace);
      console.log('s', startPosition);
      if(playerBottomSpace > (startPosition + 200)) {
        fall();
        isJumping = false;
      }
    }, 30);
  }

  function moveLeft() {
    if(isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(() => {
      if(playerLeftSpace >= 0) {
        console.log('going left');
        playerLeftSpace -= 5;
        player.style.left = playerLeftSpace + 'px';
      } else moveRight();
    }, 20);
  }

  function moveRight() {
    if(isGoingLeft) {
      clearInterval(leftTimerId);
      isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval(() => {
      if(playerLeftSpace <= 313) {
        console.log('going right');
        playerLeftSpace += 5;
        player.style.left = playerLeftSpace + 'px';
      } else moveLeft();
    }, 20);
  }

  function moveStraight() {
    isGoingLeft = false;
    isGoingRight = false;
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  function control(e) {
    player.style.bottom = playerBottomSpace + 'px';
    if(e.key === 'ArrowLeft') {
      moveLeft();
    } else if(e.key === 'ArrowRight') {
      moveRight();
    } else if(e.key === 'ArrowUp') {
      moveStraight();
    }
  }

  function gameOver() {
    isGameOver = true;
    while(container.firstChild) {
      console.log('remove');
      container.removeChild(container.firstChild);
    }
    container.innerHTML = 'Score: '+score;
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  function start() {
    if(!isGameOver) {
      createPlayer();
      createBars();
      setInterval(moveBars, 30);
      jump(startPosition);
      document.addEventListener('keyup', control);
    }
  }

  start();
});