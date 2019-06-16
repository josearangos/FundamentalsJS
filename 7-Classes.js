class Person {
  constructor(name, lastName, age, height) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
  }
  greet() {
    console.log(`Hi,My name is ${this.name} ${this.lastName}`);
  }
  isTall() {
    return console.log(this.height > 1.8);
  }
}

class Developer extends Person {
  constructor(name, lastName, languaje) {
    super(name, lastName, languaje);
  }
  greet() {
    console.log(`Hi Developer, I'm developer in ${this.languaje}`);
  }
}

var jose = new Person("Jose", "Arango", 22, 1.97);
var pedro = new Developer("Pedro", "Arango", "Python");
jose.greet();
jose.isTall();
pedro.greet();
