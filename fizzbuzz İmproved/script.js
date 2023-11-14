const ruleset = [
  { limit: 50 },
  { number: 3, word: "fizz" },
  { number: 5, word: "buzz" },
];

function fizzBuzz(ruleset) {
  for (let i = 1; i <= ruleset[0].limit; i++) {
    let output = "";

    for (let j = 1; j < ruleset.length; j++) {
      if (i % ruleset[j].number === 0) {
        output += ruleset[j].word;
      }
    }

    if (output === "") {
      output = i;
    }

    console.log(output);
  }
}

fizzBuzz(ruleset);
