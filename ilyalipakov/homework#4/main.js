// 1) реализовать форму с 4 полями:
// 	- название поста (input)
// 	- описание (textarea)
// 	- ссылка на картинку (input)
// 	- ссылка на источник (input)
// и одной кнопкой "добавить"

// при нажатии на кнопку добавить должна появляться карточка с указанным текстом,
// названием, картинкой и ссылкой на источник. Карточки должны быть стилизованы через css.

// 2) добавьте кнопку "удалить все карточки" которая должна удалять все карточки

// 3) * у каждой карточки добавьте кнопку для удаления именно этой карточки.

// p.s. Напоминаю, с этого занятия все дз принимаются только в виде ссылки на github.

let lists = [];

const inputName = document.querySelector('.todo__name-post');
const inputDesc = document.querySelector('.todo__desc');
const inputLinkImg = document.querySelector('.todo__link-img');
const inputSrcImg = document.querySelector('.todo__src-img');

const addBtn = document.querySelector('.todo__btn-add');
const deleteBtn = document.querySelector('.todo__btn-delete');

const todoList = document.querySelector('.todo__list');
const errorField = document.querySelector('.error-field');
const errorText = document.querySelector('.error-message');

addBtn.addEventListener('click', e => {
  const valuePostName = inputName.value;
  const valueDesc = inputDesc.value;
  const valueLinkImg = inputLinkImg.value;
  const valueSrcImg = inputSrcImg.value;

  if (isEmptyField(valuePostName, valueDesc, valueLinkImg, valueSrcImg)) {
    if (errorField.classList.contains('hide')) {
      errorText.innerHTML = 'Не все поля заполнены';
      errorField.classList.toggle('hide');
    }

    if (!lists.length) {
      deleteBtn.classList.add('hide');
      deleteBtn.classList.remove('show');
    }
  } else {
    if (!errorField.classList.contains('hide')) {
      errorField.classList.toggle('hide');
    }

    lists.push({
      post: valuePostName,
      desc: valueDesc,
      linkImg: valueLinkImg,
      srcImg: valueSrcImg,
    });

    createElementsWith(valuePostName, valueDesc, valueLinkImg, valueSrcImg);

    if (lists.length) {
      deleteBtn.classList.add('show');
      deleteBtn.classList.remove('hide');
    }
  }
});

deleteBtn.addEventListener('click', e => {
  lists = [];
  if (!lists.length) {
    deleteBtn.classList.add('hide');
    deleteBtn.classList.remove('show');
  }
  todoList.innerHTML = '';
});

const isEmptyField = (...fields) => {
  return fields.some(elem => elem === '');
};

const createElementsWith = (
  valuePostName,
  valueDesc,
  valueLinkImg,
  valueSrcImg
) => {
  const card = document.createElement('div');
  card.classList.add('todo__list-card');

  const postName = document.createElement('h2');
  postName.classList.add('todo__list__name');

  const postDesc = document.createElement('p');
  postDesc.classList.add('todo__list__desc');

  const imgPost = document.createElement('img');
  imgPost.classList.add('todo__list__link');

  const linkImg = document.createElement('a');
  linkImg.classList.add('todo__list__src');

  card.appendChild(postName);
  card.appendChild(postDesc);
  card.appendChild(imgPost);
  card.appendChild(linkImg);

  todoList.appendChild(card);

  postName.innerHTML = valuePostName;
  postDesc.innerHTML = valueDesc;
  imgPost.setAttribute('src', valueLinkImg);
  linkImg.setAttribute('href', valueSrcImg);
  linkImg.innerHTML = 'Ссылка на картинку';
};
