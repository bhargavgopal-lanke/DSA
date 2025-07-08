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

// simple example to find number of vowels insdie a sentence

function noofVowels(str) {
  let regExp = str.match(/[aeiou]/gi);
  return regExp ? RegExp.length : 0;
}

console.log(noofVowels("this i a setnence"));

// other way to find vowels inside a sentence

function vowelsArrMethod(str) {
  let vowelArr = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowelArr.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(vowelsArrMethod("this is a new example to test vowels"));
