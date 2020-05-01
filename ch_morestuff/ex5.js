function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

let foo = 'bar hardy';
console.log(doSomething(foo));

//it splits a string into an array at the spaces. It reverses the array. Then it 
//converts the strings to numbers denoting their length.