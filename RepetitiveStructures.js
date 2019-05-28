var Sacha = {
  name: "Sacha",
  lastName: "Teofila",
  years: 28,
  weight: 75
};

const INCREASE_WEIGHT = 0.2;
const increaseWeight = person => (person.weight += INCREASE_WEIGHT);
const decreaseWeight = person => (person.weight -= INCREASE_WEIGHT);

//FOR

for (var i = 0; i < 365; i++) {
  var random = Math.random();

  if (random < 0.25) {
    increaseWeight(Sacha);
  } else if (random < 0.5) {
    decreaseWeight(Sacha);
  }
}
console.log(
  `At the end of the year ${Sacha.name} weight ${Sacha.weight.toFixed(1)}Kg`
);

//------------------------WHILE--------------------
const GOAL = Sacha.weight - 3;
const eatALot = () => Math.random() < 0.3;
const doSport = () => Math.random() < 0.4;
var DAYS = 0;
while (Sacha.weight > GOAL) {
  //debugger; // Stop in this line of console developers
  if (eatALot()) {
    increaseWeight(Sacha);
  }
  if (doSport()) {
    decreaseWeight(Sacha);
  }
  DAYS += 1;
}
console.log(`${Sacha.name} delayed ${DAYS} days`);

//-----------------DO WHILE -------------------------------
var i = 0;
const rains = () => Math.random() < 0.25;

do {
  i++;
} while (!rains());

console.log(`It rained ${i} times`);

//-----------------SWITCH -------------------------------

var sign = prompt("¿What is your Zodiac Sign ?");

switch (sign) {
  case "acuario":
    console.log("Good day");
    break;
  case "pisis":
    console.log("Good day");
    break;
  case "cancer":
    console.log("Bad day");
    break;
  case "libra":
    console.log("you have luck today");
    break;
  default:
    console.log("We do not find your zodiac sign");
    break;
}
