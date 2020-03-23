let btnNextElem = document.querySelector('.nav-button--next');
let btnPrevElem = document.querySelector('.nav-button--prev');
let sliderElem = document.querySelector('.slider');
let slideElems = document.querySelectorAll('.slide');
let slideElem = document.querySelector('.slide');
let overlay = document.querySelector('.overlay');
let currentSlide = 1;

document.querySelector('.pagination').innerHTML = '';
for (let i = 0; i < slideElems.length; i++) {
    const paginationElem = document.createElement('li');
    paginationElem.classList.add('pagination-item');
    if(i === 0) paginationElem.classList.add('pagination-item--active');

    paginationElem.setAttribute('data-pagination-id', String(i+1))
    document.querySelector('.pagination').append(paginationElem); 
}
let paginationElems = document.querySelectorAll('.pagination-item');

window.addEventListener('resize', resize);
btnNextElem.addEventListener('click', () => moveToSlide(+currentSlide + 1));
btnPrevElem.addEventListener('click', () => moveToSlide(+currentSlide - 1));
paginationElems.forEach((elem) => {
    elem.addEventListener('click', () => moveToSlide(elem.getAttribute('data-pagination-id')));
})
slideElems.forEach((elem) => {
    elem.addEventListener('click', () => showModal(elem));
})
overlay.addEventListener('click', (ev) => {
    closeModal(ev);
}, true)

function showModal(slide){
    overlay.append(slide.cloneNode(true));
    overlay.classList.remove('overlay--hidden');
}

function closeModal(ev) {
    ev.stopPropagation();
    if(ev.target.classList.contains('overlay')) {
        overlay.innerHTML = '';
        overlay.classList.add('overlay--hidden');
    }
}

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