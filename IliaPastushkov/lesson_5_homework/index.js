let data = [
    {
        id: 1,
        name: "Анна Иванова",
        position: "Head of recruitment",
        comment: `Разнообразный и богатый опыт 
            сложившаяся структура организации 
            требуют определения и уточнения направлений 
            прогрессивного развития.
        `,
        img: "./img/user1.png",
    },







    {
        id: 2,
        name: "Иван Петров",
        position: "CTO",
        comment: `
            Подразделение информационных технологий
            смогло предоставить полный комплект услуг
            все остались макисмально довольны
        `,
        img: "./img/user2.png",
    },
    {
        id: 3,
        name: "Алекс Рубанов",
        position: "CEO",
        comment: `
            Наш опыт подсказывает нам, что мы еще вернемся к этим ребятам!
        `,
        img: "./img/user3.png",
    },
    {
        id: 4,
        name: "Ганс Христиансен",
        position: "Lead of design",
        comment: `
            Красиво, свежо, феерично!!!
        `,
        img: "./img/user4.png",
    },
    {
        id: 1,
        name: "Анна Иванова",
        position: "Head of recruitment",
        comment: `Разнообразный и богатый опыт 
            сложившаяся структура организации 
            требуют определения и уточнения направлений 
            прогрессивного развития.
        `,
        img: "./img/user5.png",
    },
    {
        id: 2,
        name: "Иван Петров",
        position: "CTO",
        comment: `
            Подразделение информационных технологий
            смогло предоставить полный комплект услуг
            все остались макисмально довольны
        `,
        img: "./img/user6.png",
    },
    {
        id: 3,
        name: "Алекс Рубанов",
        position: "CEO",
        comment: `
            Наш опыт подсказывает нам, что мы еще вернемся к этим ребятам!
        `,
        img: "./img/user7.png",
    },
];

let cardSize = {};
let pageIndex = 0;

let rootElem = document.getElementById("root");

// Создаем контейнеры
let viewContainer = document.createElement('div');
let cardContainer = document.createElement('div');
let navButtonContainer = document.createElement('div');

// Создаем кнопки
let nextBtn = document.createElement('div');
let nextArrow = document.createElement('img');
let prevBtn = document.createElement('div');
let prevArrow = document.createElement('img');

// Создаем заголовок
let header = document.createElement('h1');
header.innerText = "Отзывы партнеров";

// Устанаваливаем родственные связи
rootElem.appendChild(viewContainer);
viewContainer.appendChild(navButtonContainer);
viewContainer.appendChild(cardContainer);
viewContainer.appendChild(prevBtn);
viewContainer.appendChild(nextBtn);
viewContainer.appendChild(header);
nextBtn.appendChild(nextArrow);
prevBtn.appendChild(prevArrow);

// Добавляем элементам классы
viewContainer.classList.add('viewContainer');
cardContainer.classList.add('cardContainer');
navButtonContainer.classList.add('navButtonContainer');

//добавляем атрибуты
nextBtn.setAttribute('id', 'nextBtn');
prevBtn.setAttribute('id', 'prevBtn');
nextArrow.setAttribute('src', "./img/right.svg");
prevArrow.setAttribute('src', "./img/left.svg");

// Создаем кнопки-точки для навигации
for (let i = 0; i < data.length; i++){
    let navButton = document.createElement('span');
    navButtonContainer.appendChild(navButton);
    navButton.setAttribute('id', "nav_button_" + i.toString());
    navButton.setAttribute('name', "nav_btn");
    navButton.setAttribute('data_counter', i.toString());
    navButton.classList.add('dot');
}
// Помещаем кнопки в NodeList
let dots = document.getElementsByName("nav_btn");

// вешаем обработчик событий на каждую кнопку
dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
        dots.forEach(function (elem) {
            elem.classList.replace('active-dot', "dot");
        });
        dot.classList.replace('dot', "active-dot");
        let dotIndex = dot.getAttribute("data_counter");
        cardContainer.style.left = - dotIndex*cardSize.width + 'px';
    });
})

// Задаем первой кнопке активное состояние
let firstButton = document.getElementById('nav_button_0');
firstButton.classList.remove('dot');
firstButton.classList.add('active-dot');

// Парсим данные из массива data и создаем карточки
data.forEach(function (elem) {
    //Создаем контейнер с карточкой, контейнер с данными об оставившем отзыв
    let cardElem = document.createElement('div');
    let personContainer = document.createElement('div');

    //Создание эл-в для personContainer
    let personName = document.createElement('div');
    let personPosition = document.createElement('div');
    let personImg = document.createElement('div');
        let personPhoto = document.createElement('div');
    // Создаем тело отзыва
    let postText = document.createElement('div');

    //Устанавливаем родственные связи
    cardContainer.appendChild(cardElem);
    cardElem.appendChild(personContainer);
    cardElem.appendChild(postText);
    personContainer.appendChild(personImg);
    personContainer.appendChild(personName);
    personContainer.appendChild(personPosition);
    personImg.appendChild(personPhoto);

    // Добавляем классы
    cardElem.classList.add('cardElem');
    postText.classList.add('postText');
    personContainer.classList.add('personContainer');
    personName.classList.add('personName');
    personPosition.classList.add('personPosition');
    personImg.classList.add('personImg');
    personPhoto.classList.add('personPhoto');

    // Наполняем все что нужно контентом
    postText.innerText = elem.comment;
    personName.innerText = elem.name;
    personPosition.innerText = elem.position;
    personPhoto.style.backgroundImage = "url(" + elem.img + ")";

    cardContainer.style.left = - pageIndex*cardSize.width + 'px';
    cardContainer.style.left = - pageIndex*cardSize.width + 'px';
});

// Подстраиваем размер контейнера под экран
resize();
function resize() {
    cardSize.width = viewContainer.offsetWidth;
    cardSize.height = viewContainer.offsetHeight;

    let cards = document.querySelectorAll('.cardContainer > div');
    cards.forEach( elem => {
        elem.style.width = cardSize.width + 'px';
        elem.style.height = cardSize.height + 'px';
    });
    cardContainer.style.width = cardSize.width * data.length + 'px';
}
window.addEventListener('resize', resize);

// Навешиваем обработчик событий на наши дивы-стрелки
function goRight() {
    console.log(pageIndex);
    if (pageIndex === data.length - 1) {
        pageIndex = 0;
        dots.forEach(function (elem) {
            elem.classList.replace('active-dot', "dot");
        });
        dots[pageIndex].classList.replace('dot', 'active-dot');
        cardContainer.style.left = - pageIndex*cardSize.width + 'px';
    } else {
        pageIndex++;
        dots.forEach(function (elem) {
            elem.classList.replace('active-dot', "dot");
        });
        dots[pageIndex].classList.replace('dot', 'active-dot');
        cardContainer.style.left = - pageIndex*cardSize.width + 'px';
    }
}
console.log(pageIndex);

function goLeft() {
    console.log(pageIndex);
    if (pageIndex === 0) {
        pageIndex = data.length - 1;
        dots.forEach(function (elem) {
            elem.classList.replace('active-dot', "dot");
        });
        dots[pageIndex].classList.replace('dot', 'active-dot');
        cardContainer.style.left = - pageIndex*cardSize.width + 'px';
    } else {
        pageIndex--;
        dots.forEach(function (elem) {
            elem.classList.replace('active-dot', "dot");
        });
        dots[pageIndex].classList.replace('dot', 'active-dot');
        cardContainer.style.left = - pageIndex*cardSize.width + 'px';
    }
}
nextBtn.addEventListener('click', goRight);
prevBtn.addEventListener('click', goLeft);

// Навешиваем обработчик событий на cardContainer, чтобы возвращаться в начало
cardContainer.addEventListener('transitionend', function () {
    console.log("transition end");
})