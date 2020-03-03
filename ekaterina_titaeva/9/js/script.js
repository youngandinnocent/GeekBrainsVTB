const canvas = document.getElementById('cvs');
const context = canvas.getContext("2d");
const canvasWidth = canvas.getAttribute('width');
const cardWidth = 150;
const cardHeight = 30;

class Person {
    constructor(name, lastName, age, friends = []) {
        this.name = name;
        this.lastName = lastName;
        this.age = parseInt(age);
        this.friends = [...friends];
    }

    addFriend(obj) {
        this.friends.push(obj);
    }
}

function paint(node, x = canvasWidth / 2, y = 10, xParent = 0) {
    context.fillText(`${node.name} ${node.lastName}, ${node.age}`, x - cardWidth / 2 + 10, y + cardHeight / 2);
    context.strokeRect(x - cardWidth / 2, y, cardWidth, cardHeight);
    for (let i = 0; i < node.friends.length; i++) {
        let areaWidth = (xParent - x) ? (Math.abs(xParent - x) * 2) : (x * 2);
        let xChild = areaWidth / node.friends.length / 2 + areaWidth / node.friends.length * i;
        if (x > 500) xChild += 500;
        let yChild = y + 40;

        context.beginPath();
        context.moveTo(x, y + cardHeight);
        context.lineTo(xChild, yChild);
        context.stroke();

        paint(node.friends[i], xChild, yChild, x);
    }
}


let Dima = new Person('Дмитрий', 'Котов', 22);
let Dinara = new Person('Динара', 'Даурова', 24);
let Dasha = new Person('Дарья', 'Пичугина', 22);

let Vika = new Person('Виктория', 'Киселева', 22);
Vika.addFriend(Dasha);
let Yana = new Person('Яна', 'Делегеоз', 22, [Dima, Dinara]);
let me = new Person('Екатерина', 'Титаева', 22, [Yana]);
me.addFriend(Vika);

paint(me);