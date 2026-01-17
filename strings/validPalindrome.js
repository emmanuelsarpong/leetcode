/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

var isPalindrome = function (s) {
  let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (cleaned === cleaned.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

let result = isPalindrome("A man, a plan, a canal: Panama");

console.log(result);
