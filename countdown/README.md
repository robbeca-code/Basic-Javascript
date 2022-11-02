# 남은 날짜가 카운트다운 되는 프로젝트

### * JS
#### 1. iPhone을 나눠주는 날짜 정하기
- Date 객체를 사용합니다.
```js
let tempDate = new Date();

// 현재 연도, 월, 일을 가져옵니다.
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// futureDate에는 ()안에 준 값들로 날짜가 이루어집니다. (나눔 날짜가 됩니다.)
// new Date(Year, Month, Day, Hours, Minutes, seconds)
const futureDate = new Date(tempYear, tempMonth+1, tempDay, 23, 59, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

// 월과 요일은 인덱스로 결과를 반환합니다.
// 0: January, 11: December
// 0: Monday, 6: Sunday
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];

// giveaway 날짜 설정하는 코드입니다.
giveaway.textContent = `Giveway ende on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;
```
<br/>

#### 2. 현재 시간부터 나눔 시간까지 남은 시간 표시하기
- new Date().getTime()으로 현재 시간을 가져오고, 나눔 시간 - 현재 시간으로, 남은 날짜, 시간, 분, 초를 표시합니다.
```js
// 나눔 날짜의 시간을 가져옵니다.
const futureTime = futureDate.getTime();

// 나눔 시간과 현재 시간을 빼주는 함수를 만들었습니다.
function getRemaindingTime() {
  const today = new Date().getTime();
  
  // 나눔 시간 - 현재 시간
  const t = futureTime - today;
  
  // 일, 시간, 분, 초로 다시 표현하기 위한 작업입니다.
  // 1일: 24시간, 1시간: 60분, 1분: 60초, 1초: 1000밀리초
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  
  // (나눔 시간 - 현재 시간)에서 일, 시간, 분, 초 구하는 코드입니다.
  // Math.floor는 소수점을 버리는 함수입니다.
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  
  // HTML 코드의 순서와 동일하게 값을 넣어야 합니다.
  const values = [days, hours, minutes, seconds];
  
  // items에는 남은 시간을 표현하는 태그를 가지고 있습니다.
  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });
}

// setInterval(실행할 함수, 간격)
// 일정한 간격으로 함수를 실행해줍니다.
let countdown = setInterval(getRemaindingTime, 1000);

// 함수를 실행합니다.
getRemaindingTime();
```
