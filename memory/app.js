cardArray = [
  {
    name: 'burger',
    img: './assets/burger.png'
  },
  {
    name: 'cheese',
    img: './assets/cheese.png'
  },
  {
    name: 'donut',
    img: './assets/donut.png'
  },
  {
    name: 'fried-egg',
    img: './assets/fried-egg.png'
  },
  {
    name: 'hot-dog',
    img: './assets/hot-dog.png'
  },
  {
    name: 'ice-cream',
    img: './assets/ice-cream.png'
  },
  {
    name: 'burger',
    img: './assets/burger.png'
  },
  {
    name: 'cheese',
    img: './assets/cheese.png'
  },
  {
    name: 'donut',
    img: './assets/donut.png'
  },
  {
    name: 'fried-egg',
    img: './assets/fried-egg.png'
  },
  {
    name: 'hot-dog',
    img: './assets/hot-dog.png'
  },
  {
    name: 'ice-cream',
    img: './assets/ice-cream.png'
  }
];

const grid = document.querySelector('.card-container');
const scoreContainer = document.querySelector('.score-container');
const score = document.querySelector('.score');
const restart = document.querySelector('.restart');
const printReult = document.createElement('div');
let card;
let cardsChosenName = [];
let cardsChosenId = [];
let result = 0;
let checkCard1 = null;
let checkCard2 = null;

function createCards() {
  for(let i=0; i<cardArray.length; i++) {
    card = document.createElement('img');
    card.setAttribute('src', './assets/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}

function flipCard() {
  const id = this.getAttribute('data-id');
  this.setAttribute('src', cardArray[id].img);
  cardsChosenName.push(cardArray[id].name);
  cardsChosenId.push(id);
  if(cardsChosenName.length === 2) {
    setTimeout(checkCard, 500);
  }
}

function checkCard() {
  let cards = document.querySelectorAll('img');

  checkCard1 = cardsChosenId[0];
  checkCard2 = cardsChosenId[1];

  if(cardsChosenName[0] === cardsChosenName[1]) {
    alert('Same Cards');
    cards[checkCard1].setAttribute('src', './assets/white.png');
    cards[checkCard2].setAttribute('src', './assets/white.png');
    result++;
    score.textContent = result;
  } else {
    cards[checkCard1].setAttribute('src', './assets/blank.png');
    cards[checkCard2].setAttribute('src', './assets/blank.png');
  }

  if(result === 6) {
    printReult.classList.add('result');
    restart.classList.add('show');
    printReult.textContent = 'You Win~~~!!!';
    scoreContainer.appendChild(printReult);
  }

  cardsChosenId = [];
  cardsChosenName = [];
}


// Restart
restart.addEventListener('click', () => {
  // Reset
  result = 0;
  score.textContent = result;
  printReult.classList.remove('result');
  restart.classList.remove('show');
  scoreContainer.removeChild(printReult);

  // Modify Cards
  modifyCards();

  checkCard1 = null;
  checkCard2 = null;
});

function modifyCards() {
  let cards = document.querySelectorAll('img');
  for(let i=0; i<cards.length; i++) {
    cards[i].setAttribute('src', './assets/blank.png');
    grid.appendChild(cards[i]);
  }
}

createCards();