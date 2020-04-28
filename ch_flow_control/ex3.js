
let evenOrOdd = number => {
  if (parseInt(number) != number) {
    console.log('Error: Number not integer');
    return;
  }
  if ((number % 2) === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(4.5);