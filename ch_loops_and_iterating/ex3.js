// It is infinite because the while expression is always true since it is an 
// assignment. It needs to say counter === 1 or counter == 1.

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}