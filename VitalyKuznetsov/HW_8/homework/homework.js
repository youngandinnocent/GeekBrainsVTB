/* 1) необходимо реалзовать HTML форму регистрации со следующими полями

name (Допустимы символы латиницы,кириллицы, цифры и _ от 5 до 10 символов)
email (должен иметь вид example@domen.ru )
password1 (минимум 10 символов, обязательна одна цифра и одна буква капсом)
password2 (проверка совпадения с password1)

при верном указании значений логин почта и пароль должны сохраняться в localstorage в виде массива объектов (каждый объект это данные одного пользователя).

2) добавить стили при неверном вводе: 
- красная рамка и белый крестик в красном кругу справа при неверном вводе
- зеленая рамка и белая галочка в зеленом кругу справа при верном вводе

3) добавить анимацию. неверное поле при попытка submit должно анимированно отреагировать (вибрация, пульсация, на усмотрение ученика)

4*) username не должны быть частью другого username.
пример:

user и superuser не допустимо (user является частью superuser) */

let inputs = document.querySelectorAll('input');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const button = document.querySelector('#button');

let users = [];
console.log(users);
if (localStorage.users === '' || localStorage.users === undefined) {
    localStorage.setItem('users', users);
} else {
    users = JSON.parse(localStorage.users);
}
let userExists = true;

const patterns = {
    name: /^[а-яА-ЯёЁa-zA-Z0-9_]{5,9}$/,
    email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    password: /^(?=^.{10,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    password2: /^(?=^.{10,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
}

function validate(field, regex) {
    console.log(regex.test(field.value));
    if(regex.test(field.value)) {
        field.classList.add('is-valid');
        button.classList.remove('hvr-buzz-out');
        field.classList.remove('is-invalid')
    } else {
        field.classList.add('is-invalid');
        button.classList.add('hvr-buzz-out');
    }
}

button.addEventListener('submit', function(e) {
    console.log('Registered');
    e.preventDefault();
/*     users.push({ 
        name: name.value,
        email: email.value,
        password: password.value
    }); */
    localStorage.setItem('users', JSON.stringify([{
        name: name.value,
        email: email.value,
        password: password.value
    }]));
    
}); 

inputs.forEach(input => {
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});
