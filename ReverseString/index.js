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
