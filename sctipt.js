/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
const aboutText = [
    "Hey there! Welcome to my digital space.",
    "I'm Kevin Kirwa, a web developer.",
    "Driven by curiosity and creativity!"
];
let index = 0;
let charIndex = 0;
const typingEffect = document.getElementById('typing-effect');

function typeText() {
    if (charIndex < aboutText[index].length) {
        typingEffect.textContent += aboutText[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        charIndex = 0;
        index = (index + 1) % aboutText.length;
        setTimeout(() => {
            typingEffect.textContent = '';
            typeText();
        }, 2000);
    }
}

typeText();
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});
 // Function to animate counting
 function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat) => {
      const target = parseInt(stat.textContent);
      let count = 0;
      const interval = setInterval(() => {
        stat.textContent = count;
        if (count >= target) clearInterval(interval);
        count += Math.floor(target / 100);
      }, 20);
    });
  }

  // Wait until the page has fully loaded, then animate the stats
  window.onload = animateStats;