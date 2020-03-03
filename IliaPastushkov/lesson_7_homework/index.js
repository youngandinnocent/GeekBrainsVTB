// 1) необходимо разработать функцию, которая получив id страницы рендерит карточки пользователей, в HTML.
//     Процесс рендеринга страницы из JSON необходимо реализовать отдельной функцией.
//     Ссылка для запросов https://reqres.in/api/users?page=1
//
//     2) реализовать процесс, который будет вызывать функцию из первого пункта при скролинге страницы.
//     Когда до конца страницы вам осталось 100 или меньше пикселей необходимо загрузить новую страницу данных.
//     Таким образом вы добьетесь бесконечной ленты, как в интсаграме и подобных сервисах.
//
// 3) * реализовать кнопку удаления у каждой карточки пользователя,
//     которая отправляет запрос на удаление на сервер и при успешном ответе удаляет элемент из DOM
//
// 4) * реализовать форму по добавлению карточки пользователя.
//     Данные из формы отправляются на сервер и при положительном ответе элемент должен рендериться в DOM
//
// ВНИМАНИЕ!! сервис reqres не сохраняет состояние и процессы удаления/добавления лишь эмулируют действия,
//     но не изменяют данные на сервере.

let cardsContainer = document.getElementById("cards");
let addButton = document.getElementById("add-button");

let name_input = document.getElementById("name-input");
let surname_input = document.getElementById("surname-input");
let email_input = document.getElementById("email-input");
let avatar_img = document.getElementById("avatar-img");

let n = 0;
let idCounter = 13;

getUsersDataFromId(1);

async function getUsersDataFromId(pageID) {
    let url = "https://reqres.in/api/users?page=";
    url += pageID;
    let response = await fetch(url); // завершается с заголовками ответа
    let result = await response.json();
    let usersData = result.data;
    renderFromJSON(usersData);
}

async function deleteCard(card) {
    let response = await fetch("https://reqres.in/api/users?page=1", {
        method: 'DELETE',
        body: card,
    }); // завершается с заголовками ответа
    if (response.ok) { // если HTTP-статус в диапазоне 200-299 получаем тело ответа
        console.log(response.statusText);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
    return response.status;
}

function renderFromJSON(objArr) {
    console.log(objArr);
    console.log(typeof objArr);
    objArr.forEach(function (userObj) {
        let card = document.createElement("div");
        card.classList.add("ui");
        card.classList.add("card");
        card.innerHTML = `
            <div class="content">
                <img src=${userObj.avatar}
                     class="ui avatar image">
                ${userObj.first_name} ${userObj.last_name}
            </div>
            <div class="content">
                <div class="meta" style="">
                    name
                </div>
                <a class="header">${userObj.first_name}</a>
            </div>
            <div class="content">
                <div class="meta">
                    Surname
                </div>
                <a class="header">${userObj.last_name}</a>
            </div>
            <div class="content">
                <div class="meta">
                    e-mail
                </div>
                <a>${userObj.email}</a>
            </div>
            <div class="extra content">
                <a>
                    <i class="privacy icon"></i>
                    userID: ${userObj.id}
                </a>
            </div>
            <button class="ui bottom attached red button">
                Delete
            </button>
        `;
        cardsContainer.appendChild(card);

        card.addEventListener("click", function () {
            let target = event.target;
            if (target.tagName === "BUTTON") {
                let response = deleteCard(card);
                card.remove();
            }
        });

    });
};

window.addEventListener("scroll", function () {
    let documentHeight = document.documentElement.scrollHeight;
    let scrolledPixels = window.pageYOffset;
    let windowHeight = window.innerHeight;
    if ((windowHeight + scrolledPixels + 100) > documentHeight) {
        let ID = (Math.pow(-1, n) + 1) / 2 + 1;
        getUsersDataFromId(ID);
        n++;
    }
});

console.log(email_input.type);

addButton.addEventListener("click", function () {
    let newItem =[];
    let obj = {};

    obj.id = idCounter;
    obj.email = email_input.value;
    obj.first_name = name_input.value;
    obj.last_name = surname_input.value;
    obj.avatar = avatar_img.value;
    newItem.push(obj);
    idCounter++;
    console.log(email_input.value);
    renderFromJSON(newItem);

});