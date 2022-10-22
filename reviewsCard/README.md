# Review card 만들기
#### 이전, 이후 버튼을 누르면서 카드 내용이 변하는 프로젝트이다.

* 여러 개의 리뷰를 reviews라는 배열로 묶었습니다.
* window에 DomContentLoaded라는 이벤트를 넣어서 HTML을 다 로드하고 DOM 트리를 만들었을 때 무엇을 보여줄지 만들었습니다.
```js
window.addEventListener('DOMContentLoaded', function(){
	showItem(currentItem);
});
```    
<br/>

* showItem 함수는 reviews에서 원하는 내용을 가져올 수 있도록 만들었습니다.
```js
function showItem(person){
  let item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
```
<br/>

* 버튼을 클릭했을 때 currentItem이라는 변수가 증감하고 거기에 맞게 showItem에게 인자를 전달합니다.
```js
prev.addEventListener('click', function(){
	currentItem--;
  /* reviews의 가장 작은 인덱스는 0이므로, 이것보다 작아지면 reviews의 전체 길이-1 값을 넣어서 오류가 생기지 않도록 하였습니다. */
  if(currentItem < 0) currentItem = reviews.length - 1;
  showItem(currentItem);
});
```
<br/>

* 랜덤 버튼을 눌렀을 때 reviews의 인덱스들이 무작위로 나오게끔 Math.random과 Math.floor를 사용하였습니다.
```js
random.addEventListener('click', function(){
  /* Math.random() * reviews.length 를 하면 최대가 reviews.length 길이보다 1 작은 수가 나오게 됩니다. */
  currentItem = Math.floor(Math.random() * 4);
  showItem(currentItem);
});
```
