let input_container_elem = document.querySelector("form");
let login_button = document.getElementById("login-button");

let name_input_elem = document.getElementById("name-input");
let email_input_elem = document.getElementById("email-input");
let pass_input_elem = document.getElementById("pass-input");
let repeatPass_input_elem = document.getElementById("repeat-pass-input");

const userIcon = "user icon";
const mainIcon = "mail icon";
const passIcon = "lock icon";

let users = [];

input_container_elem.addEventListener("input", function () {
    let target = event.target;
    if (target.tagName === "INPUT") {
        let regExp;
        let error;
        switch (target.id) {
            case 'name-input':
                error = "Допустимы символы латиницы,кириллицы, цифры и _ от 5 до 10 символов";
                regExp = /^[a-zA-Zа-яА-Я0-9_]{5,10}$/;
                validateInput(name_input_elem, regExp, userIcon, error);
                validateNameInput();
                break;
            case 'email-input':
                error = "e-mail должен иметь вид example@domen.ru";
                regExp = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
                validateInput(email_input_elem, regExp, mainIcon, error);
                break;
            case 'pass-input':
                error = "минимум 10 символов, обязательна одна цифра и одна буква капсом";
                regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
                validateInput(pass_input_elem, regExp, passIcon, error);
                break;
            case 'repeat-pass-input':
                error = "Повторите пароль правильно!";
                regExp = new RegExp(`^${pass_input_elem.value}$`);
                validateInput(repeatPass_input_elem, regExp, passIcon, error);
                break;
        }
    }
});

login_button.addEventListener("click", function () {
    let input_fields = document.querySelectorAll(".field");
    let counter = 0;
    input_fields.forEach(function (field) {
        removeAnimation(field);
        if (field.className === "field error") {
            field.classList.add("swing");
            setTimeout(removeAnimation, 500, field);
        } else if (field.className === "field valid") {
            counter++;
        }
    });
    if (counter === 4) {
        let user = {};
        user.name = name_input_elem.value;
        user.mail = email_input_elem.value;
        user.pass = pass_input_elem.value;
        if (localStorage.getItem("users-array") == "") {
            users.push(user);
            localStorage.setItem("users-array", JSON.stringify(users));
        } else {
            users = JSON.parse(localStorage.getItem("users-array"));
            users.push(user);
            localStorage.setItem("users-array", JSON.stringify(users));
        }
    }
});

function removeAnimation(field) {
    field.classList.remove("swing");
}

function validateInput(input_elem, regExp, icon, error) {
    let inputIcon = input_elem.parentElement.querySelector(".icon");

    if (input_elem.value === "") {
        input_elem.parentElement.parentElement.classList.remove("error");
        input_elem.parentElement.parentElement.classList.remove("valid");
        inputIcon.className = icon;
        removeValidationError(input_elem);
    } else if (input_elem.value.match(regExp) === null) {
        input_elem.parentElement.parentElement.classList.add("error");
        input_elem.parentElement.parentElement.classList.remove("valid");
        inputIcon.className = "close icon";
        throwValidationError(input_elem, error);
    } else {
        input_elem.parentElement.parentElement.classList.remove("error");
        input_elem.parentElement.parentElement.classList.add("valid");
        inputIcon.className = "check icon";
        if (input_elem.parentElement.parentElement.querySelector(".ui.error.message") != null) {
            removeValidationError(input_elem);
        }
    }
}

function validateNameInput() {
    let inputIcon = name_input_elem.parentElement.querySelector(".icon");
    let error = "Допустимы символы латиницы,кириллицы, цифры и _ от 5 до 10 символов";
    let regExp = /^[a-zA-Zа-яА-Я0-9_]{5,10}$/;
    let users = JSON.parse(localStorage.getItem("users-array"));
    let usernames = [];
    users.forEach(user => {usernames.push(user.name)});

    if (name_input_elem.value === "") {
        name_input_elem.parentElement.parentElement.classList.remove("error");
        name_input_elem.parentElement.parentElement.classList.remove("valid");
        inputIcon.className = userIcon;
        removeValidationError(name_input_elem);
    } else if (name_input_elem.value.match(regExp) === null) {
        name_input_elem.parentElement.parentElement.classList.add("error");
        name_input_elem.parentElement.parentElement.classList.remove("valid");
        inputIcon.className = "close icon";
        throwValidationError(name_input_elem, error);
    } else if (usernames.includes(name_input_elem.value)) {
        name_input_elem.parentElement.parentElement.classList.add("error");
        name_input_elem.parentElement.parentElement.classList.remove("valid");
        inputIcon.className = "close icon";
        throwValidationError(name_input_elem, `Пользователь с таким именем уже существует!`);
    } else {
        name_input_elem.parentElement.parentElement.classList.remove("error");
        name_input_elem.parentElement.parentElement.classList.add("valid");
        inputIcon.className = "check icon";
        if (name_input_elem.parentElement.parentElement.querySelector(".ui.error.message") != null) {
            removeValidationError(name_input_elem);
        }
    }
}


function throwValidationError(input_elem, error) {
    let flag = input_elem.parentElement.parentElement.querySelector(".ui.error.message");
    if (flag !== null) {
        return 0;
    } else {
        let error_elem = document.createElement('div');
        error_elem.classList.add("ui");
        error_elem.classList.add("error");
        error_elem.classList.add("message");
        error_elem.innerHTML = `
            <div class="header">Validation Error!</div>
            <p>${error}</p>
        `;
        input_elem.parentElement.parentElement.appendChild(error_elem);
    }
}

function removeValidationError(input_elem) {
    let error_elem = input_elem.parentElement.parentElement.querySelector(".ui.error.message");
    error_elem.remove();
}


