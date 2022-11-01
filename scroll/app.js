// Set date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// Show nav or Hidden nav
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


const nav = document.getElementById('nav');
window.addEventListener('scroll', function(){
  // Fixed a navbar
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;
  if(navHeight < scrollHeight) {
    nav.classList.add('fixed-nav');
  } else {
    nav.classList.remove('fixed-nav');
  }

  // setup back to top link
  const topLink = document.querySelector('.top-link');
  if(scrollHeight > 350) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// Smooth scroll
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