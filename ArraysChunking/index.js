// give an array and chunk size, divide the array into many subarrays
// where each sub array is of length size

function chunk(arr, size) {
  let subArr = [];
  // iterate chyali array lo items anni
  // after every two items vatiki oka spearte array create chyali
  let index = 0;
  while (index < arr.length) {
    let test = arr.slice(index, index + size);
    subArr.push(test);
    index += size;
  }
  return subArr;
}

let chunkres = chunk([1, 2, 3, 4], 2);
console.log("chunks", chunkres);
