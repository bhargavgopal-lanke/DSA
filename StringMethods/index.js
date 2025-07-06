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
