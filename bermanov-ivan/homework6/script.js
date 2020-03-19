// описываем кастомный элемент - таймер обратного отсчета - с методами рендеринга, обновления и отключения
class MyDeadline extends HTMLElement {
    constructor() {
        super()
    }

    render() {
        this.title = this.getAttribute('title');
        this.deadline = this.getAttribute('deadline');

        this.timer = setInterval(this.update.bind(this), 1000);
        this.update();
    }

    update() {
        const deltaTime = new Date(new Date(this.deadline) - new Date());

        if (deltaTime.getTime() < 0) {
            this.disconnectedCallback();
            this.innerHTML = `
                <h1>You must do: ${this.title}</h1>
                <p>Deadline: 0 day 0 hours 0 minutes 0 seconds </p>
            `;
        } else {
            const deltaDate = Math.floor(deltaTime.getTime() / 24 / 60 / 60 / 1000);
            const deltaHours = deltaTime.getUTCHours();
            const deltaMinutes = deltaTime.getUTCMinutes();
            const deltaSeconds = deltaTime.getUTCSeconds();
            
            this.innerHTML = `
                <h1>You must do: ${this.title}</h1>
                <p>Deadline: ${deltaDate} day ${deltaHours} hours ${deltaMinutes} minutes ${deltaSeconds} seconds </p>
            `;
        }
    }

    connectedCallback() {
        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }

    disconnectedCallback() {
        clearInterval(this.timer);
    }
}

customElements.define('my-deadline', MyDeadline);

// задаем функцию создания дедлайнов
const makeDeadline = () => {
    // пилим объекты в DOM: интерфейс для создания дедлайнов
    const planner = document.createElement('div');
    const header = document.createElement('h2');
    const taskName = document.createElement('input');
    const year = document.createElement('input');
    const month = document.createElement('input');
    const date = document.createElement('input');
    const hours = document.createElement('input');
    const minutes = document.createElement('input');
    const button = document.createElement('button');

    const article = document.createElement('article');
    article.classList.add('article');

    const error = document.createElement('p');
    error.classList.add('error');

    taskName.setAttribute('placeholder', 'Task name');
    year.setAttribute('placeholder', 'Year');
    month.setAttribute('placeholder', 'Month');
    date.setAttribute('placeholder', 'Date');
    hours.setAttribute('placeholder', 'Hours');
    minutes.setAttribute('placeholder', 'Minutes');

    header.textContent = 'Task manager';
    button.textContent = 'ADD';
    planner.classList.add('planner');
    planner.append(header, taskName, year, month, date, hours, minutes, error, button);
    root.append(planner, article);

    // тянем данные с стореджа
    const deadline = JSON.parse(localStorage.getItem(["deadline"])) || [];

    // если они есть, создаем дедлайны
    if (deadline.length > 0) {
        deadline.forEach((d) => {
            const task = document.createElement('div');
            task.classList.add('task', 'transition');
            const duration = new Date(new Date(d.year, d.month - 1, d.date, d.hours, d.minutes) - new Date());
            task.style.transitionDuration = `${duration / 1000}s`;
            setTimeout(() => task.classList.add('finalColor'));
    
            const elem = document.createElement('my-deadline');
            elem.setAttribute('title', `${d.name}`);
            elem.setAttribute('deadline', `${d.year}-${d.month}-${d.date} ${d.hours}:${d.minutes}`);            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.textContent = 'DELETE';
            task.append(elem, deleteBtn);
            article.append(task);

            // удаление дедлайнов из дома и стореджа
            deleteBtn.addEventListener('click', (e) => {
                const newDeadline = JSON.parse(localStorage.getItem(["deadline"]))
                    .filter((item) => !_.isEqual(item, d));
                localStorage.setItem('deadline', JSON.stringify(newDeadline));
                e.target.closest('.task').remove();
            });
        });
    }

    // добавляем дедлайны по клику
    button.addEventListener('click', () => {
        const deltaTime = new Date(new Date(year.value, month.value - 1, date.value, hours.value, minutes.value) - new Date());
        console.log(deltaTime);
        if (deltaTime.getTime() < 1000) {
            error.textContent = 'Date is not correct';
        } else {
            error.textContent = '';

            const data = {
                name: taskName.value,
                year: year.value,
                month: month.value,
                date: date.value,
                hours: hours.value,
                minutes: minutes.value
            };

            deadline.push(data);

            localStorage.setItem('deadline', JSON.stringify(deadline)); // засовываем дедлайны в сторедж

            const task = document.createElement('div');
            task.classList.add('task', 'transition');
            task.style.transitionDuration = `${deltaTime / 1000}s`;
            setTimeout(() => task.classList.add('finalColor'));

            const elem = document.createElement('my-deadline');
            elem.setAttribute('title', `${data.name}`);
            elem.setAttribute('deadline', `${data.year}-${data.month}-${data.date} ${data.hours}:${data.minutes}`);
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('deleteBtn');
            deleteBtn.textContent = 'DELETE';
            task.append(elem, deleteBtn);
            article.append(task);

            deleteBtn.addEventListener('click', (e) => {
                const newDeadline = JSON.parse(localStorage.getItem(["deadline"]))
                    .filter((item) => !_.isEqual(item, data));
                localStorage.setItem('deadline', JSON.stringify(newDeadline));
                e.target.closest('.task').remove();
            });
        }
    });
};

makeDeadline();
