//   write a function that searches for an element in an array
//  and return the index , and of the element is not present return -1

const arr = [4, 2, 0, 10, 8, 30];

function searchElement(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      return i;
    }
  }
  return -1;
}
const result = searchElement(arr, 0);

// write a function that returns the number of negative numbers in an array

let negativeArr = [2, -9, 17, 0, 1, -10, -4, 8];

function negativeNUmbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log("negative numbers", arr[i]);
      count++;
    }
  }
  return count;
}

const resNegative = negativeNUmbers(negativeArr);
console.log("resNegative", resNegative);

// write a function that returns the largest number in an array

function findLargetNumber(arr) {
  let num = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return num;
}

let resLargest = findLargetNumber(arr);
console.log("resLargest", resLargest);
