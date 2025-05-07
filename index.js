const slidesContainer = document.querySelector('.carousel-slides');  
const slides = document.querySelectorAll('.slide');  
const btnPrev = document.querySelector('.arrow-left');  
const btnNext = document.querySelector('.arrow-right');  
const dots = document.querySelectorAll('.dot');  

let currentIndex = 0;  
const slideWidth = slides[0].getBoundingClientRect().width;

btnNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // helps create a looping effect.
  updateCarousel();
});

btnPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // helps create a looping effect.
  updateCarousel();
});

function updateCarousel() {
  slidesContainer.style.transition = 'transform 0.5s ease-in-out';
  slidesContainer.style.transform =
    `translateX(calc(${-slideWidth * currentIndex}px - 5%))`;
  updateDots();
}

// update dot style
function updateDots() {
  dots.forEach((dot, index) => {
    dot.innerHTML = (index === currentIndex) ? '&#9675;' : '&#9679;';
  });
}

// update carousel with dot click
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

function autoAdvanceSlides() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 5000); // 5 seconds
}

autoAdvanceSlides();