// 1) реализовать форму с 4 полями:
//     - название поста (input)
// - описание (textarea)
// - ссылка на картинку (input)
// - ссылка на источник (input)
// и одной кнопкой "добавить"
//
// при нажатии на кнопку добавить должна появляться карточка с указанным
// текстом, названием, картинкой и ссылкой на источник.
// Карточки должны быть стилизованы через css.
//
// 2) добавьте кнопку "удалить все карточки" которая должна удалять все карточки
//
// 3) * у каждой карточки добавьте кнопку для удаления именно этой карточки.

let cardsContainer = document.getElementById("cards-container");
let postName = document.getElementById('post-name');
let postDescr = document.getElementById('post-description');
let imgLink = document.getElementById('img-link');
let imgSource = document.getElementById('img-source');

let addButton = document.getElementById("add-button");
addButton.addEventListener('click', function () {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("centered");

    let image = document.createElement('div');
    image.classList.add('image');
    let img = document.createElement('img');

    let content = document.createElement('div');
    content.classList.add('content');

    let header = document.createElement('div');
    header.classList.add('header');

    let description = document.createElement('div');
    description.classList.add('description');

    let meta = document.createElement('a');

    let extraContent = document.createElement('div');
    extraContent.classList.add('extra');
    extraContent.classList.add('content');

    let extraContentLink = document.createElement('div');
    extraContentLink.classList.add('extra');
    extraContentLink.classList.add('content');

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('ui');
    deleteButton.classList.add('basic');
    deleteButton.classList.add('red');
    deleteButton.classList.add('button');
    deleteButton.innerText = "Удалить";

    cardsContainer.appendChild(card);
            card.appendChild(image);
                image.appendChild(img);
            card.appendChild(content);
                content.appendChild(header);
                content.appendChild(description);
            card.appendChild(extraContentLink);
                extraContentLink.appendChild(meta);
            card.appendChild(extraContent);
                extraContent.appendChild(deleteButton);

    img.setAttribute("src", imgLink.value);
    header.innerText = postName.value;
    description.innerText = postDescr.value;
    meta.setAttribute('href', imgSource.value);
    meta.innerText = "Источник картинки";

    deleteButton.addEventListener("click", function () {
        card.remove();
    })
});

let deleteAllButton = document.getElementById("delete-button");
deleteAllButton.addEventListener("click", function () {
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].remove();
    }
});