var pedro = {
  name: "Pedro",
  lastName: "Arango",
  years: 19
};

function printToYears(persona) {
  // var name= persona.name
  var { name } = persona;
  console.log(`${persona.name} have ${persona.years} years`);
}

//EMC 6
function printToYearsEMCS6({ name, years }) {
  console.log(`${name} have ${years} years`);
}

//Modify value object and return new object
function increaseYear(person) {
  return {
    ...person,
    years: person.years + 1,
    university: "EAFIT"
  };
}

//Compare object
var sacha = {
  name: "Sacha"
};

var otherPerson = {
  ...sacha
};
// sachar  == otherPerson -> false

otherPerson = sacha;
// sachar  == otherPerson -> true

increaseYear(pedro);
printToYears(pedro);
printToYearsEMCS6(pedro);
printToYearsEMCS6({ name: "Jose", years: 22 });
