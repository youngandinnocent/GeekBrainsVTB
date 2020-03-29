let commonPassword = '';
let successFields = [];
const form = document.querySelector('.form');
const btn = document.querySelector('.form__submit');

const inputName = document.querySelector('.form__name');
const inputEmail = document.querySelector('.form__email');
const inputPassword = document.querySelector('.form__password');
const inputCheckPassword = document.querySelector('.form__checkpassword');
const successField = document.querySelector('.success_registration');

let errorsFields = {
  name: false,
  email: false,
  password: false,
  check_password: false,
};

// Events

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const { name, email, password, check_password } = this.elements;

  if (!errorsFields.name || name.value === '') {
    toggleField(name, 'fail', 'success');
    shackerButton(inputName);
  }

  if (!errorsFields.email || email.value === '') {
    toggleField(email, 'fail', 'success');
    shackerButton(inputEmail);
  }

  if (!errorsFields.password || password.value === '') {
    toggleField(password, 'fail', 'success');
    shackerButton(inputPassword);
  }

  if (!errorsFields.check_password || check_password.value === '') {
    toggleField(check_password, 'fail', 'success');
    shackerButton(inputCheckPassword);
  }

  if (
    !errorsFields.name ||
    !errorsFields.email ||
    !errorsFields.password ||
    !errorsFields.check_password
  ) {
    return;
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];

  users.push({
    name: name.value,
    email: email.value,
    password: password.value,
  });

  localStorage.setItem('users', JSON.stringify(users));

  showSuccessRegistration();

  clearField(inputName, 'success');
  clearField(inputEmail, 'success');
  clearField(inputPassword, 'success');
  clearField(inputCheckPassword, 'success');

  inputName.value = '';
  inputEmail.value = '';
  inputPassword.value = '';
  inputCheckPassword.value = '';

  for (let key in errorsFields) {
    errorsFields[key] = false;
  }
});

inputName.addEventListener('input', function(e) {
  const value = e.currentTarget.value;
  const pattern = /^[а-яЁё\w]{5,10}$/i;
  if (!value) {
    clearField(this, 'fail');
    clearField(this, 'success');
    return;
  }

  if (value.match(pattern) && !checkUser(value)) {
    toggleField(this, 'success', 'fail');
    errorsFields.name = true;
  } else {
    toggleField(this, 'fail', 'success');
    errorsFields.name = false;
  }
});

inputEmail.addEventListener('input', function(e) {
  const value = e.currentTarget.value;
  const pattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  if (!value) {
    clearField(this, 'fail');
    clearField(this, 'success');
    return;
  }

  if (value.match(pattern)) {
    toggleField(this, 'success', 'fail');
    errorsFields.email = true;
  } else {
    toggleField(this, 'fail', 'success');
    errorsFields.email = false;
  }
});

inputPassword.addEventListener('input', function(e) {
  const value = e.currentTarget.value;
  const pattern = /^(?=.*[A-Z])(?=.*\d)(?!.*\s)[\w!@#$%^&]{10,}$/;
  if (!value) {
    clearField(this, 'fail');
    clearField(this, 'success');
    return;
  }

  if (value.match(pattern)) {
    toggleField(this, 'success', 'fail');
    commonPassword = value;
    errorsFields.password = true;
  } else {
    toggleField(this, 'fail', 'success');
    errorsFields.password = false;
  }
});

inputCheckPassword.addEventListener('input', function(e) {
  const value = e.currentTarget.value;
  if (!value) {
    clearField(this, 'fail');
    clearField(this, 'success');
    return;
  }

  if (value === commonPassword) {
    toggleField(this, 'success', 'fail');
    errorsFields.check_password = true;
  } else {
    toggleField(this, 'fail', 'success');
    errorsFields.check_password = false;
  }
});

// Methods
const toggleField = (elem, clazz1, clazz2) => {
  elem.classList.add(clazz1);
  elem.classList.remove(clazz2);
  elem.previousElementSibling.classList.add(`form__icon_${clazz1}`);
  elem.previousElementSibling.classList.remove(`form__icon_${clazz2}`);
};

const clearField = (elem, clazz) => {
  elem.classList.remove(clazz);
  elem.previousElementSibling.classList.remove(`form__icon_${clazz}`);
};

const shackerButton = elem => {
  elem.classList.add('shake');
  setTimeout(() => {
    elem.classList.remove('shake');
  }, 1000);
};

const showSuccessRegistration = () => {
  successField.classList.add('show');

  setTimeout(() => {
    successField.classList.remove('show');
  }, 2000);
};

const checkUser = user => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const pattern = new RegExp(`^${user}`);
  for (let i = 0; i < users.length; i++) {
    if (pattern.test(users[i].name)) {
      return true;
    }
  }

  return false;
};
