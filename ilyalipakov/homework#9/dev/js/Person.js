class Person {
  constructor(name, lastname, age) {
    this.friends = [];
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  addFriend(friend) {
    this.friends.push(friend);
  }
}
