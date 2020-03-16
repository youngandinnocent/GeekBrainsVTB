// тянем из DOM инпуты и создаем элементы-предупреждения
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const verification = document.getElementById('verification');

const circle = document.createElement('div');
const notice = document.createElement('p');
form.append(circle, notice);

// парсим юзеров из локалстореджа и преобразовываем в строку по именам (будем проверять совпадения)
const users = JSON.parse(localStorage.getItem(["users"])) || [];
const usersToString = users.length > 0 ? users.reduce((acc, user) => `${acc} ${user.name}`, '') : '';

const isValidForm = { username, email, password, verification }; // статус валидации по всем инпутам

// главная функция, реализует логику работы формы
const app = () => {
  // прикладная функция, проверяет ввод на паттерны и сообщает пользователю статус 
  const validation = (elem, pattern) => {
    const value = elem.value;
    if (!value) {
      elem.style.border = 'none';
      circle.className = 'none';

    } else if (pattern.test(value)) {
      elem.style.border = '2px solid green';
      circle.textContent = 'v';
      circle.className = 'green';
      return true;

    } else {
      elem.style.border = '2px solid red';
      circle.textContent = 'x';
      circle.className = 'red';
      return false;
    }
  };

  // вешаем обработчик на ввод имени, проверяем совпадения в сторедже
  // и если их нет, отправляем на валидацию по заданному паттерну
  username.addEventListener('input', (e) => {
    const usernameExist = new RegExp(`\\w*${e.target.value}\\w*`, 'g');
    if (e.target.value && usersToString.match(usernameExist)) {
      notice.className = 'warning';
      notice.textContent = 'Such username already exist';
      notice.style.top = '50px';
      isValidForm.username = validation(e.target, new RegExp('false'));
    } else {
      notice.className = 'none';
      const pattern = /^(\w|[а-яё]){5,10}$/i;
      isValidForm.username = validation(e.target, pattern);
    }
    circle.classList.add('usernameCircle');
  });

  // аналогично по имейлу
  email.addEventListener('input', (e) => {
    const isNotUnicEmail = users.find((user) => user.email === e.target.value);
    if (isNotUnicEmail) {
      notice.className = 'warning';
      notice.textContent = 'Such username already exist';
      notice.style.top = '97px';
      isValidForm.email = validation(e.target, new RegExp('false'));
    } else {
      notice.className = 'none';
      const pattern = /^\w+@[a-z\d]+?(?<!\.)\.ru$/i;
      isValidForm.email = validation(e.target, pattern);
    }
    circle.classList.add('emailCircle');
  });

  // пароль отправляем на валидацию, а также контролим статус по верификации (следующее поле)
  // в случае изменения пароля после валидации верификации
  password.addEventListener('input', (e) => {
    const pattern = /(?=.*\d)(?=.*[A-Z]).{10,}/;
    isValidForm.password = validation(e.target, pattern);

    if (verification.value && verification.value === password.value) {
      isValidForm.verification = validation(verification, new RegExp(`${verification.value}`));
    } else if (verification.value && verification.value !== password.value) {
      isValidForm.verification = validation(verification, new RegExp('false'));
    }
    circle.classList.add('passwordCircle');
  });

  // сверяем пароль (используем функцию валидации с кастомными паттернами для получения true или false)
  verification.addEventListener('input', (e) => {
    if (password.value && e.target.value === password.value) {
      isValidForm.verification = validation(e.target, new RegExp(`${e.target.value}`));
    } else {
      isValidForm.verification = validation(e.target, new RegExp('false'));
    }
    circle.classList.add('verificationCircle');
  });

  // вешаемся на сабмит
  button.addEventListener('click', (e) => {
    if (isValidForm.username === true
      && isValidForm.email === true
      && isValidForm.password === true
      && isValidForm.verification === true) { // если статус валидации по всем инпутам положительный

        // создаем объект с данными юзера и добавляем в локалсторедж
        const data = {
          name: username.value,
          email: email.value,
          password: password.value
        };

        users.push(data);

        localStorage.setItem('users', JSON.stringify(users));

    // если статус валидации отрицательный хотя бы по одному инпуту,
    // делаем анимацию вибрации у текущего инпута по порядку сверху
    } else {
      e.preventDefault();
      if (isValidForm.username !== true) {
        username.classList.add('vibration');
        setInterval(() => username.classList.remove('vibration'), 700);
      } else if (isValidForm.email !== true) {
        email.classList.add('vibration');
        setInterval(() => email.classList.remove('vibration'), 700);
      } else if (isValidForm.password !== true) {
        password.classList.add('vibration');
        setInterval(() => password.classList.remove('vibration'), 700);
      } else if (isValidForm.verification !== true) {
        verification.classList.add('vibration');
        setInterval(() => verification.classList.remove('vibration'), 700);
      }
    }
  });
};

app();