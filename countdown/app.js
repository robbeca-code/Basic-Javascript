const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// giveway날짜 설정하기 위해
const giveaway = document.querySelector('.giveaway');

//giveway날짜가 지났을 때 공지하기 위해
const deadline = document.querySelector('.deadline-container');

//giveway날짜와 현재 날짜를 뺀 걸 넣기 위해
const items = document.querySelectorAll('.deadline-format strong');


let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth+1, tempDay, 23, 59, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// 0: January, 11: December
let month = futureDate.getMonth();
if(month < 12) {
  month = months[month];
} else {
  month = 0;
  tempYear += 1;
}

const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();

giveaway.textContent = `Giveway ende on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;


/* futureDay - today */
const futureTime = futureDate.getTime();

function getRemaindingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if(item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  // <strong class="days">09</strong>, 0
  // <strong class="hours">09</strong>, 1
  items.forEach(function(item, index){
    item.innerHTML = format(values[index]);
  });

  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expire">Sorry this giveway has expired!</h4>`;
  }
}

let countdown = setInterval(getRemaindingTime, 1000);

getRemaindingTime();