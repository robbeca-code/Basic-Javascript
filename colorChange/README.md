이 프로젝트의 목적은 버튼을 누르면 브라우저 색상과 color 텍스트가 바뀌게 만드는 것입니다.

## Code Description
* 우선 이벤트를 가질 버튼과 이벤트가 발생할 때마다 텍스트가 변경되어야 하므로 color라는 곳에 저장합니다.
  * 색상을 담기에 color라는 이름으로 변수를 생성하였습니다.

* 색상을 담은 colors라는 배열을 만들고, 랜덤으로 값이 나올 수 있게끔 getRandomNumber이라는 함수를 작성했습니다.

* getRandomNumber은 버튼 이벤트 리스너 함수 안에 리턴되도록 num 변수를 생성하였습니다. 
  * 숫자를 받는 변수라서 이름을 num으로 했습니다.

* button을 누르면 색상이 변경되는 함수 코드를 넣었습니다.
```js
btn.addEventListener('click', function(){
  let num = getRandomNumber();
  document.body.style.backgroundColor = colors[num];
  color.textContent = colors[num];
});
```
