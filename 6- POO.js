//https://www.youtube.com/watch?v=DqGwxR_0d1M
//Classes in Javascript
//**********Create Prototype**************/
function Person(name, lastName, age, height) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
  this.height = height;
}
//Add methods
Person.prototype.greet = function() {
  console.log(`Hi,My name is ${this.name} ${this.lastName}`);
};

Person.prototype.isTall = function() {
  isHeight = this.height > 1.8;
  if (isHeight) {
    console.log(`isTall`);
  } else {
    console.log(`Not is Tall`);
  }
};

var jose = new Person("Jose", "Arango", 22, 1.97);

jose.greet();

//********El contexto de las funciones: quién es this *************** */
Person.prototype.isTall2 = () => this.height > 1.8; // is false but really is true beacuse un arrowFuction and this === windows
jose.isTall2();

// Herencia prototype en Javascript //
// Object

function Developer(name, lastname, languaje) {
  this.name = name;
  this.lastname = lastname;
  this.languaje = languaje;
}

heredaDe(Developer, Person);

Developer.prototype.greet = function() {
  console.log(`Hi parce I'm developer in ${this.languaje}`);
};

function heredaDe(prototypeSon, prototypeFather) {
  var fn = function() {};
  fn.prototype = prototypeFather.prototype;
  prototypeSon.prototype = new fn();
  prototypeSon.prototype.constructor = prototypeSon;
}

var pedro = new Developer("Pedro", "Arango", "Python");

pedro.greet();
pedro.isTall();
