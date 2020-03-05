/* 1) Необходимо реализовать класс Person
свойства:
- имя
- фамилия
- возраст
- друзья (массив)
методы
- добавить друга

2) Необходимо реализовать экземпляр класса Person (вы) и добавить в свойство "друзья" своих друзей. Затем вашим друзьям их друзей (для простоты можете реализовать в виде дерева без циклических связей). Необходимо реализовать минимум трехуровневую вложенность.

3) Напишите функцию, которая рекурсивно пройдется по дереву и выведет данные в canvas в виде графа (карточка с Фамилией, именем и связи). */

class Person {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.friends = [];
    }
    addFriend(friend) {
        return this.friends.push(friend);
    }
}

let Vitaly = new Person('Ve', 'Smith', 23);

let Stefan = new Person('Stefan', 'Smitt', 23);
Vitaly.addFriend(Stefan);
let Oleg = new Person('Oleg', 'Pitt', 22);
Vitaly.addFriend(Oleg);
let Katy = new Person('Katy', 'Joly', 23);
Vitaly.addFriend(Katy);
let Sava = new Person('Sava', 'Sacharchenko', 24);
Stefan.addFriend(Sava);
let Ilya = new Person('Ilya', 'Kuznetsov', 24);
Stefan.addFriend(Ilya);
let Liza = new Person('Liza', 'Smith', 23);
Stefan.addFriend(Liza);
let Alyona = new Person('Alyona', 'Conor', 22);
Liza.addFriend(Alyona);
let Alina = new Person('Alina', 'Bredly', 23);
Liza.addFriend(Alina);
Liza.addFriend(Katy);

const ctx = document.querySelector('canvas').getContext('2d');

draw(Vitaly);

function draw({ name, lastname, age, friends }, positionX = 10, positionY = 350, level = 1) {

	ctx.strokeRect(positionX, positionY, 150, 40);
	ctx.fillText('First name - ' + name, positionX + 10, positionY + 10);
	ctx.fillText('Second name - ' + lastname, positionX + 10, positionY + 20);
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