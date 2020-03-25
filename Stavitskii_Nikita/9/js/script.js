class Person {
    constructor(name, lastname, age, friends = []) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.friends = friends;
    }

    addFriend(friend) {

        this.friends.push(friend);}
}

let Nik = new Person('Nik', 'Stavitskii', 23);
let Ascar = new Person('Ascar', 'Amirov', 23);
let Vadim = new Person('Vadim', 'Mikolaenko', 22);
let Ksenia = new Person('Ksenia', 'Shatalova', 22);
let David = new Person('David', 'Bestaev', 23);
let Ivan = new Person('Ivan', 'Ivanov', 35);
let Sveta = new Person('Sveta', 'Koroleva', 20);

Nik.addFriend(Ascar);
Nik.addFriend(Ksenia);
Nik.addFriend(Ksenia);
Ksenia.addFriend(David);
Ksenia.addFriend(Sveta);
Ascar.addFriend(Vadim);
Ascar.addFriend(Ivan);

let cvs = document.getElementById('cvs');
let ctx = cvs.getContext('2d');

drawCard(Nik)

function drawCard(person, positionX = 550, positionY = 10, level = 1) {

	ctx.strokeRect(positionX, positionY, 150, 40);
    ctx.font = '12px Open Sans, sans-serif';
    ctx.fillText('Name: ' + person.name, positionX + 10, positionY + 12);
	ctx.fillText('Lastname: ' + person.lastname, positionX + 10, positionY + 24);

	if(person.friends[0]) {
		for(let i = 0; i < person.friends.length; i++) {
			let newPosY = positionY + 200;
			let newPosX = positionX + ((i - Math.round((person.friends.length+1)/2) + 1) * 350) / level;
			ctx.beginPath();
				ctx.moveTo(positionX+75, positionY+40);
				ctx.lineTo(newPosX+75, newPosY);
			ctx.stroke();
			drawCard(person.friends[i], newPosX, newPosY, level + 1);
		}
	}
}