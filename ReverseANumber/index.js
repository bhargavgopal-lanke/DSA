function reverseNum(n) {
  let copyN = n;
  let rev = 0;
  n = Math.abs(n);
  while (n > 0) {
    let rem = n % 10; // gives the remainder 8,
    rev = rev * 10 + rem; // 0 + 8 = 8, 80 +
    n = Math.floor(n / 10); // removes last number and gives remaining numbers 3777, condition runs until this number becomes 0
  }
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit) return 0;
  return copyN < 0 ? -rev : rev;
}

const result = reverseNum(-37778);
console.log("result", result);
