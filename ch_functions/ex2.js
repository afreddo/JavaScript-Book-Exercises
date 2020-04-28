let rlSync = require("readline-sync");


let userInput = () => {
  let firstName = rlSync.question('What is your name?\n');
  let lastName = rlSync.question('What is your name?\n');
  return firstName+' '+lastName
}

let greeting = (name) => {
  console.log(`Hello, ${name}!`);
}

greeting(userInput());