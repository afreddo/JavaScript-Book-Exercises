//The return cancels the function before the console.log is run.


function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');