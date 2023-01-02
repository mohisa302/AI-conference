const bars = document.querySelector(".humberger");
const menu = document.querySelector(".menu-click");
const closeBtn = document.querySelector(".close-icon");
const navLinks = document.querySelectorAll(".nav-link");
const aboutPage = document.querySelector(".page2");
const homePage = document.querySelector(".page1");

bars.addEventListener("click", () => {
  menu.classList.add("open");
});

bars.addEventListener("click", () => {
  menu.classList.add("open");
  console.log(aboutPage);
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});

navLinks.forEach((navLink, index) => {
  navLink.addEventListener("click", () => {
    menu.classList.remove("open");
    if (index === 1) {
      aboutPage.classList.add("open-page2");
      homePage.classList.add("close");
    }
    if (index === 0) {
      aboutPage.classList.toggle("open-page2");
      homePage.classList.remove("close");
    }
  });
});
