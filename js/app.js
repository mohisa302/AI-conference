const bars = document.querySelector('.humberger');
const menu = document.querySelector('.menu-click');
const closeBtn = document.querySelector('.close-icon');
const navLinks = document.querySelectorAll('.nav-link');
const aboutPage = document.querySelectorAll('.about-page');
const homePage = document.querySelectorAll('.page1');

bars.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});

navLinks.forEach((navLink, index) => {
  navLink.addEventListener('click', () => {
    menu.classList.remove('open');

    if (index === 1) {
      aboutPage[1].classList.add('open-page2');
      homePage[2].classList.add('close');
    }

    if (index === 0) {
      aboutPage[1].classList.toggle('open-page2');
      homePage[2].classList.remove('close');
    }
  });
});

homePage.forEach((homeLink, index) => {
  homeLink.addEventListener('click', () => {
    if (index !== 2) {
      aboutPage[1].classList.toggle('open-page2');
      homePage[2].classList.remove('close');
    }
  });
});

aboutPage.forEach((homeLink) => {
  homeLink.addEventListener('click', () => {
    aboutPage[1].classList.add('open-page2');
    homePage[2].classList.add('close');
  });
});
