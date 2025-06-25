const arr = [0, 0, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicates(nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}

const res = removeDuplicates(arr);
console.log("res", res);

function removeElements(nums) {
  let x = 0;
  let val = 3;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
}

const res1 = removeElements(arr);
console.log("res1", res1);
