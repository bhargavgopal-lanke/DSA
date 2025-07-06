// capitalise the first letter inside the sentence

function firstLetterCapitalise(str) {
  const splitsent = str.split(" ");
  const res = splitsent
    .map((x) => {
      return x[0].toUpperCase() + x.slice(1);
    })
    .join(" ");
  return res;
}

console.log(firstLetterCapitalise("this is a sentence give it a try"));

// another approach to capitalise the text

function firstLetterWordCapilitalise(str) {
  let splitWords = str.split(" ");
  const textArr = [];

  for (let i = 0; i < splitWords.length; i++) {
    const firstLetter = splitWords[i];
    textArr.push(firstLetter[0].toUpperCase() + splitWords[i].slice(1));
  }
  return textArr;
}

console.log(firstLetterWordCapilitalise("this is a sample sentence to test"));
