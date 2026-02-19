function add(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b
  }
  else {
    return null
  }
}

function subtract(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b
  }
  else {
    return null
  }
}

function multiply(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a * b
  }
  else {
    return null
  }
}

function divide(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a / b
  }
  if (b === 0) {
    return null
  }
  else {
    return null
  }
}

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      return null;
    }
    sum = sum + numbers[i];
  }
  return sum;
}

function average(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  if (numbers.length === 0) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      return null;
    }
    sum = sum + numbers[i];
  }
  return sum / numbers.length;
}

function max(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  if (numbers.length === 0) {
    return null;
  }
  let biggest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      return null;
    }
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }
  return biggest;
}

function min(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  if (numbers.length === 0) {
    return null;
  }
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      return null;
    }
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

function isEven(number) {
  if (typeof number !== "number") {
    return null;
  }
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function factorial(n) {
  if (n < 0) {
    return null;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}


module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sumArray,
  average,
  max,
  min,
  isEven,
  factorial
}
