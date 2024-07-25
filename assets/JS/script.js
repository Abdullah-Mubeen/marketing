const menuToggle = document.querySelector('.menu-toggle');
const fullPageMenu = document.querySelector('.full-page-menu');
const closeButton = document.querySelector('.close-button');

menuToggle.addEventListener('click', () => {
  fullPageMenu.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  fullPageMenu.classList.remove('active');
});
