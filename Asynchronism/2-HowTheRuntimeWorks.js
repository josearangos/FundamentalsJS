//What is modified of asynchronism
//Management of DOM
//Request of API

/*console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
*/
/**
 * a
 * c
 * b
 */
setTimeout(() => console.log("D"), 2000);
for (let i = 0; i < 10000000000; i++) {}
