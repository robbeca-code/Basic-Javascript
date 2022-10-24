# 메뉴 버튼을 누르면 사이드 메뉴가 나오는 프로젝트

### 1. HTML
* 웹표준에 맞게 사이드 메뉴를 aside 라는 태그로 마크업 했습니다.
```html
<aside>
  <header>
    <!--로고와 닫기 버튼은 aside의 제목이라고 생각되어 header로 묶었습니다.-->
  </header>
  
  <!--사이드 메뉴를 ul 태그로 만들었습니다.-->
  <ul>
    <li>
      <a href="https://www.google.com/">Home</a>
    </li>
</aside>
```
<br/>

### 2. CSS
* 브라우저 창 크기에 따라 사이드 메뉴를 다르게 보이게끔 코드를 작성했습니다.
```css
/*676px보다 작을 때는 화면 전체를 사이드 메뉴로 보여주고 676px보다 클 때는 400px만큼만 사이드 메뉴를 보여줍니다.*/
@media screen and (min-width: 676px) {
  .sidebar {
    width: 400px;
  }
}
```
<br/>

### 3. JS
1. 메뉴를 누르면 사이드메뉴가 나오고, 또 누르면 안나오게끔 코드를 작성하였습니다.
```js
toggleBtn.addEventListener('click', function(){
  //sidebar에 show-sidebar 클래스가 있으면 삭제하고, 없으면 넣어주는 코드입니다.
  sidebar.classList.toggle('show-sidebar');
});
```

2. 닫기 버튼을 누르면 사이드메뉴가 사라집니다.
```js
closeBtn.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
});
```
