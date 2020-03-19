'use strict';


class DeadlineCard extends HTMLElement {
    constructor(description, deadline, id) {
        super()
        this.id = id,
        this.description = description;
        this.deadline = new Date(deadline);
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['datetime'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'datetime') {
            this.update(newValue);
        }
    }

    render() {
        this.setAttribute('data-deadline', this.deadline);

        let restSeconds = (this.deadline - Date.now()) / 1000;

        if (restSeconds > 0) {
            this._createCardContent(this.description, restSeconds);
        } else {
            this.innerHTML = '<p>Time is over. The task was closed.</p>';
        }

        this.update(Date.now());
    }

    update(timeNow) {
        let restSeconds = (new Date(this.getAttribute('data-deadline')) - timeNow) / 1000;
        let { days, minutes, seconds } = this._calculateRestTime(restSeconds);

        let daysTag = this.querySelector('.days');
        let minutesTag = this.querySelector('.minutes');
        let secondsTag = this.querySelector('.seconds');

        daysTag.innerText = `Дней: ${days}`;
        minutesTag.innerText = `Минут: ${minutes}`;
        secondsTag.innerText = `Секунд: ${seconds}`;

        if (restSeconds > 0) {
            setTimeout(() => this.setAttribute('datetime', Date.now()), 1000);
        } else {
            this.innerHTML = '<p>Time is over. The task was closed.</p>';
        }
    }

    _createCardContent(description, restSeconds) {
        let daysTag = document.createElement('p');
        let minutesTag = document.createElement('p');
        let secondsTag = document.createElement('p');
        let descriptionTag= document.createElement('h2');
        let timeContainerTag = document.createElement('time');
        let buttonDeleteTag = document.createElement('button');

        this.classList.add('card');
        daysTag.classList.add('countdown__days', 'days');
        minutesTag.classList.add('countdown__minutes', 'minutes');
        secondsTag.classList.add('countdown__seconds', 'seconds');
        descriptionTag.classList.add('card__description', 'description');
        buttonDeleteTag.classList.add('card__button--delete')

        buttonDeleteTag.setAttribute('data-card-id', this.id)
        buttonDeleteTag.addEventListener('click', deleteCard);

        let { days, minutes, seconds } = this._calculateRestTime(restSeconds)
        
        descriptionTag.innerText = description;
        daysTag.innerText = `Дней: ${days}`;
        minutesTag.innerText = `Минут: ${minutes}`;
        secondsTag.innerText = `Секунд: ${seconds}`;
        buttonDeleteTag.innerText = `Удалить`;

        timeContainerTag.appendChild(daysTag);
        timeContainerTag.appendChild(minutesTag);
        timeContainerTag.appendChild(secondsTag);

        this.appendChild(descriptionTag);
        this.appendChild(timeContainerTag);
        this.appendChild(buttonDeleteTag);
    }

    _calculateRestTime(restSeconds) {       
        let days = Math.floor(restSeconds / 60 / 60 / 24);      
        let minutes = Math.floor(restSeconds / 60) - (days * 24 * 60);
        let seconds = Math.floor(restSeconds) - (days * 24 * 60 * 60) - (minutes * 60);
        
        return {days, minutes, seconds};
    }   
}

customElements.define('deadline-card', DeadlineCard);