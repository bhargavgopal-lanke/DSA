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

// star pattern practice and interview quetion

function hashPattern(n) {
  for (let row = 0; row < n; row++) {
    let rows = "";
    for (let column = 0; column < row; column++) {
      rows = rows + "#";
    }
    console.log(rows);
  }
}

hashPattern(5)


// inverted star pattern
function hashPatternInverted(n) {
  for (let row = n; row > 0; row--) {
    let rows = "";
    for (let column = 0; column < row; column++) {
      rows = rows + "#";
    }
    console.log(rows);
  }
}

hashPatternInverted(5)
