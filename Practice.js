// let twoSum = function (nums, target) {
//   let mp = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i];
//     console.log(diff);

//     if (mp.has(diff)) {
//       return [i, mp.get(diff)];
//     }

//     mp.set(nums[i], i);
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));

//Palindrome

// function checkPalindrome(string) {
//   let len = string.length;

//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1]) {
//       return "This word is NOT Palindrome";
//     }
//     return "This word is Palindrome";
//   }
// }

// console.log(checkPalindrome("dad"));
// console.log(checkPalindrome("madam"));
// console.log(checkPalindrome("israel"));

// convert to Roman
function covertToRoman(num) {
  let romanNumeral = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let answer = "";

  for (let prop in romanNumeral) {
    if (num >= romanNumeral[prop]) {
      answer += prop;
      num -= romanNumeral[prop];
    }
  }
  return answer;
}
console.log(covertToRoman("50"));
console.log(covertToRoman("42"));
