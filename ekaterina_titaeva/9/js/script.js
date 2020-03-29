const canvas = document.getElementById('cvs');
const context = canvas.getContext("2d");
const canvasWidth = parseInt(canvas.getAttribute('width'));
const cardWidth = 150;
const cardHeight = 30;

class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = parseInt(age);
        this.friends = [];
    }

    addFriend(obj) {
        this.friends.push(obj);
    }
}

function paint(node, x = canvasWidth / 2, y = 10, startArea = 0, endArea = canvasWidth) {
    context.fillText(`${node.name} ${node.lastName}, ${node.age}`, x - cardWidth / 2 + 10, y + cardHeight / 2);
    context.strokeRect(x - cardWidth / 2, y, cardWidth, cardHeight);
    for (let i = 0; i < node.friends.length; i++) {
        let areaWidth = (endArea - startArea);
        let leftBorder = startArea + areaWidth / node.friends.length * i;
        let rigthBorder = startArea + areaWidth / node.friends.length * (i + 1);
        let xChild = leftBorder + areaWidth / node.friends.length / 2;
        let yChild = y + 40;

        context.beginPath();
        context.moveTo(x, y + cardHeight);
        context.lineTo(xChild, yChild);
        context.stroke();

        paint(node.friends[i], xChild, yChild, leftBorder, rigthBorder);
    }
}


let Dima = new Person('Дмитрий', 'Котов', 22);
let Dinara = new Person('Динара', 'Даурова', 24);
let Dasha = new Person('Дарья', 'Пичугина', 22);

let Vika = new Person('Виктория', 'Киселева', 22);
Vika.addFriend(Dasha);
let Yana = new Person('Яна', 'Делегеоз', 22);
Yana.addFriend(Dima);
Yana.addFriend(Dinara);
let me = new Person('Екатерина', 'Титаева', 22);
me.addFriend(Yana);
me.addFriend(Vika);

paint(me);