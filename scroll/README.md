# Scroll로 여러가지 기능이 작동하는 프로젝트

## * JS

#### 1. 메뉴 버튼을 눌렀을 때 드랍다운 메뉴의 높이만큼 보여주기
 - 원래는 show-link로 높이를 잡아서 브라우저로 보이게 했지만 이번에 객체의 크기만큼 보여줍니다.
 - 그래서 요소가 늘어나거나 줄어드는 높이에 따라 보여준다.
```js
menu.addEventListener('click', function(){
  // getBoundingClientRect()는 해당 엘리먼트 크기를 알 수 있는 메서드입니다.
  // .height를 붙이면 height 높이만 알 수 있습니다.
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  
  if(containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
```
<br/>

#### 2. Navbar 높이보다 스크롤 높이가 클 때 Navbar 상단에 고정시키기
 - window.pageYOff으로 수직으로 얼만큼 스크롤했는지를 픽셀로 결과를 반환합니다.
 - Navbar보다 스크롤한 값이 더 크면 상단에 고정시키는 코드를 작성했습니다.
```js
// scroll 했을 때 이벤트가 발생합니다.
window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  
  if(navHeight < scrollHeight) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }
}
```
<br/>

#### 3. Top link 숨기거나 보여주기
 - 스크롤 높이가 지정한 높이보다 커지면 Top link를 보여주고 그게 아니면 숨깁니다.
```js
window.addEventListener('scroll', function(){
  const topLink = document.querySelector('.top-link');
  const scrollHeight = window.pageYOffset;
  
  if(scrollHeight > 350) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
}
```
<br/>

#### 4. 링크를 눌렀을 때 해당 페이지로 이동하기
 - Navbar를 상단에 고정시켰기 때문에 원래 스크롤되는 값에서 Navbar 높이를 빼야 해당 페이지가 제목까지 완벽하게 보입니다.
 - window.scrollTo()라는 함수를 사용해서 해당 위치로 스크롤되게 코드를 작성했습니다.
```js
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    // getAttribute('속성명') 은 해당 속성명의 값을 가져오는 메서드입니다.
    // slice(1)은 앞에서부터 첫번째를 잘라서 결과를 반환합니다.
    let id = e.currentTarget.getAttribute('href').slice(1);
    
    let element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    // fixed-nav 클래스가 존재하지 않을 때
    if(!fixedNav) {
      position = position - navHeight;
    } 
    
    // Navbar의 높이가 82보다 클 때
    if(navHeight > 82) {
      position = position + containerHeight;
    }

    // 왼쪽은 0, 위쪽은 position만큼 스크롤 해줍니다.
    window.scrollTo({left: 0, top: position});
    
    // 메뉴를 클릭했을 때 드랍다운 메뉴를 숨겨줍니다.
    linksContainer.style.height = 0;
  });
});
```
<br/>
