function reverseInt(n) {
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  return rev;
}

let intres = reverseInt(1234);
console.log("intres", intres);

function reverseInt2(num) {
  let abs = Math.abs(num);
  let reverse = num > 0 ? abs.toString().split("").reverse().join("") : 0;
  return reverse;
}

let intres1 = reverseInt2(1234);
console.log("intres1", intres1);

// check a number is a palindrome or not

function palindrome(n) {
  let ncopy = Math.abs(n);
  let reverse = 0;

  while (ncopy > 0) {
    let rem = ncopy % 10;
    reverse = reverse * 10 + rem;
    ncopy = Math.floor(ncopy / 10);
  }
  if (reverse === n) {
    return true;
  } else {
    return false;
  }
}

let palindromeres = palindrome(121);
console.log("palindromeres", palindromeres);

// palindrome using js methods

function palindromeMethods(n) {
  let reversed = n.toString().split("").reverse().join("");
  return reversed === n;
}

let palindromeres2 = palindromeMethods("tst");
console.log("palindromeres2", palindromeres2);
