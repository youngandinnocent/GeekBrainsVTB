let containerCard = document.querySelector('#data');

document.querySelector('#addCard').addEventListener('click',
    function () {
        let name = document.querySelector('#name').value;
        let description = document.querySelector('#description').value;
        let urlImg = document.querySelector('#urlImg').value;
        let urlSrc = document.querySelector('#urlSrc').value;

        addCard(new Card(name, description, urlImg, urlSrc));
    });

document.querySelector('#deleteAllCards').addEventListener('click', function () {
    let childrens = [...containerCard.children];
    childrens.forEach(card => containerCard.removeChild(card));
});

function addCard(card) {
    let cardElem = document.createElement('div');

    let nameCard = document.createElement('div');
    let descElem = document.createElement('div');
    let urlImg = document.createElement('img');
    let urlSrc = document.createElement('a');
    let btn = document.createElement('button');

    cardElem.setAttribute('class', 'card');
    btn.setAttribute('id', 'deleteCard');
    urlImg.setAttribute('src', card.urlImg);
    urlImg.setAttribute('class', 'cardImg');
    urlSrc.setAttribute('href', card.urlSrc);

    nameCard.innerText = card.name;
    descElem.innerText = card.description;
    urlSrc.innerText = 'Ссылка на источник';
    btn.innerText = 'Delete';
    btn.addEventListener('click', function () {
        containerCard.removeChild(cardElem);
    });

    cardElem.appendChild(nameCard);
    cardElem.appendChild(descElem);
    cardElem.appendChild(urlImg);
    cardElem.appendChild(urlSrc);
    cardElem.appendChild(btn);

    containerCard.appendChild(cardElem);
}

class Card {
    constructor(name, description, urlImg, urlSrc) {
        this._name = name;
        this._description = description;
        this._urlImg = urlImg;
        this._urlSrc = urlSrc;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get urlImg() {
        return this._urlImg;
    }

    set urlImg(value) {
        this._urlImg = value;
    }

    get urlSrc() {
        return this._urlSrc;
    }

    set urlSrc(value) {
        this._urlSrc = value;
    }
}