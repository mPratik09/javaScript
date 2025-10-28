const prompt = require("prompt-sync")();

function getSquareRoot(number) {
  return Math.sqrt(number);
}

const num = Number(prompt("Enter a number: "));
console.log(`Square root of ${num} is ${getSquareRoot(num)}`);
