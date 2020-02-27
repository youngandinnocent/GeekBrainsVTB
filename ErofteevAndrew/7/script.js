
let currentPage = 0;
let loadAvaliable = true;
window.addEventListener('scroll', loadLoop);
document.body.addEventListener('click', (ev) => {
	if(ev.target.classList.contains('user-delete')){
		deleteUser(ev.target.parentNode.id).then(status => {
			if(status === 204) {
				ev.target.parentNode.remove();
			}
		}).then(() => loadLoop())
	}
})

document.querySelector('.form').addEventListener('submit', (ev) => {
	ev.preventDefault();
	const { firstName:{ value: firstName}, lastName: { value: lastName }, email: { value: email }, avatar: { value: avatar } } = ev.target.elements
	createUser(firstName, lastName, email, avatar)
		.then(status => {
			if(status === 201) {
				let maxID = 1;
				document.querySelectorAll('.user-card').forEach(card => {
					maxID = Math.max(card.id, maxID);
				})
				document.body.prepend(getUserElem(maxID, firstName, lastName, email, avatar));
			}
		})
})

loadLoop();

function createUser(first_name, last_name, email, avatar) {
	return fetch(`https://reqres.in/api/users`, {
		method: 'POST',
		data: {
			first_name,
			last_name,
			email,
			avatar
		}
	}).then(res => res.status)
}

function deleteUser(id) {
	return fetch(`https://reqres.in/api/users/${id}`, {
		method: 'DELETE'
	}).then(res => res.status)
}

function loadLoop() {
	const spaceToPageBottom = document.querySelector('body').offsetHeight - window.scrollY - window.innerHeight;
	if(spaceToPageBottom <= 100 && loadAvaliable){
		loadAvaliable = false;
		getPosts(++currentPage);
	}
}

function getPosts(id){
	let page;
	if(id % 2 === 1) page = 1
	else page = 2;
	fetch(`https://reqres.in/api/users?page=${page}`)
		.then(res => res.json())
		.then(res => {
			res.data.forEach(user => {
				const { id, email, first_name, last_name, avatar } = user;
				document.body.append(getUserElem(id, first_name, last_name, email, avatar));
			});
		})
		.then(() => {
			loadAvaliable = true;
			loadLoop();
		});	
}

function getUserElem(id, firstName, lastName, email, avatar) {
	let userElem = document.createElement('div');
	userElem.classList.add('user-card');
	userElem.id = id;
	userElem.innerHTML = `
		<img class='user-avatar' src=${avatar} height='128' width='128'>
		<div class='user-info'>
			<span class='user-name'>${firstName} ${lastName}</span>
			<a class='user-email' href='mailto:${email}'>${email}</a>
		</div>
		<button class='user-delete'>Delete</button>
	`;
	return userElem;
}