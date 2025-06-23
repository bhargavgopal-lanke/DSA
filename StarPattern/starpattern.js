// for (let i = 0; i < 4; i++) {
//   let row = " ";
//   for (let j = 0; j < 4; j++) {
//     row = row + "* ";
//   }
//   console.log(row);
// }

// second patterns example

for (let i = 0; i < 8; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  // console.log(row);
}

// for (let i = 0; i < 3; i++) {
//   for (let j = i; j >= 0; j--) {
//     console.log(i, j);
//   }
// }

for (let i = 1; i < 6; i++) {
  let res = "";
  for (let j = 0; j < i; j++) {
    res = res + (j + 1) + " ";
  }
  // console.log(res);
}
// =======================================================

// for (let i = 1; i < 6; i++) {
//   let rows = "";
//   for (let j = 1; j <= i; j++) {
//     rows = rows + j + " ";
//   }
//   console.log(rows);
// }

for (let i = 1; i < 6; i++) {
  let rows = "";
  for (let j = 1; j <= i; j++) {
    rows = rows + i + " ";
  }
  // console.log(rows);
}

for (let i = 5; i > 1; i--) {
  let rows = "";
  for (let j = 1; j <= i; j++) {
    rows = rows + j + " ";
  }
  // console.log(rows);
}

for (let i = 5; i > 1; i--) {
  let rows = "";
  for (let j = 1; j <= i; j++) {
    rows = rows + i + " ";
  }
  // console.log(rows);
}

for (let i = 1; i < 6; i++) {
  let rows = "";
  for (j = 1; j < i + 1; j++) {
    rows = rows + "*" + " ";
  }
  // console.log(rows);
}

for (let i = 0; i < 5; i++) {
  let rows = "";
  for (let j = 0; j < 5 - (i + 1); j++) {
    rows = rows + "_" + " ";
  }
  for (let k = 0; k < i + 1; k++) {
    rows = rows + "*" + " ";
  }
  console.log(rows);
}

for (let i = 0; i < 6; i++) {
  let rows = "";
  let switchFlag = 1;
  for (let j = 0; j < i + 1; j++) {
    rows = rows + switchFlag + " ";
    if (switchFlag == 1) {
      switchFlag = 0;
    } else {
      switchFlag = 1;
    }
  }
  console.log(rows);
}
