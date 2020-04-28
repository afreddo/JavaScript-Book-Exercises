let rlSync = require("readline-sync");

let multiply = (num1, num2) => num1*num2;

let number1 = rlSync.question('Enter the first number: \n');
let number2 = rlSync.question('Enter the second number: \n');

console.log(`${number1} * ${number2} = ${multiply(number1,number2)}`);