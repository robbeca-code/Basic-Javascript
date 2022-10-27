const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
	const btn = question.querySelector('.question-btn');
	btn.addEventListener('click', function(){
		question.classList.toggle('show-content');

		questions.forEach(function (item){
			if(item !== question){
				item.classList.remove('show-content');
			}
		});
	});
});