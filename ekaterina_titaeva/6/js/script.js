class MyElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {   // добавление элемента в документ (возможно несколько раз)
        this.deadLine = this.getAttribute('deadLine');
        this.title = this.getAttribute('title');
        this.style.color = 'white';
        setInterval(this.update.bind(this), 1000);
        this.update();

    }

    update() {
        let delta = Date.parse(this.deadLine) - Date.parse(new Date());
        let deltaSecond = (delta / (1000) % 60);
        let deltaMinute = Math.floor((delta - deltaSecond) / (1000 * 60) % 60);
        let deltaHours = Math.floor((delta - deltaMinute) / (1000 * 60 * 60) % 24);
        let deltaDay = Math.floor((delta - deltaHours) / (1000 * 60 * 60 * 24));
        this.innerHTML = `
        <div>
            <h2 > ${this.title} </h2>
            <p>осталось ${deltaDay} дней, ${deltaHours}:${deltaMinute}:${deltaSecond}</p>
        </div>`;

        if (deltaDay === 0) {
            let green = Math.floor(delta / (1000 * 60) / 12);
            let red = 120 - green;
            this.style.color = `rgb(${red}, ${green}, 0)`;
        }
    }

}

customElements.define('my-element', MyElement); // связываем элемент с классом
let root = document.getElementById("root");
let form = document.getElementById('postForm');
let key = 'deadLine';

function deleteDL(event) {  // удаляем карточку
    let arrDL = JSON.parse(localStorage.getItem(key));
    var buttons = [...document.querySelectorAll('button')];
    let index = buttons.indexOf(event.target) - 1;
    arrDL.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(arrDL));
}

function createElem(elem) { // рисуем карточку
    let cardDl = document.createElement('div');
    let descr = document.createElement('my-element');
    let button = document.createElement('button');
    button.innerText = "Удалить";
    descr.setAttribute('title', elem.name);
    descr.setAttribute('deadLine', elem.date);

    cardDl.appendChild(descr);
    cardDl.appendChild(button);
    root.appendChild(cardDl);

    cardDl.classList.add('card');

    button.addEventListener('click', function (event) {
        deleteDL(event);
        cardDl.remove();
    });
}

let arrDL = JSON.parse(localStorage.getItem(key)) || [];
arrDL.forEach(elem => createElem(elem));   // идем по массиву карточек

form.onsubmit = function () {   // формируем карточку
    arrDL = JSON.parse(localStorage.getItem(key)) || [];
    let card = {
        name: this.elements[0].value,
        date: this.elements[1].value
    };
    arrDL.push({
        name: card.name,
        date: card.date
    });
    localStorage.setItem(key, JSON.stringify(arrDL));
    createElem(card);

    return false;
}

