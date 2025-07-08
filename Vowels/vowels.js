// Find the number of vowels inside  a string

let str = "find the vowels inside this string";

function findVowels(str) {
  let result = [];
  let newStr = "aeiou";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < newStr.length; j++) {
      if (str[i].toLowerCase() == newStr[j]) {
        result.push(str[i]);
      }
    }
  }

  let newResult = {};
  for (let i = 0; i < result.length; i++) {
    if (newResult[result[i]]) {
      newResult[result[i]] = newResult[result[i]] + 1;
    } else {
      newResult[result[i]] = 1;
    }
  }

  return newResult;
}

console.log(findVowels(str));
