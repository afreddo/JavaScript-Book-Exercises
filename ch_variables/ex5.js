//The code will output 'bar' because the reassignment happens within a block.

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);