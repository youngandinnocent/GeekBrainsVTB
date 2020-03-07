//=include ./person.js

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const boss = new Person('Boss', 'Bossov', 99);

const tom = new Person('Tom', 'Kruz', 40);
const john = new Person('John', 'Smit', 33);

const bread = new Person('Bread', 'Pit', 45);
const bart = new Person('Bart', 'Simpson', 14);
const liza = new Person('Liza', 'Simpson', 8);
const marge = new Person('Marge', 'Simpson', 38);

boss.addFriend(tom);
boss.addFriend(bread);

tom.addFriend(john);
tom.addFriend(marge);

bread.addFriend(bart);
bread.addFriend(liza);

const widthRect = 160;
const heightRect = 60;
const kafHeight = canvas.height / 2.5;

function drawTree(main, x = 10, y = 20) {
  drawRect(main, x, y, widthRect, heightRect);

  let i = 1;
  for (const human of main.friends) {
    const xChild = x + 300;
    const yChild =
      y +
      ((i++ - Math.round((human.friends.length + 1) / 2) + 1) * kafHeight) /
        i++;

    drawLine(x, y, xChild, yChild);
    drawTree(human, xChild, yChild);
  }
}

drawTree(boss);

// Methods draw
function drawLine(x, y, xChild, yChild) {
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + 160, y + 20);
  ctx.lineTo(xChild, yChild + 20);
  ctx.stroke();
}

function drawRect(user, x, y, width, height) {
  ctx.strokeStyle = 'white';
  ctx.strokeRect(x, y, width, height);
  drawData(user, x + 10, y + 25);
  ctx.stroke();
}

function drawData(user, x, y) {
  ctx.fillStyle = 'white';
  ctx.font = '16px Arial';
  ctx.fillText(user.name, x, y);
  ctx.fillText(user.lastname, x, y + 20);
  ctx.fillText(user.age, x + 120, y);
}
