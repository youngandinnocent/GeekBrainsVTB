let page = 1;

// const {email, password} = form.elements;
// email.value

function cardRender(pageId) {
    let rootElem = document.getElementById('root');
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page="+pageId, true);
    xhr.onload = function(){
        let resp = xhr.responseText;
        let respTo = JSON.parse(resp)
        // let userID =
        //console.log(xhr.responseText);
        if (respTo.data.length) {
            for (let i in respTo.data) {
                //console.log(respTo.data[i]["id"] + " - " + respTo.data[i]["first_name"] + " - " + respTo.data[i]["last_name"] + " - " + respTo.data[i]["email"]);
                let newCard = document.createElement('div');//create task
                newCard.classList.add('user-card');
                rootElem.appendChild(newCard);
                newCard.setAttribute('user-id', respTo.data[i]["id"]);
                newCard.innerHTML = `
            <div class="card_wrap">
                <h1 class ="card_title">User № ${respTo.data[i]["id"]}</h1>
                    <p class = "card_name">${respTo.data[i]["first_name"]} ${respTo.data[i]["last_name"]}</p>
                    <p class = "card_email">${respTo.data[i]["email"]}</p>
                    <img class="card_photo" src="${respTo.data[i]["avatar"]}" width="130" height="130">
            </div>
            <input type="button" value="Удалить" class="card_btn-del" onclick="removeCard(this)">`
            }
        } else {
            if (!document.getElementsByClassName('error').length) {
                rootElem.innerHTML +=  "<div class='error'>Контента больше нет</div>";
            }
        }
    };
    xhr.send();
}

window.onload = function () {
    cardRender(page);
}
window.addEventListener("scroll", function(){
    let block = document.getElementById('root');
    let counter = 1;
    let contentHeight = block.offsetHeight;      // 1) высота блока контента вместе с границами
    let yOffset       = window.pageYOffset;      // 2) текущее положение скролбара
    let window_height = window.innerHeight;      // 3) высота внутренней области окна документа
    let y             = yOffset + window_height + 100;

    if(y >= contentHeight)
    {
        cardRender(++page)
    }
});

//реализовать кнопку удаления у каждой карточки пользователя, которая отправляет запрос на удаление на сервер и при успешном ответе удаляет элемент из DOM
function  removeCard(elem) {
    let userId = parseInt(elem.getAttribute('id'));
    fetch(`https://reqres.in/api/users?id=${userId}`)
        .then(response => response.ok).then(() => {
            elem.closest('.user-card').remove();
        })
}

//реализовать форму по добавлению карточки пользователя. Данные из формы отправляются на сервер и при положительном ответе элемент должен рендериться в DOM

document.querySelector('.card_form').addEventListener('submit', (ev) => {
    ev.preventDefault();
    let newObj = {};
    document.querySelectorAll('.card_form label>input').forEach(newCard => {
        newObj[newCard.name] = newCard.value
    });
    document.querySelectorAll('.user-card').forEach(userCard => {
        console.log(userCard.getAttribute("user-id"))
    });


    createUser(newObj).then(status => {
        if(status === 201) {
            let maxID = 1;
            document.querySelectorAll('.user-card').forEach(userCard=> {
                //maxID = Math.max(newCard.id, maxID);
                newObj.id = Math.max(userCard.getAttribute("user-id"), maxID) + 1;
            })
            document.body.prepend(getUserElem(newObj));
        }
    })
})

function createUser(userObj) {
    return fetch(`https://reqres.in/api/users`, {
        method: 'POST',
        data: userObj
    }).then(res => res.status)
}

function getUserElem(obj) {
    let rootElem = document.getElementById('root');
    let newCard = document.createElement('div');
    newCard.classList.add('user-card');
    rootElem.appendChild(newCard);
    newCard.setAttribute('user-id', obj.id);
    newCard.innerHTML = `<div class="card_wrap">
        <h1 class ="card_title">User № ${obj.id}</h1>
    <p class = "card_name">${obj.name} ${obj.lastname}</p>
        <p class = "card_email">${obj.email}</p>
        <img class="card_photo" src="${obj.avatar}" width="130" height="130">
    </div>
    <input type="button" value="Удалить" class="card_btn-del" onclick="removeCard(this)">`;

    return false
}




















