const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

function setActiveNav() {
  let current = '';
  const y = window.scrollY;

  sections.forEach((section) => {
    const top = section.offsetTop - 140;
    const height = section.offsetHeight;
    if (y >= top && y < top + height) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    const target = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', target === current);
  });
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);
