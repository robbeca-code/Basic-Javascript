document.addEventListener('DOMContentLoaded', () => {
  let barsCount = 5;
  let bars = [];
  let playerLeftSpace = 0;
  let startPosition = 0;
  let playerBottomSpace = startPosition;
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

  function start() {
    createPlayer();
    createBars();
  }

  start();
});