
// function times(number1, number2) {
//   let result = number1 * number2;
//   console.log(result);
//   return result;
// }

// let one = times(1,1);
// let two = times(2,one);
// let three = times(3,two);
// let four = times(4,three);
// let five = times(5,four);


function factorial(number) {
  let num = 1;
  for (let i = 1; i <= number; i += 1) {
    num *= i;
  }
  return num;
}

console.log(factorial(3));