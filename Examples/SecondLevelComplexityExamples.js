const secArr = [14, 14, 12, 4, 9, 0, 2, 8, 7, 1, 1];

function findSecondLargestNumber(arr) {
  let firstLargest = -Infinity; // 14,
  let secondLargest = -Infinity; // -inf, 12,
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  let resOutputObj = {
    firstLargest,
    secondLargest,
  };
  return resOutputObj;
}

const secRes = findSecondLargestNumber(secArr);
// console.log("secRes", secRes);

// remove the duplicates from the array

function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const dupeRes = removeDuplicates(secArr);
console.log("dupeRes", dupeRes);

// for (let i = 0; i < 3; i++) {
//   for (let j = i; j >= 0; j--) {
//     console.log("i", i + "  " + "j", j);
//   }
// }

// for (let i = 5; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     console.log("i", i + "  " + "j", j);
//   }
// }

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 4; j++) {
    console.log(i, j);
  }
}
