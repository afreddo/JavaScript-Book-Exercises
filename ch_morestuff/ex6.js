function allMatches(array, exp) {
  let matches = [];
  array.forEach(value => {
    if (exp.test(value)) {
      matches.push(value);
    }
  });
  return matches;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));