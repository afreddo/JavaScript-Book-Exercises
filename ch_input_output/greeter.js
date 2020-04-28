let rlSync = require("readline-sync");

let firstName = rlSync.question('What is your name?\n');
let lastName = rlSync.question('What is your name?\n');

let greeting = (firstName,lastName) => {
  console.log(`Hello, ${firstName} ${lastName}!`);
}

greeting(firstName, lastName);