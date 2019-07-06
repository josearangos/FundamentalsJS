function factorial(n) {
  if (!this.cache) {
    this.cache = {};
  }

  if (n === 1) {
    return 1;
  }

  this.cache[n] = n * factorial(n - 1);
  return this.cache[n];
}

console.log(factorial(7));
console.log(factorial(7));
console.log(factorial(7));
console.log(factorial(7));
