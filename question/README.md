# '+' 버튼을 누르면 Question의 답을 볼 수 있는 프로젝트

### JS
* question 개체를 다 가져오고 버튼을 누른 개체와 비교하면서 클래스를 넣어줬다 빼줬다 해주는 코드를 작성했습니다.
```js
// questions는 question 클래스를 가진 모든 개체를 저장한 변수입니다.
questions.forEach(function(question){
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', function(){
    question.classList.toggle('show-content');

    // questions를 다시 써서 지금 버튼으로 눌린 question과 questions에 있는 question이 동일한지 확인해주는 조건문입니다.
    //동일하지 않다면, quesitons에 있는 question의 show-content 클래스를 삭제해줍니다.
    questions.forEach(function (item){
      if(item !== question){
        item.classList.remove('show-content');
      }
    });
    // 이 조건문을 통해서 '+' 버튼을 눌렀던 개체에 show-content가 삭제되고, 새로 누른 question에 show-content 클래스를 넣어줍니다.
  });
});
```
