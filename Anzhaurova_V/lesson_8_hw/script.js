/* реализовать HTML форму регистрации со следующими полями:
-name	(Допустимы символы латиницы,кириллицы, цифры и _ от 5 до 10 символов)
-email	(должен иметь вид example@domen.ru )
-password1 (минимум 10 символов, обязательна одна цифра и одна буква капсом)
-password2 (проверка совпадения с password1)
при верном указании значений логин почта и пароль должны сохраняться в localstorage в виде массива объектов (каждый объект это данные одного пользователя).
2) добавить стили при неверном вводе:
- красная рамка и белый крестик в красном кругу справа при неверном вводе
- зеленая рамка и белая галочка в зеленом кругу справа при верном вводе
3) добавить анимацию. неверное поле при попытка submit должно анимированно отреагировать (вибрация, пульсация, на усмотрение ученика)
4*) username не должны быть частью другого username.
    пример:
user и superuser не допустимо (user является частью superuser)*/

//массив в котором будут объекты с формами
let userForms = [];

//получаем данные из форм
let login= document.getElementById('login');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let pass2 = document.getElementById('passwordTwo');
let btnSubmit = document.getElementById('uf-btn--submit');

//регулярки для валидации login
// Допустимы символы латиницы,кириллицы, цифры и _ от 5 до 10 символов
let loginElem = document.querySelector('#login');
function check1(){
    let value = loginElem.value;
    let pattern = /^[a-zA-Zа-яёА-Яё0-9_]{5,10}$/;
    if (pattern.test(value)) {
        loginElem.style.border = '5px solid green';
    }else {
        loginElem.style.border = '5px solid red';
    }
}
loginElem.addEventListener('input', check1);

//регулярки для валидации email
// должен иметь вид example@domen.ru
let emailElem = document.querySelector('#email');
function check2(){
    let value = emailElem.value;
    let pattern = /^[a-z]+@[a-z]{2,6}\.[a-z]{2,4}$/i;
    if (pattern.test(value)) {
        emailElem.style.border = '5px solid green';
    }else {
        emailElem.style.border = '5px solid red';
    }
}
emailElem.addEventListener('input', check2);

//регулярки для валидации password
//минимум 10 символов, обязательна одна цифра и одна буква капсом
let passElem = document.querySelector('#pass');
function check3() {
    let value = passElem.value;
    let pattern = /^(?=.*?[A-Z])(?=.*?[0-9]).{10,}$/;
    if (pattern.test(value)) {
        passElem.style.border = '5px solid green';
    }else {
        passElem.style.border = '5px solid red';
    }
}
passElem.addEventListener('input', check3);

//навешиваем событие по клику на кнопку submit
btnSubmit.addEventListener('click',  (ev) => {
    ev.preventDefault();
    let userInfo = {};
});

//объект c данными формы
let userInfo = {
    "login" : login.value,
    "email" : email.value,
    "pass" : pass.value
};

//запихиваем в массив объекты
function createObj() {
    let userForms = [];
    userForms.push(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userForms));

    if (localStorage.getItem("userInfo") !== undefined) {
        userForms = JSON.parse(localStorage.getItem("userInfo"));
    }

}

