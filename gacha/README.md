# 입력한 수만큼 시 출력하는 프로젝트

### * JS
#### 1. input에 입력한 수만큼 시 출력하기
- input에 입력한 값이 없거나 0보다 작거나 8보다 클 때는 random으로 개수를 지정합니다.
- 0보다 크고 8보다 같거나 작은 수는 그 수만큼 시를 출력해줍니다.
- innerHTML에는 값을 여러번 넣어도 마지막 1개만 들어가기 때문에 map()함수를 사용합니다.

```js
form.addEventListener('submit', function(e){
  e.preventDefault();

  // input.value 를 하면 input에 입력한 값을 가져올 수 있습니다.
  const value = parseInt(amount.value);
  const random = Math.floor(Math.random() * text.length);
  
  // 시의 제목과 내용을 담을 변수입니다.
  let title;
  let content;

  if(isNaN(value) || value < 0 || value > 8) {
    title = text[random].title;
    content = text[random].content;
    
    result.innerHTML = `
                        <p class="result">
                          <strong>${title}</strong>
                          <span>${content}<span>
                        </p>
                      `;
  } else {
  
    // slice(시작, 끝) -> 시작, 끝-1 까지만 자른 부분을 tempText로 넘겨줍니다.
    let tempText = text.slice(0, value);

    tempText = tempText.map(function(item){
      return `
              <p class="result">
                <strong>${item.title}</strong>
                <span>${item.content}<span>
              </p>
            `;
    }).join("");
    // tempText의 내용 전체를 ""로 묶어줍니다.

    result.innerHTML = tempText;


    // -------------------틀린 코드-------------------
    /* 이러면 result라는 태그에 slice된 시 중 마지막만 들어가게 됩니다. 따라서 map()함수를 사용해야만 합니다. */
    /*
    for(let i=0; i<texts.length; i++){
      title = texts[i].title;
      content = texts[i].content;
      result.innerHTML = `
                            <p class="result">
                              <strong>${title}</strong>
                              <span>${content}<span>
                            </p>
                          `;
    }
    */
  }
});
```
