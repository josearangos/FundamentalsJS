/**
 * Un closure, básicamente, es una función que recuerda el estado
 * de las variables al momento de ser invocada, y conserva este
 * estado a través de reiteradas ejecuciones. Un aspecto fundamental
 * de los closures es que son funciones que retornan otras funciones.
 *
 *
 */

function createGreet(endPhrase) {
  return function(name) {
    console.log(`Hi, ${name} ${endPhrase}`);
  };
}

const greetArgenito = createGreet("Che");
const greetMexicano = createGreet("GûE");
const greetColombiano = createGreet("Parce");

greetArgenito("Jose");
greetColombiano("Jose");
greetMexicano("Jose");
