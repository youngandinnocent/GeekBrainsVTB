class Person {
	constructor(firstName, secondName, age) {
		this.firstName = firstName;
		this.secondName = secondName;
		this.age = age;
		this.friends = [];
	}

	addFriend(friend) {
		this.friends.push(friend);
	}
}

let me = new Person('Andy', 'Me', 25);
let friend11 = new Person('Julia', 'Ivanova', 59);
let friend12 = new Person('Ivan', 'Stepanov', 38);
let friend13 = new Person('Stepan', 'Petrov', 18);
let friend21 = new Person('Petr', 'AnotherOne', 32);
let friend22 = new Person('Pavel', 'Kalach', 37);
let friend23 = new Person('Igor', 'Ivanova', 58);
let friend24 = new Person('Yep', 'AndAnotherOne', 56);
let friend25 = new Person('Nope', 'AndAnotherOne', 56);
let friend26 = new Person('Igor', 'AndAnotherOne', 56);
let friend31 = new Person('Kel', 'Stepanov', 32);
let friend32 = new Person('Moh', 'Ivanova', 124);
let friend33 = new Person('Muhhamed', 'Petrov', 1);
let friend34 = new Person('MLP', 'Stepanov', 22);
let friend35 = new Person('KHL', 'Stepanov', 01);
let friend36 = new Person('ILMIRA', 'BOTCHENKOVA', 22);

me.addFriend(friend11);
me.addFriend(friend12);
me.addFriend(friend13);

friend11.addFriend(friend21);
friend11.addFriend(friend22);
friend11.addFriend(friend23);
friend12.addFriend(friend24);
friend13.addFriend(friend25);
friend13.addFriend(friend26);

friend21.addFriend(friend31);
friend22.addFriend(friend32);
friend23.addFriend(friend33);
friend24.addFriend(friend34);
friend25.addFriend(friend35); 	

const ctx = document.querySelector('canvas').getContext('2d');

draw(me);

function draw({ firstName, secondName, age, friends }, positionX = 10, positionY = 350, level = 1) {
	
	ctx.strokeRect(positionX, positionY, 150, 40);
	ctx.fillText('First name - ' + firstName, positionX + 10, positionY + 10);
	ctx.fillText('Second name - ' + secondName, positionX + 10, positionY + 20);
	ctx.fillText('Age - ' + age, positionX + 10, positionY + 30);

	if(friends[0]) {
		for(let i = 0; i < friends.length; i++) {
			let newPosX = positionX + 200;
			let newPosY = positionY + ((i - Math.round((friends.length+1)/2) + 1) * 200) / level;
			ctx.beginPath();
				ctx.moveTo(positionX+150, positionY+20);
				ctx.lineTo(newPosX, newPosY+20);
			ctx.stroke();
			draw(friends[i], newPosX, newPosY, level + 1);
		}
	}
}


