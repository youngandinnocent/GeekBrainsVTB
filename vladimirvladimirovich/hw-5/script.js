let data = [
  {
    title: 'MEET LARS IN MILPITAS',
    imgUrl: 'img/home-upcoming.jpg',
    article: 'Come on out and say “hey” to Lars at the BevMo in Milpitas, CA on Saturday, February 29th.'  
  },
  {
    title: 'ALL WITHIN MY HANDS METALLICA SCHOLARS YEAR TWO',
    imgUrl: 'img/20200217-Billabong-MOP-Home-sale-web-banner.jpg',
    article: 'Year two of the Metallica Scholars Initiative will add five more community colleges, bringing the total number of schools to 15. It will also receive matching grants from...'
  },
  {
    title: 'RAY BURTON, R.I.P.',
    imgUrl: 'img/photos-header.jpg',
    article: 'It is with incredible sorrow that we said farewell to Cliff’s dad Ray Burton last week.'
  },
  {
    title: 'METALLICA – WITH 2020 VISION',
    imgUrl: 'img/store-hero_20190114.jpg',
    article: 'In order to look into the future, it is important to observe the past. So said a wise man somewhere once. Either...'      
  } 
];

let amountOfSlides = data.length;

let slidesSize = {};
let pageIndex = 0;

let rootElem = document.getElementById('root');

let sliderContainer = document.createElement('div');
let slidesContainer = document.createElement('div');
let spotsContainer = document.createElement('div');

let arrowLeft  = document.createElement('button');
let arrowRight = document.createElement('button');

arrowLeft.innerText = '<';
arrowRight.innerText = '>';
arrowLeft.classList.add('arrowLeft');
arrowRight.classList.add('arrowRight');

sliderContainer.appendChild(arrowLeft);
sliderContainer.appendChild(arrowRight);


sliderContainer.classList.add('sliderContainer');
slidesContainer.classList.add('slidesContainer');
slidesContainer.style.left = 0;
sliderContainer.appendChild(slidesContainer);

spotsContainer.classList.add('spotsContainer');
sliderContainer.appendChild(spotsContainer);

rootElem.appendChild(sliderContainer);

data.forEach(function(elem){
  let slideContainer =  document.createElement('div');
  slideContainer.classList.add('slideContainer');
  let hContainer = document.createElement('h4');
  let pContainer = document.createElement('p');
  let spot = document.createElement('span');
  spot.classList.add('spot');
  hContainer.innerText = elem.title;
  pContainer.innerText = elem.article;
  slideContainer.style.backgroundImage = `url(${elem.imgUrl})`;
  slideContainer.appendChild(hContainer);
  slideContainer.appendChild(pContainer);
  slidesContainer.appendChild(slideContainer);
  spotsContainer.appendChild(spot);
})

spotsContainer.childNodes[0].classList.add('active');

let slides = document.querySelectorAll('.slideContainer');
let spots = document.querySelectorAll('.spot');

reSize();

function reSize(){
    slidesSize.width = sliderContainer.offsetWidth;
    slidesSize.height = sliderContainer.offsetHeight;
    
    slides.forEach(function(elem){
        elem.style.width = slidesSize.width + 'px';
        elem.style.height = slidesSize.height + 'px';
    });
    
    slidesContainer.style.width = slidesSize.width * amountOfSlides + 'px';
    slidesContainer.style.left = -pageIndex*slidesSize.width + 'px';
    arrowLeft.style.top = (slidesSize.height - arrowLeft.offsetHeight)/2 + 'px';
    arrowRight.style.top = arrowLeft.style.top;
    
}

window.addEventListener('resize', reSize);

function goLeft(){
  if (pageIndex === amountOfSlides - 1) {
      
      /* Скролим слайдер в обратную сторону по достижении последнего слайда */
      
        slides.forEach(function(elem){
            if (pageIndex !== 0) {  
                  pageIndex--;   
                  slidesContainer.style.left = -pageIndex*slidesSize.width+'px'; 
            }
        }); 
        spotsContainer.childNodes[amountOfSlides - 1].classList.remove('active');
        spotsContainer.childNodes[0].classList.add('active');
  }
  else {
        spotsContainer.childNodes[pageIndex].classList.remove('active');
        pageIndex++; 
        spotsContainer.childNodes[pageIndex].classList.add('active');
        slidesContainer.style.left = -pageIndex*slidesSize.width+'px';
  }
}

function goRight(){
  if (pageIndex != 0) {
        spotsContainer.childNodes[pageIndex].classList.remove('active');
        pageIndex--;
        spotsContainer.childNodes[pageIndex].classList.add('active');      
        slidesContainer.style.left = -pageIndex*slidesSize.width+'px';
  }
  else {return;}
}

arrowLeft.addEventListener("click", goLeft, false);
arrowRight.addEventListener("click", goRight, false);

spots.forEach(function(elem, i){
    elem.addEventListener("click", function(){
        let spotActive = document.querySelector('.active');
        slidesContainer.style.left = -i*slidesSize.width+'px';
        spotActive.classList.remove('active');
        this.classList.add('active');
        pageIndex = i;
    }, false);
});

/* модальные окна */

let modalElem = document.getElementById('modalWindow');
let amodalElem = document.getElementById('aroundModalWindow');

slides.forEach(function(elem, k){
    elem.addEventListener("click", function(){
        modalElem.classList.add('show');
        amodalElem.classList.add('show');
        modalElem.appendChild(this.cloneNode(true));
    }, false); 
})

amodalElem.addEventListener("click", function(){
    this.classList.remove('show');
    modalElem.classList.remove('show');
    modalElem.removeChild(modalElem.childNodes[0]);
});








