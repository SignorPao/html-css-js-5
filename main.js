const menuBtn = document.getElementById("menu-btn"),
  navLinks = document.getElementById("nav-links"),
  menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "100px",
  origin: "bottom",
  duration: 1500,
};

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(
  ".about__content .section__subheader, .room__container .section__subheader",
  {
    ...scrollRevealOption,
    delay: 500,
  }
);
ScrollReveal().reveal(
  ".about__content .section__header, .room__container .section__header",
  {
    ...scrollRevealOption,
    delay: 1000,
  }
);
ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  inteval: 500,
  delay: 1000,
});

ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  inteval: 500,
  origin: "right",
});

const thisYear = new Date().getFullYear(),
  year = document.getElementById("year");
year.innerHTML = `${thisYear}`;

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
