const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

var btn = document.getElementById('btn');
var color = document.getElementById('color');

btn.addEventListener('click', function(){
	let num = getRandomNumber();
	document.body.style.backgroundColor = colors[num];
	color.textContent = colors[num];
});

function getRandomNumber() {
	return Math.floor(Math.random() * 4);
}