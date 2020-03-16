class Person {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.friends = [];
    }
    addFriend(someFriend) {
        this.friends.push(someFriend)
    }
    getFriends() {
        return this.friends;
    }
}

let character = new Person("arya","stark",16)
let friend1 = new Person("robert","baratheon", 40);
let friend2 = new Person("jaime", "lannister",33);
let friend3 = new Person("john", "snow", 20);
let friend4 = new Person("jeor","mormont", 56);
let friend5 = new Person("talisa","maegyr", 32);
let friend6 = new Person("tormund","giantsbane",35);
let friend7 = new Person("daen","targaryen",23 );
let friend8 = new Person("davos","seaworth",37 );

character.addFriend(friend1);
character.addFriend(friend2);
character.addFriend(friend3);
friend1.addFriend(friend4);
friend1.addFriend(friend5);
friend2.addFriend(friend6);
friend2.addFriend(friend7);
friend3.addFriend(friend8);

let canvas = document.getElementById("canvas");
canvas. style.border = "1px solid #000000";
let ctx = canvas.getContext("2d");

function drawTree(obj, posX = 10, posY = 410, lev = 1) {
    ctx.strokeRect(posX, posY, 150, 60);
    ctx.fillText("name: " + obj.name,posX+10, posY+20);
    ctx.fillText("lastname: " + obj.lastname,posX+10, posY+30);
    ctx.fillText("age: " + obj.age,posX+10, posY+40);
    ctx.stroke();

    for (let i in obj.friends){
        let newPosX = posX + 200;
        let newPosY = posY + ((i - Math.round((obj.friends.length+1)/2) + 1) * 200) / lev;
        ctx.beginPath();
        ctx.moveTo(posX+150, posY+20);
        ctx.lineTo(newPosX, newPosY+20);
        ctx.stroke();
        drawTree(obj.friends[i], newPosX, newPosY, lev++)
    }
}
drawTree(character)
