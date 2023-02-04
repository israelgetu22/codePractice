// console.log("Welcome to Code Practice");

// 1. Max of Two numbers

// let arr = [1, 5, 8, 47, 46, 9, 15];

// const numMax = Math.max(...arr);
// const numMin = Math.min(...arr);
// console.log(Math.max([], -4, "15"));
// console.log(numMin);
// console.log(numMax);

// let num1 = 5;
// let num2 = 2;

// const numberMin = num1 > num2 ? num2 : num1;
// console.log(numberMax);

// switch (false) {
//   case num1 > num2:
//     console.log(`the max number is: ${num1}`);
//     break;
//   case num1 < num2:
//     console.log(`the min number is: ${num2}`);

//     break;

// let numbers = [2, 4, 9, 2, 0, 16, 24, 100];

// let largest = numbers[0];
// let smallest = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   } else if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// }

// console.log(largest);
// console.log(smallest);

// 2. Range
// let numbers = [2, 4, 9, 2, 0, 16, 24, 100];

// console.log(numbers.slice());

// const sorted = numbers.sort((a, b) => a - b);
// console.log(sorted);

// let smallest = sorted[0];
// let secondSmallest = sorted[1];
// let secondLargest = sorted[sorted.length - 2];
// let largest = sorted[sorted.length - 1];

// console.log("Smallest: " + smallest);
// console.log("Second Smallest: " + secondSmallest);
// console.log("Second Largest: " + secondLargest);
// console.log("Largest: " + largest);

//3. Fizz Buzz

// for (let i = 1; i < 101; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fuzz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 101; )
//   console.log((i++ % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);

// 4. Add to Zero

// let array = [28, 43, -12, 30, 4, 0, 12];

// for (let i = 0; i < array.length; i++) {
//   for (let k = 0; k < array.length; i++) {
//     // console.log("i" + array[i] + "k" + array[k]);
//     if (array[i] + array[k] === 0) {
//       console.log(array[i]);
//     }
//   }
// }

// let array = [28, 43, -12, 30, 4, 0, 12];

// const checkAddToZero = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     for (let k = 1; k < arr.length; k++) {
//       if (arr[i] + arr[k] === 0) {
//         if (i === k) {
//           return;
//         } else {
//           console.log("first number: " + arr[i] + "second number: " + arr[k]);
//         }
//       }
//     }
//   }
// };

// checkAddToZero(array);

// 5. How to get unique values in an array [duplicate]

// let array = [4, 0, 12, 30, 4, 0, 12];

// console.log([...new Set(array)]);

// const unique = array.filter((item, i, ar) => ar.indexOf(item) === i);
// console.log(unique);

//6. find the unique character

// function findUnique(str) {
//   let uniq = "";

//   for (let i = 0; i < str.length; i++) {
//     if (uniq.includes(str[i]) === false) {
//       uniq += str[i];
//     }
//   }
//   return uniq;
// }
// console.log(findUnique("GeekGeek"));

//7. count the vowel

// const countVowel = (str) => {
//   const count = str.match(/[aeiou]/gi);
//   return count;
// };

//8. Stock Max Profit
// console.log(countVowel("Israel"));

// const best = (arr) => {
//   const maxValue = Math.max(...arr);
//   if (arr.length <= 1) {
//     if (arr[0] / 1 === arr[0]) {
//       return 0;
//     }
//   } else {
//     return maxValue === arr[0] ? 0 : maxValue;
//   }
// };
// console.log(best([4, 7, 9, 3]));

//9. Find single Number

// const singleNumber = (nums) => nums.reduce((a, b) => a ^ b);

// console.log(singleNumber([1, 1, 2, 2]));

// arr = [1, 2, 1, 3, 2];

// function singleNumber(nums) {
//   console.log(nums.reduce((a, b) => a ^ b));
// }

// singleNumber(arr);

//10. Contain Duplicate

// let nums = [1, 2, 3];

// function containDuplicate(arr) {
//   let setNums = new Set(arr);
//   //console.log(setNums.size, nums.length);
//   if (setNums.size === nums.length) {
//     return console.log("True: has No Duplicate");
//   }
//   return console.log("False: has Duplicate");
// }

// containDuplicate(nums);

// Anagram
// function isAnagram(s, t) {
//   let first = s.split("").sort();
//   let second = t.split("").sort();
//   console.log(first);
//   console.log(second);
//   if (first.length !== second.length)
//     return "This word not have the same length";

//   for (let i = 0; i < first.length; i++) {
//     if (first[i] !== second[i]) {
//       return "It is NOT Anagram!";
//     }
//   }
//   return "It is Anagram";
// }

// let result = isAnagram("anagram", "nagaram");
// let result2 = isAnagram("anagram", "nagarah");

// console.log(result);
// console.log(result2);

//Fibinacchi Number
// let num1 = 0;
// let num2 = 1;
// let nextNum;

// function fib(num) {
//   for (let i = 1; i <= num; i++) {
//     nextNum = num1 + num2;
//     num1 = num2;
//     num2 = nextNum;
//   }
// }

// let result = fib(4);

// console.log(result);

// function fib(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(fib(5));

// Defanging an IP address
// function defan(address) {
//   const rep = /\./g;
//   const res = address.replace(rep, "[.]");
//   return res;
// }

// console.log("Output: " + defan("1.1.1.1"));
// console.log("Output: " + defan("225.144.196.1.0"));

// Running Sum

// function runningSum(nums) {
//   let total = 0;
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     total = total + nums[i];

//     result.push(total);
//   }
//   return result;
// }

// console.log(runningSum([1, 2, 3, 4]));

// Good Pair

// function goodPair(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; arr.length; i++) {
//       if (arr[i] === arr[j]) {
//         count = count + 1;
//       }
//     }
//   }
//   return count;
// }

// let data = [1, 1, 2, 3];
// console.log(goodPair(data));

// Richest Customer Wealth
// function richestCW(accounts) {
//   let maxWealth = 0;
//   for (let i = 0; i < accounts.length; i++) {
//     let currentWealth = 0;
//     for (let j = 0; accounts[i]; j++) {
//       currentWealth += accounts[i][j];
//     }
//     if (currentWealth > maxWealth) {
//       currentWealth = maxWealth;
//     }
//   }
//   return maxWealth;
// }

// let accounts = [
//   [1, 2],
//   [3, 4],
// ];

// console.log(richestCW(accounts));

//Build Array from Permutation
let outPut = [];
function buildArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    outPut[i] = nums[nums[i]];
  }
  return outPut;
}

console.log(buildArray([0, 2, 1, 5, 3, 4]));
