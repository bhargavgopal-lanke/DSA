// Move zeros to an end inside an array

let arr = [1, 0, 0, 3, 12];

function moveZeros(nums) {
  let x = 0;

  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[x] = nums[i];
      x++;
    }
  }

  // fill remaining positions with zero
  for (let i = x; i < nums.length; i++) {
    nums[i] = 0;
  }
  //   newArr.push(nums);
  return nums;
}

console.log(moveZeros(arr));

// find max number of consecutive ones

let arr1 = [1, 1, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2];

function consecutiveOnes(nums) {
  let count = 0;
  let maxCOunt = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
    } else {
      maxCOunt = Math.max(count, maxCOunt);
    }
  }

  return Math.max(maxCOunt, count);
}

console.log(consecutiveOnes(arr1));

// find the missing number insid an array

let misArr = [3, 0, 1];

function missingArr(arr) {
  let n = arr.length;
  let totalSum = (n * (n + 1)) / 2;
  let partialSum = 0;
  for (let i = 0; i < arr.length; i++) {
    partialSum = partialSum + arr[i];
  }
  let result = Math.abs(partialSum - totalSum);
  return result;
}

console.log(missingArr(misArr));
