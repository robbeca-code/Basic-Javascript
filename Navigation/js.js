const links = document.querySelector('.links');
const menu = document.querySelector('.menu');

menu.addEventListener('click', function(){
	// 첫 번째 방법
	if (links.classList.contains('show-links')) {
		links.classList.remove('show-links');
	}
	else {
		links.classList.add('show-links');
	}

	//두 번째 방법
	// links.classList.toggle('show-links');
});