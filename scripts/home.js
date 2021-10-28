let slides = document.querySelectorAll('.home .slider img');
let dots = document.querySelectorAll('.home .dots .dot');

currentSlide = 0;
showSlide(currentSlide);
let x = setInterval(() => {
    currentSlide += 1;
    showSlide(currentSlide)
  }, 3000)

function showCurrentSlide(n) {
  currentSlide = n;
  showSlide(currentSlide);
}
function changeSlide(n) {
  currentSlide += n;
  showSlide(currentSlide);
}

function showSlide(index) {
  let activeSlide = document.querySelector('.slider img.slideActive')
  let activeDot = document.querySelector('.dots span.dotActive')
  // hide active slides 
  activeSlide.classList.remove('slideActive');
  activeDot.classList.remove('dotActive');
  //show current slide
  if(index > slides.length-1) currentSlide = 0;
  if(index < 0) currentSlide = slides.length - 1;
  slides[currentSlide].classList.add('slideActive');
  slides[currentSlide].classList.add('open');
  dots[currentSlide].classList.add('dotActive');
}
