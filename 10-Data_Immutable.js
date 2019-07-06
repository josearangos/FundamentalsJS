/**
 * Las estructuras de datos inmutables forman parte de los principios de la Programación Funcional
 * y nos permiten evitar tener efectos colaterales en los datos. En otras palabras,
 * que hayan modificaciones en las variables sin nuestro consentimiento,
 * produciendo comportamientos inesperados en el programa.
 *
 *
 */

const Pedro = {
  name: "Pedro",
  age: 19
};

const birthday = person => person.age++;

/*birthday(Pedro);
console.log(Pedro);
birthday(Pedro);
console.log(Pedro);
birthday(Pedro);
console.log(Pedro);
birthday(Pedro);
console.log(Pedro);*/

const birthdayInmutable = person => ({
  ...person,
  age: person.age + 1
});
Pedro;
Pedro20 = birthdayInmutable(Pedro);
console.log(Pedro20);
birthdayInmutable(Pedro);
console.log(Pedro);
//Pedro no change values becaouse birthdayInmutable create new object
