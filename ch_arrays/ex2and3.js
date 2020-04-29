let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(value) {
     for (let i = 0; i <= value.length; i += 1) {
     if (value[i] % 2 === 0) {
       console.log(value[i]);
     }
   }
});

