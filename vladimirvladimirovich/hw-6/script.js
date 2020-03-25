// 1

let bodyTag = document.getElementById('bd');

class DeadLine extends HTMLElement {

    connectedCallback() {
        
        this.deadline = this.getAttribute('deadline');                
        
        if (this.deadline !== null && this.deadline !== undefined && this.deadline !== NaN && this.deadline) {
            
            this.deadlineDateToSeconds = (new Date(this.deadline)).getTime()/1000;
            this.title = this.getAttribute('title');
            
            if (this.id !== 'noAddIntoLS') {
            if (localStorage.getItem('DeadLine') === null || localStorage.getItem('DeadLine') === undefined) {
                localStorage.setItem('DeadLine', JSON.stringify([{title: this.title, deadline: this.deadline}]));
            }
            else {
                localStorage.setItem('DeadLine', 
                                JSON.stringify(
                                JSON.parse(localStorage.getItem('DeadLine'))
                                .concat({title: this.title, deadline: this.deadline})
                                ));
            }
            }
            
            /* Отображаем отсчет времени до дедлайна с интервалом 1 секунда */
            
            this.timeCounter(); /* чтобы сразу отобразился счетчик, а не по прошествии 1 сек */
            setInterval(()=>this.timeCounter(), 1000); /* работает без bind со стрелочной функ., не работает без bind и без стрелочной функ. */
            //setInterval(this.timeCounter.bind(this), 1000);
        }
        else {
            this.innerHTML = '<p>Дедлайн не определен</p>';
            return;
        }
    }
    
    timeCounter(){    
        
        /* let delta = new Date(new Date(this.deadline) - new Date());
        
           Как в примере на уроке считать неправильно, потому что разность дат не дает реальное время до дедлайна.
           То есть, например, 25 февраля 17:00 и дедлайн 26 февраля 05:00, до окончания срока 12 часов, а разность дат даст 1 день. */

            let textDays = 'дней';
            let textHours = 'часов';
            let textMinutes = 'минут';
            let textSeconds = 'секунд';
            let nowDate = new Date();        
            let nowDateToSeconds = nowDate.getTime()/1000;
            let deltaDateToSeconds = this.deadlineDateToSeconds - nowDateToSeconds;
            if (deltaDateToSeconds <= 0) {
                this.innerHTML = '<p>Дедлайн превышен</p>';
                return;
            }
            let daysLeft = Math.floor((deltaDateToSeconds) / (3600*24));
            let hoursLeft = Math.floor((deltaDateToSeconds - daysLeft*3600*24) / (3600));
            let minutesLeft = Math.floor((deltaDateToSeconds - daysLeft*3600*24 - hoursLeft*3600) / (60));
            let secondsLeft = Math.floor(deltaDateToSeconds - daysLeft*3600*24 - hoursLeft*3600 - minutesLeft*60);
        
            if (daysLeft >= 1) this.parentNode.style.backgroundColor = 'green'; // упражнение 5
            else {
                this.parentNode.style.backgroundColor = 'red';
                this.parentNode.style.transition = 'background 5s ease'; // можно в css
            }
        
            /* Изменение падежей с дедлайном до 30 дней */
        
            if (daysLeft === 1 || daysLeft === 21) {textDays = 'день';}
            else if (daysLeft === 4 || daysLeft === 3 || daysLeft === 2 || daysLeft === 22 || daysLeft === 23 || daysLeft === 24) {textDays = 'дня';}
        
            if (hoursLeft == 1 || hoursLeft == 21) {textHours = 'час';}
            else if (hoursLeft == 2 || hoursLeft == 3 || hoursLeft == 4 || hoursLeft == 22 || hoursLeft == 23) {textHours = 'часа';}
        
            if (minutesLeft == 1 || minutesLeft == 21 || minutesLeft == 31 || minutesLeft == 41 || minutesLeft == 51) {textMinutes = 'минута';}
            else if (minutesLeft == 2 || minutesLeft == 3 || minutesLeft == 4 || minutesLeft == 22 || minutesLeft == 23 || minutesLeft == 24 || minutesLeft == 32  || minutesLeft == 33  || minutesLeft == 34  || minutesLeft == 42  || minutesLeft == 43  || minutesLeft == 44  || minutesLeft == 52  || minutesLeft == 53  || minutesLeft == 54) {textMinutes = 'минуты';}
        
            if (secondsLeft == 1 || secondsLeft == 21 || secondsLeft == 31 || secondsLeft == 41 || secondsLeft == 51) {textSeconds = 'секунда';}
            else if (secondsLeft == 2 || secondsLeft == 3 || secondsLeft == 4 || secondsLeft == 22 || secondsLeft == 23 || secondsLeft == 24 || secondsLeft == 32  || secondsLeft == 33  || secondsLeft == 34  || secondsLeft == 42  || secondsLeft == 43  || secondsLeft == 44  || secondsLeft == 52  || secondsLeft == 53  || secondsLeft == 54) {textSeconds = 'секунды';}        
        
            this.innerHTML = `
            <h4>Вы должны ${this.title}</h4>
            <p>Осталось ${daysLeft} ${textDays} ${hoursLeft} ${textHours} ${minutesLeft} ${textMinutes} ${secondsLeft} ${textSeconds}</p>
            `;
    }
}

customElements.define('dead-line', DeadLine);



// 2

let containerForm = document.getElementById('root');

let formTag = document.createElement('form');

let pTag = document.createElement('p');
pTag.innerText = 'Укажите дедлайны';

let inputTitle = document.createElement('input');
inputTitle.type = 'text';
inputTitle.placeholder = 'Введите задачу';

let inputDeadline = document.createElement('input');
inputDeadline.type = 'text';
inputDeadline.placeholder = 'Введите срок';

let btn = document.createElement('input');
btn.type = 'reset';
btn.value = 'Добавить';
btn.id = 'reset';

containerForm.appendChild(formTag);
formTag.appendChild(pTag);
formTag.appendChild(inputTitle);
formTag.appendChild(inputDeadline);
formTag.appendChild(btn);

let sectionTag = document.createElement('section');
let myElement = document.createElement('dead-line');

containerForm.appendChild(sectionTag); 
sectionTag.appendChild(myElement);

btn.addEventListener('click', function addDeadline() {  
    
    myElement.setAttribute('title', inputTitle.value);
    myElement.setAttribute('deadline', inputDeadline.value);
    
   /* Можно сохранять в localStorage в обработчике события click
   
   if (localStorage.getItem('DeadLine') === null || localStorage.getItem('DeadLine') === undefined) {
        localStorage.setItem('DeadLine', JSON.stringify([{title: inputTitle.value, deadline: inputDeadline.value}]));
    }
    else {
        localStorage.setItem('DeadLine', 
                             JSON.stringify(
                             JSON.parse(localStorage.getItem('DeadLine'))
                             .concat({title: inputTitle.value, deadline: inputDeadline.value})
                             ));
    } 
    
    */

    containerForm.appendChild(sectionTag.cloneNode(true));
    
});



// 3

// добавление в localStorage выполнено в упражнениях 1, строчка 16 и 2, строчка 136 (закомментировано) 

function showAllDeadlines() {
    if (typeof(localStorage.getItem('DeadLine')) === 'string') {
        a = JSON.parse(localStorage.getItem('DeadLine'));
        let container = document.getElementById('allDeadline');
        let str = '<h2>Список дедлайнов</h2>';
        a.forEach(function(elem){ 
             str += `<p>Цель: ${elem.title} Срок: ${elem.deadline}</p>\n`;
        });
        container.innerHTML = str;
    }
    else return;
}

showAllDeadlines();



// 4

let btnDelFromLS = document.createElement('button');
btnDelFromLS.type = 'button';
btnDelFromLS.innerText = 'Удалить';
bodyTag.appendChild(btnDelFromLS); 

btnDelFromLS.addEventListener('click', function DelFromLS() {  
    if (typeof(localStorage.getItem('DeadLine')) === 'string') {
        localStorage.removeItem('DeadLine');
    }
    else return;
});



// 5 выполнено в упражнении 1 строчка 64


















