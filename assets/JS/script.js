document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const fullPageMenu = document.querySelector('.full-page-menu');
  const closeButton = document.querySelector('.close-button');
  const menuLinks = document.querySelectorAll('.menu-list a');
  const header = document.querySelector('.header');
  const heroSection = document.querySelector('.about-section'); // Adjust if needed
  const aboutContent = document.querySelector('.about-content');
  const swiperContainer = document.querySelector('.portfolio-swiper'); // Ensure this is defined
  const slides = document.querySelectorAll('.testimonial-slide');

  // Function to toggle menu visibility
  const toggleMenu = () => fullPageMenu.classList.toggle('active');

  // Toggle menu visibility
  menuToggle.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Sticky navbar on scroll with throttling
  let isScrolling = false;
  const handleScroll = () => {
    if (!isScrolling) {
      isScrolling = true;
      window.requestAnimationFrame(() => {
        header.classList.toggle('sticky', window.scrollY > heroSection.offsetHeight);
        isScrolling = false;
      });
    }
  };
  window.addEventListener('scroll', handleScroll);

  // Reveal content on scroll
  const reveal = () => {
    const windowHeight = window.innerHeight;
    const elementTop = aboutContent.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      aboutContent.classList.add('visible');
    }
  };

  window.addEventListener('scroll', reveal);
  reveal(); // Initial call to reveal content if already in view

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });

  // Initialize Swiper
  const swiper = new Swiper(swiperContainer, {
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
      640: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });

  // Pause Swiper autoplay on hover
  swiperContainer.addEventListener('mouseenter', () => swiper.autoplay.stop());
  swiperContainer.addEventListener('mouseleave', () => swiper.autoplay.start());

  // Testimonial slider
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
  };

  // Automatically transition every 4 seconds
  setInterval(nextSlide, 4000);

  // Initial display
  showSlide(currentSlide);
});
