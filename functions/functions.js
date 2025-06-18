function eligibleToVote(age) {
  if (age < 18) {
    console.log("not eligible to vote");
  } else if (age < 0) {
    console.log("invalid input");
  } else {
    console.log("Eligible");
  }
}

eligibleToVote(5);
eligibleToVote(19);
eligibleToVote(22);

// even or odd

function evenOddNum(num) {
  if (num / 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOddNum(6);
evenOddNum(5);
evenOddNum(9);
