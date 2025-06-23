//   write a function that searches for an element in an array
//  and return the index , and of the element is not present return -1

const arr = [-1, 4, 2, 0, 10, 8, 30, -2, -11];

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
      //   console.log("negative numbers", arr[i]);
      count++;
    }
  }
  return count;
}

const resNegative = negativeNUmbers(negativeArr);
// console.log("resNegative", resNegative);

// write a function that returns the largest number in an array
const maxArr = [-9, -11, -19, -3, 1, 0, 11];
function findLargetNumber(arr) {
  let num = -Infinity; // arr[0] => both solutions work
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return num;
}

let resLargest = findLargetNumber(maxArr);
console.log("resLargest", resLargest);

// find the minimum number from an array

function findMinNumber(arr) {
  let minNum = Infinity; // arr[0] => both solutions work
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return minNum;
}

let resMin = findMinNumber(maxArr);
console.log("resMin", resMin);
