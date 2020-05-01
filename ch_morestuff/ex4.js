function findLargerst(array) {
  if (array[0] <= array[array.length-1]) {
  return array.sort()[array.length-1];
  } else {
    return array.sort().reverse()[array.length-1];
  }
}

let arr1 = [1, 6, 3, 2];
let arr2 = [-1,-6,-3,-2];
let arr3 = [2, 2];

console.log(findLargerst(arr1));
console.log(findLargerst(arr2));
console.log(findLargerst(arr3));