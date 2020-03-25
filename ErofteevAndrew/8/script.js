const namePattern = /^[a-zA-Zа-яёА-Яё0-9_]{5,10}$/;
const emailPattern = /^[a-z]+@[a-z]{2,6}\.[a-z]{2,4}$/i;
const password1Pattern = /^(?=.*?[A-Z])(?=.*?[0-9]).{10,}$/;
let password2Pattern;

let nameInputElem = document.querySelector('.form__input--name');
let emailInputElem = document.querySelector('.form__input--email');
let password1InputElem = document.querySelector('.form__input--password1');
let password2InputElem = document.querySelector('.form__input--password2');
let formElem = document.querySelector('form');
let inputElems = document.querySelectorAll('.form__input');

nameInputElem.addEventListener('input', () => validateElem(nameInputElem, namePattern));
emailInputElem.addEventListener('input', () => validateElem(emailInputElem, emailPattern));
password1InputElem.addEventListener('input', () => {
	validateElem(password1InputElem, password1Pattern);
	password2Pattern = new RegExp(`\^${password1InputElem.value}\$`);
	validateElem(password2InputElem, password2Pattern);
});
password2InputElem.addEventListener('input', () => {
	password2Pattern = new RegExp(`\^${password1InputElem.value}\$`);
	validateElem(password2InputElem, password2Pattern);
});
formElem.addEventListener('submit', (ev) => {
	ev.preventDefault();
	let formValid = true;
	inputElems.forEach(elem => {
		if(!elem.parentNode.classList.contains('valid')) {
			formValid = false;
			elem.classList.add('shake-baby-shake');
			setTimeout(() => {
				elem.classList.remove('shake-baby-shake');
			}, 1000)
		};
	})
	if(formValid) {
		let localStorageState = JSON.parse(localStorage.getItem('users')) || [];
		let namevalid = true;
		localStorageState.forEach(user => {
			if(user.name.includes(nameInputElem.value)) {
				namevalid = false;
			}
		});
		if(namevalid) {
			localStorageState.push({
				name: nameInputElem.value,
				email: emailInputElem.value,
				password: password1InputElem.value,
			});
			localStorage.setItem('users', JSON.stringify(localStorageState));
			inputElems.forEach(elem => {
				elem.value = '';
				elem.parentNode.classList.remove('valid');
			})
		} else {
			alert('Name is already taken');
		}
	}
});

function validateElem(elem, pattern) {
	let value = elem.value;
	if(!value.match(pattern)) {
		elem.parentNode.classList.remove('valid');
		elem.parentNode.classList.add('invalid');
	} else {
		elem.parentNode.classList.remove('invalid');
		elem.parentNode.classList.add('valid');
	}
}