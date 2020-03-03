// вспомогательная функция рендеринга карточек
const render = (name, lastName, avatar, email, id) => {
    const userCard = document.createElement('div');
    userCard.className = 'userCard';
    const img = document.createElement('img');
    const div = document.createElement('div');
    const title = document.createElement('h2');
    const paragraph = document.createElement('p');
    const button = document.createElement('button');
    button.textContent = 'DELETE';
    div.append(title, paragraph, button);

    title.textContent = `${name} ${lastName}`;
    img.src = avatar;
    paragraph.textContent = email;

    userCard.append(img, div);
    root.append(userCard);

    // навешиваем обработчик, который посылает запрос на сервер
    // и при положительном ответе удаляет карточку по айдишнику
    button.addEventListener('click', (e) => {
        fetch(`https://reqres.in/api/users/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.status === 204) {
                e.target.closest('.userCard').remove();
            } else {
                return `Error: ${res.status}`;
            }
        }).catch(console.log);
    });
};

// функция создания карточек: делает запрос на сервер, получает данные в JSON и рендерит карточки
const makeCards = (id = 1) => {
    const getData = (id) => fetch(`https://reqres.in/api/users?page=${id}`)
        .then((res) => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`))
        .catch(console.log);

    const renderedCards = (users) => users
        .then((users) => users.forEach((user) => render(
            user.first_name,
            user.last_name,
            user.avatar,
            user.email,
            user.id
        )));

    const users = getData(id)
        .then((users) => users.data)
        .catch(console.log);

    renderedCards(users);

    let pageId = 1;

    // навешиваем обработчик на окно: реализуем "бесконечный" рендеринг карточек при скроллинге вниз
    window.addEventListener('scroll', () => {
        const docBottom = document.documentElement.getBoundingClientRect().bottom;
        const windowBottom = document.documentElement.clientHeight;
        if (docBottom < windowBottom + 100) {
            pageId = pageId === 1 ? 2 : 1;
            makeCards(pageId);
        }
    });
};

makeCards();

// функция добавления новых юзеров
const addUser = () => {
    const cardElem = document.createElement('div');
    cardElem.className = 'addUser';
    const title = document.createElement('h1');
    title.textContent = 'Add users';
    const name = document.createElement('input');
    name.setAttribute('placeholder', 'Name');
    const lastName = document.createElement('input');
    lastName.setAttribute('placeholder', 'Last name');
    const avatar = document.createElement('input');
    avatar.setAttribute('placeholder', 'Avatar url');
    const email = document.createElement('input');
    email.setAttribute('placeholder', 'Email');
    const button = document.createElement('button');
    button.textContent = 'ADD';

    cardElem.append(title, name, lastName, avatar, email, button);
    form.append(cardElem);

    // навешиваем обработчик, который посылает запрос на сервер
    // и при положительном ответе рендерит в DOM карточку юзера
    button.addEventListener('click', () => {
        fetch(`https://reqres.in/api/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                first_name: name.value,
                last_name: lastName.value,
                avatar: avatar.value,
                email: email.value
            })
        }).then((res) => {
            if (res.status === 201) {
                return res.json();
            } else {
                return `Error: ${res.status}`;
            }
        })
        .then((user) => render(
            user.first_name,
            user.last_name,
            user.avatar,
            user.email,
            user.id)
        )
        .catch(console.log);
    });
};

addUser();
