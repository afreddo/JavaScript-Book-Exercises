let age = 20;
let ageRange = [10,20,30,40];

console.log(`You are ${age} years old.`)

for (let i = 0; i < ageRange.length; i++) {
  console.log(`In ${ageRange[i]} years, you will be ${age+ageRange[i]} years old.`);
}
