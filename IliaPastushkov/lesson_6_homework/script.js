class DeadlineItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.deadline = this.getAttribute("deadline");
        setInterval(this.update.bind(this), 1000);
        this.update();
    }

    update() {
        let delta = new Date(new Date(this.deadline) - new Date());
        let deltaDay = Math.floor((+delta) / (1000 * 60 * 60 * 24));
        let deltaHours = Math.floor((+delta) / (1000 * 60 * 60)) - (deltaDay * 24);
        let deltaMinutes = Math.floor((+delta) / (1000 * 60)) - (deltaDay * 24 * 60) - (deltaHours * 60);
        let deltaSeconds = Math.floor((+delta) / (1000)) - (deltaDay * 24 * 60 * 60) - (deltaHours * 60 * 60) - (deltaMinutes * 60);
        this.innerHTML = `
                    <div class="content">
                        <div class="ui small horizontal statistics">
                            <div class="statistic">
                                <div class="value">
                                    ${deltaDay}
                                </div>
                                <div class="label">
                                    Days
                                </div>
                            </div>
                            <div class="statistic">
                                <div class="value">
                                    ${deltaHours}
                                </div>
                                <div class="label">
                                    Hours
                                </div>
                            </div>
                            <div class="statistic">
                                <div class="value">
                                    ${deltaMinutes}
                                </div>
                                <div class="label">
                                    Minutes
                                </div>
                            </div>
                            <div class="statistic">
                                <div class="value">
                                    ${deltaSeconds}
                                </div>
                                <div class="label">
                                    Seconds
                                </div>
                            </div>
                        </div>
                    </div>
        `;

        let stylingColor = "";
        let deltaStyling = (+delta) / (1000 * 60 * 60 * 24);
        let totalSeconds = (+delta) / 1000;
        let red = 0;

        if ( deltaStyling >= 1) {
            stylingColor = "RGB(0,255,0)";
        } else if (deltaStyling < 1 && deltaStyling > 0) {
            let green = Math.floor(deltaStyling * 255);
            let red = 255 - green;
            stylingColor = `RGB(${red},${green}, 0)`;
        } else {
            stylingColor = "RGB(255,0,0)";
        }

        this.style.backgroundColor = stylingColor;
    }
}
customElements.define("deadline-item", DeadlineItem);


// Получим контейнер, в который будем добавлять элементы после ввода данных
let cardsContainer = document.getElementById("cards-container");

// Если ЛокалСторадж не пуст - отрендерим все карточки, которые там сохранились!!!
if (localStorage.getItem("cards-data-array")) {
    renderCardsFromLocalStorage();
}

function renderCardsFromLocalStorage() {
    let parsedCardsDataArray = JSON.parse(localStorage.getItem("cards-data-array"));
    parsedCardsDataArray.forEach(function (item) {
        let deadlineItemContainer = document.createElement("div");
        deadlineItemContainer.classList.add("ui");
        deadlineItemContainer.classList.add("card");
        deadlineItemContainer.classList.add("centered");

        let itemHeader = document.createElement('div');
        itemHeader.classList.add("content");
        itemHeader.innerHTML = `
            <div class="header">${item.header}</div>
        `;

        let itemSubheader = document.createElement('div');
        itemSubheader.classList.add("content");
        itemSubheader.innerHTML = `
            <h4 class="ui sub header">${item.description}</h4>
        `;

        let deadlineItem = document.createElement('deadline-item');
        deadlineItem.classList.add("content");
        deadlineItem.setAttribute("deadline", item.deadline);

        let deleteButton = document.createElement("div");
        deleteButton.classList.add("content");
        deleteButton.classList.add("extra");
        deleteButton.innerHTML = `<button class="ui button red " name="delete-button">Delete deadline</button>`;

        cardsContainer.appendChild(deadlineItemContainer);
        deadlineItemContainer.appendChild(itemHeader);
        deadlineItemContainer.appendChild(itemSubheader);
        deadlineItemContainer.appendChild(deadlineItem);
        deadlineItemContainer.appendChild(deleteButton);

        // Делегирование события клика по кнопке "удалить" на карточку
        deadlineItemContainer.addEventListener("click", function () {
            let target = event.target;
            if (target.tagName != "BUTTON") {
                console.log(target);
            } else {
                deadlineItemContainer.remove();
                updateLocalStorage();
            }
        })
    });
}

// Получим сами инпуты, чтобы можно было оперировать введенными данными
let postName = document.getElementById("post-name");
let postDescription = document.getElementById("post-description");
let deadlineDate = document.getElementById("deadline-date");
let deadlineTime = document.getElementById("deadline-time");
let addButton = document.getElementById("add-button");
let deleteButton = document.getElementById("delete-button");
let counter = 0;

// По клику на кнопку добавить - создается новая карточка с пользовательским элементом
// и обновляется localStorage, чтобы получить актуальное количество карточек
addButton.addEventListener("click", function () {
    let deadlineFullDate = deadlineDate.value + " " + deadlineTime.value;

    let deadlineItemContainer = document.createElement("div");
    deadlineItemContainer.classList.add("ui");
    deadlineItemContainer.classList.add("card");
    deadlineItemContainer.classList.add("centered");

    let itemHeader = document.createElement('div');
    itemHeader.classList.add("content");
    itemHeader.innerHTML = `
        <div class="header">${postName.value}</div>
    `;

    let itemSubheader = document.createElement('div');
    itemSubheader.classList.add("content");
    itemSubheader.innerHTML = `
        <h4 class="ui sub header">${postDescription.value}</h4>
    `;

    let deadlineItem = document.createElement('deadline-item');
    deadlineItem.classList.add("content");
    deadlineItem.setAttribute("deadline", deadlineFullDate);

    let deleteButton = document.createElement("div");
    deleteButton.classList.add("content");
    deleteButton.classList.add("extra");
    deleteButton.innerHTML = `<button class="ui button red " name="delete-button">Delete deadline</button>`;

    cardsContainer.appendChild(deadlineItemContainer);
    deadlineItemContainer.appendChild(itemHeader);
    deadlineItemContainer.appendChild(itemSubheader);
    deadlineItemContainer.appendChild(deadlineItem);
    deadlineItemContainer.appendChild(deleteButton);

    // Делегирование события клика по кнопке "удалить" на карточку
    deadlineItemContainer.addEventListener("click", function () {
        let target = event.target;
        if (target.tagName != "BUTTON") {
            console.log(target);
        } else {
            deadlineItemContainer.remove();
            updateLocalStorage();
        }
    })

    // в конце создания карточки обновим ЛС чтобы закинуть ее данные
    updateLocalStorage();
});

// удалим все элементы со страницы и обновим ЛС, чтобы они удалились и оттуда
deleteButton.addEventListener("click", function () {
    let cardsNode = document.querySelectorAll(".ui.card.centered");
    cardsNode.forEach(function (item) {
        item.remove();
    });
    updateLocalStorage();
});

// создать функцию update local storage,
// которая пробегается по странице и ищет карточки дедлайнов, чтобы добавить/удалить данные
function updateLocalStorage() {
    let cardsNode = document.querySelectorAll(".ui.card.centered");
    let cardsDataArray = [];
    cardsNode.forEach(function (item) {
        let currentCardData = {};
        currentCardData.header = item.children[0].innerText;
        currentCardData.description = item.children[1].innerText;
        currentCardData.deadline = item.children[2].attributes[1].value;
        cardsDataArray.push(currentCardData);
    });
    let serialCardsDataArray = JSON.stringify(cardsDataArray);
    localStorage.setItem("cards-data-array", serialCardsDataArray);
}
