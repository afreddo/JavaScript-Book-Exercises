let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// let array = Object.keys(obj);
// let arrayFinal = [];
// array.forEach(key => arrayFinal.push(key.toUpperCase()));

// console.log(arrayFinal);

let arrayFinal = Object.keys(obj).map(element => element.toUpperCase());

console.log(obj);
console.log(arrayFinal);