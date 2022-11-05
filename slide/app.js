const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

slides.forEach(function(slide, index){
  slide.style.left = `${index * 100}%`;

  let counter = 0;

  prevBtn.addEventListener('click', function(){
    counter--;
    carousel();
  });

  nextBtn.addEventListener('click', function(){
    counter++;
    carousel();
  });

  function carousel(){
    if(counter < 0) {
      counter = slides.length - 1;
    } else if (counter === slides.length) {
      counter = 0;
    }

    slides.forEach(function(slide){
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
});