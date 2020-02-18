let masCards = [];
let root = document.getElementById("root");

let form = document.forms[0];

function addCard(elem, num) { // формируем карточку
    let cardElem = document.createElement('div');
    cardElem.classList.add('card');

    let nameElem = document.createElement('p');
    let descrElem = document.createElement('p');
    let imgElem = document.createElement('img');
    let sourceElem = document.createElement('a');
    let button = document.createElement('button');
    nameElem.innerText = elem.name;
    descrElem.innerText = elem.description;
    imgElem.setAttribute('src', elem.img);
    sourceElem.innerText = elem.source;
    sourceElem.setAttribute('href', elem.source);
    button.innerText = "Удалить";
    button.setAttribute('type', 'submit');
    button.setAttribute('id', num);
    button.setAttribute('onclick', 'deleteOneCard(this)');

    cardElem.appendChild(nameElem);
    cardElem.appendChild(descrElem);
    cardElem.appendChild(imgElem);
    cardElem.appendChild(sourceElem);
    cardElem.appendChild(button);
    root.appendChild(cardElem);
}

form.onsubmit = function () {
    masCards.push({ // добавляем данные в массив
        name: this.elements[0].value,
        description: this.elements[1].value,
        img: this.elements[2].value,
        source: this.elements[3].value
    })

    addCard(masCards[masCards.length - 1], masCards.length - 1);

    return false;
}

function deleteCards() {
    root.innerHTML = "";
    masCards = [];
}

function deleteOneCard(card) {
    masCards.splice(card.id, 1);
    root.innerHTML = "";
    masCards.forEach((elem, index) => addCard(elem, index));
}