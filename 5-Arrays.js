var sacha = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  altura: 1.72,
  cantidadDeLibros: 111
};

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1.86,
  cantidadDeLibros: 78
};

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1.85,
  cantidadDeLibros: 132
};

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1.71,
  cantidadDeLibros: 90
};

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1.56,
  cantidadDeLibros: 91
};
console.log("Convert TO CMS 2: ", PersonsWithTallInCms2);
var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1.76,
  cantidadDeLibros: 182
};

var Persons = [sacha, alan, martin, dario, vicky, paula];

for (var i = 0; i < Persons.length; i++) {
  var Person = Persons[i];
  var name = Persons[i]["nombre"];
  console.log(`${Person.nombre} is ${Person.altura} mts tall `);
}

//-------------------FILTER ARRAYS --------------------------
// Return new instance of array
// 1 option

const isTall = ({ altura }) => altura > 1.8;
var tallPeoples = Persons.filter(isTall);
console.log("Peoples FILTER  1 OPTION", tallPeoples);

//2 option
var tallPeoples2 = Persons.filter(function(Person) {
  return Person.altura > 1.8;
});

console.log("Peoples, FILTER 2 OPTION:", tallPeoples2);

const tallBetween = ({ altura }) => (altura > 1.5) & (altura < 1.73);
var tallBetweenPersons1 = Persons.filter(tallBetween);

const tallBetweenPersons2 = Persons.filter(function(person) {
  return (person.altura > 1.5) & (person.altura <= 1.71);
});

console.log(" 1)Personas with Tall between 1.5 and 1.7 ", tallBetweenPersons1);
console.log(" 2)Personas with Tall between 1.5 and 1.7 ", tallBetweenPersons2);
//-------------------TRANSFORM A ARRAY  WITH MAP-----------------
//Create new array and modify attribute
// 1 OPTION
const convertToCms = person => {
  return {
    ...person,
    altura: person.altura * 100
  };
};

//2 OPTION
const convertToCms2 = person => ({
  ...person,
  altura: person.altura * 100
});

//3 OPTION
const addBook = person => {
  return {
    ...person,
    cantidadDeLibros: person.cantidadDeLibros + 1
  };
};

var PersonsWithTallInCms1 = Persons.map(convertToCms);
var PersonsWithTallInCms2 = Persons.map(convertToCms2);
var PersonsWithTallInCms3 = Persons.map(function(person) {
  return {
    ...person,
    altura: person.altura * 100
  };
});
var PersonWithAddBook = Persons.map(addBook);

console.log("Persons: ", Persons);
console.log("Convert TO CMS 1: ", PersonsWithTallInCms1);
console.log("Convert TO CMS 2: ", PersonsWithTallInCms2);
console.log("Convert TO CMS 3: ", PersonsWithTallInCms3);
console.log("Add Book", PersonWithAddBook);

console.log("Persons: ", Persons);

//----------------------REDUCE---------------------------------
// Reduce to an only value
//https://www.youtube.com/watch?v=Wl98eZpkp-c

const countBooks = (total, person) => total + person.cantidadDeLibros;
const countBooks2 = (total, { cantidadDeLibros }) => total + cantidadDeLibros;
const countAlturas = (totalAltura, { altura }) => totalAltura + altura;

var totalAlture = Persons.reduce(countAlturas, 0);
console.log("Total Alturas ", totalAlture);

var TotalOfBooks = Persons.reduce(countBooks, 0);
var TotalOfBooks2 = Persons.reduce(countBooks2, 0);

var TotalOfBooks3 = Persons.reduce(function(total, person) {
  return total + person.cantidadDeLibros;
}, 0);

var TotalOfBooks4 = Persons.reduce(function(total, { cantidadDeLibros }) {
  return total + cantidadDeLibros;
}, 0);

//**************************Exercises******************** */

//Return all persons with most 68 and less 90, add 10 books and sum total books
const haveManyBooks = ({ cantidadDeLibros }) => {
  return (cantidadDeLibros > 68) & (cantidadDeLibros < 92);
};

var personWithManyBooks = Persons.filter(haveManyBooks);
console.log("----------------------------------------------");
console.log("Many Books ", personWithManyBooks);

const addBooks = person => {
  return {
    ...person,
    cantidadDeLibros: person.cantidadDeLibros + 10
  };
};
var addBookToPersons = personWithManyBooks.map(addBooks);
console.log("Addd Books ", addBookToPersons);

var sumBooks = (total, { cantidadDeLibros }) => (total += cantidadDeLibros);

var totalBooks = addBookToPersons.reduce(sumBooks, 0);

console.log("Total Books ", totalBooks);

//Anidade functions

var totalBooks2 = Persons.filter(function(person) {
  return (person.cantidadDeLibros > 68) & (person.cantidadDeLibros < 92);
})
  .map(function(person) {
    return {
      ...person,
      cantidadDeLibros: person.cantidadDeLibros + 10
    };
  })
  .reduce(function(total, { cantidadDeLibros }) {
    return (total += cantidadDeLibros);
  }, 0);

console.log("Tootal Books 2 OPCTION", totalBooks2);
