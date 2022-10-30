# Switch 버튼을 누르면 영상이 재생되거나 멈추는 프로젝트

### * CSS
1. preloader에 스타일을 부여합니다.
```css
.preloader {
  /* position을 fixed로 하면 웹을 기준으로 요소를 배치할 수 */
  position: fixed;
  
  /* 정가운데로 요소를 배치합니다.*/
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  background-color: #fff;
  display: grid;
  justify-content: center;
  align-items: center;
  visibility: visible;
  
  /* z-index를 활용해서 1보다 작은 개체들은 보이지 않도록 했습니다. */
  z-index: 1;
}
```
<br/>

### * JS
1. preloader을 만들어서 윈도우가 로드 되기 전에 로딩중이라는 것을 브라우저에 보여줍니다.
```js
window.addEventListener('load', function(){
  // hide-preloader라는 클래스로 z-index에 가장 작은 값을 줘서 브라우저에 보이지 않게 했습니다.
  preloader.classList.add('hide-preloader');
});
```
<br/>

2. 버튼을 누를 때마다 영상이 play되거나 pause가 될 수 있도록 코드를 작성했습니다.
```js
// 버튼이 눌린 곳에 slide 클래스를 적용시켜서 어떤 버튼이 클릭되었는지 사용자에게 보여주고
// 버튼을 누르면 영상을 재생 또는 정지시키는 코드를 작성했습니다.
btn.addEventListener('click', function(){
  if(!btn.classList.contains('slide')) {
    btn.classList.add('slide');
    video.pause();
  } else {
    btn.classList.remove('slide');
    video.play();
  }
});
```
