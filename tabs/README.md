# Tab 프로젝트

### * JS
#### 1. 요소를 클릭했을 때 해당하는 정보 보여주기
```js
// about은 tabs와 articles를 포함하고 있는 요소입니다.
about.addEventListener('click', function(e){
  // e.target.dataset.id는 현재 선택된 요소의 data-id에 있는 값을 의미합니다.
  const id = e.target.dataset.id;
  
  //전에 선택된 tab에서 active 클래스가 삭제되고, 현재 선택된 tab에 active 클래스가 삽입되는 코드입니다.
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


/*
 -------틀린 코드-------
 tab를 click 했을 때만 작동하는 코드라서
 tab에 있는 클래스 active를 삭제해도, 현재 선택된 tab에 active를 넣는 코드라서
 삭제한거에 또 다시 넣는 것입니다.
*/
tabs.forEach(function(tab){
  tab.addEventListener('click', function(e){
    const id=e.target.dataset.id;
    console.log(tab);
    tab.classList.remove('active');
    e.target.classList.add('active');
  });
});
```
