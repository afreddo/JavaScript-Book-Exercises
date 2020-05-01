let copyObj = (obj, array) => {
  let objectHolder = [];
  
  if (array) {
    array.forEach(key => {
      objectHolder[key] = obj[key];
    });
    return objectHolder;
  }
  return Object.assign(objectHolder,obj);
}


let objToCopy = {
  foo: 1,
  bar: 2,
};

// let newObj = copyObj(objToCopy);
// console.log(newObj.foo);    // => 1
// console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined