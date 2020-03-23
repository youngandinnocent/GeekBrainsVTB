let form = document.getElementById('postForm');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const pass1 = document.querySelector('#pass1');
const pass2 = document.querySelector('#pass2');
let error = {
    name: false,
    email: false,
    pass1: false,
    pass2: false
}
const key = 'dataUser';

function validate(node) {
    const id = node.id;
    const value = node.value;
    let pattern = '';

    switch (id) {
        case 'name':
            pattern = /^[а-яё\w]{5,10}$/i;
            error.name = pattern.test(value) ? true : false;
            break;
        case 'email':
            pattern = /^\w+@\w+\.\w+$/;
            error.email = pattern.test(value) ? true : false;
            break;
        case 'pass1':
            pattern = /^(?=.*[A-ZА-ЯЁ])(?=.*\d).{10,}$/;
            error.pass1 = pattern.test(value) ? true : false;
            break;
        case 'pass2':
            error.pass2 = (document.querySelector('#pass1').value === value) ? true : false;
            break;
        default:
            break;
    }

    if (error[id]) {
        node.parentNode.classList.remove('wrong');
        node.parentNode.classList.add('right');
    }
    else {
        node.parentNode.classList.remove('right');
        node.parentNode.classList.add('wrong');
    }
}

name.addEventListener('input', function () { validate(this) });
email.addEventListener('input', function () { validate(this) });
pass1.addEventListener('input', function () { validate(this) });
pass2.addEventListener('input', function () { validate(this) });

function formSubmit() {
    event.preventDefault();

    let validForm = true;
    Object.keys(error).forEach(elem => {    // все ли поля валидны
        if (error[elem])
            document.getElementById(elem).classList.remove('pulse');
        else {
            validForm = false;
            document.getElementById(elem).classList.add('pulse');
        }
    });

    if (validForm) {    // username не должны быть частью другого username
        let arrData = JSON.parse(localStorage.getItem(key)) || [];
        for (let i = 0; i < arrData.length; i++) {
            let regex = new RegExp('' + name.value + '', 'ig');
            if (regex.test(arrData[i].name)) {
                validForm = false;
                break;
            }
        }
        arrData.push({
            name: name.value,
            email: email.value,
            password: pass1.value
        });

        if (validForm)
            localStorage.setItem(key, JSON.stringify(arrData));
    }
}

document.getElementById("postForm").addEventListener('submit', formSubmit);