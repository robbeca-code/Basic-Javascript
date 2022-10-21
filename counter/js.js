let count = 0;
var btns = document.querySelectorAll('.btn');
var value = document.querySelector('#value');

btns.forEach(function(btn){
	console.log(btn);
	btn.addEventListener('click', function(e){
		const className = e.currentTarget.classList;
		console.log(className);
		if(className.contains('decrease')){
			count--;
		} else if(className.contains('increase')){
			count++;
		} else {
			count = 0;
		}

		if(count < 0) {
			value.style.color = 'red';
		} else if(count > 0) {
			value.style.color = 'green'
		} else {
			value.style.color = 'black';
		}

		value.textContent = count;
	});
});