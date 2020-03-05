//=include ./person.js

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

const boss = new Person('Boss', 'Bossov', 99);

const tom = new Person('Tom', 'Kruz', 40);
const john = new Person('John', 'Smit', 33);
const eric = new Person('Eric', 'Bigov', 44);

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

// variables
const widthRect = 160;
const heightRect = 60;
const offsetY = 50;
const centerX = canvas.width / 2 - widthRect / 2;

function drawTree(main, x, y) {
  drawRect(main, x, y, widthRect, heightRect);

  const allWidth = x * 2; // 440
  let i = 0.5;
  for (const human of main.friends) {
    const leftSide = 0;
    const rightSide = 0;

    const xChild = (allWidth / main.friends.length) * i++;
    const yChild = y + heightRect + offsetY;

    drawTree(human, xChild, yChild);
  }
}

drawTree(boss, 0 + centerX, 0 + offsetY);

// Methods draw
function drawLine(dx, dy, x, y) {
  ctx.lineWidth = 2;
  ctx.moveTo(dx, dy);
  ctx.lineTo(x, y);
  ctx.stroke();
}

function drawRect(user, x, y, width, height) {
  ctx.strokeStyle = 'white';
  ctx.strokeRect(x, y, width, height);
  drawData(user, x + 10, y + 25);
}

function drawData(user, x, y) {
  ctx.fillStyle = 'white';
  ctx.font = '16px Arial';
  ctx.fillText(user.name, x, y);
  ctx.fillText(user.lastname, x, y + 20);
  ctx.fillText(user.age, x + 120, y);
}
