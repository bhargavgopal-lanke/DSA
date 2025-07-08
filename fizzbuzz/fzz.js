// Fizzbuzz
// write a program that console log the numbers from 1 to n;
// but for multipls of three print fizz
// for multiples of five print buzzz
// numbers which are multiples of bothe 3 and 5 print fizzbuzz

function fizzbuzz(n) {
  let result = "";
  for (let i = 1; i < n + 1; i++) {
    if (i % 3 == 0) {
      result = result + "fizz ";
    } else if (i % 5 == 0) {
      result = result + "Buzz ";
    } else if (i % 3 == 0 && i % 5 == 0) {
      result = result + "fizzbuzz ";
    } else {
      result = result + i + " ";
    }
  }
  return result;
}

console.log(fizzbuzz(50));
