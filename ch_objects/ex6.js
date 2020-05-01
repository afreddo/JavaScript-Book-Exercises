let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

 for (let key in myObj) {
   console.log(key);
 }

/*Snippet 1 should just show qux because Object.keys only looks at the objects
**own keys. Snippet 2 should show all of the keys.*/