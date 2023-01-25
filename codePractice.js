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

let array = [4, 0, 12, 30, 4, 0, 12];

// console.log([...new Set(array)]);

const unique = array.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);
