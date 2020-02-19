let root = document.getElementById("root");
let form = document.getElementById('postForm');

function deleteCards() {
    root.innerHTML = "";
}

form.onsubmit = function () {   // формируем карточку

    let name = this.elements[0].value
    let description = this.elements[1].value
    let img = this.elements[2].value
    let source = this.elements[3].value

    let cardElem = document.createElement('div');
    cardElem.classList.add('card');

    let nameElem = document.createElement('p');
    let descrElem = document.createElement('p');
    let imgElem = document.createElement('img');
    let sourceElem = document.createElement('a');
    let button = document.createElement('button');
    nameElem.innerText = name;
    descrElem.innerText = description;
    imgElem.setAttribute('src', img);
    sourceElem.innerText = source;
    sourceElem.setAttribute('href', source);
    button.innerText = "Удалить";
    button.setAttribute('type', 'submit');
    button.addEventListener('click', function () { cardElem.remove(); });

    cardElem.appendChild(nameElem);
    cardElem.appendChild(descrElem);
    cardElem.appendChild(imgElem);
    cardElem.appendChild(sourceElem);
    cardElem.appendChild(button);
    root.appendChild(cardElem);

    return false;
}