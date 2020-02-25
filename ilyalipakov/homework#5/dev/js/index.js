//=include ./slider.js

// Slider, Slides, Slide
const root = window;
const sliderWrapper = document.querySelector('.slider-wrapper');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slide = document.querySelector('.slide');

let overlay = document.querySelector('.overlay');

// Indicator
const indicatorsBlock = document.querySelector('.slider__indicators');

// Controls
const btnNext = document.querySelector('.slider__btn-next');
const btnPrev = document.querySelector('.slider__btn-prev');

const mySlider = new Slider({
  root,
  sliderWrapper,
  slider,
  slides,
  slide,
  indicatorsBlock,
  overlay,
});

btnNext.addEventListener('click', function() {
  mySlider.next();
});

btnPrev.addEventListener('click', function() {
  mySlider.prev();
});
