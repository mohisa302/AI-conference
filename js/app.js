const bars = document.querySelector('.humberger');
const menu = document.querySelector('.menu-click');
const closeBtn = document.querySelector('.close-icon');
const navLinks = document.querySelectorAll('.nav-link');

bars.addEventListener('click', () => {
    menu.classList.add('open');
});
  
closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    console.log(menu);
});
  
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
  menu.classList.remove('open');
});
});

