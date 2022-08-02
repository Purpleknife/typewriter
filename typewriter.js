const sentence = "hello there from lighthouse labs";
let i = 0; //Start index.

const printEachWord = function() {
  setTimeout(() => {
      process.stdout.write(sentence[i++]); //Increment each time by 1.

      if (i < sentence.length) { //Keep calling printEachWord() as long as the condition is true.
        printEachWord();
      }
      if (i === sentence.length) { //When it reaches the last element.
        process.stdout.write('\n');
      }
  }, 50)
}
printEachWord();