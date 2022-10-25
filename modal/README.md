# Open Modal 버튼을 누르면 모달창이 나오는 프로젝트

### 1. HTML
* 배경 이미지를 넣기 위해 header 태그와, 배너를 aside로 마크업하였습니다.
```html
<header class="hero">
  <aside class="banner">
    <h1>Modal project</h1>
    <button type="button" class="modal-btn">
      Open modal
    </button>
  </aside>
</header>
```
<br/>

* Open Modal을 클릭하면 나오는 모달창을 div로 마크업 했습니다.
```html
<div class="modal-overlay">
  <div class="modal-container">
    <h3>Modal content</h3>
    <button type="button" class="close-btn">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
</div>
```
<br/>

### 2. CSS
* hero라는 클래스에 배경 이미지를 넣기 위한 CSS 코드를 작성했습니다.
```css
.hero {
  min-height: 100vh;
  background: url("./assets/hero.jpg") center/cover no-repeat;

  /* hero 안에 있는 개체를 중앙 정렬하는 코드입니다.*/
  display: grid;
  place-items: center;
}
```
<br/>

* Open Modal을 누르기 전과 후 클래스를 만들었습니다.
```css
/* 버튼을 누르기 전 */
.modal-overlay {
  /* position에 fixed를해서 브라우저 전체를 기준으로 마크업할 수 있도록 했습니다.*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(73, 166, 233, 0.5);
  display: grid;
  place-items: center;

  /* 버튼을 누르기 전 개체를 숨기는 코드입니다. */
  visibility: hidden;
  z-index: -10;
}

/* 버튼을 누른 후 */
.open-modal {
  /* 개체를 브라우저에 보여주는 코드입니다. */
  visibility: visible;
  z-index: 10;
}
```
<br/>

### 3. JS
* Open Modal을 눌렀을 때 open-modal이라는 클래스 추가하는 함수와, 닫기 버튼을 눌렀을 때 해당 클래스를 삭제해주는 함수를 만들었습니다.
```js
toggle.addEventListener('click', function(){
  /* modal에 open-modal이 없으면 넣어주고, 있으면 삭제해주는 코드입니다. */
  modal.classList.toggle('open-modal');
});

closeBtn.addEventListener('click', function(){
  /* modal에 open-modal이 있으면 삭제해주는 코드입니다. */
  modal.classList.remove('open-modal');
});
```
