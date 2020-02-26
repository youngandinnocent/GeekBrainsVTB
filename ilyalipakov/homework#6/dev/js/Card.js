class Card extends HTMLElement {
  constructor() {
    super();

    this.timerId = null;
  }

  connectedCallback() {
    const title = this.getAttribute('title');
    const desc = this.getAttribute('desc');

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

    this.renderDeadline();

    this.timerId = setInterval(() => {
      this.renderDeadline();
    }, 1000);
  }

  disconnectedCallback() {
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

  renderDeadline() {
    const cardDay = this.querySelector('.card__day');
    const cardHours = this.querySelector('.card__hours');
    const cardMinutes = this.querySelector('.card__minutes');
    const cardSecond = this.querySelector('.card__seconds');

    const date = this.getAttribute('date');
    const time = this.getAttribute('time');

    const { days, hours, minutes, seconds } = this.calculateDeadline(
      date,
      time
    );

    cardDay.innerHTML = days;
    cardHours.innerHTML = hours;
    cardMinutes.innerHTML = minutes;
    cardSecond.innerHTML = seconds;
  }
}
