var pedro = {
  name: "Pedro",
  lastName: "Arango",
  years: 19
};
//Method normal
const isOlder = function(person) {
  return person.years >= 18;
};
//Arrow Function
const isOlderArrowFunctions = person => {
  return person.years >= 18;
};
//ArrowFunctionsDesestructurate
const isOlderArrowFunctionsDesestructurate = ({ years }) => {
  return years >= 18;
};

isOlder(pedro);
