let numbers = [3, 5, 7];

function sumOfSquares (array) {
  return array.reduce((accumulator, element) => accumulator + element * element, );
}

console.log(sumOfSquares(numbers));