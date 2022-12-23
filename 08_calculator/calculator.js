const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(item => {
    sum += item;
  });
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(item => {
    product = product * item;
  });
  return product;
};

const power = function(base, exp) {
	let product = 1;
  for (let i = 0; i < exp; i++) {
    product = product * base;
  }
  return product;
};

const factorial = function(a) {
  if (a === 0) return 1;
  else return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
