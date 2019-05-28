//Strings

var name = "Jose",
  lastName = "Arango Sánchez";
var years = 22;
var nameUpperCase = name.toUpperCase();
var nameLowerCase = name.toLowerCase();
var firstNameLetter = name.charAt(0);
var quantityLetters = name.length;
var subString = name.substr(1, 2); // from position 1 until 2 position after

//Numbers
years += 1;
years -= 2;
var price = 2350.343323232;
var priceWithQuatityDecimalSpecific = price.toFixed(2); // two decimal
var priceParseToFloat = parseFloat(priceWithQuatityDecimalSpecific);
var priceRound = Math.round(price);
var totalAmount = price * 3;

//Compare variables
var x = 5,
  y = "5";
// x == y -> true
// x === y ->false equal value and type 

