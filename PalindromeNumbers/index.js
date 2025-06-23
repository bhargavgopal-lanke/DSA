function checkPalindrome(n) {
  if (n < 0) {
    console.log("negative number cant be a palindrome");
    return null;
  }
  let originalNumber = n; // copy of original n value, as n value updates in while loop I'm making copy of it in another variable
  let rev = 0;
  while (n > 0) {
    let rem = n % 10; // gives remainders
    rev = rev * 10 + rem; // this line checks the number in reverse
    n = Math.floor(n / 10);
  }
  //   if (rev == originalNumber) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return rev === originalNumber;
}

const result = checkPalindrome(-2551);
console.log(result);
