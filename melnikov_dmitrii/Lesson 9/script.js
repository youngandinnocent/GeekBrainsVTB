'use strict';


class Person {
    constructor(name, lastname, age, friends) {
        this._name = name,
        this._lastname = lastname,
        this._age = age,
        this._friends = friends || []
    }

    get name() {
        return this._name;
    }

    get lastname() {
        return this._lastname;
    }

    get friends() {
        return this._friends;
    }

    addFriend(friend) {
        this._friends.push(friend);
    }
}

const rectWidth = 120;
const rectHeight = 50;
const rectOffset = 3 * rectWidth;

let Nikita = new Person('Nikita', 'Erov', 23)
let Kate = new Person('Kate', 'Novikova', 22);
let Ilia = new Person('Ilia', 'Pastushkov', 29, [Nikita, Kate]);
let Vika = new Person('Vika', 'Krasnova', 25, [Ilia, Nikita, Kate]);
let Iam = new Person('Dima', 'Melnikov', 28, [Ilia, Vika]);

let startX = (document.documentElement.clientWidth / 2) - rectWidth;
let startY = 50;
let friendsTree = document.querySelector('.person-friends');
let friendsTreeContext = friendsTree.getContext('2d');

friendsTree.width = document.documentElement.clientWidth - 100;
friendsTree.height = document.documentElement.clientHeight -100;
friendsTreeContext.font = "bold italic 14px sans-serif";
friendsTreeContext.textAlign = "center";


renderFriendsOfPerson(Iam, startX, startY);


function renderFriendsOfPerson(person, x, y, levelDeep = 1) {
    let personName = person.name;
    let personLastname = person.lastname;
    let personFriends = person.friends;
    let friendsContainerSize = (personFriends.length * rectWidth) + 
                               (personFriends.length - 1) * (rectOffset / levelDeep);

    friendsTreeContext.strokeRect(x, y, rectWidth, rectHeight);
    friendsTreeContext.fillText(
        `${personName} ${personLastname}`,
        x + rectWidth / 2,
        y + rectHeight / 2
    );

    for (let i = 0; i < personFriends.length; i++) {
        let offset = (rectWidth * i) + (rectOffset / levelDeep * i);
        let friendX = x - (friendsContainerSize / 2) + (offset + rectWidth / 2);

        renderFriendsOfPerson(
            personFriends[i],
            friendX,
            y + (rectHeight + 30),
            levelDeep + 10
        )
    }
}