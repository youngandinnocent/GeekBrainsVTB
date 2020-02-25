window.addEventListener('load', () => {
    const body = document.querySelector('body');
    const form = document.createElement('form');

    const header = document.createElement('h2');
    header.innerText = 'Make post';
    header.classList.add('header');
    form.appendChild(header);

    const title = document.createElement('input');
    title.setAttribute('placeholder', 'Post title');
    title.classList.add('field');
    title.setAttribute('required', '');
    form.appendChild(title);

    const message = document.createElement('textarea');
    message.setAttribute('placeholder', 'Your message');
    message.classList.add('textarea');
    message.setAttribute('required', '');
    form.appendChild(message);

    const imgUrl = document.createElement('input');
    imgUrl.setAttribute('placeholder', 'Image link');
    imgUrl.classList.add('field');
    imgUrl.setAttribute('required', '');
    form.appendChild(imgUrl);

    const srcUrl = document.createElement('input');
    srcUrl.setAttribute('placeholder', 'Suorce link');
    srcUrl.classList.add('field');
    srcUrl.setAttribute('required', '');
    form.appendChild(srcUrl);

    const submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.innerText = 'ADD';
    submit.classList.add('submit');
    form.appendChild(submit);

    const deleteAll = document.createElement('button');
    deleteAll.setAttribute('type', 'reset');
    deleteAll.innerText = 'DELETE ALL';
    deleteAll.classList.add('reset');
    form.appendChild(deleteAll);

    const article = document.createElement('article');
    article.classList.add('article');

    form.classList.add('form');
    body.appendChild(form);
    body.appendChild(article);

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const data = {
            title: title.value,
            message: message.value,
            image: imgUrl.value,
            source: srcUrl.value
        };
        const card = document.createElement('div');
        card.classList.add('card');
        
        const cardTitle = document.createElement('h2');
        cardTitle.innerText = data.title;
        cardTitle.classList.add('cardTitle');
        card.appendChild(cardTitle);

        const cardMessage = document.createElement('p');
        cardMessage.innerText = data.message;
        card.appendChild(cardMessage);

        const cardImg = document.createElement('img');
        cardImg.setAttribute('src', data.image);
        card.appendChild(cardImg);

        const cardSrc = document.createElement('a');
        cardSrc.setAttribute('href', data.source);
        cardSrc.innerText = 'Source link';
        card.appendChild(cardSrc);

        const deleteCard = document.createElement('button');
        deleteCard.setAttribute('type', 'reset');
        deleteCard.innerText = 'DELETE';
        deleteCard.classList.add('reset');
        card.appendChild(deleteCard);

        article.appendChild(card);
        form.value = '';

        deleteCard.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.closest('.card').remove();
        });
    });

    deleteAll.addEventListener('click', () => {
        article.innerHTML = '';
    });
});
