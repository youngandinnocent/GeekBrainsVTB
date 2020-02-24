let data = [
    {
        title: 'Отзывы партнеров',
        background: 'img/background_1.png',
        paragraph:'Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития',
        photo:'img/img_1.png',
        client_name:'Анна Петровна',
        position:'Ген.директор всего'
    },
    {
        title: 'Отзывы партнеров',
        background: 'img/background_1.png',
        paragraph:'Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития',
        photo:'img/img_1.png',
        client_name:'Агния Ефимовна',
        position:'PR-директор'
    },
    {
        title: 'Отзывы партнеров',
        background: 'img/background_1.png',
        paragraph:'Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития',
        photo:'img/img_1.png',
        client_name:'Фекла Сергеевна',
        position:'Финансовый директор'
    },
    {
        title: 'Отзывы партнеров',
        background: 'img/background_1.png',
        paragraph:'Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития',
        photo:'img/img_1.png',
        client_name:'Яна Витальевна',
        position:'Бухгалтер'
    }
];

let cardSize = {};
let pageIndex = 0;
let elemIndex = 0;
let paginatorIndex = 0;

let rootElem =  document.getElementById('root');
let viewContainer = document.createElement('div');
let cardContainer = document.createElement('div');
let triggerLeft = document.createElement('div');
let triggerLeftTop = document.createElement('div');
let triggerLeftBottom = document.createElement('div')
let triggerRight = document.createElement('div');
let triggerRightTop = document.createElement('div');
let triggerRightBottom = document.createElement('div');
let paginator = document.createElement('div');

triggerLeft.classList.add('triggerLeft');
triggerLeftTop.classList.add('triggerLeftTop');
triggerLeftBottom.classList.add('triggerLeftBottom');
triggerRightTop.classList.add('triggerRightTop');
triggerRightBottom.classList.add('triggerRightBottom')
triggerRight.classList.add('triggerRight');
viewContainer.classList.add('viewContainer');
cardContainer.classList.add('cardContainer');

cardContainer.style.left = 0;
rootElem.appendChild(viewContainer);
viewContainer.appendChild(cardContainer);
viewContainer.appendChild(triggerLeft);
viewContainer.appendChild(triggerRight);
triggerLeft.appendChild(triggerLeftTop);
triggerLeft.appendChild(triggerLeftBottom);
triggerRight.appendChild(triggerRightTop);
triggerRight.appendChild(triggerRightBottom);
viewContainer.appendChild(paginator);

cardSize.width = viewContainer.offsetWidth;
cardSize.height = viewContainer.offsetHeight;

for (let i = 0; i < data.length; i++) {
    let paginatorElem = document.createElement('div');
    paginator.classList.add('paginator');
    paginator.style.width = 42*i + 21 + 'px';
    paginatorElem.classList.add('paginator-elem');
    paginatorElem.style.left = 42*i + 'px';

    paginatorElem.addEventListener('click',
        function() {
            cardContainer.style.left = -i*cardSize.width + 'px';
            let prevActive = document.getElementsByClassName('paginator-active')[0];
            prevActive.classList.remove('paginator-active');
            let activePage = document.querySelectorAll('div.paginator-elem')[i];
            activePage.classList.add('paginator-active');
            pageIndex = i;
        })
    paginator.appendChild(paginatorElem);
}
data.forEach(function(elem, i){

    let cardElem = document.createElement('div');
    let cardTitle = document.createElement('div');
    let cardParagraph = document.createElement('div');
    let cardPhoto = document.createElement('img');
    let cardClientName = document.createElement('div');
    let cardPosition = document.createElement('div');
    let modalWindow = document.createElement('div');
    let modalCont = document.createElement('div');
    let modalTxt = document.createElement('p');
    let modalHead = document.createElement('h3');
    let modalClosed = document.createElement('div');

    cardElem.style.width = cardSize.width + 'px';
    cardElem.style.height = cardSize.height + 'px';
    cardTitle.classList.add('cardTitle');
    cardTitle.innerText = elem.title;
    cardElem.classList.add('cardBackground');
    cardElem.style.backgroundImage = `url('${elem.background}')`;
    cardParagraph.classList.add('cardParagraph');
    cardParagraph.innerText = elem.paragraph;
    cardPhoto.classList.add('cardPhoto');
    cardPhoto.setAttribute('src', `${elem.photo}`);
    cardClientName.innerText = elem.client_name;
    cardClientName.classList.add('cardClientName');
    cardPosition.innerText = elem.position;
    cardPosition.classList.add('cardPosition');
    cardSize.width = viewContainer.offsetWidth;
    cardSize.height = viewContainer.offsetHeight;
    cardContainer.style.width = cardSize.width * data.length + 'px';
    cardContainer.style.left = -pageIndex*cardSize.width + 'px';

    cardContainer.appendChild(cardElem);
    cardElem.appendChild(cardTitle);
    cardElem.appendChild(cardParagraph);
    cardElem.appendChild(cardPhoto);
    cardElem.appendChild(cardClientName);
    cardElem.appendChild(cardPosition);


    modalWindow.classList.add('modalWindow');
    modalCont.classList.add('modal_cont');
    modalTxt.classList.add('modal_txt');
    modalTxt.innerText = elem.paragraph;
    modalHead.innerText = elem.title;
    modalClosed.innerHTML = '<button>Закрыть</button>';
    cardElem.appendChild(modalWindow);
    modalWindow.appendChild(modalCont);
    modalCont.appendChild(modalHead);
    modalCont.appendChild(modalTxt);
    modalCont.appendChild(modalClosed);

    cardTitle.style.left = viewContainer.offsetWidth*elemIndex + 41 + 'px';
    cardParagraph.style.left = viewContainer.offsetWidth*elemIndex + 466 + 'px';
    cardPhoto.style.left = viewContainer.offsetWidth*elemIndex + 317 + 'px';
    cardClientName.style.left = viewContainer.offsetWidth*elemIndex + 289 + 'px';
    cardPosition.style.left = viewContainer.offsetWidth*elemIndex + 289 + 'px';

    cardElem.addEventListener('click', () => {
        modalWindow.style.display = 'block';
    });

    modalClosed.addEventListener('click', function(event) {
        modalWindow.style.display = 'none';
        event.stopPropagation();
    })
    elemIndex++;

});

resize();

function resize() {
    cardSize.width = viewContainer.offsetWidth;
    cardSize.height = viewContainer.offsetHeight;

    let cards = document.querySelectorAll('.cardContainer>div')
    cards.forEach(elem => {
        elem.style.width = cardSize.width + 'px';
        elem.style.height = cardSize.height  + 'px';
    })
    cardContainer.style.width = cardSize.width * data.length + 'px';
}

window.addEventListener('resize', resize);

function goRight() {
    pageIndex--;
    if (pageIndex < 0) {
        pageIndex = data.length - 1;
    }
    let prevActive = document.getElementsByClassName('paginator-active')[0];
    prevActive.classList.remove('paginator-active');
    let activePage = document.querySelectorAll('div.paginator-elem')[pageIndex];
    activePage.classList.add('paginator-active');

    cardContainer.style.left = -pageIndex*cardSize.width + 'px';
}

function goLeft() {
    pageIndex++;
    if (pageIndex === data.length) {
        pageIndex = 0;
    }
    let prevActive = document.getElementsByClassName('paginator-active')[0];
    prevActive.classList.remove('paginator-active');
    let activePage = document.querySelectorAll('div.paginator-elem')[pageIndex];
    activePage.classList.add('paginator-active');
    cardContainer.style.left = -pageIndex*cardSize.width + 'px';
}
window.onclick = function() {
    let modalView = document.getElementsByClassName('modalView')[pageIndex];
    let modalViewStyle = modalView.style.display;
        if (modalViewStyle === 'block') {
            modalView.onclick =  function(event) {
                console.log(event.target);
                if (event.target === modalView) {
                    modalView.style.display = 'none';
                    event.stopPropagation();
                }
            }
        }
}

triggerRight.addEventListener('click', goLeft )
triggerLeft.addEventListener('click', goRight)
document.querySelector('div.paginator-elem').classList.add('paginator-active');


/*
let slideParagraph = document.getElementsByClassName('cardParagraph');
let modalWindowDiv = document.getElementsByClassName('modalWindow');
function closeDiv(openedElem) {
    console.log(openedElem.style)
    if (openedElem && openedElem.style.display == 'block') {
        openedElem.style.display = 'none';
    }
};

function top_walker (node, test_func, last_parent) {
    while ( node && node !== last_parent ) {
        if ( test_func(node) ) {
            return node;
        }
        node = node.parentNode;
    }
}

document.documentElement.addEventListener('click', function (event) {
    let isClickWithinOpenedDiv = top_walker(event.target, function (node) {
        return node === modalWindowDiv
    })
    if (!isClickWithinOpenedDiv) {
        closeDiv(modalWindowDiv)
    }
}, true)

slideParagraph.addEventListener('click', function(){modalWindowDiv.style.display = 'block'})*/
