let page = 1;
let maxId;

const cardsElems = document.querySelector('.cards');
const form = document.querySelector('.form');

// EVENTS
form.addEventListener('submit', e => {
  e.preventDefault();

  const { firstname, lastname, email, avatar } = e.target.elements;

  console.log(firstname);

  const firstnameValue = firstname.value;
  const lastnameValue = lastname.value;
  const emailValue = email.value;
  const avatarValue = avatar.value;

  createNewUser({
    firstnameValue,
    lastnameValue,
    emailValue,
    avatarValue,
  }).then(ok => {
    if (ok) {
      const id = maxId++;
      const card = createCardForUser({
        id,
        first_name: firstnameValue,
        last_name: lastnameValue,
        email: emailValue,
        avatar: avatarValue,
      });

      cardsElems.prepend(card);
    }
  });
});

cardsElems.addEventListener('click', e => {
  const target = e.target;

  if (target.classList.contains('card__delete')) {
    const parrent = target.parentNode;
    const id = parrent.id;

    deleteUser(id)
      .then(ok => {
        if (ok) {
          parrent.remove();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
});

document.addEventListener('scroll', () => {
  const distToBottom =
    document.body.offsetHeight - window.scrollY - window.innerHeight;

  if (distToBottom < 100) {
    getDataUsers(++page);
  }
});

const createElem = (tag, clazz, text) => {
  const elem = document.createElement(tag);
  elem.classList.add(clazz);

  if (text) {
    elem.innerText = text;
  }

  return elem;
};

// NETWORK
const getDataUsers = page => {
  fetch(`https://reqres.in/api/users?page=${page}`)
    .then(response => response.json())
    .then(result => {
      if (page <= result.total_pages) {
        const users = result.data;
        for (let i = 0; i < users.length; i++) {
          cardsElems.appendChild(createCardForUser(users[i]));
        }
      }
    })
    .catch(err => {
      console.log(err);
    });
};

const deleteUser = id => {
  return fetch(`https://reqres.in/api/users/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.ok);
};

function createNewUser({ id, first_name, last_name, email, avatar }) {
  return fetch(`https://reqres.in/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      id,
      first_name,
      last_name,
      email,
      avatar,
    },
  }).then(response => response.ok);
}

// ELEMENTS
const createCardForUser = user => {
  const card = createElem('div', 'card');
  card.id = user.id;
  maxId = ++user.id;
  const cardInfo = createElem('div', 'card__info');
  const cardEmail = createElem('p', 'card__email', user.email);
  const cardFirstName = createElem('p', 'card__firstname', user.first_name);
  const cardLastname = createElem('p', 'card__lastname', user.last_name);
  const cardAvatar = createElem('img', 'card__avata');
  const deleteCard = createElem('div', 'card__delete', 'Удалить');

  loadImg(
    cardAvatar,
    'card__avatar',
    user.avatar,
    `${user.first_name} ${user.last_name}`
  );

  card.appendChild(cardInfo);
  card.appendChild(deleteCard);
  cardInfo.appendChild(cardEmail);
  cardInfo.appendChild(cardFirstName);
  cardInfo.appendChild(cardLastname);
  cardInfo.appendChild(cardAvatar);

  return card;
};

const loadImg = (imgElem, clazz, link, alt) => {
  imgElem.setAttribute('src', link);
  imgElem.setAttribute('alt', alt);
  imgElem.classList.add(clazz);
};

getDataUsers(page);
