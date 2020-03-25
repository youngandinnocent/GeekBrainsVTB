//=include ./card.js
//=include ./popup.js

customElements.define('new-card', Card);

const addBtn = document.querySelector('.add');
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup__close');
const cards = document.querySelector('.deadlines');

const titleInput = document.querySelector('.popup__title');
const descInput = document.querySelector('.popup__desc');
const dateInput = document.querySelector('.popup__date');
const timeInput = document.querySelector('.popup__time');

const addTask = document.querySelector('.popup__btn');

const taskPopup = new Popup({ popup, overlay });

// Popup
addBtn.addEventListener('click', () => {
  taskPopup.show();
});

closeBtn.addEventListener('click', () => {
  taskPopup.hide();
});

// Add task(card)
addTask.addEventListener('click', function() {
  if (isEmptyField(titleInput, descInput, dateInput, timeInput)) {
    return;
  }

  createCardWith({
    title: titleInput.value,
    desc: descInput.value,
    date: dateInput.value,
    time: timeInput.value,
  });

  taskPopup.hide();
});

function isEmptyField(...fields) {
  return fields.some(field => field.value === '');
}

function createCardWith(data) {
  const card = document.createElement('new-card');
  card.setAttribute('title', data.title);
  card.setAttribute('desc', data.desc);
  card.setAttribute('date', data.date);
  card.setAttribute('time', data.time);
  if (data.index) {
    card.setAttribute('index', data.index);
  }

  cards.appendChild(card);
}

const allcards = JSON.parse(localStorage.getItem('cards')) || [];

allcards.forEach(card => {
  createCardWith({
    index: card.index,
    title: card.title,
    desc: card.desc,
    date: card.date,
    time: card.time,
  });
});
