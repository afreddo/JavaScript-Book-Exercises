const NUM = 4936;

let ones = NUM % 10;
let tens = (NUM % 100 - ones)/10;
let hundreds = (NUM %1000 - (ones + tens*10))/100;
let thousands = (NUM - (ones+tens*10+hundreds*100))/1000;

console.log(String(thousands)+String(hundreds)+String(tens)+String(ones));