// задаём класс юнитов
class Person {
    constructor(name, lastName, age, friends = []) {
      this.name = name;
      this.lastName = lastName;
      this.age = parseInt(age);
      this.friends = friends;
    }
  
    addFriend(name, lastName, age, friends) {
      this.friends.push(new Person(name, lastName, age, friends));
    }
}

// пилим френдовое дерево
const person = new Person("Эндрю", "Мартин", 192);

person.addFriend("Ричард", "Мартин", 89, [
new Person("Билл", "Финголд", 48, [
    new Person("Пол", "Френч", 0),
    new Person("Галатея", "", 127)
]),
new Person("Нилолас", "Казан", 74, [
    new Person("Роджер", "Шерман", 228)
    ])
]);

person.addFriend("Аманда", "Мартин", 54, [
new Person("Роберт", "Силверберг", 85),
new Person("Ллойд", "Чарни", 27, [
    new Person("Стивен", "Рут", 55),
    new Person("Робин", "Уильямс", 49)
    ])
]);

// задаем канвас с контекстом
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
ctx.textAlign = "center";

const radius = 70;

// главная функция отрисовки френдового дерева
const getFriendsTree = (person, x, y, deep = 1) => {

const { name, lastName, age, friends } = person;

const offset = Math.PI * radius * friends.length;
const containerWidth = friends.length * radius + (friends.length - 1) * offset / deep;

ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + (radius - containerWidth) / friends.length, y + (radius * 2));
    ctx.lineTo(x, y);
    if (friends.length > 1) {
        ctx.lineTo(x + (containerWidth - radius) / friends.length, y + (radius * 2));
    }
ctx.stroke();

ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#3b5998';
    ctx.fill();
ctx.stroke();

ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.fillText(`${name} ${lastName} ${age}`, x, y);
ctx.stroke();

for (let i = 0; i < friends.length; i++) {
    const itemOffset = radius * i + (offset / deep) * i;
    const itemX = x - containerWidth / 2 + (itemOffset + radius / 2);
    const itemY = y + (radius * 2.5);

    getFriendsTree(friends[i], itemX, itemY, deep + 1);
}
}

const x = document.documentElement.clientWidth / 2 - radius / 2;
const y = radius * 2;

getFriendsTree(person, x, y);
