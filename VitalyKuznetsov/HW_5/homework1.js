let slideData = [
    {
        title: 'Отзывы партнеров',
        img: './img/photo.svg',
        descr:`Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. 
        
        Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития`,
        profilePhoto:'./img/profile-photo.svg',
        clientName:'Анна Петровна',
        position:'Ген.директор всего'
    },
    {
        title: 'Отзывы партнеров',
        img: './img/photo.svg',
        descr:`Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. 
        
        Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития`,
        profilePhoto:'./img/profile-photo.svg',
        clientName:'Анна Петровна',
        position:'Ген.директор всего'
    },
    {
        title: 'Отзывы партнеров',
        img: './img/photo.svg',
        descr:`Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. 
        
        Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития`,
        profilePhoto:'./img/profile-photo.svg',
        clientName:'Анна Петровна',
        position:'Ген.директор всего'
    }
]

let cardSize = {};

let pageIndex = 0;
let elemIndex = 0;
let carouselDot = 0;

let root = document.querySelector('.carousel');

//Создаём левую кнопку
let imgElementLeft = document.createElement('img');
let buttonLeft = document.createElement('button');
root.appendChild(buttonLeft);
buttonLeft.classList.add('carousel__button');
buttonLeft.classList.add('carousel__button--left');
buttonLeft.appendChild(imgElementLeft);
imgElementLeft.setAttribute('src', './img/left.svg')

//Внутринности root
let carouselContainer = document.createElement('div');
carouselContainer.classList.add('carousel__track-container');
root.appendChild(carouselContainer);

let carouselTrack = document.createElement('div');
carouselTrack.classList.add('carousel__track');
carouselContainer.appendChild(carouselTrack);
carouselTrack.style.left = 0;

//Profile photo и описания


//Создайм правую кнопку
let imgElementRight = document.createElement('img');
let buttonRight = document.createElement('button');
root.appendChild(buttonRight);
buttonRight.classList.add('carousel__button');
buttonRight.classList.add('carousel__button--right');
buttonRight.appendChild(imgElementRight);
buttonRight.appendChild(imgElementRight);
imgElementRight.setAttribute('src', './img/right.svg');

//Создаём точки для слайда
let carouselNav = document.createElement('div');
root.appendChild(carouselNav);

cardSize.width = carouselContainer.offsetWidth;
cardSize.height = carouselContainer.offsetHeight;

slideData.forEach(function(elem, elemIndex) {
    //Background слайда
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('carousel__slide')
    imgDiv.style.backgroundImage = `url('${elem.img}')`;
    carouselTrack.appendChild(imgDiv); 

    imgDiv.style.width = cardSize.width + 'px';
    imgDiv.style.height = cardSize.height + 'px';

    //Заголовок
    let slideTitle = document.createElement('h1');
    slideTitle.classList.add('carousel__slide-title')
    slideTitle.innerText = elem.title;
    imgDiv.appendChild(slideTitle); 

    //Slide descr
    let slideDescr = document.createElement('div');
    slideDescr.classList.add('carousel__slide-descr');
    slideDescr.innerText = elem.descr;
    imgDiv.appendChild(slideDescr);

    //Portfolio photo
    let photoDiv = document.createElement('div');
    let slidePhoto = document.createElement('img');
    slidePhoto.classList.add('carousel__slide-photo');
    slidePhoto.setAttribute('src', elem.profilePhoto);
    photoDiv.appendChild(slidePhoto);
    imgDiv.appendChild(photoDiv);
    
    //Добавляем  clientname
    let slideClientName = document.createElement('div');
    slideClientName.classList.add('carousel__slide-name');
    slideClientName.innerText = elem.clientName;
    imgDiv.appendChild(slideClientName);
    
    //Добавляем позицию
    let slidePosition = document.createElement('div');
    slidePosition.classList.add('carousel__slide-position');
    slidePosition.innerText = elem.position;
    imgDiv.appendChild(slidePosition);

    cardSize.width = carouselContainer.offsetWidth;
    cardSize.height = carouselContainer.offsetHeight;
    carouselTrack.style.width = cardSize.width * slideData.length + 'px';
    carouselTrack.style.left = - pageIndex*cardSize.width + 'px';

    slideTitle.style.left = carouselContainer.offsetWidth*elemIndex + 41 + 'px';
    slideDescr.style.left = carouselContainer.offsetWidth*elemIndex + 466 + 'px';
    slidePhoto.style.left = carouselContainer.offsetWidth*elemIndex + 317 + 'px';
    slideClientName.style.left = carouselContainer.offsetWidth*elemIndex + 289 + 'px';
    slidePosition.style.left = carouselContainer.offsetWidth*elemIndex + 289 + 'px';
    
});

resize();

function resize() {
    cardSize.width = carouselContainer.offsetWidth;
    cardSize.height = carouselContainer.offsetWidth;

    let cards = document.querySelectorAll('.carousel__slide > img');
    cards.forEach( elem => {
        elem.style.width = cardSize.width + 'px';
        //elem.style.height = cardSize.height + 'px';
    }); 
    carouselTrack.style.width = cardSize.width * slideData.length + 'px';
}

window.addEventListener('resize', resize);

for (let i = 0; i < slideData.length; i++) {
    let carouselIndicator = document.createElement('button');
    carouselNav.classList.add('carousel__nav');
    carouselIndicator.classList.add('carousel_indicator');

    carouselIndicator.addEventListener('click', function() {
        carouselTrack.style.left = - i * cardSize.width + 'px';
        let prevDot = document.querySelector('.current-slide')[0];
        prevDot.classList.remove('current-slide');

        let activeDot = document.querySelector('.carousel_indicator')[i];
        activeDot.classList.add('current-slide');
        pageIndex = i;

    })
    carouselNav.appendChild(carouselIndicator);
}

//Придаём сладйу движения + бесконечность
window.addEventListener('resize', resize);

function goLeft() {
    pageIndex++;
    carouselTrack.style.left = - pageIndex * cardSize.width + 'px';
    if(pageIndex === slideData.length) {
        pageIndex = 0;
    }

    let prevDot = document.querySelector('.current-slide')[0];
    prevDot.classList.remove('current-slide');
    let activeDot = document.querySelectorAll('.carousel_indicator')[pageIndex];
    activeDot.classList.add('current-slide');

    console.log(pageIndex);
}

function goRight() {
    pageIndex--;
    carouselTrack.style.left = - pageIndex * cardSize.width + 'px';

    if(pageIndex < 0) {
        pageIndex = slideData.length - 1;
    }
    let prevDot = document.querySelector('.current-slide')[0];
    prevDot.classList.remove('current-slide');
    let activeDot = document.querySelectorAll('.carousel_indicator')[pageIndex];
    activeDot.classList.add('current-slide');
    
    console.log(pageIndex);
}

carouselContainer.addEventListener('click', function() {
    swal("Good job!", "You clicked the button!", "success");
});

buttonLeft.addEventListener('click', goRight);
buttonRight.addEventListener('click', goLeft);
document.querySelector('.carousel_indicator').classList.add('current-slide');