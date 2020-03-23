class CustomTimer extends HTMLElement {
  constructor(){
		super();
		this.timer = 0;
  }

  connectedCallback() {
    this.handleTimer();
    this.timer = setInterval(this.handleTimer.bind(this), 1000);
  }

	disconnectedCallback() {
		clearInterval(this.timer);
	}

  handleTimer(){

    const title = this.getAttribute('title')
    const time = new Date(this.getAttribute('time'));
    const delta = new Date(time - new Date());
    const days = Math.floor(delta/(1000*60*60*24));
    const hours = Math.floor(delta/(1000*60*60) - days*24);
    const minutes = Math.floor(delta/(1000*60) - days*24*60 - hours*60);
    const seconds = Math.floor(delta/1000 - days*24*60*60 - hours*60*60 - minutes*60);

		if(days >= 1) {
			this.style.backgroundColor = 'RGB(0,255,0)';
		} else if(days < 0) {
			this.style.backgroundColor = 'RGB(255,0,0)';
		} else {
			const green = Math.ceil((delta/(1000*60*60*24)) * 255);
			const red = 255 - green;
			this.style.backgroundColor = `RGB(${red}, ${green},0)`;
		}
		this.style.display = 'block';
		this.style.padding = '10px';
		this.style.margin = '20px';

    this.innerHTML = `
      <h1>${title}</h1>
			<p>Осталось ${days} ${declOfNum(days, ['день', 'дня', 'дней'])}, ${hours} ${declOfNum(hours, ['час', 'часа', 'часов'])}, ${minutes} ${declOfNum(minutes, ['минута', 'минуты', 'минут'])}, ${seconds} ${declOfNum(seconds, ['секунда', 'секунды', 'секунд'])}</p>
			<button class='delete-timer'>Удалить</button>
    `
  }

}
customElements.define('custom-timer', CustomTimer);

if(localStorage.getItem('timers')){
	const timers = JSON.parse(localStorage.getItem('timers'));
	timers.forEach(timer => {
		const { time, title } = timer;
		let newTimer = document.createElement('custom-timer');
		newTimer.setAttribute('time', time);
		newTimer.setAttribute('title', title);
		document.body.prepend(newTimer);
	});
};

document.querySelector('.add-button').addEventListener('click', (ev) => {
  ev.preventDefault();

	const time = document.querySelector('.time-to-add').value.trim();
	if(new Date(time) == 'Invalid Date') {
		alert('Date format error!')
		return;
	}
	const title = document.querySelector('.title-to-add').value.trim();
	if(!title) {
		alert('Title should not be empty');
		return;
	}

	let newTimer = document.createElement('custom-timer');
	newTimer.setAttribute('time', time);
	newTimer.setAttribute('title', title);
	document.body.prepend(newTimer);

	let newArr = localStorage.getItem('timers') ? JSON.parse(localStorage.getItem('timers')) : [];
	newArr.push({title, time});
	localStorage.setItem('timers', JSON.stringify(newArr));
});

document.body.addEventListener('click', (ev) => {
	if(ev.target.classList.contains('delete-timer')){
		ev.preventDefault();
		ev.target.parentNode.remove();
		updateLocalStorage();
	}
});

function updateLocalStorage() {
	const timerElems = document.querySelectorAll('custom-timer');
	let newArr = [];
	timerElems.forEach(timer => {
		const time = timer.getAttribute('time');
		const title = timer.getAttribute('title');
		newArr.push({title, time});
	});
	localStorage.setItem('timers', JSON.stringify(newArr));
}

function declOfNum(n, titles) {
  return titles[n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2];
}