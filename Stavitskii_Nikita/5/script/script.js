let data = [
    {
        title: 'Отзывы партнеров',
        text: `1Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. 

        Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. `,
        imgUrl: 'img/image.png',
        avatar: 'img/avatar.png',
        name: 'Анна Петровна',
        position: 'Ген. директор всего'

    },
    {
        title: 'Отзывы партнеров',
        text: `2Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. 

        Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. `,
        imgUrl: 'https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
        avatar: 'img/avatar.png',
        name: 'Анна Петровна',
        position: 'Ген. директор всего'
    },
    {
        title: 'Отзывы партнеров',
        text: `3Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. 

        Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. `,
        imgUrl: 'https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
        avatar: 'img/avatar.png',
        name: 'Анна Петровна',
        position: 'Ген. директор всего'
    },
    {
        title: 'Отзывы партнеров',
        text: `4Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. 

        Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. `,
        imgUrl: 'https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
        avatar: 'img/avatar.png',
        name: 'Анна Петровна',
        position: 'Ген. директор всего'
    },
    {
        title: 'Отзывы партнеров',
        text: `4Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. 

        Разнообразный и богатый опыт сложившаяся структура организации требуют определения и уточнения направлений прогрессивного развития. `,
        imgUrl: 'https://images.theconversation.com/files/301743/original/file-20191114-26207-lray93.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip',
        avatar: 'img/avatar.png',
        name: 'Анна Петровна',
        position: 'Ген. директор всего'
    },
]

let cardSize = {};
let pageIndex = 0;
let elemIndex = 0;
let paginationIndex = 0;

let rootElem = document.getElementById('root');
let screenContainer = document.createElement('div');
let cardContainer = document.createElement('div');
let triggerRight = document.createElement('div');
let triggerLeft = document.createElement('div');

triggerRight.classList.add('triggerRight');
triggerLeft.classList.add('triggerLeft');
screenContainer.classList.add('screenContainer');
cardContainer.classList.add('cardContainer');
cardContainer.style.left = 0;

screenContainer.appendChild(cardContainer);
rootElem.appendChild(screenContainer);
screenContainer.appendChild(triggerLeft);
screenContainer.appendChild(triggerRight);
let pagination = document.createElement('div');
screenContainer.appendChild(pagination);

for (let i = 0; i < data.length; i++) {
    let paginationElem = document.createElement('div');
    
    pagination.classList.add('pagination');
    pagination.style.width = 42*i + 21 + 'px';
    paginationElem.classList.add('pagination-elem');
    paginationElem.style.left = 42*i + 'px';

    paginationElem.addEventListener('click', 
        function() {
            cardContainer.style.left = -i*cardSize.width + 'px';
            let prevActive = document.getElementsByClassName('pagination-active')[0];
            prevActive.classList.remove('pagination-active');
            let activePage = document.querySelectorAll('div.pagination-elem')[i];
            activePage.classList.add('pagination-active');
            pageIndex = i;
        })
    pagination.appendChild(paginationElem);
}

data.forEach(function(elem){
    let cardElem = document.createElement('div');
    let cardImg = document.createElement('div');
    let cardText = document.createElement('div');
    let cardTitle = document.createElement('div');
    let cardAvatar = document.createElement('img');
    let cardName = document.createElement('div');
    let cardPosition = document.createElement('div');
    let modal = document.createElement('div');
    let modalContent = document.createElement('div');
    let modalText = document.createElement('p');
    let modalHeader = document.createElement('h1');
    let modalClose = document.createElement('div');

    cardImg.style.backgroundImage = `url(${elem.imgUrl})`;
    cardImg.classList.add('card-img');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = elem.title;
    cardText.classList.add('card-text');
    cardText.innerText = elem.text;
    cardAvatar.setAttribute('src', `${elem.avatar}`);
    cardAvatar.classList.add('card-avatar');
    cardName.innerText = elem.name;
    cardName.classList.add('card-name');
    cardPosition.innerText = elem.position;
    cardPosition.classList.add('card-position');
    cardSize.width = screenContainer.offsetWidth;
    cardSize.height = screenContainer.offsetHeight;
    cardContainer.style.width = cardSize.width * data.length + 'px';
    cardContainer.style.left = -pageIndex*cardSize.width + 'px';
    cardElem.style.width = cardSize.width + 'px';
    cardElem.style.height = cardSize.height + 'px';

    cardContainer.appendChild(cardElem);
    cardElem.appendChild(cardImg);
    cardElem.appendChild(cardTitle);
    cardElem.appendChild(cardText);
    cardElem.appendChild(cardAvatar);
    cardElem.appendChild(cardName);
    cardElem.appendChild(cardPosition);

    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    modalText.classList.add('modal-text');
    modalText.innerText = elem.text;
    modalHeader.innerText = elem.title;
    modalClose.innerText = 'CLOSE';
    cardElem.appendChild(modal);
    modal.appendChild(modalContent);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalText);
    modalContent.appendChild(modalClose);

    cardTitle.style.left = screenContainer.offsetWidth*elemIndex + 41 + 'px';
    cardText.style.left = screenContainer.offsetWidth*elemIndex + 466 + 'px';
    cardAvatar.style.left = screenContainer.offsetWidth*elemIndex + 317 + 'px';
    cardName.style.left = screenContainer.offsetWidth*elemIndex + 289 + 'px';
    cardPosition.style.left = screenContainer.offsetWidth*elemIndex + 289 + 'px';

    cardElem.addEventListener('click', () => { 
        modal.style.display = 'block'; 
    });
    
    modalClose.addEventListener('click', function(event) {
        modal.style.display = 'none';
        event.stopPropagation();
    })

    
    elemIndex++;
});

window.onclick = function() {
    let modalDiv = document.getElementsByClassName('modal')[pageIndex];
    if (modalDiv.style.display === 'block') {
        modalDiv.onclick =  function(event) {
            console.log(event.target);
            if (event.target == modalDiv) {
                modalDiv.style.display = 'none';
                event.stopPropagation();
            }
        }
    }
}

function goRight() {
    pageIndex++;
    if (pageIndex === data.length) {
        pageIndex = 0;
    };

    let prevActive = document.getElementsByClassName('pagination-active')[0];
    prevActive.classList.remove('pagination-active');
    let activePage = document.querySelectorAll('div.pagination-elem')[pageIndex];
    activePage.classList.add('pagination-active');

    cardContainer.style.left = -pageIndex*cardSize.width + 'px';
}

function goLeft() {
    pageIndex--;
    if (pageIndex < 0) {
        pageIndex = data.length - 1;
    }; 
    let prevActive = document.getElementsByClassName('pagination-active')[0];
    prevActive.classList.remove('pagination-active');
    let activePage = document.querySelectorAll('div.pagination-elem')[pageIndex];
    activePage.classList.add('pagination-active');

    cardContainer.style.left = -pageIndex*cardSize.width + 'px';
}



triggerLeft.addEventListener('click', goLeft);
triggerRight.addEventListener('click', goRight);

document.querySelector('div.pagination-elem').classList.add('pagination-active');

/* resize();

function resize() {
    let cards = document.querySelectorAll('.cardContainer>div');
    cards.forEach(elem => {
    });

} 

window.addEventListener('resize', resize); */