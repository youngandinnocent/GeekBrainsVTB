class Card extends HTMLElement {
  constructor() {
    super();
    this.timerId = null;
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const desc = this.getAttribute('desc');
    const date = this.getAttribute('date');
    const time = this.getAttribute('time');
    let index = parseInt(this.getAttribute('index'));
    const cards = this.getAllCardsFromStorage() || [];

    if (!index) {
      index = cards.length + 1;
    }

    this.innerHTML = `
      <div class="card">
        <div class="card__title">${title}</div>
        <div class="card__desc">${desc}</div>
        <div class="card__deadline">
          Осталось: 
          <span class="card__day"></span> Дня
          <span class="card__hours"></span> часов
          <span class="card__minutes"></span> минут
          <span class="card__seconds"></span> секунд
        </div>
        <div class="card__delete" onclick="this.parentNode.parentNode.remove()" >
          Удалить
        </div>
      </div>
    `;

    this.setAttribute('index', index);
    this.addDataToStorage({ index, title, desc, date, time });

    this.renderDeadline(date, time);

    this.timerId = setInterval(() => {
      this.renderDeadline(date, time);
    }, 1000);
  }

  disconnectedCallback() {
    const index = parseInt(this.getAttribute('index'));
    this.deleteDataFromStorage(index);

    clearInterval(this.timerId);
  }

  calculateDeadline(date, time) {
    const deadline = Date.parse(`${date} ${time}`) - Date.now();

    let seconds = Math.floor((deadline / 1000) % 60);
    let minutes = Math.floor(((deadline - seconds) / (1000 * 60)) % 60);
    let hours = Math.floor(((deadline - minutes) / (1000 * 60 * 60)) % 24);
    let days = Math.floor((deadline - hours) / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds };
  }

  renderDeadline(date, time) {
    const cardDay = this.querySelector('.card__day');
    const cardHours = this.querySelector('.card__hours');
    const cardMinutes = this.querySelector('.card__minutes');
    const cardSecond = this.querySelector('.card__seconds');

    const { days, hours, minutes, seconds } = this.calculateDeadline(
      date,
      time
    );

    this.updateBackground(days);

    cardDay.innerHTML = days;
    cardHours.innerHTML = hours;
    cardMinutes.innerHTML = minutes;
    cardSecond.innerHTML = seconds;
  }

  updateBackground(deadline) {
    const card = this.querySelector('.card');
    if (deadline == 0) {
      card.classList.add('warning');
    } else if (deadline < 0) {
      card.classList.add('danger');
    }
  }

  // TODO: LocalStorage;
  addDataToStorage(card) {
    const cards = this.getAllCardsFromStorage();
    let isHasCard = this.checkIsCard(cards, card);

    if (!isHasCard) {
      localStorage.setItem('cards', JSON.stringify([...cards, card]));
    }
  }

  deleteDataFromStorage(index) {
    const cards = this.getAllCardsFromStorage();
    const idx = cards.findIndex(card => {
      return card.index === index;
    });

    localStorage.setItem(
      'cards',
      JSON.stringify([...cards.slice(0, idx), ...cards.slice(idx + 1)])
    );
  }

  getAllCardsFromStorage() {
    return JSON.parse(localStorage.getItem('cards')) || [];
  }

  // TODO: Check methods
  checkIsCard(cards, card) {
    for (let i = 0; i < cards.length; i++) {
      if (this.deepEqual(cards[i], card)) {
        return true;
      }
    }

    return false;
  }

  deepEqual(obj1, obj2) {
    return (
      JSON.stringify({
        index: obj1.index,
        title: obj1.title,
        desc: obj1.desc,
        date: obj1.date,
        time: obj1.time,
      }) ===
      JSON.stringify({
        index: obj2.index,
        title: obj2.title,
        desc: obj2.desc,
        date: obj2.date,
        time: obj2.time,
      })
    );
  }
}
