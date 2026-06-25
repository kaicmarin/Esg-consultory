
const navMenu = document.getElementById("menu-option"),
  navToggle = document.getElementById("button-toggle"),
  navClose = document.getElementById("button-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.remove("menu-none");
    navToggle.classList.add("menu-none");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.add("menu-none");
    navToggle.classList.remove("menu-none");
  });
}


const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.add("menu-none");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
