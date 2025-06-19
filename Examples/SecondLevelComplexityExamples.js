const secArr = [14, 14, 12, 4, 9, 0, 2, 8, 7, 1];

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
console.log("secRes", secRes);
