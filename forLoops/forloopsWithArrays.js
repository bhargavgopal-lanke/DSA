// for loosp with arrays

const arr = [5, 6, 10, 7, 21, 60];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// find the even/odd numbers from above array

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log("even numbers", arr[i]);
  } else {
    console.log("odd numbers", arr[i]);
  }
}
