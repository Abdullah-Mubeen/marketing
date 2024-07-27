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

document.addEventListener("DOMContentLoaded", function () {
  var portfolioSwiper = new Swiper('.portfolio-swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.portfolio-swiper-button-next',
      prevEl: '.portfolio-swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  var swiperContainer = document.querySelector('.portfolio-swiper');
  swiperContainer.addEventListener('mouseenter', function () {
    portfolioSwiper.autoplay.stop();
  });
  swiperContainer.addEventListener('mouseleave', function () {
    portfolioSwiper.autoplay.start();
  });
});
