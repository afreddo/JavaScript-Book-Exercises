let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  let arrayLength = arr.map(value => value.length);
  return arrayLength.filter(num => num % 2 !==0);
}

console.log(oddLengths(arr));