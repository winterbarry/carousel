const slidesContainer = document.querySelector('.carousel-slides');  
const slides = document.querySelectorAll('.slide');  
const btnPrev = document.querySelector('.arrow-left');  
const btnNext = document.querySelector('.arrow-right');  
const dots = document.querySelectorAll('.dot');  

let currentIndex = 0;  

const slideWidth = slides[0].getBoundingClientRect().width;  

btnNext.addEventListener('click', () => {
  if (currentIndex >= slides.length - 1) return;

  currentIndex++;
  slidesContainer.style.transition = 'transform 0.5s ease-in-out';
  slidesContainer.style.transform =
    `translateX(calc(${-slideWidth * currentIndex}px - 5%))`;

  updateDots();
});

btnPrev.addEventListener('click', () => {
  if (currentIndex <= 0) return;

  currentIndex--;
  slidesContainer.style.transition = 'transform 0.5s ease-in-out';
  slidesContainer.style.transform =
    `translateX(calc(${-slideWidth * currentIndex}px - 5%))`;

  updateDots();
});

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.innerHTML = '&#9675;'; 
    } else {
      dot.innerHTML = '&#9679;'; 
    }
  });
}
