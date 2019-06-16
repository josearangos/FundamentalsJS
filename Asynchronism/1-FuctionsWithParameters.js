class Person {
  constructor(name, lastName, age, height) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
  }
  greet(requesGreet) {
    console.log(`Hi,My name is ${this.name} ${this.lastName}`);
    if (requesGreet) {
      requesGreet(this.name, this.lastName);
    }
  }
}

class Developer extends Person {
  constructor(name, lastName, languaje) {
    super(name, lastName, languaje);
  }
  greet(requesGreet) {
    console.log(`Hi Developer, I'm programming in ${this.languaje}`);
    if (requesGreet) {
      requesGreet(this.name, this.lastName, true);
    }
  }
}

function requesGreet(name, lastName, isDev) {
  console.log(`Hi I'm  ${name}`);
  if (isDev) {
    console.log(`Cool you are developer`);
  }
}

var jose = new Person("Jose", "Arango", 22, 1.97);
var pedro = new Developer("Pedro", "Arango", 19, 1.82, "Python");
jose.greet(requesGreet);
pedro.greet(requesGreet);
