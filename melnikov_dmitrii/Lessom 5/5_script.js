'use strict';


let currentSlide = 0;
let slides = document.querySelectorAll('.slide');
let pagination = document.querySelector('.pagination');
let viewContainer = document.querySelector('.view-container');
let sliderContent = document.querySelector('.slider__content');
let prevSlideButton = document.querySelector('.slider__button--left');
let nextSlideButton = document.querySelector('.slider__button--right');


[...slides].forEach(function(slide){
    slide.style.width = viewContainer.offsetWidth + 'px';
    slide.style.height = viewContainer.offsetHeight + 'px';
});

sliderContent.style.width = sliderContent.offsetWidth * slides.length + 'px';

nextSlideButton.addEventListener('click', () => changeSlide(++currentSlide));
prevSlideButton.addEventListener('click', () => changeSlide(--currentSlide));

for (let i = 0; i < slides.length; i++) {
    let btn = document.createElement('button')
    let itemList = document.createElement('li');

    btn.classList.add('pagination__button');
    itemList.classList.add('pagination__item');
    btn.innerText = `Слайд ${i}`;

    btn.addEventListener('click', () => changeSlide(i));

    itemList.appendChild(btn);
    pagination.appendChild(itemList);
}

let paginationButtons = document.querySelectorAll('.pagination__button');
setActivePaginationItem(currentSlide);

function changeSlide(slideID) {
    if (slideID < 0) {
        currentSlide = slides.length - 1;
        sliderContent.style.left = -(viewContainer.offsetWidth * currentSlide) + 'px';
    } else if (slideID >= slides.length) {
        currentSlide = 0;
        sliderContent.style.left = currentSlide + 'px';
    } else {
        currentSlide = slideID;
        sliderContent.style.left = -(viewContainer.offsetWidth * slideID) + 'px';
    }

    setActivePaginationItem(currentSlide);
}

function setActivePaginationItem(slideID) {
    for (let i = 0; i < paginationButtons.length; i++) {
        (slideID === i) ?
            paginationButtons[slideID].classList.add('pagination__button--active') :
            paginationButtons[i].classList.remove('pagination__button--active')
    }
}