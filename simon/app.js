const powerOn = document.querySelector('#power');
const counter = document.querySelector('.count');

powerOn.addEventListener('click', () => {
  counter.classList.toggle('show');
});