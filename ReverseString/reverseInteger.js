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
