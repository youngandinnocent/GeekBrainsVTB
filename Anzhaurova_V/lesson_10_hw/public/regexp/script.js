
let btnSubmit = document.getElementById('uf-btn--submit');
let loginElem = document.querySelector('#login');

function getFormData() {
    let login= document.getElementById('login');
    let email = document.getElementById('email');
    let pass = document.getElementById('pass');
    return {
        "login" : login.value,
        "email" : email.value,
        "pass" : pass.value
    };
}


function check1(){
    let value = loginElem.value;
    let pattern = /^[a-zA-Zа-яёА-Яё0-9_]{5,10}$/;
    if (pattern.test(value)) {
        loginElem.style.border = '5px solid green';
        return 0;
    }else {
        loginElem.style.border = '5px solid red';
        return  1;
    }
}
loginElem.addEventListener('input', check1);

let emailElem = document.querySelector('#email');
function check2(){
    let value = emailElem.value;
    let pattern = /^[a-z]+@[a-z]{2,6}\.[a-z]{2,4}$/i;
    if (pattern.test(value)) {
        emailElem.style.border = '5px solid green';
        return 0;
    }else {
        emailElem.style.border = '5px solid red';
        return  1;
    }
}
emailElem.addEventListener('input', check2);

let passElem = document.querySelector('#pass');
function check3() {
    let value = passElem.value;
    let pattern = /^(?=.*?[A-Z])(?=.*?[0-9]).{10,}$/;
    if (pattern.test(value)) {
        passElem.style.border = '5px solid green';
        return  0;
    }else {
        passElem.style.border = '5px solid red';
        return  1;
    }
}
passElem.addEventListener('input', check3);


let passTwoElem = document.querySelector('#passwordTwo')
function check4() {
    let thisVal = passTwoElem.value;
    let passElem = document.querySelector('#pass').value;
    if (thisVal == passElem && thisVal.length > 3) {
        passTwoElem.style.border = '5px solid green';
        return  0;
    } else {
        passTwoElem.style.border = '5px solid red';
        return  1;
    }

}
passTwoElem.addEventListener('input', check4);

function errorCounter() {
    let res = Number(check1())+Number(check2())+Number(check3())+Number(check4());
    console.log(res)
    if (res === 0) {
        document.getElementById('uf-btn--submit').removeAttribute("disabled");
    } else {
        if (document.getElementById('uf-btn--submit').getAttribute("disabled")) {
            document.getElementById('uf-btn--submit').setAttribute("disabled");
        }
    }
    return res;
}
function createObj(obj) {
    let userForms = [];
    if (localStorage.getItem("userInfo") != undefined) {
        userForms = JSON.parse(localStorage.getItem("userInfo"));
    }
    userForms.push(obj)
    localStorage.setItem("userInfo", JSON.stringify(userForms));
}

btnSubmit.addEventListener('click',  (ev) => {
    ev.preventDefault();
    let userInfo = getFormData();
    createObj(userInfo);
});

