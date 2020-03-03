let nameElem = document.getElementById('name');
let emaiElem = document.getElementById('email');
let passwordElem = document.getElementById('password1');
let passwordCheckElem = document.getElementById('password2');
let submit = document.getElementById('submit-btn');
let users = [];
let isUserValid = false;
let isEmailValid = false;
let isPwValid = false;
let isPwCheckValid = false;
let userExists = false;

if (localStorage.users === '' || localStorage.users === undefined) {
    localStorage.setItem('users', users);
} else {
    users = JSON.parse(localStorage.users);
}

function checkName() {
    let icon = nameElem.nextElementSibling;
    let pattern = /^[а-ёa-z0-9_]{5,10}$/gi;
    if (pattern.test(nameElem.value)) {
        nameElem.style.border = '2px solid green';
        isUserValid = true;
        icon.classList.add('success');
        icon.classList.remove('failure');
    } else {
        nameElem.style.border = '2px solid red';
        icon.classList.add('failure');
        isUserValid = false;
    }
}

function checkEmail() {
    let icon = emaiElem.nextElementSibling;
    let pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    if (pattern.test(emaiElem.value)) {
        emaiElem.style.border = '2px solid green';
        isEmailValid = true;
        icon.classList.add('success');
        icon.classList.remove('failure');
    } else {
        emaiElem.style.border = '2px solid red';
        icon.classList.add('failure');
        isEmailValid = false;
    }
}

function checkPassword() {
    let icon = passwordElem.nextElementSibling;
    let pattern = /(?=.*[A-Z])(?=.*[\d]).{10,}/;
    if (pattern.test(passwordElem.value)) {
        passwordElem.style.border = '2px solid green';
        isPwValid = true;
        icon.classList.add('success');
        icon.classList.remove('failure');
    } else {
        passwordElem.style.border = '2px solid red';
        icon.classList.add('failure');
        isPwValid = false;
    }
    isPwSame();
}

function isPwSame() {
    let icon = passwordCheckElem.nextElementSibling;
    let pattern = new RegExp(`^${passwordElem.value}$`, 'g');
    if (pattern.test(passwordCheckElem.value)) {
        passwordCheckElem.style.border = '2px solid green';
        isPwCheckValid = true;
        icon.classList.add('success');
        icon.classList.remove('failure');
    } else {
        passwordCheckElem.style.border = '2px solid red';
        icon.classList.add('failure');
        isPwCheckValid = false;
    }
}

function submitForm(event) {
    if (!isUserValid) {
        nameElem.classList.add('failed');
        setTimeout(() => {
            nameElem.classList.remove('failed')
        }, 500);
    }
    if (!isEmailValid) {
        emaiElem.classList.add('failed');
        setTimeout(() => {
            emaiElem.classList.remove('failed')
        }, 500);
    }
    if (!isPwValid) {
        passwordElem.classList.add('failed');
        setTimeout(() => {
            passwordElem.classList.remove('failed')
        }, 500);
    }
    if (!isPwCheckValid) {
        passwordCheckElem.classList.add('failed');
        setTimeout(() => {
            passwordCheckElem.classList.remove('failed')
        }, 500);
    }


    if (isUserValid && isEmailValid && isPwValid && isPwCheckValid) {
        users.forEach((user) => {
            let pattern = new RegExp(`${nameElem.value}`);
            let reversePattern = new RegExp(`${user.username}`);
            let icon = nameElem.nextElementSibling;
            if (pattern.test(user.username) || reversePattern.test(nameElem.value)) {
                console.log('User exists');
                userExists = true;
                nameElem.style.border = '2px solid red';
                icon.classList.add('failure');
                isUserValid = false;
                nameElem.classList.add('failed');
                setTimeout(() => {
                    nameElem.classList.remove('failed')
                }, 500);
            }
        })
        if (!userExists) {
            console.log('Registered');
            users.push({
                username: nameElem.value,
                email: emaiElem.value,
                password: passwordElem.value
            });
            localStorage.setItem('users', JSON.stringify(users));
        }
    }

    submit.addEventListener('click', submitForm);
    event.preventDefault();
}

nameElem.addEventListener('input', checkName);
emaiElem.addEventListener('input', checkEmail);
passwordElem.addEventListener('input', checkPassword);
passwordElem.addEventListener('input', isPwSame);
passwordCheckElem.addEventListener('input', isPwSame);
submit.addEventListener('click', submitForm);