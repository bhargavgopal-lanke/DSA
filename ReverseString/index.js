function reverseString(s) {
  let len = s.length;
  let halfLength = Math.floor(len / 2);

  for (let i = 0; i < halfLength; i++) {
    let temp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = temp;
  }
  return s;
}

const res = reverseString(["g", "o", "p", "a", "l"]);
console.log(res);

function reverseString2(s) {
  let reverse = "";
  for (let i = 0; i < s.length; i++) {
    reverse = s[i] + reverse;
  }
  return reverse;
}

let strReverse = reverseString2("bhargav");

console.log(strReverse);

function reverseString3(str) {
  let reverse = "";
  // simple way to write a for loop. clean and clear
  for (let char of str) {
    reverse = char + reverse;
  }
  return reverse;
}

let res3 = reverseString3("Gopal");
console.log("res3", res3);

// convert the string into an array

function strToArr(str) {
  let strArr = [];
  for (let char of str) {
    strArr.push(char);
  }
  return strArr;
}

let res4 = strToArr("lanke");
console.log("res4", res4);

// convert the string into an array and reverse the string inside array

function strToArr2(str) {
  let strArr = [];
  let reverse = "";
  for (let char of str) {
    reverse = char + reverse;
  }
  for (let reverseChar of reverse) {
    strArr.push(reverseChar);
  }
  return strArr;
}

let res5 = strToArr2("lanke");
console.log("res5", res5);

// convert the string into an array and reverse the string inside array using js methods

function strToArr3(str) {
  return str.split("").reverse().join("");
}

let res6 = strToArr3("doingit");
console.log("res6", res6);

// given a string , return the character which is most used in the string

function mostUsedChar(str) {
  let repeat = {};
  for (let i = 0; i < str.length; i++) {
    if (repeat[str[i]]) {
      repeat[str[i]] += 1;
    } else {
      repeat[str[i]] = 1;
    }
  }
  return repeat;
}

let mostUsedCharRes = mostUsedChar("bhaaaaaaar");
console.log("mostUsedCharRes", mostUsedCharRes);



