class MyDeadline extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        setInterval(() => this.setTimer(), 1000)
        this.setTimer();
        this.style.background = green;
    }

    disconnectedCallback() {
        let timerIndex = this.getAttribute('timer-index');
        let array = JSON.parse(localStorage.deadlines);
        array.splice(timerIndex, 1);
        localStorage.setItem('deadlines', JSON.stringify(array));
        deadlines = JSON.parse(localStorage.deadlines);
    }

    setTimer() {
        for (let i = 0; i < deadlines.length; i++) {
            let deadlineTimer =  document.getElementsByTagName('deadline-timer')[i];
            let title = deadlines[i].title;
            let delta = new Date(deadlines[i].deadline) - new Date();
            let deltaDays = Math.floor(delta/day);
            let deltaHours = Math.floor((delta - deltaDays*day)/hour)
            let deltaMins = Math.floor((delta - deltaHours*hour - deltaDays*day)/minute);
            let deltaSecs = Math.floor((delta - deltaMins*minute - deltaHours*hour - deltaDays*day)/second);
            let timerIndex = i;
            deadlineTimer.setAttribute('timer-index', timerIndex);
            /*timerTitle.innerText = title;
            let timerTitle = deadlineTimer.getElementsByTagName('h2')[0];
            let timerText = deadlineTimer.getElementsByTagName('p')[0];
            timerText.innerText = `${deltaDays}D:${deltaHours}H:${deltaMins}M:${deltaSecs}S`; */

            deadlineTimer.innerHTML = `
            <h2>${title}</h2>
            <p>${deltaDays}D:${deltaHours}H:${deltaMins}M:${deltaSecs}S left till deadline</p>
            <button class='remove-btn' onclick='this.parentNode.remove()'>Remove Deadline</button>`
            
            if (delta < 0) {
                deadlineTimer.style.background = red;
            } else if (delta < day) {
                setTimeout (()=> { 
                    let newGreen = Math.floor(delta/day * 255);
                    let newRed = 255 - newGreen;
                    deadlineTimer.style.background = `rgb(${newRed}, ${newGreen}, 0)`;
                }, 0);
            }

            /* if (delta < 0) {
                timerText.innerText = 'Deadline failed';
            } */
        }
    } 
}

const day = 1000*60*60*24;
const hour = 1000*60*60;
const minute = 1000*60;
const second = 1000;
const green = '#00ff00';
const red = '#ff0000';
let deadlines = [];
let elemIndex = 0;

let rootElem = document.getElementById('root');
let titleElem = document.createElement('input');
let deadlineElem = document.createElement('input');
let confirmBtn = document.createElement('button');
let inputContainer = document.createElement('div');

inputContainer.classList.add('input-container');
titleElem.classList.add('deadline-title');
titleElem.setAttribute('placeholder', 'Enter the task name')
deadlineElem.classList.add('deadline-time');
deadlineElem.setAttribute('placeholder', '2020-02-25 18:00')
confirmBtn.classList.add('confirm-btn');
confirmBtn.innerText = 'Confirm';

rootElem.appendChild(inputContainer)
inputContainer.appendChild(titleElem);
inputContainer.appendChild(deadlineElem);
inputContainer.appendChild(confirmBtn);

if (localStorage.deadlines === '' || localStorage.deadlines === undefined) {
    localStorage.setItem('deadlines', deadlines);
} else {
    deadlines = JSON.parse(localStorage.deadlines);
}

for (let i = 0; i<deadlines.length; i++) {
    let timerElem = document.createElement('deadline-timer');
    rootElem.appendChild(timerElem);

/*  let timerTitle = document.createElement('h2');
    let timerText = document.createElement('p');
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.innerText = 'Remove Deadline';
    removeBtn.addEventListener('click', ()=> {
        removeBtn.parentNode.remove();
    });
    timerElem.appendChild(timerTitle);
    timerElem.appendChild(timerText);
    timerElem.appendChild(removeBtn); */
}

confirmBtn.onclick = () => {
    let timerElem = document.createElement('deadline-timer');
    deadlines.push({ 
        title: titleElem.value,
        deadline: deadlineElem.value
    });
    
    localStorage.setItem('deadlines', JSON.stringify(deadlines));
    rootElem.appendChild(timerElem);
}

/* let btnGrp = document.getElementsByClassName('remove-btn');
setTimeout(() => {
    for (let i = 0; i < btnGrp.length; i++) {
        btn = btnGrp[i];
        btn.onclick = () => {
            console.log(i)
            btn.parentNode.remove();
            setTimeout(() => {
                document.location.reload(true);
            }, 0); 
        };
    }
}, 0); */

customElements.define('deadline-timer', MyDeadline);