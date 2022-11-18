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
  }
];

const grid = document.querySelector('.card-container');

function createCards() {
  for(let i=0; i<cardArray.length*2; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', './assets/blank.png');
    card.setAttribute('data-id', i);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}

function flipCard() {
  const id = this.getAttribute('data-id');
  console.log(id);
}

createCards();