// new Date().getFullYear()
// const date = document.querySelector('.date');
// date.innerHTML = new Date.getFullYear();

/*
getBoundingClientRect() - 클라이언트 길이만큼 보여주기
const linksHeight = links.getBoundingClientRect().hright;
links-container에는 height가 0이기에 links를 가지고 높이를 가져옴

CSS보다 JS에서 준 스타일을 더 우선하기에 !import 사용 4:04:40 참고
*/
//Show nav or Hidden nav
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const menu = document.querySelector('.nav-toggle');

menu.addEventListener('click', function(){
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if(containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});


/*
window.pageYOffset() -> 현재 스크롤 한 높이를 0부터 리턴해줌
*/
const nav = document.getElementById('nav');
window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if(navHeight < scrollHeight) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }
});

/*
abc.slice(1) -> bc
*/
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    console.log(e.preventDefault());

    let id = e.currentTarget.getAttribute('href').slice(1);
    let element = document.getElementById(id);
    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;

    if(!fixedNav) {
      position = position - navHeight;
    } 
    if(navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({left: 0, top: position});
    linksContainer.style.height = 0;
  });
});