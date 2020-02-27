let html = document.documentElement;
let root = document.getElementById('root');
let form = document.getElementById('postForm');
let numStr = 1;

function getUserData(id) {
    return fetch('https://reqres.in/api/users?page=' + id, {
        method: 'GET'
    })
        .then(resp => resp.json(),
            error => console.log(error))
        .then(resp => resp.data,
            error => console.log(error));
}

function deleteUserData(id) {
    return fetch('https://reqres.in/api/users/' + id, {
        method: 'DELETE'
    })
        .then(resp => resp.status,
            error => console.log(error));
}

function addUserData(info) {
    return fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(info)
    })
        .then(resp => resp.status,
            error => console.log(error));
}

async function deleteCard(id, card) {   // удалить карточку
    let status = await deleteUserData(id);
    if (status === 204)
        card.remove();
}

function createCard(elem) { // создать карточку
    let id = elem.id;
    let cardElem = document.createElement('div');
    let info = document.createElement('div');
    let name = document.createElement('p');
    let email = document.createElement('p');
    let avatar = document.createElement('img');
    let button = document.createElement('button');
    name.innerText = `${elem.first_name} ${elem.last_name}`;
    email.innerText = elem.email;
    avatar.setAttribute('src', elem.avatar); button.innerText = "Удалить";
    button.setAttribute('type', 'submit');
    button.addEventListener('click', function () { deleteCard(id, cardElem) });


    cardElem.classList.add('card');

    info.appendChild(name);
    info.appendChild(email);
    info.appendChild(button);
    cardElem.appendChild(avatar);
    cardElem.appendChild(info)
    root.appendChild(cardElem);
}

async function renderUser(id) { // подгрузить карточки
    let dataUser = await getUserData(id);
    dataUser.forEach(elem => createCard(elem));
}

function uploadData() { // проверка скрола
    let pageHeight = html.scrollHeight;
    let scrollBottom = pageHeight - html.scrollTop - html.clientHeight;

    if (scrollBottom > 100)
        return

    numStr === 1 ? renderUser(++numStr) : renderUser(--numStr);
}

form.onsubmit = async function () {   // обрабатываем данные с формы

    event.preventDefault();

    let info = {
        id: 0,
        first_name: this.elements[0].value,
        last_name: this.elements[1].value,
        email: this.elements[2].value,
        avatar: this.elements[3].value
    }

    let status = await addUserData(info);
    if (status === 201)
        createCard(info);
}

renderUser(numStr)
setTimeout(() => {
    uploadData();
    window.addEventListener('scroll', uploadData);
}, 1000)

