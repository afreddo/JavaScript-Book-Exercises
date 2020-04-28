//This logs 1 to the console. No becasue the changed bar is withing the function only.

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);