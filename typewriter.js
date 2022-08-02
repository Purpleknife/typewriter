const sentence = "hello there from lighthouse labs";
let count = 0; //Start counter.

const printEachLetter = function() {
  setTimeout(() => {
    process.stdout.write(sentence[count++]); //Increment each time by 1.

    if (count < sentence.length) { //Keep calling printEachLetter() as long as the condition is true.
      printEachLetter();
    }
    if (count === sentence.length) { //When it reaches the last element.
      process.stdout.write('\n');
    }
  }, 50);
};
printEachLetter();