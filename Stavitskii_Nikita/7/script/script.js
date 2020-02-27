let rootElem = document.getElementById('root');

let formDiv = document.createElement('div');
let cardDiv = document.createElement('div');
let form = document.createElement('form');
formDiv.setAttribute('id', 'form-block')
rootElem.append(formDiv);
rootElem.append(cardDiv);
formDiv.append(form);
form.setAttribute('id', 'form-content');

let emailField = document.createElement('input');
let firstnameField = document.createElement('input');
let lastnameField = document.createElement('input');
let imageUrl = document.createElement('input');
let submit = document.createElement('input');

form.setAttribute('name', 'main-form');
emailField.classList.add('email-field');
emailField.setAttribute('placeholder', 'Enter your email');
firstnameField.classList.add('email-field');
firstnameField.setAttribute('placeholder', 'Enter your firstname');
lastnameField.classList.add('email-field');
lastnameField.setAttribute('placeholder', 'Enter your lastname');
imageUrl.classList.add('image-url')
imageUrl.setAttribute('placeholder', 'Add image source');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Create user');
submit.classList.add('submit-btn')

form.append(emailField);
form.append(firstnameField);
form.append(lastnameField);
form.append(imageUrl);
form.append(submit);

submit.addEventListener('click', (event) => {
    event.preventDefault();
    let newUser = { 
        email: emailField.value,
        first_name: firstnameField.value,
        last_name: lastnameField.value,
        avatar: imageUrl.value
    }

    fetch(`https://reqres.in/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        if (response.status === 201) {
            let cardElem = document.createElement('div');
            let cardText = document.createElement('div');
            let imgElem = document.createElement('img');
            let emailElem = document.createElement('p');
            let nameElem = document.createElement('p');
            let lastnameElem = document.createElement('p');
            let rmvBtn = document.createElement('button');
    
            imgElem.setAttribute('src', `${newUser.avatar}`);
            imgElem.classList.add('avatar');
            emailElem.innerText = `Email: ${newUser.email}`;
            nameElem.innerText = `Name: ${newUser.first_name}`;
            lastnameElem.innerText = `Lastname: ${newUser.last_name}`;
            rmvBtn.innerText = 'Remove user';
            rmvBtn.setAttribute('class', 'rmv-btn');
            cardElem.setAttribute('class', 'card-elem');
            cardText.setAttribute('class', 'card-text');
    
            cardDiv.prepend(cardElem);
            cardElem.append(imgElem);
            cardElem.append(cardText);
            cardText.append(emailElem);
            cardText.append(nameElem);
            cardText.append(lastnameElem);
            cardText.append(rmvBtn);

            rmvBtn.addEventListener('click', (event) => {
                fetch(`https://reqres.in/api/users?page=1`, { //вместо "1" должен быть id созданной карточки, но поскольку 
                                                              //данные на серверене меняются, получить его мы не можем
                    method: 'DELETE'
                })
                    .then(response => {
                        if (response.status === 204) {
                            event.target.parentNode.parentNode.remove();
                        }
                    })
            })
        }
    }, error => console.log(error));
})

let getPage = pageId => {
    fetch(`https://reqres.in/api/users?page=${pageId}`)
    .then(resp => { 
        return resp.json();
    }, error => console.log(error))
    .then(resp => resp.data, error => console.log(error))
    .then(resp => resp.forEach(element => {
        let cardElem = document.createElement('div');
        let cardText = document.createElement('div');
        let imgElem = document.createElement('img');
        let emailElem = document.createElement('p');
        let nameElem = document.createElement('p');
        let lastnameElem = document.createElement('p');
        let rmvBtn = document.createElement('button');

        imgElem.setAttribute('src', `${element.avatar}`);
        imgElem.classList.add('avatar');
        emailElem.innerText = `Email: ${element.email}`;
        nameElem.innerText = `Name: ${element.first_name}`;
        lastnameElem.innerText = `Lastname: ${element.last_name}`;
        rmvBtn.innerText = 'Remove user';
        rmvBtn.setAttribute('class', 'rmv-btn');
        cardElem.setAttribute('class', 'card-elem');
        cardText.setAttribute('class', 'card-text');

        cardDiv.append(cardElem);
        cardElem.append(imgElem);
        cardElem.append(cardText);
        cardText.append(emailElem);
        cardText.append(nameElem);
        cardText.append(lastnameElem);
        cardText.append(rmvBtn);

        rmvBtn.addEventListener('click', (event) => {
            fetch(`https://reqres.in/api/users?page=${element.id}`, {
                method: 'DELETE'
            })
                .then(response => {
                    console.log(response.status)
                    if (response.status === 204) {
                        event.target.parentNode.parentNode.remove();
                    }
                })
        })
    }), error => console.log(error))
}

let pageId = 1;
let canLoad = false;

getPage(pageId);

window.addEventListener('scroll', () => {
    if (Math.ceil(window.scrollY) >= (document.documentElement.offsetHeight - window.innerHeight - 100)) { //TODO start event 100px higher
        canLoad = true;
        setTimeout(() => {
            if (canLoad) {
                pageId++;
                getPage(pageId);
                canLoad = false;
            }
        }, 80);
    }
})
