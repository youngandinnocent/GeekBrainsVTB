//=include ./card.js
//=include ./popup.js

// 1) необходимо разработать пользовательский элемент,
// который отображает кол-во дней минут и секунд до дедлайна и описание дедлайна
// (что нужно сделать).

// 2) необходимо добавить интерфейс, который позволит добавлять дедлайны

// 3) дедлайны должны сохраняться в Localstorage в виде массива объектов и при обновлении
// страницы отображаться

// 5) необходимо добавить кнопку, которая будет удалять элемент с дедлайном из localstorage

// 6)* при достижени дедлайна цвет заднего фона должен меняться от зеленого к красному.
// (если есть еще сутки, то задний фон абсолютно зеленый, дедлайн просрочен, то абсолютно красный, переход должен быть постепенным).

// 7)* необходимо помимо обычного добавления дз в репу git необходимо опубликовать дз
// на github pages. Информацию о процессе можно погуглить

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
  cards.appendChild(card);
}

// Cards deadlines

// dd hh mm ss
