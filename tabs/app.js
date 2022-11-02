const tabs = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

/* about 중 눌렀을 때 data-id와 똑같은거에 active 넣기 */
about.addEventListener('click', function(e){
  const id = e.target.dataset.id;
  tabs.forEach(function(tab){
    tab.classList.remove('active');
    e.target.classList.add('active');
  });

  articles.forEach(function(article){
    article.classList.remove('active');
    const element = document.getElementById(id);
    element.classList.add('active');
  });
});

// 이렇게 하면 click한 tab에 있는 active를 삭제하고
// 현재 선택한 객체에 active가 들어가는 코드라서 바뀌는게 없다.
// tabs.forEach(function(tab){
//   tab.addEventListener('click', function(e){
//     const id=e.target.dataset.id;
//     console.log(tab);
//     tab.classList.remove('active');
//     e.target.classList.add('active');
//   });
// });