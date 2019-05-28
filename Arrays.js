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
console.log(tallPeoples);

//2 option

var tallPeoples2 = Persons.filter(function(Person) {
  return Person.altura > 1.8;
});

console.log(tallPeoples2);

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
var PersonsWithTallInCms = Persons.map(convertToCms);
var PersonsWithTallInCms = Persons.map(convertToCms2);

//----------------------REDUCE---------------------------------
// Reduce to an only value
//https://www.youtube.com/watch?v=Wl98eZpkp-c

const countBooks = (total, person) => total + person.cantidadDeLibros;
const countBooks2 = (total, { cantidadDeLibros }) => total + cantidadDeLibros;

var TotalOfBooks = Persons.reduce(countBooks, 0);
var TotalOfBooks2 = Persons.reduce(countBooks2, 0);
var TotalOfBooks3 = Persons.reduce(function(total, person) {
  return total + person.cantidadDeLibros;
}, 0);
var TotalOfBooks4 = Persons.reduce(function(total, { cantidadDeLibros }) {
  return total + cantidadDeLibros;
}, 0);
