'use strict';

let cardForm = document.querySelector('.card__form');
let cardList = document.querySelector('.card__list');
let cardsButtonDelete = document.querySelector('.cards__button--delete');

cardForm.addEventListener('submit', handleSubmit);
cardsButtonDelete.addEventListener('click', deleteCards);


function handleSubmit(evt) {
	evt.preventDefault();

	let newCardData = document.forms.card;
	let {title, description, link, resource} = newCardData.elements;

	let newCard = document.createElement('li');
	newCard.classList.add('list__item');

	let cardTitle = document.createElement('h3');
	cardTitle.innerText = title.value;
	newCard.appendChild(cardTitle);

	let cardDescription = document.createElement('p');
	cardDescription.innerText = description.value;
	newCard.appendChild(cardDescription);

	let cardImg = document.createElement('img');
	cardImg.setAttribute('src', link.value);
	cardImg.setAttribute('alt', link.value);
	newCard.appendChild(cardImg);

	let cardResource = document.createElement('p');
	cardResource.innerText = resource.value;
	newCard.appendChild(cardResource);

	let cardButtonDelete = document.createElement('button');
	cardButtonDelete.innerText = 'Х';
	cardButtonDelete.setAttribute('onclick', 'deleteCard(this)');
	newCard.appendChild(cardButtonDelete);

	cardList.appendChild(newCard);

	// TODO Clear fields of the form
}

function deleteCards() {
	let cards = document.querySelectorAll('.list__item');
	
	for (let card of [...cards]) {
		// cardList.removeChild(card);
		card.remove();
	}
}

function deleteCard(button) {
	let card = button.parentNode;
	card.remove();
}