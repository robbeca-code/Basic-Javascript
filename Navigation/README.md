# 버튼을 누르면 메뉴가 나오는 프로젝트

### html 웹표준에 맞게 마크업을 하고 toggle 메서드를 사용하였습니다.

#### 'html'
* nav는 sectioning tag라서 무조건 heading 태그를 가져야 하므로 h1을 사용하여 nav의 제목을 만들었습니다.
```html
<nav>
  <!--hidden이라는 클래스로 브라우저에선 보이지 않게 css 작업을 했습니다.-->
  <h1 class="hidden">Navigation bar project</h1>
</nav>
```

* logo와 메뉴 버튼은 nav의 header 같아서 의미있게 header 태그를 사용하였습니다.
<br/>

#### 'javascript'
* menu 버튼을 눌렀을 때 메뉴를 나타내는 태그(.links)에 show-links가 있는지 확인하는 함수를 만들었습니다.
```js
menu.addEventListener('click', function(){
  let showLinks = links.classList.contains('show-links');
  
  //show-links 라는 클래스가 있다면, show-links를 없애주는 조건문입니다.
  if(showLinks) {
    links.classList.remove('show-links');
  }
  
  //show-links 라는 클래스가 없으면 show-links를 넣어주는 조건문입니다.
  else {
    links.classList.add('show-links');
  }
}
```
