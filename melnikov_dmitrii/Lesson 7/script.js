'use strict';


let loadedPage = 1;
fetchUsers(loadedPage);


window.addEventListener('scroll', loaderNewPage);

function loaderNewPage() {
    let pageHeight = document.documentElement.scrollHeight;
    let currentHeight = window.pageYOffset;
    let viewPartOfWindow = document.documentElement.clientHeight;

    if (pageHeight - currentHeight < viewPartOfWindow + 100) {
        console.log('scroll', loadedPage);
        fetchUsers(++loadedPage);
        
        window.removeEventListener('scroll', loaderNewPage);
        setTimeout(() => window.addEventListener('scroll', loaderNewPage), 1000);
    }
}


function fetchUsers(id) {
    fetch(`https://reqres.in/api/users?page=${id}`)
        .then(res => res.json())
        .then(data => (data.data.length) ? renderUsers(data.data) : console.log('Данных нет, не рендерим'))
        .catch(err => console.log(err))
    ;
}

function renderUsers(users) {
    for (let user of users) {
        createUserCard(user);
    }
}

function createUserCard(user) {
    let userList = document.querySelector('.users');

    let container = document.createElement('li');
    let avatar = document.createElement('img');
    let userInfo = document.createElement('div');
    let firstName = document.createElement('p');
    let lastName = document.createElement('p');
    let email = document.createElement('p');

    avatar.setAttribute('src', user.avatar);
    avatar.setAttribute('alt', 'the user avatar');

    container.classList.add('row');
    avatar.classList.add('col-2', 'img-thumbnail', 'mr-5');
    userInfo.classList.add('col-3');
    firstName.classList.add('row', 'h3');
    lastName.classList.add('row','h3');
    email.classList.add('row', 'text-muted');

    firstName.innerText = user.first_name;
    lastName.innerText = user.last_name;
    email.innerText = user.email;

    userInfo.appendChild(firstName);
    userInfo.appendChild(lastName);
    userInfo.appendChild(email);

    container.appendChild(avatar);
    container.appendChild(userInfo);
     
    userList.appendChild(container);
}