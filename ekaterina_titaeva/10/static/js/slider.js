let data = [
    {
        name: 'Каналы Амстердама',
        location: 'Амстердам',
        img: 'https://static.tonkosti.ru/images/a/a5/%D0%A3%D1%8E%D1%82%D0%BD%D1%8B%D0%B5_%D0%B4%D0%BE%D0%BC%D0%B8%D0%BA%D0%B8_%D0%B2%D0%B4%D0%BE%D0%BB%D1%8C_%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0%2C_%D0%90%D0%BC%D1%81%D1%82%D0%B5%D1%80%D0%B4%D0%B0%D0%BC.jpg',
        description: 'Одной из отличительных особенностей Амстердама являются его каналы, образующие четыре концентрических полукольца, опоясывающие Старый город. За них-то, а также за более чем 1500 мостов и около 90 остров Амстердам и получил свое прозвище «Северной Венеции».'
    },
    {
        name: 'Зансе-Сханс',
        location: 'Амстердам, Zaanse Schans',
        img: 'https://static.tonkosti.ru/images/3/3c/%D0%9C%D1%83%D0%B7%D0%B5%D0%B9_%D0%BF%D0%BE%D0%B4_%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%BC_%D0%BD%D0%B5%D0%B1%D0%BE%D0%BC_%D0%97%D0%B0%D0%BD%D1%81%D0%B5-%D0%A1%D1%85%D0%B0%D0%BD%D1%81.jpg',
        description: 'Еще одним символом страны (помимо тюльпанов и кофе-шопов) является, несомненно, ветряная мельница. Множество этих сооружений стоит по всей территории Нидерландов, придавая особый колорит окружающему пейзажу.'
    },
    {
        name: 'Кекенхоф',
        location: 'Лиссе, Stationsweg, 166a',
        img: 'https://static.tonkosti.ru/images/7/72/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BF%D0%B0%D1%80%D0%BA_%D0%9A%D0%B5%D0%BA%D0%B5%D0%BD%D1%85%D0%BE%D1%84%2C_%D0%9D%D0%B8%D0%B4%D0%B5%D1%80%D0%BB%D0%B0%D0%BD%D0%B4%D1%8B.png',
        description: 'Кекенхоф — это сказочное парково-цветочное королевство, раскинувшееся на площади в 32 га в регионе тюльпанов, а точнее в окрестностях городка Лиссе, между Амстердамом и Гаагой, уже давно нарекли «Садом Европы». Очевидно, такое звание Кекенхоф заслуженно получил за свою неповторимую яркую красоту.'
    },
    {
        name: 'Площадь Дам',
        location: 'Амстердам, de Dam',
        img: 'https://static.tonkosti.ru/images/0/0a/%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%B4%D0%B2%D0%BE%D1%80%D0%B5%D1%86_%D0%BD%D0%B0_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8_%D0%94%D0%B0%D0%BC%2C_%D0%90%D0%BC%D1%81%D1%82%D0%B5%D1%80%D0%B4%D0%B0%D0%BC.jpg',
        description: 'Площадь Дам — центральная площадь Амстердама и одно из самых известных и важных мест в городе. Площадь Дам получила свое название от дамбы, построенной на реке Амстел в 13 веке, и образовалась из двух площадей — Мидделдам и Платсе.'
    }
]

let pageIndex = 0;

let rootElement = document.getElementById('root');
let viewContainer = document.createElement('div');
let cardContainer = document.createElement('div');
let btnLeft = document.createElement('button');
let btnRight = document.createElement('button');
let title = document.createElement('p');

btnLeft.innerText = '<';
btnRight.innerText = '>';
title.innerText = 'Достопримечательности Голландии'

viewContainer.appendChild(title);
viewContainer.appendChild(btnLeft);
viewContainer.appendChild(btnRight);
viewContainer.appendChild(cardContainer);
rootElement.appendChild(viewContainer);

viewContainer.classList.add('viewContainer');
cardContainer.classList.add('cardContainer');
btnLeft.classList.add('btnLeft', 'btn');
btnRight.classList.add('btnRight', 'btn');

cardContainer.style.left = 0;
let cardHeight = viewContainer.offsetHeight;
let cardWidth = viewContainer.offsetWidth;
let btnWidth = btnRight.offsetWidth;
let btnHeight = btnLeft.offsetHeight;

function openWindow() {
    let background = document.createElement('div');
    let modalWin = document.createElement('div');
    let nameElem = document.createElement('p');
    let locElem = document.createElement('p');
    let imgElem = document.createElement('img');

    nameElem.innerText = data[pageIndex].name;
    locElem.innerText = data[pageIndex].location;
    imgElem.setAttribute('src', data[pageIndex].img);

    modalWin.appendChild(imgElem);
    modalWin.appendChild(nameElem);
    modalWin.appendChild(locElem);
    rootElement.appendChild(modalWin);
    rootElement.appendChild(background);

    modalWin.classList.add('modalWin');
    background.classList.add('background');

    background.addEventListener('click', function () {
        background.remove();
        modalWin.remove();
    });
}

data.forEach((elem, index) => {
    let cardElem = document.createElement('div');
    let imgContainer = document.createElement('div');
    let nameElem = document.createElement('p');
    let locElem = document.createElement('p');
    let imgElem = document.createElement('img');
    let descrElem = document.createElement('p');

    nameElem.innerText = elem.name;
    locElem.innerText = elem.location;
    imgElem.setAttribute('src', elem.img);
    descrElem.innerText = elem.description;

    imgContainer.appendChild(nameElem);
    imgContainer.appendChild(locElem);
    imgContainer.appendChild(imgElem);
    cardElem.appendChild(imgContainer);
    cardElem.appendChild(descrElem);
    cardContainer.appendChild(cardElem);

    cardElem.classList.add('card');
    nameElem.classList.add('nameCard');

    cardElem.style.paddingLeft = btnWidth + 10 + 'px';
    cardElem.style.paddingRight = btnWidth + 10 + 'px';

    cardElem.addEventListener('click', function () { openWindow(); });
})

function cardMove(index) {
    pageIndex = index;
    let pastBtn = document.querySelector('.curBtn');
    pastBtn.classList.toggle("curBtn");
    let curBtn = document.querySelector('.btnContainer').children[index];
    curBtn.classList.toggle('curBtn');
    cardContainer.style.left = - pageIndex * cardWidth + 'px';
}

let btnContainer = document.createElement('div');
data.forEach((elem, index) => {
    let btnRound = document.createElement('button');
    btnRound.classList.add('btnRound');
    btnContainer.appendChild(btnRound);
    btnRound.addEventListener('click', function () { cardMove(index); });
});
viewContainer.appendChild(btnContainer);
btnContainer.classList.add('btnContainer');
document.querySelector('.btnContainer').children[0].classList.add('curBtn');

resize();

function resize() {
    cardHeight = viewContainer.offsetHeight;
    cardWidth = viewContainer.offsetWidth;
    btnLeft.style.bottom = cardHeight / 2 - btnHeight / 2 + 'px';
    btnRight.style.bottom = cardHeight / 2 - btnHeight / 2 + 'px';

    let cards = document.querySelectorAll('.card');
    cards.forEach(elem => {
        elem.style.width = cardWidth + 'px';
        elem.style.height = cardHeight + 'px';
    })

    cardContainer.style.width = cardWidth * data.length + 'px';
}

window.addEventListener('resize', resize);

function goLeft() {
    pageIndex === data.length - 1 ? cardMove(0) : cardMove(pageIndex + 1);
}
function goRight() {
    pageIndex === 0 ? cardMove(data.length - 1) : cardMove(pageIndex - 1);
}

btnLeft.addEventListener('click', goRight);
btnRight.addEventListener('click', goLeft);