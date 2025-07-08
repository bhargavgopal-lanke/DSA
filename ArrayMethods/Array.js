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
