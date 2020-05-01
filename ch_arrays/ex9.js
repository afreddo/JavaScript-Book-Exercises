let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function lookForElement (array, element) {
  (array.includes(element) === true) ? console.log('Yep') : console.log('Nope');
}

lookForElement(numbers1,3);
lookForElement(numbers2,3);
lookForElement(numbers3,3);