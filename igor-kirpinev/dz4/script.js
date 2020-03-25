/* Функции */

// Добавляет карточки из массива
(function() {
  const initialCards = [
    {
      name: "Архыз",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
    },
    {
      name: "Челябинская область",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
    },
    {
      name: "Иваново",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
    },
    {
      name: "Камчатка",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
    },
    {
      name: "Холмогорский район",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
    },
    {
      name: "Байкал",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
    },
    {
      name: "Нургуш",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg"
    },
    {
      name: "Тулиновка",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg"
    },
    {
      name: "Остров Желтухина",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg"
    },
    {
      name: "Владивосток",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg"
    }
  ];

  initialCards.forEach(function(object) {
    document
      .querySelector(".places-list")
      .appendChild(createPlace(object.name, object.link));
  });
})();

// Создаёт элемент карточки и возвращает его
function createPlace(placeText, placeBackground, descriptionText, sourceText) {
  const placeCard = document.createElement("div");
  const placeImage = document.createElement("div");
  const deletePlaceButton = document.createElement("button");
  const descriptionContainer = document.createElement("div");
  const placeName = document.createElement("h3");
  const description = document.createElement("p");
  const source = document.createElement("p");

  placeCard.classList.add("place-card");
  placeImage.classList.add("place-card__image");
  placeImage.setAttribute(`style`, `background-image: url(${placeBackground})`);
  deletePlaceButton.classList.add("place-card__delete-icon");
  descriptionContainer.classList.add("place-card__description");
  placeName.classList.add("place-card__name");
  placeName.textContent = placeText;
  description.classList.add("place-card__description");
  description.textContent = descriptionText;
  source.classList.add("place-card__source");
  source.textContent = sourceText;

  placeImage.appendChild(deletePlaceButton);

  descriptionContainer.appendChild(placeName);
  descriptionContainer.appendChild(description);
  descriptionContainer.appendChild(source);

  placeCard.appendChild(placeImage);
  placeCard.appendChild(descriptionContainer);

  return placeCard;
}

// Добавляет элемент песни
function addPlace(event) {
  event.preventDefault();

  const name = document.forms.new.elements.name;
  const about = document.forms.new.elements.about;
  const link = document.forms.new.elements.link;
  const source = document.forms.new.elements.source;

  document
    .querySelector(".places-list")
    .appendChild(
      createPlace(name.value, about.value, link.value, source.value)
    );

  document.forms.new.reset();

  document.querySelector(".popup").setAttribute(`style`, `display: none;`);
}

/* Слушатели событий */

// Открытие формы
document
  .querySelector(".user-info__button")
  .addEventListener("click", function(event) {
    document.querySelector(".popup").setAttribute(`style`, `display: flex;`);
    document.querySelector(".popup__content");
  });

// Удаление карточек
document
  .querySelector(".user-info__button_type_del")
  .addEventListener("click", event => {
    document.querySelector(".places-list").innerHTML = "";
  });

// Закрытие формы
document
  .querySelector(".popup__content")
  .addEventListener("click", function(event) {
    if (event.target.classList.contains("popup__close")) {
      document.querySelector(".popup").setAttribute(`style`, `display: none;`);
    }
  });

// Лайки и удаление карточки
document
  .querySelector(".places-list")
  .addEventListener("click", function(event) {
    if (event.target.classList.contains("place-card__delete-icon")) {
      document
        .querySelector(".places-list")
        .removeChild(event.target.closest(".place-card"));
    }
  });

// Добавление карточки через форму
document.forms.new.addEventListener("submit", addPlace);
