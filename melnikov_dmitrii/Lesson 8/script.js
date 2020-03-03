'use strict';


let registrationForm = document.querySelector('.form');
let submit = registrationForm.querySelector('.form__submit');
let { name, email, password1, password2 } = registrationForm.elements;


name.addEventListener('input', validateUserName);
email.addEventListener('input', validateUserEmail);
password1.addEventListener('input', validateUserPasswordOne);
password2.addEventListener('input', validateUserPasswordTwo);
registrationForm.addEventListener('submit', handleSubmit);


function handleSubmit(evt) {
    evt.preventDefault();
    localStorage.setItem('users', JSON.stringify(
        [{
            name: name.value,
            email: email.value,
            password: password1.value
        }]
    ));
}

function validateUserName() {
    // Допустимы символы латиницы,кириллицы, цифры и _ от 5 до 10 символов
    let pattern = /^[A-Za-zА-Яа-яёЁ_]{5,10}$/;
    isValid(this, pattern, name.value);
}

function validateUserEmail() {
    // должен иметь вид example@domen.ru
    let pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    isValid(this, pattern, email.value);
}

function validateUserPasswordOne() {
    // (минимум 10 символов, обязательна одна цифра и одна буква капсом)
    let pattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{10,}/g;
    isValid(this, pattern, password1.value);
}

function validateUserPasswordTwo() {
    if (this.value === password1.value) {
        this.classList.add('form__field--valid');
        this.classList.remove('form__field--no-valid');
        this.valid = true;

        showInputIcon(this.id, 'field__icon--valid');
    } else {
        this.classList.add('form__field--no-valid');
        this.classList.remove('form__field--valid');
        this.valid = false;

        showInputIcon(this.id, 'field__icon--no-valid');
    }
    disabledButton();
}


function isValid(input, pattern, value) {
    if (pattern.test(value)) {
        input.classList.add('form__field--valid');
        input.classList.remove('form__field--no-valid');
        input.valid = true;

        showInputIcon(input.id, 'field__icon--valid');
    } else {
        input.classList.add('form__field--no-valid');
        input.classList.remove('form__field--valid');
        input.valid = false;

        showInputIcon(input.id, 'field__icon--no-valid');
    }
    disabledButton();
}

function disabledButton() {
    if (name.valid && email.valid && password1.valid && password2.valid) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
}

function showInputIcon(inputID, className) {
    let label = document.querySelector(`label[for="${inputID}"]`);
    label.className = className;
}