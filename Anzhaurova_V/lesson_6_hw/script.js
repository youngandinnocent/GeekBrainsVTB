let deadlines = [];
let elemIndex = 0;

let rootElem = document.getElementById('root');
let taskForm = document.createElement('div');
let taskTitle = document.createElement('input');
let taskLimit = document.createElement('input');
let taskAddBtn = document.createElement('button');

taskForm.classList.add('task-form');
taskTitle.classList.add('task-title');
taskLimit.classList.add('task-limit');
taskAddBtn.classList.add('task-add-btn');

taskLimit.setAttribute('placeholder', '2021-03-10 19:20');
taskTitle.setAttribute('placeholder', 'Название таска');

taskAddBtn.innerText = 'Добавить';

rootElem.appendChild(taskForm);
taskForm.appendChild(taskTitle);
taskForm.appendChild(taskLimit);
taskForm.appendChild(taskAddBtn);


class Deadline extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.createTask();
       this.setInterval(this.createTask.bind(this), 1000);
    }
    disconnectedCallback() {
        clearInterval(this.vсardRemover());
    }
}


taskAddBtn.addEventListener('click', function () {
    createTask()
});
function createTask() {
    const newTaskCard = document.createElement('div');
    newTaskCard.classList.add('newTask');
    newTaskCard.setAttribute('data-deadline', taskLimit.value);
    newTaskCard.setAttribute('data-name', taskTitle.value);
    document.body.appendChild(newTaskCard)
    let thisLS = [];

    if (localStorage.getItem("cardsInfo") !== undefined) {
        thisLS = JSON.parse(localStorage.getItem("cardsInfo"));
    }
    let todayDate = Date.parse(new Date());
    let deadline = Date.parse(taskLimit.value);
    console.log(deadline)
    let delta = new Date(deadline - todayDate);
    let deltaSeconds = Math.floor((delta / 1000) % 60);
    let deltaMinutes = Math.floor((delta / 1000 / 60) % 60);
    let deltaHours = Math.floor((delta / (1000 * 60 * 60)) % 24);
    let deltaDay = Math.floor(delta / (1000 * 60 * 60 * 24));
    newTaskCard.innerHTML = `
        <div class="wrap">
            <h1 class ="countdown-title">${taskTitle.value}</h1>
            <div id ="countdown" class="countdown">
                <div class ="countdown-number">
                    <span class ="days countdown-time">${deltaDay}</span>
                    <span class ="countdown-text">дней</span>
                </div>
                <div class ="countdown-number">
                    <span class ="hours countdown-time">${deltaHours}</span>
                    <span class ="countdown-text">часов</span>
                </div>
                <div class ="countdown-number">
                    <span class="minutes countdown-time">${deltaMinutes}</span>
                    <span class="countdown-text">минут</span>
                </div>
                <div class ="countdown-number">
                    <span class="seconds countdown-time">${deltaSeconds}</span>
                    <span class="countdown-text">секунд</span>
                </div>
            </div>
        </div>
        <input type="button" value="Удалить" class="rm-button" onclick="vсardRemover(this);">`;

    let cardInfo = {
        "deadline" : taskLimit.value,
        "title" : taskTitle.value
    };

    thisLS.push(cardInfo);
    console.log(thisLS)
    localStorage.setItem("cardsInfo", JSON.stringify(thisLS));
    taskTitle.value = ""
    taskLimit.value = ""


    if(deltaDay >= 1) {
        this.style.backgroundColor = '#00ecb9';
    } else if(deltaDay < 0) {
       this.style.backgroundColor = '#ff4339';
       this.getElementsByClassName("wrap").style.borderRadius = "20px";
    }

};

function vсardRemover(el) {
    let cardDL = el.parentNode.getAttribute('data-deadline');
    let cardName = el.parentNode.getAttribute('data-name');
    let thisLS = JSON.parse(localStorage.getItem("cardsInfo"));

    let newLS = [];
    for (let i in thisLS) {
        if (thisLS[i]["deadline"] != cardDL && thisLS[i]["title"] != cardName) {
            let newObj = {"deadline": thisLS[i].deadline, "title": thisLS[i].title};
            newLS.push(newObj);
        }
    }
    localStorage.setItem("cardsInfo", JSON.stringify(newLS));
    el.parentNode.remove();
}

function taskHistory() {
    // делаем проверку на пустоту лс
    if (localStorage.getItem("cardsInfo") != undefined) {
        //если оно не пустое, забираем данные в переменную thisLS и парсим их
        let thisLS = JSON.parse(localStorage.getItem("cardsInfo"));
        for (let i in thisLS) {
            // воссоздаём заново структуру карточек, как если бы мы ввели их из инпута
            let yetTaskCard = document.createElement('div');//create task
            yetTaskCard.classList.add('newTask');//add class for new task
            // добавляем 2 аттрибута, за которые мы будем цепляться при сравнении для удаления из памяти
            yetTaskCard.setAttribute('data-deadline', thisLS[i]["deadline"]);
            yetTaskCard.setAttribute('data-name', thisLS[i]["title"]);
            document.body.appendChild(yetTaskCard)

            let todayDate = Date.parse(new Date()); //перевели в милисекунды текущее время
            let deadline = Date.parse(thisLS[i]["deadline"]); //перевели в милисекунды дедлайн
            let delta = new Date(deadline - todayDate); //разница в милисекундах текущего времени и дедлайна
            let deltaSeconds = Math.floor((delta / 1000) % 60);
            let deltaMinutes = Math.floor((delta / 1000 / 60) % 60);
            let deltaHours = Math.floor((delta / (1000 * 60 * 60)) % 24);
            let deltaDay = Math.floor(delta / (1000 * 60 * 60 * 24));
            yetTaskCard.innerHTML = `
                <div class="wrap">
                    <h1 class ="countdown-title">${thisLS[i]["title"]}</h1>
                    <div id ="countdown" class="countdown">
                        <div class ="countdown-number">
                            <span class ="days countdown-time">${deltaDay}</span>
                            <span class ="countdown-text">дней</span>
                        </div>
                        <div class ="countdown-number">
                            <span class ="hours countdown-time">${deltaHours}</span>
                            <span class ="countdown-text">часов</span>
                        </div>
                        <div class ="countdown-number">
                            <span class="minutes countdown-time">${deltaMinutes}</span>
                            <span class="countdown-text">минут</span>
                        </div>
                        <div class ="countdown-number">
                            <span class="seconds countdown-time">${deltaSeconds}</span>
                            <span class="countdown-text">секунд</span>
                        </div>
                    </div>
                </div>
                <input type="button" value="Удалить" class="rm-button" onclick="vсardRemover(this);">`;
        }
    }
}
window.onload = function(){
    taskHistory()
}

