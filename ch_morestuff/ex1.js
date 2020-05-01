let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//it should log [1, 4, 3] because array1 and array2 are both pointers 
//pointing to the same array. Line 3 mutated the array.