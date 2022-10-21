## 버튼 누르면 숫자가 바뀌는 미니 프로젝트

* 여러 개의 변수를 만들지 않고 forEach로 함수를 1개만 만들어도 되는 깔끔한 코드를 만들었습니다.
```js
var btns = document.querySelectorAll('.btn');
btns.forEach(function(btn){
  console.log(btn);
  //<button type="button" class="btn reset">Reset</button> 이렇게 나오게 됩니다.
}
```

* 각 버튼 클래스 이름을 의미에 맞게 만들었고, 해당 클래스를 눌렀을 때 발생할 이벤트를 조건문으로 만들었습니다.
```js
var btns = document.querySelectorAll('.btn');
btns.forEach(function(btn){
  const className = btn.currentTarget.classList;
  if(className.contains('decrease')) {
    숫자 줄이기
  }
  //className.contains('decrease')는 decrease라는 클래스가 들어있는지 확인해줍니다.
  //만약 있다면 해당 <숫자 줄이기> 를 실행합니다.
}
```

* UI/UX를 신경써서 숫자가 작아지면 <빨간색>으로 커지면 <초록색>, 0이면 <검정색>으로 바뀌도록 스타일을 지정했습니다.
```js
if(count < 0) {
  value.style.color = 'red';
}
//count가 0보다 작아지면
//value라는 아이디를 가진 태그의 글씨 색상을 빨간색으로 바꿔줍니다.
}
```
