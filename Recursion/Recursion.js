// recursion example

function basecaseExample(n) {
  if (n < 1) return;
  console.log(n);
  n = n - 1;
  basecaseExample(n);
}

console.log(basecaseExample(5));

// reverse recursion
function basecaseExampleReverse(n) {
  if (n > 5) return;
  console.log(n);
  n = n + 1;
  basecaseExampleReverse(n);
}

console.log(basecaseExampleReverse(1));
