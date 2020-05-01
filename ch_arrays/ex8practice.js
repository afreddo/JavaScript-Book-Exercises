let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths (array) {
  return array.reduce((holder, values) => {
    let length = values.length;
    if (length % 2 !== 0) {
      holder.push(length);
    }
    return holder;
  }, []);
}

console.log(oddLengths(arr));