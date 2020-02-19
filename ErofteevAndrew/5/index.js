let btnNextElem = document.querySelector('.nav-button--next');
let btnPrevElem = document.querySelector('.nav-button--prev');
let paginationElems = document.querySelectorAll('.pagination-item');
let sliderElem = document.querySelector('.slider');
let slideElems = document.querySelectorAll('.slide');
let slideElem = document.querySelector('.slide');
let currentSlide;

window.addEventListener('resize', resize);
btnNextElem.addEventListener('click', () => moveToSlide(currentSlide + 1));
btnPrevElem.addEventListener('click', () => moveToSlide(currentSlide - 1));
paginationElems.forEach((elem) => {
    elem.addEventListener('click', () => moveToSlide(elem.getAttribute('data-pagination-id')));
})

function moveToSlide(id) {
    let targetSlide = id;
    if(id > slideElems.length) {
        targetSlide = 1;
    } else if(id <= 0){
        targetSlide = slideElems.length;
    } 
    sliderElem.style.left = (-(targetSlide - 1) * slideElem.offsetWidth) + 'px';
    updatePagination(targetSlide);
}

function updatePagination(id) {
    paginationElems.forEach((elem) => {
        if(elem.getAttribute('data-pagination-id') == id) {
            elem.classList.add('pagination-item--active');
            currentSlide = id;
        } else {
            elem.classList.remove('pagination-item--active');
        }
    })
}

function resize() {
    slideElems.forEach((slide) => {
        slide.style.width = document.querySelector('.slider-wrapper').offsetWidth + 'px';
    })
    moveToSlide(currentSlide);
}

resize();
moveToSlide(1);