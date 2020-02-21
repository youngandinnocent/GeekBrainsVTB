let rootElem = document.getElementById('root');

let formDiv = document.createElement('div');
let form = document.createElement('form');
formDiv.setAttribute('id', 'form-block')
rootElem.appendChild(formDiv);
formDiv.appendChild(form);
form.setAttribute('id', 'form-content');

let postName = document.createElement('input');
let descr = document.createElement('textarea');
let imageUrl = document.createElement('input');
let sourceUrl = document.createElement('input');
let submit = document.createElement('input');
let rmvAllBtn = document.createElement('input');

let cardsTextElem = document.createElement('h1');
cardsTextElem.innerText = 'Your posts';

form.setAttribute('name', 'main-form')
postName.setAttribute('id', 'post-name');
postName.setAttribute('placeholder', 'Name the post');
descr.setAttribute('id', 'description');
descr.setAttribute('placeholder', 'Add description');
imageUrl.setAttribute('id', 'image-url');
imageUrl.setAttribute('placeholder', 'Add image source');
sourceUrl.setAttribute('id', 'source-url');
sourceUrl.setAttribute('placeholder', 'Add source');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Create a card');
submit.setAttribute('class', 'submit-btn');
rmvAllBtn.setAttribute('value', 'Remove all posts');
rmvAllBtn.setAttribute('class', 'rmv-all-btn');
rmvAllBtn.setAttribute('type', 'button');
rmvAllBtn.setAttribute('onclick', 'removeAllCards()');

form.appendChild(postName);
form.appendChild(descr);
form.appendChild(imageUrl);
form.appendChild(sourceUrl);

form.appendChild(submit);
form.appendChild(rmvAllBtn);

rootElem.appendChild(cardsTextElem);

function formSubmit() {
    let postNameValue = postName.value;
    let descrValue = description.value;
    let imageValue = imageUrl.value;
    let srcValue = sourceUrl.value;

    let cardElem = document.createElement('div');
    let cardText = document.createElement('div');
    let imgElem = document.createElement('img');
    let nameElem = document.createElement('p');
    let descrElem = document.createElement('p');
    let srcElem = document.createElement('button');
    let rmvBtn = document.createElement('button');

    imgElem.setAttribute('src', imageValue);
    imgElem.classList.add('avatar');
    nameElem.innerText = postNameValue;
    descrElem.innerText = descrValue;
    srcElem.setAttribute('onclick', `window.open('${srcValue}', '_blank')`)
    srcElem.setAttribute('class', 'text-link')
    srcElem.innerText = 'Read more';
    rmvBtn.innerText = 'Remove post';
    rmvBtn.setAttribute('class', 'rmv-btn');
    cardElem.setAttribute('class', 'card-elem');
    cardText.setAttribute('class', 'card-text');

    cardElem.appendChild(imgElem);
    cardText.appendChild(nameElem);
    cardText.appendChild(descrElem);
    cardText.appendChild(srcElem);
    
    cardText.appendChild(rmvBtn);
    rmvBtn.setAttribute('onclick', 'removeCard()');
    
    rootElem.appendChild(cardElem);
    cardElem.appendChild(cardText);

    console.log('123');
}

function removeAllCards() {
    let cards = document.getElementsByClassName('card-elem');
    for (let card of cards) {
        card.remove();
        removeAllCards();
    }
}

function removeCard() {
    let btn = event.currentTarget;
    btn.parentNode.parentNode.remove();
}

document.getElementById('form-content').onsubmit = function() { formSubmit(); return false };