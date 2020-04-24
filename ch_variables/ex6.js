/*This code will not produce an error becasue FOO is different inside
and outside of the block. */

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);