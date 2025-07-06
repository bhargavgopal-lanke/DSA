function countNumbers(num) {
  if (num == 0) return;

  let count = 0;
  let posNum = Math.abs(num);
  while (posNum > 0) {
    posNum = Math.floor(posNum / 10);

    count++;
  }
  return count;
}

const result = countNumbers(429);
console.log(result);
