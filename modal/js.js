const toggleBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');

toggleBtn.addEventListener('click', function(){
	modal.classList.toggle('open-modal');
});

closeBtn.addEventListener('click', function(){
	modal.classList.remove('open-modal');
});