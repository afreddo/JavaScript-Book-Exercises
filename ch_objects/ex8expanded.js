let a = 10;

function change (num) {
  for (let i = 1; i <= 10; i++) {
    num += 1;
  }
  console.log(num);
}

change(a);

console.log(a);