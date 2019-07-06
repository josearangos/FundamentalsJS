/**
 * El contexto (o alcance) de una función es por lo general, window.
 *  Así que en ciertos casos, cuando intentamos referirnos a this en alguna parte del código, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.
Existen al menos tres maneras de cambiar el contexto de una función.

Usando el método .bind, enviamos la referencia a la función sin ejecutarla,pasando el contexto como parámetro.

Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado

Usando el método .apply, es similar a .call pero los parámetros adicionales se pasan como un arreglo de valores
 * 
 * 
 */

const Pedro = {
  name: "Pedro",
  last_name: "Arango"
};

const Jose = {
  name: "Jose",
  last_name: "Alberto"
};

function greet(msg = "Hi") {
  console.log(`${msg}, my name is ${this.name}`);
}

const greetToPedro = greet.bind(Pedro, "Hi, che");
const greetToJose = greet.bind(Jose, "Hi, parce");

greetToPedro();
greetToJose();

//Usando CALL se invoca automaticamente la funcion, cosa que con el bind no sucede
greet.call(Jose, "Parcerito");

//Apply

greet.apply(Jose, ["Holi"]);
