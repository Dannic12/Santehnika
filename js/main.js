const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.header__right');

btn.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
});