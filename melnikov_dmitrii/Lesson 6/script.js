'use strict';


let cards = localStorage['cards'] ? JSON.parse(localStorage['cards']): [];
let cardsListTag = document.querySelector('.cards__list');
let addCardForm = document.querySelector('.card__form');


addCardForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let {description, date, time} = addCardForm.elements;
    createNewCard(description.value, `${date.value}T${time.value}`);
});

renderCards();


function createNewCard(message, deadline, id=uuidv4()) {
    let newCard = new DeadlineCard(message, deadline, id);

    cards.push(newCard);
    localStorage.setItem('cards', JSON.stringify(cards, ['description', 'deadline', 'id']));

    renderOneCard(newCard);
}

function deleteCard() {
    let cardID = this.getAttribute('data-card-id');

    cards = cards.filter(card => card.id !== cardID);
    localStorage.setItem('cards', JSON.stringify(cards, ['description', 'deadline', 'id']));

    document.getElementById(cardID).parentNode.remove();
} 

function renderOneCard(card) {
    let newCardTag = document.createElement('li');

    newCardTag.classList.add('list__item');
    newCardTag.appendChild(card);
    cardsListTag.appendChild(newCardTag)
}

function renderCards() {
    for (let card of cards) {
        let {description, deadline, id} = card; 
        renderOneCard(new DeadlineCard(description, deadline, id));
    }
}