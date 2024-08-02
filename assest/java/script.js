// Get references to the navigation elements
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Check if the navToggle element exists
if (navToggle) {
  // Add event listener to toggle the menu
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu"); // Toggle the 'show-menu' class
  });
}

// Check if the navClose element exists
if (navClose) {
  // Add event listener to close the menu
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu"); // Remove the 'show-menu' class
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

// SHADOW HEADER
const scrollHeader = () => {
  const header = document.getElementById("header");

  window.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", scrollHeader);

// SWIPER FAVORITES
const swiper = new Swiper('.favorites__swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true, // This should be 'true' instead of 'auto'
});

// SHOW SCROLL UP
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);



// scroll reveal animation 

const sr = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration:2500,
  delay: 300,
  // reset:true, animation repart 
})

sr.reveal(`.home__data, .favorites__container, .footer__container`)
sr.reveal(`.home__circle, .home__img`, {delay:600, scale: .5})
sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, {delay:1000, interval:100})

 sr.reveal(`.home__leaf`, {delay:1200})

 sr.reveal(`.home__tomato-1, .home__tomato-2`, {delay: 1400, interval: 100})

 sr.reveal(`.care__img, .contact__img`, {origin: 'left'})
 sr.reveal(`.care__list, .contact__data`, {origin: 'right'})

 sr.reveal(`.banner__item, .products__card`, {interval: 100})