document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const fullPageMenu = document.querySelector('.full-page-menu');
  const closeButton = document.querySelector('.close-button');
  const menuLinks = document.querySelectorAll('.menu-list a');

  // Toggle menu visibility
  menuToggle.addEventListener('click', function () {
    fullPageMenu.style.transform = 'translateX(0)';
  });

  // Close menu
  closeButton.addEventListener('click', function () {
    fullPageMenu.style.transform = 'translateX(100%)';
  });

  // Close menu when a link is clicked
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      fullPageMenu.style.transform = 'translateX(100%)';
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const aboutContent = document.querySelector('.about-content');

  function reveal() {
    const windowHeight = window.innerHeight;
    const elementTop = aboutContent.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      aboutContent.style.opacity = '1';
      aboutContent.style.transform = 'translateY(0)';
    }
  }

  window.addEventListener('scroll', reveal);

  reveal();
});


document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000, // Duration of the animation
    easing: 'ease-in-out', // Easing function
    once: true, // Animation should only happen once
  });
});

